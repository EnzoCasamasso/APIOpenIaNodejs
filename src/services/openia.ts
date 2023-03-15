import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export const prompt = async (req, res) => {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      });
      return;
    }
  
    const prompt = req.body.prompt || '';
    if (prompt.trim().length === 0) {
      res.status(400).json({
        error: {
          message: "Please enter a valid animal",
        }
      });
      return;
    }
  
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.6,
      });
      res.json({ result: completion.data.choices[0].text });
    } catch(error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    }
  }

  function generatePrompt(prompt) {
    const capitalizedAnimal =
      prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.
  
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
  }

  export const criarPrompt = async (prompt: string) => {
    console.log('Aguardando resposta do chatgpt...')
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048 // Altera a quantidade máxima de tokens para aumentar o tamanho da resposta
      });  

      const textPrompt = completion.data.choices[0].text

      console.log(textPrompt);
      return textPrompt;
    } catch(error) {
      console.log(error);
      return `${error}`
    }
  }

  


// console.log(completion.data.choices[0].text);

//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