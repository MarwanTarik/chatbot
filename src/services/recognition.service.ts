import nlp from 'compromise';
import nlpDates from 'compromise-dates';
import { Recognition } from '../types/recognition.type.js';

const NLP = nlp.extend(nlpDates);

export async function recognize(message: string): Promise<Recognition> {
  const doc = NLP(message);
  
  const names = doc.people().normalize().out('array');
  const locations = doc.places().normalize().out('array');
  const dates = NLP(message).dates().normalize().out('array');

  return {
    names,
    locations,
    dates
  }
} 