const accountId = props.accountId ?? context.accountId;
const profile = props.profile ?? Social.getr(`${accountId}/profile`);
const name = profile.name || "No-name profile";
const tags = Object.keys(profile.tags ?? {});

// const Three = fetch(
//   "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
// );
// const ThreeCode = Three.body ?? "";
// const ThreeFunc = new Function(`return ${ThreeCode}`);
// console.log(context, ThreeFunc());

if (profile === null) {
    return "Loading...";
} else {
    return (
        <div>
            <h1>Loading third-party JavaScript library...</h1>
            <input
                type="text"
                className="form-control"
                value={state.accountId}
                onMouseMove={(e) => {
                    console.log(e);
                }}
                onChange={(e) => {
                    const accountId = e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9_.-]/g, "");
                    State.update({ accountId });
                }}
            />
        </div>
    );
}