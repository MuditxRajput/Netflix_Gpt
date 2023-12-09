import OpenAI from 'openai';
import { OpenApiKey } from './constant';
const openai = new OpenAI({
  apiKey: OpenApiKey, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser : true,
});

export default openai;