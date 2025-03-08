export interface TestimonialProps{
    name : string,
    review : string,
    stars : number,
    image : string,
}

export type Step = {
    id: number;
    title: string;
    description: string;
};

export type FAQItem = {
    question: string;
    answer: string;
  };