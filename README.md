# Chatbot Project

This repository contains the codebase for a chatbot application.

## Installation

To get started with the project, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/MarwanTarik/chatbot.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using `pnpm`:

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and configure the following environment variables:

- `GEMINI_API_KEY`: Your Gemini API key.
- `PORT`: The port number on which the application will run. default is 3000.
  **Note:** If you change the default port, be sure to update the port number in `script.js` routes to match.

Ensure your `.env` file looks something like this:

```bash
GEMINI_API_KEY=your_api_key_here
PORT=your_desired_port_number
```

## Usage

You can run the project in different environments as follows:

### Development

To start the application in development mode:

```bash
pnpm run start:dev
```

### Production

To start the application in production mode:

```bash
pnpm run start:prod
```

## NLP Features Integration

### Entity Recognition

This chatbot utilizes `compromise` and `compromise-dates` for entity recognition, allowing it to extract entities like names, locations, and dates from user input. Here’s how it’s integrated:

#### Integration Details

Entity Recognition Service: The entity recognition functionality is implemented in the `src/services/recognition.service.ts` file. This service utilizes the compromise library to analyze and process user input, extracting relevant entities such as names, locations, and dates.

### Sentiment Analysis

The chatbot leverages `Gemini` for sentiment analysis to assess and describe the sentiment of user inputs. This functionality is integrated using a custom prompt to tailor the sentiment evaluation to specific needs.

#### Integration Details

**Custom Prompt Configuration**
The sentiment analysis uses a custom prompt configured in the `src/sentiment-analysis.service.ts` file. This prompt directs Gemini on how to interpret and describe the sentiment of the user input.
