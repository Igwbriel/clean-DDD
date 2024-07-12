import { expect, test } from "vitest";
import { Slug } from "./slug";

test('should be able to create a new slug from text', () => {
  const slug = Slug.createFromtext('exemple question title')

  expect(slug.value).toEqual('exemple-question-title')
})