```latex
\documentclass[letterpaper,10pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage[normalem]{ulem} % Added for explicit underlining

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{rm}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1}
  }
}

% Subheading: The Job Title
\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-2pt} 
}

% Project Heading
\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-2pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

% Global List Spacing settings
% itemsep=6pt gives distinct separation between jobs
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}, itemsep=6pt]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}

% topsep=0pt removes the space between Title and Description
\newcommand{\resumeItemListStart}{\begin{itemize}[itemsep=1pt, parsep=1pt, topsep=0pt]} 
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2pt}}

% Helper for underlined links
\newcommand{\underlinedlink}[2]{\href{#1}{\uline{#2}}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}

%----------HEADER----------
\begin{center}
    {\Huge \textbf{Osinachi Okpara}} \\ \vspace{2pt} % Reduced spacing here
    \normalsize 
    \underlinedlink{https://linkedin.com/in/osinachiokpara}{linkedin.com/in/osinachiokpara} $|$ 
    \underlinedlink{mailto:okparaosi17@gmail.com}{okparaosi17@gmail.com} $|$ 
    \underlinedlink{https://github.com/sin4ch}{github.com/sin4ch} $|$ 
    \underlinedlink{https://linktr.ee/osinachiokpara}{linktr.ee/osinachiokpara}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {University of Benin}{Edo, NG}
      {Bachelor of Engineering in Computer Engineering}{}
  \resumeSubHeadingListEnd


%-----------ABOUT-----------
\section{About}
    \resumeItemListStart
        \resumeItem{\textbf{Developer Advocate and Community Architect with 2+ years of experience} specializing in building technical communities, creating developer education, and driving product adoption for cloud-native and AI technologies.}
        \resumeItem{\textbf{Strategic Community Lead orchestrating education for 10,500+ engineers} at NexaScale, guiding 100+ developers through hands-on projects and managing mentorship programs with experts from SAP, Visa, and BitWarden.}
        \resumeItem{\textbf{Proven builder scaling independent cloud communities from 0 to 400+ members}, securing high-impact partnerships with Microsoft, AWS, and Google student groups across 5+ universities.}
        \resumeItem{\textbf{Recognized AWS Community Builder and Public Speaker with 15+ engagements} at industry events such as AWS Community Day West Africa, Google Devfest, and Google Build with AI.}
        \resumeItem{\textbf{Open Source Contributor and Technical Author} contributing to high-growth YC startups (Browser Use, Truffle AI) and publishing articles on cloud infrastructure and AI agents on platforms like Everything DevOps.}
    \resumeItemListEnd
    
    \vspace{-5pt} 


%-----------EXPERIENCE-----------
\section{Work Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {NexaScale}{January 2024 -- Present}
      {Developer Advocate \& Technical Programs Lead}{Washington, DC, US (Remote)}
      \resumeItemListStart
        \resumeItem{\textbf{Orchestrated advanced cloud and DevOps education} for a 10,500+ member community through office hours and technical content}
        \resumeItem{\textbf{Led the "DevOps Project Series,"} a targeted workshop that guided 100+ engineers in building real-world projects on AWS}
        \resumeItem{\textbf{Managed strategic community programs,} including mentorship, hackathons and work simulation programs, securing specialists at AWS, SAP, Visa, and BitWarden as judges and mentors}
      \resumeItemListEnd

    \resumeSubheading
      {Learn To Cloud}{January 2025 -- February 2025}
      {Developer Advocate}{New York, US (Remote)}
      \resumeItemListStart
        \resumeItem{\textbf{Spearheaded community engagement across Discord, GitHub and X (Twitter)} for this open-source project, serving as the primary liaison for over 1000 cloud/DevOps engineers to gather developer feedback, cultivate a collaborative environment, and drive user engagement}
        \resumeItem{\textbf{Authored targeted internal documentation and technical articles} on cloud engineering and DevOps, and on social media to accelerate platform adoption}
      \resumeItemListEnd

    \resumeSubheading
      {The Cloud Crowd \& DevOps Conclave}{2024 -- Present}
      {Founder \& Community Architect}{Lagos, NG (Remote)}
      \resumeItemListStart
        \resumeItem{\textbf{Architected and executed an end-to-end strategy} for these cloud engineering communities, scaling them from 0 to over 400 members}
        \resumeItem{\textbf{Drove strategic expansion by securing partnerships} with Microsoft, AWS, and Google student communities across 5+ Nigerian universities}
        \resumeItem{\textbf{Curated high-impact events with industry leaders} from Microsoft, Moniepoint, PipeOps, and AWS Heroes as speakers}
        \resumeItem{\textbf{Served as the primary community voice and relationship builder,} actively managing technical discussions, resolving queries, and gathering actionable feedback to guide community development}
      \resumeItemListEnd

    \resumeSubheading
      {Hotels.ng}{June 2024 -- July 2024}
      {DevOps Engineer Intern}{Lagos, NG (Remote)}
      \resumeItemListStart
        \resumeItem{\textbf{Orchestrated a three-tier microservices architecture} (React, FastAPI, PostgreSQL) using Docker Compose, implementing an Nginx reverse proxy to handle request routing, load balancing, and static file serving for the frontend application}
        \resumeItem{\textbf{Engineered a public-facing Number Classification API} using FastAPI, implementing strict input validation and CORS middleware to support safe cross-origin resource sharing for third-party integrations}
        \resumeItem{\textbf{Developed asynchronous integration patterns} using Python's httpx library to interface with external services (Numbers API), optimizing response times through non-blocking I/O and efficient error handling protocols}
        \resumeItem{\textbf{Automated Linux server provisioning} and user identity management (RBAC) using Bash scripting, reducing manual onboarding time by 95\% and eliminating configuration drift across development environments}
        \resumeItem{\textbf{Implemented CI/CD pipelines via GitHub Actions} to automate container builds, linting (Ruff), and testing, establishing a repeatable deployment strategy for cloud-native microservices}
      \resumeItemListEnd

  \resumeSubHeadingListEnd


%-----------OPEN SOURCE EXPERIENCE-----------
\section{Open Source Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {Browser Use (YC W25)}{\underlinedlink{https://github.com/browser-use/browser-use/pull/2998}{Pull Request Link}}
      {Open Source Contributor}{}
      \resumeItemListStart
        \resumeItem{\textbf{Authored comprehensive MCP Server documentation} (196 lines) for exposing browser-use capabilities via Model Context Protocol, enabling integration with AI assistants like Claude Desktop, Cline, and other MCP-compatible clients}
        \resumeItem{\textbf{Addressed community-reported issue \#2933} for missing MCP Server documentation, providing complete coverage of installation steps, Claude Desktop configuration (macOS/Windows), available tools reference, programmatic usage examples, and troubleshooting guide}
        \resumeItem{\textbf{Documented 16+ MCP tools} across categories: autonomous agent tools (\texttt{run\_browser\_task}, \texttt{run\_browser\_task\_streaming}), direct browser control (navigate, click, type, scroll), tab management, content extraction, and file operations}
        \resumeItem{\textbf{Updated docs navigation structure} by adding new "Integration" group in \texttt{docs.json} to improve discoverability of MCP-related documentation}
      \resumeItemListEnd

    \resumeSubheading
      {Dexto by Truffle AI (YC W25)}{\underlinedlink{https://github.com/truffle-ai/dexto/pull/311}{Pull Request Link}}
      {Open Source Contributor}{}
      \resumeItemListStart
        \resumeItem{\textbf{Developed responsive CopyMarkdown React component} with split-button dropdown UI featuring "Copy as Markdown" and "View as Markdown" options, implementing HTML-to-Markdown conversion with support for headings, lists, links, code blocks, and text formatting}
        \resumeItem{\textbf{Built custom Docusaurus TypeScript plugin} (\texttt{markdown-route-plugin.ts}) enabling direct \texttt{.md} file access (e.g., \texttt{/docs/page.md}) with development middleware for live serving and production build integration that copies markdown files to static output}
        \resumeItem{\textbf{Implemented comprehensive \texttt{llms.txt} generation} with 89-line documentation index covering all docs/API pages, following the LLMs.txt standard for AI-friendly documentation discovery with structured categorization across 8 documentation sections}
        \resumeItem{\textbf{Engineered responsive CSS layout system} with mobile-friendly button positioning using CSS container queries and breakpoint-based adjustments (1200px, 769px, 768px) to prevent title/button overlap across all screen sizes}
        \resumeItem{\textbf{Addressed security concerns} from CodeRabbit AI review by implementing path traversal protection with \texttt{path.resolve()} validation ensuring resolved paths stay within designated root directories}
      \resumeItemListEnd

    \resumeSubheading
      {Amazon Web Services}{\underlinedlink{https://github.com/aws-solutions/innovation-sandbox-on-aws/issues/19}{Issue Link}}
      {Open Source Contributor (Innovation Sandbox)}{}
      \resumeItemListStart
        \resumeItem{\textbf{Identified architectural limitation} in AWS Innovation Sandbox authentication flow where JWT tokens expire every 30 minutes, preventing production deployment of service-to-service API integrations without manual browser-based token refresh}
        \resumeItem{\textbf{Proposed enhancement request} for programmatic/machine-to-machine (M2M) authentication support using OAuth 2.0 client credentials flow, enabling automated API access for third-party applications without browser dependency}
        \resumeItem{\textbf{Demonstrated practical use case} by building a custom API wrapper (sin4ch/aws-innovation-sb-api) to interface with the sandbox API for lease management, account listing, and termination operations, highlighting the need for service-to-service auth}
      \resumeItemListEnd

    \resumeSubheading
      {OpenCode by SST (YC W21)}{\underlinedlink{https://github.com/sst/opencode/pull/2707}{Pull Request Link}}
      {Open Source Contributor}{}
      \resumeItemListStart
        \resumeItem{\textbf{Identified documentation quality issue} in \texttt{/docs/config} page where incomplete statement ending with a colon suggested missing content, proactively offering to contribute a fix}
        \resumeItem{\textbf{Enhanced theme documentation} by adding hyperlinks to 9 original theme repositories (Tokyonight, Everforest, Ayu, Catppuccin, Gruvbox, Kanagawa, Nord, Atom One Dark) in the themes reference table, improving discoverability and attribution}
        \resumeItem{\textbf{Maintained documentation table formatting} while expanding description column to accommodate markdown links, preserving readability across the MDX documentation page}
      \resumeItemListEnd

  \resumeSubHeadingListEnd


%-----------PROJECTS-----------
\section{Projects}
  \resumeSubHeadingListStart

    \resumeSubheading
      {QualGent Job Orchestrator}{\underlinedlink{https://github.com/sin4ch/qgjob}{GitHub Link}}
      {Tools: Python, Click, FastAPI, GitHub Actions, Redis, PostgreSQL, Docker, BrowserStack, Selenium}{}
      \resumeItemListStart
        \resumeItem{\textbf{Designed and implemented a production-ready job orchestration system} for managing and executing AppWright automated tests on BrowserStack, featuring Redis-based priority queue management, PostgreSQL job persistence, and background worker processes with configurable retry logic (up to 3 attempts with exponential backoff)}
        \resumeItem{\textbf{Built RESTful API with FastAPI} exposing 7 endpoints for job lifecycle management (submit, status, list, cancel, retry, health, metrics), implementing CORS middleware, SQLAlchemy ORM integration, and automatic success rate calculation with real-time queue monitoring}
        \resumeItem{\textbf{Developed feature-rich CLI application using Click} supporting job submission, status monitoring with polling, batch job listing with filters (org, status, app version), job retry/cancel workflows, and system metrics display with color-coded output for terminal UX}
        \resumeItem{\textbf{Engineered BrowserStack integration layer} with Selenium WebDriver and Appium for cross-platform testing (web, mobile devices, emulators), including automated app upload with caching, HMAC-authenticated API calls, session management, and video recording retrieval}
        \resumeItem{\textbf{Containerized multi-service deployment} using Docker Compose with PostgreSQL 15, Redis 7, API server, and scalable worker replicas (2+), featuring health checks, persistent volumes, automatic service dependency ordering, and production-ready logging to file and stdout}
        \resumeItem{\textbf{Implemented comprehensive CI/CD pipeline} with GitHub Actions automating unit tests, end-to-end integration testing with service containers (PostgreSQL/Redis), artifact logging with 30-day retention, and automated test report generation}
      \resumeItemListEnd

    \resumeSubheading
      {Mono Banking MCP Server}{53 Stars \& 11 Forks $|$ \underlinedlink{https://github.com/sin4ch/mono-mcp}{GitHub Link}}
      {Tools: Python, FastMCP, PostgreSQL, Claude}{}
      \resumeItemListStart
        \resumeItem{\textbf{Architected a Model Context Protocol (MCP) server} enabling AI assistants (Claude, ChatGPT) to perform Nigerian banking operations via Mono Open Banking API, implementing 12 banking tools including account management, DirectPay payments, BVN verification, and transaction history retrieval}
        \resumeItem{\textbf{Engineered real-time webhook processing system} with HMAC-SHA256 signature verification using Starlette custom routes, featuring SQLAlchemy-backed event storage for account connection, update, and unlink events with full audit trail capabilities}
        \resumeItem{\textbf{Built asynchronous API client layer} using httpx with configurable timeouts, automatic retry fallbacks for endpoint versioning (v2/v3), and proper session management for concurrent banking operations including payment initiation and account verification}
        \resumeItem{\textbf{Implemented CI/CD pipeline} with GitHub Actions for automated linting (Ruff), formatting (Black), type checking (mypy), and pytest-based unit testing with coverage reporting, utilizing uv package manager for fast, reproducible dependency management}
        \resumeItem{\textbf{Deployed cloud-ready MCP server} to FastMCP Cloud with integrated health check endpoints, environment-based secret management (python-dotenv, python-decouple), and Claude Desktop integration support via standardized MCP protocol}
      \resumeItemListEnd

    \resumeSubheading
      {AWS Innovation Sandbox API}{\underlinedlink{https://github.com/sin4ch/aws-innovation-sb-api}{GitHub Link}}
      {Tools: Python, FastAPI, Boto3, AWS STS, httpx}{}
      \resumeItemListStart
        \resumeItem{\textbf{Developed RESTful API for AWS Innovation Sandbox account management} using FastAPI, enabling sandbox lease lifecycle operations (request, list, terminate), cross-account resource discovery, and CloudFormation template generation with JWT-based authentication against the Innovation Sandbox service}
        \resumeItem{\textbf{Engineered cross-account AWS access layer using STS AssumeRole} with intelligent role discovery (ISBSpokeRole, OrganizationAccountAccessRole, AWSControlTowerExecution, SandboxAccessRole), session caching for performance, and validation to ensure resources belong to the target account}
        \resumeItem{\textbf{Implemented dual-strategy resource discovery} using AWS Config API with pagination for detailed resource metadata, with automatic fallback to Resource Groups Tagging API, including ARN parsing for resource type, ID, and region extraction from cross-account resources}
        \resumeItem{\textbf{Built CloudFormation template generator} that transforms discovered AWS resources (EC2, S3, Lambda, RDS, DynamoDB, IAM, VPC) into valid CloudFormation JSON with proper resource type mapping, logical ID generation, property extraction, and tag preservation for infrastructure-as-code export}
        \resumeItem{\textbf{Designed modular service architecture} with clear separation of concerns:  routers for API endpoints (leases, accounts, resources, templates, health), services layer for AWS/ISB client logic, Pydantic models for request/response validation, and centralized configuration via pydantic-settings}
      \resumeItemListEnd

  \resumeSubHeadingListEnd


%-----------SKILLS-----------
\section{Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \item \small \textbf{Community \& Content}{: Slack, Discord, Reddit, Twitter/X, Technical Writing, Public Speaking, Event Organization}
    \vspace{1pt} % Reduced spacing here
    \item \small \textbf{Languages \& Frameworks}{: Python (FastAPI, SQLAlchemy, boto3), Bash, HTML, CSS, Markdown, YAML, JSON}
    \vspace{1pt} % Reduced spacing here
    \item \small \textbf{AI/LLM Development}{: MCP, FastMCP, Agents, LLMs (Gemini, ChatGPT, Claude, DeepSeek), Function Calling, Prompt/Context Engineering}
    \vspace{1pt} % Reduced spacing here
    \item \small \textbf{Cloud-Native \& DevOps}{: AWS, Docker, Terraform, GitHub Actions, Git, Nginx}
 \end{itemize}

\end{document}
```
