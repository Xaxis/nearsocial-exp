# nearsocial-exp

## NearSocial Thoughts & Ideas

- **Full Mastodon Integration**: A NearSocial interface ontop of Mastodon that supplants Mastodon's user and feed Databases with onchain storage and
  interfaces with NEAR's auth paradigms.
- **Self Hosted Widgets**: Toolkits and documentation for deploying NearSocial widgets on your own website. The widgets would be able to
  interact with the NearSocial network and the user's NEAR account, but through the customizable confines on an entities own host.
- **Now the Internet REALLY is Forever**: A decentralized, onchain, and censorship resistant archive of the internet. The archive would be
  accessible through NearSocial's interface and would be able to be searched and browsed through the same interface.
- **Granulated Access Permissions**: A way to grant access to specific parts of your profile to specific people. Currently you can only grant other public keys access to write into your data. For example, you could grant access to your profile picture to only your friends, but grant access to your posts to the public. The implementation details would need to cryptographically hide data stored onchain and expose a rotating public key that exposes access to them when other authenticated users request view access. Users would then grant "view" permissions to requesters' public keys.
- **Custom CSS**: Explore why NearSocial doesn't allow custom CSS and attempt to implement it. Developers will DEFINITELY desire this functionality, as Bootstrap only is quite limiting.
- **JS Bootloader**: A bootloader that allows for custom JS to be loaded into the NearSocial development environment. This would allow for custom
    functionality to be added to the interface. OR support for ES style modules/imports. This would allow for fetching third-party libraries hosted on CDNs to run widgets vs. rewriting vanilla JavaScript. The alternative is compiling the libraries which themselves could have massive dependencies and storing the entire app in NearSocial's "database".
- **Social API Server on Cloudflare (or similar)**: A serverless API that allows for the creation of social apps that can be hosted on Cloudflare's
    serverless infrastructure. The API would be able to interact with the NearSocial network and the user's NEAR account, but through the customizable confines of a serverless environment. The `Social API` is a further choke point for the NearSocial network. Not only does the Social API Server need to be deployed with infrastructure that will scale, so does the availability of SocialDB indexers/RPCs.
- **Version Control**: An actual fork of `git` designed to workontop of NEAR's blockchain. This would allow for the creation of a decentralized
    version control system that is censorship resistant and can be used to store and version control code, documents, and other data. This would
    also allow for the creation of a decentralized GitHub.
- 