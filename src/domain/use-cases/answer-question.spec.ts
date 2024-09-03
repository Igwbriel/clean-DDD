import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepostiroy: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test('creat an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepostiroy)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta') 
})