# SteadyBeat GitHub Configurations

This repository (`.github`) is the central location for organization-wide configurations, templates, and automation workflows for SteadyBeat.

## Directory Structure

* **`pull_request_template.md`**: The default Pull Request template. Because it is placed in the root of the `.github` repository, it automatically serves as the default for other repositories in the organization.
* **`.github/ISSUE_TEMPLATE/`**: Contains the standard issue templates. These also automatically apply organization-wide.
* **`.github/workflows/`**: Contains GitHub Actions workflow templates (e.g., `auto-add-on-assign.yml` for adding issues to project boards).
* **`scripts/`**: Contains helper scripts required by our workflows or CLI tools (e.g., syncing issues, generating weekly reports).

##  Important Note on Creating New Repositories

While Issue and PR templates automatically apply to other repositories across the organization, **GitHub Actions workflows do not.**

When creating a new repository for a SteadyBeat project, you **MUST** configure its automations manually:

1. **Copy Workflows**: Copy the `.github/workflows/` directory from this repository into your new repository.
2. **Correct Pathing**: Make sure the Workflow files (such as `auto-add-on-assign.yml`) are placed exactly under the `.github/workflows/` path in the new repository. (Placing them in a root `workflows/` folder will cause them to be ignored by GitHub).
3. **Copy Scripts**: If a workflow relies on a script from the `scripts/` folder, ensure you copy the `scripts/` folder to the root of the new repository as well.

Doing this ensures all standard SteadyBeat automations (like automatic assignment tracking) will function correctly in your new project.
