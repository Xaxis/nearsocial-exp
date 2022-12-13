const data = Social.keys("*/widget/*", "final");

if (!data) {
    return <div>Loading...</div>;
}

const accounts = Object.entries(data);
const allWidgets = [];

for (let i = 0; i < accounts.length; ++i) {
    const accountId = accounts[i][0];
    const names = Object.keys(accounts[i][1].widget);
    const widgets = [];
    for (let j = 0; j < names.length; ++j) {
        const src = `${accountId}/widget/${names[j]}`;
        widgets.push({
            name: names[j] || 'Noname widget',
            src: src,
        })
    }
    allWidgets.push({
        accountId,
        widgets: widgets,
    });
}

function findWidgets(search) {
    const result = [];
    for (let i = 0; i < allWidgets.length; ++i) {
        const account = allWidgets[i];
        const widgets = [];
        for (let j = 0; j < account.widgets.length; ++j) {
            const widget = account.widgets[j];
            if (widget.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                widgets.push(widget);
            }
        }
        if (widgets.length > 0) {
            result.push({
                accountId: account.accountId,
                widgets: widgets,
            });
        }
    }
    return result;
}

State.init({
    searchQuery: '',
    widgets: []
});

return (
    <div>
        <div className="bd-search">
            <input
                type="search"
                className="form-control"
                placeholder="Search for widgets..."
                aria-label="Search for widgets..."
                spellcheck="false"
                value={state.searchQuery}
                onChange={(e) => {
                    const query = e.target.value;
                    State.update({searchQuery: query});
                    const foundWidgets = findWidgets(query);
                    State.update({widgets: query.length >= 1 ? foundWidgets : []});
                }}
            />
        </div>
        <div className="mt-3">
            {state.widgets.map((account) => {
                const widgetElms = []
                if (account.widgets.length > 0) {
                    for (let i = 0; i < account.widgets.length; ++i) {
                        const widget = account.widgets[i];
                        const accountName = account.accountId.length > 24 ? account.accountId.substr(0, 24) + '...' : account.accountId;
                        widgetElms.push(
                            <div className="me-1 mb-1 badge">
                                <a href={`#/${widget.src}`}>{widget.name}</a>
                                <div className="text-dark">
                                    <small>{`@${accountName}`}</small>
                                </div>
                            </div>
                        )
                    }
                }
                return (
                    <>{widgetElms}</>
                );
            })}
        </div>
    </div>
);
