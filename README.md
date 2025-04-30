# Claude Code Best Practices Walkthrough

This repository is a step-by-step implementation of the [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) guide by Anthropic.

## Project Overview

This project demonstrates building a command-line tool in Python that can:
- Process CSV data efficiently
- Leverage AI capabilities with Claude
- Connect to external services when needed

## Repository Structure

This repository contains several key files:

- **README.md** (this file): Information about what this repository does and how to use it
- **[CLAUDE.md](./CLAUDE.md)**: Configuration instructions for Claude when working in this repository
- **[CURRICULUM.md](./CURRICULUM.md)**: The content of what to learn - modules, lessons, and objectives
- **[PEDAGOGY.md](./PEDAGOGY.md)**: How the curriculum should be taught - question formats, feedback approach, and teaching methodology
- **[LANGUAGE.md](./LANGUAGE.md)**: Programming language specifications, coding standards, and useful commands

You can use this repository both to complete the curriculum yourself or extract the teaching materials (CURRICULUM.md and PEDAGOGY.md) for use in other contexts.

## Current Progress

- ✅ Initial repository setup
- ✅ Project structure creation (directories)
- ❌ ~~Setting up package.json and JavaScript configurations~~
- ❌ ~~Implementing JavaScript example~~
- ✅ Setting up Python environment and structure
- ✅ Adding pytest framework
- ✅ Building basic CLI tool
- ⬜ Demonstrating complex search patterns
- ⬜ Showcasing interactive quiz format

## Python Development Workflow

For our Python implementation, we will follow the Test-Driven Development (TDD) approach:
1. Write tests first using pytest
2. Commit the tests
3. Implement code to make tests pass
4. Commit the implementation
5. Refactor if needed

We'll organize our code following Python best practices:
- Use virtual environments to manage dependencies
- Structure code as a proper Python package
- Use type hints for better documentation
- Follow PEP 8 style guidelines

## How to Use This Repository

Each commit represents a step in the implementation process. Follow along by checking out commits sequentially to see how the project evolves according to best practices.

We commit and push to remote after each step to maintain a clear history of the implementation process.

## Interactive Approach

Following the guidance in CLAUDE.md, we use an interactive quiz format before implementing any new step:
1. Explain the purpose/reasoning behind the step
2. Present multiple-choice questions with options
3. Wait for user response before continuing
4. Provide questions to ensure understanding
5. Ask for confirmation before proceeding

See [CLAUDE.md](./CLAUDE.md) for detailed guidance on the configuration and interaction patterns used in this project.