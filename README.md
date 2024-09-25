#####  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Repository Structure](#repository-structure)
- [ Modules](#modules)
- [ Getting Started](#getting-started)
    - [ Prerequisites](#prerequisites)
    - [ Installation](#installation)
    - [ Usage](#usage)
    - [ Tests](#tests)
- [ Project Roadmap](#project-roadmap)
- [ Contributing](#contributing)
- [ License](#license)
- [ Acknowledgments](#acknowledgments)

---

##  Overview

AnimeTalks is an open-source Discord bot project that enhances community engagement through a variety of features. From managing giveaways and conducting currency conversions to providing manga reading functionalities and interactive games like Rock Paper Scissors, AnimeTalks offers an immersive and entertaining experience. With an emphasis on user interaction and entertainment, AnimeTalks fosters a lively community atmosphere within Discord servers.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | This project leverages a modular architecture with dynamically loaded commands and events, enhancing scalability and extensibility. A server component using Express.js facilitates hosting, while Discord bot functionalities are managed through Aoi.js and Discord.js. Various utility commands and music-related features are also implemented. |
| 🔌 | **Integrations**  | Key dependencies include Discord.js for Discord bot interactions, Mangadex API for manga-related features, and various utility libraries for web server functionality and API integrations. These integrations enrich the project's capabilities and enhance user experiences. |
| 🧩 | **Modularity**    | The codebase exhibits a high degree of modularity, allowing for the dynamic loading of commands and events. This modularity enhances code reusability and maintainability, enabling easy expansion and customization of bot functionalities. |
| 🛡️ | **Security**      | Security measures such as encrypted tokens, access controls for server endpoints, and secure token management are evident. However, detailed information on specific security protocols and data protection implementations could further strengthen the project's security posture. |
| 📦 | **Dependencies**  | The project relies on a wide array of external libraries and dependencies for various functionalities, including Discord bot management, API interactions, web server handling, and utility features. Managing dependencies effectively is crucial for ensuring compatibility and stability. |

---

##  Repository Structure

```sh
└── AnimeTalks/
    ├── bin
    │   └── .md_cache
    ├── commands
    │   ├── fun
    │   ├── manga
    │   └── utility
    ├── commands_aoi
    │   ├── fun
    │   ├── giveaway
    │   ├── info
    │   ├── music
    │   └── utility
    ├── database
    │   └── main
    ├── events
    │   └── messageCreate.js
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── replit.nix
    ├── server.js
    ├── src
    │   └── loader.js
    └── values
        ├── config.js
        └── roasts.js
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/Kyouma960/AnimeTalks/blob/main/package.json) | Sets up dependencies and startup script for the AnimeTalks Discord bot in the main repository, managing various API integrations and server functionalities. |
| [index.js](https://github.com/Kyouma960/AnimeTalks/blob/main/index.js) | Instantiates Discord bot using Aoi.js and Discord.js.-Sets custom variables and sets up Lavalink music player.-Loads and manages bot commands dynamically.-Handles bot ready events and logs.-Initiates web server and logs in using an encrypted token. |
| [package-lock.json](https://github.com/Kyouma960/AnimeTalks/blob/main/package-lock.json) | This code file, located in the `commands_aoi/giveaway` directory of the AnimeTalks repository, contributes essential functionality to the Discord bots architecture. It enables the bot to efficiently manage and conduct giveaway events within Discord servers. The code implements features crucial for creating, monitoring, and concluding giveaway activities, enhancing user engagement and community interaction within Discord. |
| [replit.nix](https://github.com/Kyouma960/AnimeTalks/blob/main/replit.nix) | Specifies Node.js and Typescript language server dependencies for the project setup. |
| [server.js](https://github.com/Kyouma960/AnimeTalks/blob/main/server.js) | Facilitates server hosting with an Express.js instance. Responds to root endpoint requests with a custom HTML message using Google Fonts styling. Enables server to stay active on port 3000. |

</details>

<details closed><summary>events</summary>

| File | Summary |
| --- | --- |
| [messageCreate.js](https://github.com/Kyouma960/AnimeTalks/blob/main/events/messageCreate.js) | Routes incoming messages to respective commands based on prefixes defined in configuration, leveraging Discord.js functionalities and command aliases for scalability. Enhances command execution efficiency in the AnimeTalks bot system. |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [loader.js](https://github.com/Kyouma960/AnimeTalks/blob/main/src/loader.js) | Loads events and commands dynamically from designated directories in the repository structure. Initiates event listeners and populates a command collection using the Discord.js library. Supports extensibility and modularity for managing bot functionality efficiently. |

</details>

<details closed><summary>values</summary>

| File | Summary |
| --- | --- |
| [config.js](https://github.com/Kyouma960/AnimeTalks/blob/main/values/config.js) | Manages application settings and authentication credentials. Establishes prefixes for commands and holds token information. Essential for configuring and securing the anime chatbots functionality. |
| [roasts.js](https://github.com/Kyouma960/AnimeTalks/blob/main/values/roasts.js) | Provides a collection of humorous roasts to enhance user engagement and entertainment value within the AnimeTalks Discord bot, fostering a lively and interactive community atmosphere. |

</details>

<details closed><summary>bin</summary>

| File | Summary |
| --- | --- |
| [.md_cache](https://github.com/Kyouma960/AnimeTalks/blob/main/bin/.md_cache) | Stores encrypted session and refresh tokens for user Kyouma960. This cache file is crucial for maintaining user authentication and enabling seamless interactions with the application. |

</details>

<details closed><summary>database.main</summary>

| File | Summary |
| --- | --- |
| [main_scheme_1.sql](https://github.com/Kyouma960/AnimeTalks/blob/main/database/main/main_scheme_1.sql) | Defines primary database schema for AnimeTalks, facilitating structured data storage and retrieval. Establishes essential tables and relationships for efficient data management. Influences backend logic execution and interaction with user input across the repository. |

</details>

<details closed><summary>commands.utility</summary>

| File | Summary |
| --- | --- |
| [dictionary.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/utility/dictionary.js) | Retrieves dictionary definitions for specified words using an external API. Parses the response and sends the definition back to the Discord channel. Integrated into the repositorys utility commands section. |
| [facts.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/utility/facts.js) | Generates random facts or roasts based on API responses and probability, enhancing Discord bot utility within the commands/utility section of the AnimeTalks repository architecture. |
| [convert.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/utility/convert.js) | Enables currency conversion within the Discord bot using an external API. Parses user input to extract amount, source currency, and target currency. Handles API request and response to provide converted currency value back to the user. |

</details>

<details closed><summary>commands.manga</summary>

| File | Summary |
| --- | --- |
| [read.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/manga/read.js) | Enables reading manga with navigation buttons in Discord. Retrieves manga chapters from Mangadex API based on user input, displaying them with back, forward, and close buttons for a seamless reading experience. |
| [search.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/manga/search.js) | Implements manga search functionality with interactive navigation for manga chapters. Parses user input, fetches manga data, and dynamically displays chapter pages. Enables users to browse and read manga seamlessly within the Discord environment. |

</details>

<details closed><summary>commands.fun</summary>

| File | Summary |
| --- | --- |
| [checkiq.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands/fun/checkiq.js) | Implements IQ checking logic based on Discord user IDs. Handles special cases and generates a random IQ score with accompanying messages. Helps engage users in fun interactions within the AnimeTalks Discord bot. |

</details>

<details closed><summary>commands_aoi.info</summary>

| File | Summary |
| --- | --- |
| [discord.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/info/discord.js) | Provides Discord link for discord command in AnimeTalks Discord bot. Centralizes invite link management for easy modification. Enhances user experience by simplifying access to the community. |
| [yt.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/info/yt.js) | Enables accessing YouTube channel link with ease through the command youtube or shortcut yt. Located in the info category of commands_aoi, vital for providing users with direct access to the designated YouTube channel within the AnimeTalks repository architecture. |
| [ping.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/info/ping.js) | Enables fetching ping response message in the AnimeTalks repositorys commands_aoi/info section to enhance bot functionality. |
| [fb.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/info/fb.js) | Provides a command to access the Facebook page link for AnimeTalks. |
| [sendnudes.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/info/sendnudes.js) | Generates a command to send amusing content within the Discord server. Promotes server engagement by enticing users with humor. |

</details>

<details closed><summary>commands_aoi.utility</summary>

| File | Summary |
| --- | --- |
| [help.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/utility/help.js) | Provides a command help for utility functions in AnimeTalks, offering self-assistance without additional details. |

</details>

<details closed><summary>commands_aoi.music</summary>

| File | Summary |
| --- | --- |
| [volume.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/volume.js) | Implements volume control feature for music commands in commands_aoi. Updates volume using precise calculations based on user input. Displays informative feedback to the user, ensuring a seamless music listening experience. |
| [queue.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/queue.js) | Defines a command that displays the servers music queue with user and song details, ensuring permission checks, cooldown management, and dynamic page navigation. Cleverly handles missing queue or player info gracefully. |
| [lyrics.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/lyrics.js) | Retrieves song lyrics using an external API based on user input. Features include fetching lyrics, author information, and showing a thumbnail. This command enhances the music-related functionality in the projects command module. |
| [now_playing.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/now_playing.js) | Provides detailed track information like title, duration, volume, and current playback position. Displays track thumbnail and author. Facilitates an immersive music listening experience. |
| [skip.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/skip.js) | Implements skip functionality for music in AnimeTalks Discord bot. It enables skipping tracks in the servers music queue with validation checks for voice channel, queue length, and permissions, enhancing user interaction and experience. |
| [play.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/music/play.js) | Implements a play command for music playback, enriching the Discord bot with the ability to add and play songs from a queue. Enhances user experience by providing real-time updates and detailed song information. |

</details>

<details closed><summary>commands_aoi.fun</summary>

| File | Summary |
| --- | --- |
| [rps.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/fun/rps.js) | Implements Rock Paper Scissors game with reaction collector and interactive gameplay. Handles user choices and outcomes elegantly within the Discord bots fun' category, contributing interactive entertainment to the project's feature set. |
| [quotes.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/fun/quotes.js) | Generates random quotes with authors using a third-party API. Categorized under Fun commands within the AnimeTalks repository, enhancing user experience through engaging and inspirational content. |
| [roastping.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/fun/roastping.js) | Generates random roasts from predefined list for humorous user interactions within AnimeTalks Discord bots Fun module. Enhances engagement by sending witty insult messages to users upon command execution. |

</details>

<details closed><summary>commands_aoi.giveaway</summary>

| File | Summary |
| --- | --- |
| [gw.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/giveaway/gw.js) | Implements a Discord bot giveaway command. Announces winners, ends giveaways, and handles participant selection. |
| [gstart.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/giveaway/gstart.js) | Enables starting a giveaway with host, prize, and winner details. Validates time, winner format, and permissions. Generates an embed to initiate the giveaway, requiring a specified time, winner count, and prize. |
| [greroll.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/giveaway/greroll.js) | Manages rerolling giveaways with new winners based on reactions, updating prize details, and notifying participants. Ensures staff permission, valid message ID, and giveaway completion. |
| [gend.js](https://github.com/Kyouma960/AnimeTalks/blob/main/commands_aoi/giveaway/gend.js) | Manages the end of a giveaway, announces winners, and handles edge cases. Automatically selects winners and notifies participants based on reactions. Requires staff permissions to function properly and avoids announcing winners if the giveaway has already ended. |

</details>

---

##  Getting Started

###  Prerequisites

**JavaScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the AnimeTalks repository:
```sh
❯ git clone https://github.com/Kyouma960/AnimeTalks
```

2. Navigate to the project directory:
```sh
❯ cd AnimeTalks
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Kyouma960/AnimeTalks/issues)**: Submit bugs found or log feature requests for the `AnimeTalks` project.
- **[Submit Pull Requests](https://github.com/Kyouma960/AnimeTalks/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Kyouma960/AnimeTalks/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Kyouma960/AnimeTalks
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Kyouma960/AnimeTalks/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Kyouma960/AnimeTalks">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
