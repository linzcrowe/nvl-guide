export const CARD_CATEGORY = {
  HIGH: 0,
  LOW: 1,
  SHADOW: 2,
};

export const CARD_SUITE = {
  HEARTS: 0,
  DIAMONDS: 1,
  SPADES: 2,
  CLUBS: 3,
};

export const CARD_NUMBER ={
  ACE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3,
  FIVE: 4,
  SIX: 5,
  SEVEN: 6,
  EIGHT: 7,
  NINE: 8,
  TEN: 9,
  JACK: 10,
  QUEEN: 11,
  KING: 12,
}

export const idToDetails = (card) => {
  switch (card) {
    case 'h2':
      return {
        card: CARD_NUMBER.TWO,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Oversensitive',
        description: 'Excessively sensitive to influences from the external environment',
      };
      break;
    case 'h3':
      return {
        card: CARD_NUMBER.THREE,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Self sacrificing',
        description: 'Sacrifice of one\'s interests, desires, for the good of another person\'s',
      };
      break;
    case 'h4':
      return {
        card: CARD_NUMBER.FOUR,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Boisterous',
        description: 'Rough and noisy; jolly or rowdy; unrestrained'
      };
      break;
    case 'h5':
      return {
        card: CARD_NUMBER.FIVE,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.LOW,
        title: 'Considerate',
        description: 'Careful not to inconvenience or harm others',
      };
      break;
    case 'h6':
      return {
        card: CARD_NUMBER.SIX,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.LOW,
        title: 'Loyal',
        description: 'Gives firm and constant support / allegiance to a person / institution',
      };
      break;
    case 'h7':
      return {
        card: CARD_NUMBER.SEVEN,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.LOW,
        title: 'Compassionate',
        description: 'Feeling or showing sympathy and concern for others',
      };
      break;
    case 'h8':
      return {
        card: CARD_NUMBER.EIGHT,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.LOW,
        title: 'Empathetic',
        description: 'Showing an ability to understand and share the feelings of another',
      };
      break;
    case 'h9':
      return {
        card: CARD_NUMBER.NINE,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.LOW,
        title: 'Nurturing',
        description: 'Care for and protect (someone or something) while they are growing',
      };
      break;
    case 'h10':
      return {
        card: CARD_NUMBER.TEN,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Popular',
        description: 'Liked or admired by many people',
      };
      break;
    case 'hj':
      return {
        card: CARD_NUMBER.JACK,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Gregarious',
        description: 'Fond of company; sociable',
      };
      break;
    case 'hq':
      return {
        card: CARD_NUMBER.QUEEN,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Sociable',
        description: 'Willing to talk and engage in activities with other people',
      };
      break;
    case 'hk':
      return {
        card: CARD_NUMBER.KING,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Diplomatic',
        description: 'Skilled in dealing with sensitive matters or people; tactful',
      };
      break;
    case 'ha':
      return {
        card: CARD_NUMBER.ACE,
        suite: CARD_SUITE.HEARTS,
        category: CARD_CATEGORY.HIGH,
        title: 'Cheerleader',
        description: 'An enthusiastic and vocal supporter of someone or something',
      };
      break;
    case 'd2':
      return {
        card: CARD_NUMBER.TWO,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Scattered',
        description: 'Distracted, all over the place',
      };
      break;
    case 'd3':
      return {
        card: CARD_NUMBER.THREE,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Disorganised',
        description: 'Unable to plan one\'s activities efficiently',
      };
      break;
    case 'd4':
      return {
        card: CARD_NUMBER.FOUR,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Impulsive',
        description: 'Actuated or swayed by emotional or involuntary impulses',
      };
      break;
    case 'd5':
      return {
        card: CARD_NUMBER.FIVE,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.LOW,
        title: 'Curious',
        description: 'Eager to know or learn something',
      };
      break;
    case 'd6':
      return {
        card: CARD_NUMBER.SIX,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.LOW,
        title: 'Insightful',
        description: 'Having or showing an accurate and deep understanding',
      };
      break;
    case 'd7':
      return {
        card: CARD_NUMBER.SEVEN,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.LOW,
        title: 'Open minded',
        description: 'Willing to consider new ideas; unprejudiced',
      };
      break;
    case 'd8':
      return {
        card: CARD_NUMBER.EIGHT,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.LOW,
        title: 'Visionary',
        description: 'Thinking about or planning the future with imagination or wisdom',
      };
      break;
    case 'd9':
      return {
        card: CARD_NUMBER.NINE,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.LOW,
        title: 'Creative',
        description: 'Having good imagination or original ideas',
      };
      break;
    case 'd10':
      return {
        card: CARD_NUMBER.TEN,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.HIGH,
        title: 'Versatile',
        description: 'Able to adapt to many different functions or activities',
      };
      break;
    case 'dj':
      return {
        card: CARD_NUMBER.JACK,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.HIGH,
        title: 'Flexible',
        description: 'Ready and able to change so as to adapt to different circumstances',
      };
      break;
    case 'dq':
      return {
        card: CARD_NUMBER.QUEEN,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.HIGH,
        title: 'Daring',
        description: 'Being brave and willing to take risks',
      };
      break;
    case 'dk':
      return {
        card: CARD_NUMBER.KING,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.HIGH,
        title: 'Spontaneous',
        description: 'Happening naturally, without planning or encouragement',
      };
      break;
    case 'da':
      return {
        card: CARD_NUMBER.ACE,
        suite: CARD_SUITE.DIAMONDS,
        category: CARD_CATEGORY.HIGH,
        title: 'Adventurous',
        description: 'Disposed to seek adventure, the new and unknown',
      };
      break;
    case 'c2':
      return {
        card: CARD_NUMBER.TWO,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Rigid',
        description: 'Not willing or able to be change or adapt',
      };
      break;
    case 'c3':
      return {
        card: CARD_NUMBER.THREE,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Anal Retentive',
        description: 'Excessively orderly and fussy',
      };
      break;
    case 'c4':
      return {
        card: CARD_NUMBER.FOUR,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.SHADOW,
        title: 'Bossy',
        description: 'Given to ordering people about; overly authoritative; domineering',
      };
      break;
    case 'c5':
      return {
        card: CARD_NUMBER.FIVE,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.LOW,
        title: 'Methodical',
        description: 'Orderly in thought or behaviour; habitually proceeds according to method',
      };
      break;
    case 'c6':
      return {
        card: CARD_NUMBER.SIX,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.LOW,
        title: 'Systematic',
        description: 'Marked by thoroughness and regularity',
      };
      break;
    case 'c7':
      return {
        card: CARD_NUMBER.SEVEN,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.LOW,
        title: 'Structured',
        description: 'Enjoys having a well-defined structure or organization;',
      };
      break;
    case 'c8':
      return {
        card: CARD_NUMBER.EIGHT,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.LOW,
        title: 'Organised',
        description: 'Arranges in a systematic, orderly way.',
      };
      break;
    case 'c9':
      return {
        card: CARD_NUMBER.NINE,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.LOW,
        title: 'Disciplined',
        description: 'Showing a controlled form of behaviour or way of working',
      };
      break;
    case 'c10':
      return {
        card: CARD_NUMBER.TEN,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.HIGH,
        title: 'Competitive',
        description: 'Having a strong desire to compete or to succeed',
      };
      break;
    case 'cj':
      return {
        card: CARD_NUMBER.JACK,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.HIGH,
        title: 'Direct',
        description: 'Straightforward; frank; candid:',
      };
      break;
    case 'cq':
      return {
        card: CARD_NUMBER.QUEEN,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.HIGH,
        title: 'Decisive',
        description: 'Having or showing the ability to make decisions quickly and effectively.',
      };
      break;
    case 'ck':
      return {
        card: CARD_NUMBER.KING,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.HIGH,
        title: 'Driven',
        description: 'Propelled or motivated; very determined to succeed',
      };
      break;
    case 'ca':
      return {
        card: CARD_NUMBER.ACE,
        suite: CARD_SUITE.CLUBS,
        category: CARD_CATEGORY.HIGH,
        title: 'Goal Oriented',
        description: 'Concerned with or focused on achieving a particular aim or result',
      };
      break;
    case 's2':
      return {
        card: CARD_NUMBER.TWO,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.SHADOW,
        title: 'Critical',
        description: 'Expresses adverse or disapproving comments or judgements',
      };
      break;
    case 's3':
      return {
        card: CARD_NUMBER.THREE,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.SHADOW,
        title: 'Skeptical',
        description: 'Not easily convinced; having doubts or reservations',
      };
      break;
    case 's4':
      return {
        card: CARD_NUMBER.FOUR,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.SHADOW,
        title: 'Know It All',
        description: 'Acts as though they know everything; dismisses the opinions of others',
      };
      break;
    case 's5':
      return {
        card: CARD_NUMBER.FIVE,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.LOW,
        title: 'Rational',
        description: 'Operates in accordance with reason or logic',
      };
      break;
    case 's6':
      return {
        card: CARD_NUMBER.SIX,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.LOW,
        title: 'Realistic',
        description: 'Interested in, concerned with, or based on what is real or practical',
      };
      break;
    case 's7':
      return {
        card: CARD_NUMBER.SEVEN,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.LOW,
        title: 'Data Driven',
        description: 'Determines by or depends on the collection or analysis of data',
      };
      break;
    case 's8':
      return {
        card: CARD_NUMBER.EIGHT,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.LOW,
        title: 'Logical',
        description: 'Operates according to the rules of logic or formal argument',
      };
      break;
    case 's9':
      return {
        card: CARD_NUMBER.NINE,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.LOW,
        title: 'Analytical',
        description: 'Examines things very carefully; breaks the whole into its parts',
      };
      break;
    case 's10':
      return {
        card: CARD_NUMBER.TEN,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.HIGH,
        title: 'Discerning',
        description: 'Having or showing good judgement',
      };
      break;
    case 'sj':
      return {
        card: CARD_NUMBER.JACK,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.HIGH,
        title: 'Philosophical',
        description: 'Detached and thoughtful in the face of a setback; approaches a tough situation in a level-headed way',
      };
      break;
    case 'sq':
      return {
        card: CARD_NUMBER.QUEEN,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.HIGH,
        title: 'Knowledgeable',
        description: 'Possessing or exhibiting knowledge, insight, or understanding',
      };
      break;
    case 'sk':
      return {
        card: CARD_NUMBER.KING,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.HIGH,
        title: 'Expert',
        description: 'Very knowledgeable about or skilful in a particular area',
      };
      break;
    case 'sa':
      return {
        card: CARD_NUMBER.ACE,
        suite: CARD_SUITE.SPADES,
        category: CARD_CATEGORY.HIGH,
        title: 'Intellectual',
        description: 'Showing high mental capacity; Guided by relying on intellect rather than emotions or feelings',
      };
      break;
  }
}