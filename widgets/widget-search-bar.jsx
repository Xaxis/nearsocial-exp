const searchResults = ''
// const accountId = props.accountId ?? context.accountId;
// const profile = props.profile ?? Social.getr(`${accountId}/profile`);
// const name = profile.name || "No-name profile";
// const tags = Object.keys(profile.tags ?? {});

State.init({ widgets: Social.getr({keys: ["*/widget/*"]}) ?? [] });

if (widgets == null) {
    return <div>Loading...</div>;
} else {
    return (
        <div>
            <h4>Search Widgets</h4>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search widgets"
                    value={state.searchResults}
                    onChange={(e) => {
                        const query = e.target.value;
                        State.update({searchResults: query});
                    }}
                />
                <div className="input-group-append">
                    <span className="input-group-text btn btn-outline-secondary">
                      Search
                    </span>
                </div>
            </div>
            <div className="mt-3">
                {console.log(state.widgets)}
                {state.widgets.map((widget) => {
                    return <span className="me-1 mb-1 badge bg-secondary">#{widget}</span>
                })}
            </div>
        </div>
    );
}
