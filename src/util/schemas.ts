import * as yup from 'yup';

const entrySchema = yup.object({
  id: yup.number().required(),
  time: yup.date().required(),
  from: yup.string(),
  to: yup.string(),
  content: yup.string(),
  rep: yup.object({
    type: yup.string
  })
});

const diarySchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  createdAt: yup.date().required(),
  entries: yup.array().of(entrySchema)
});

const diaryArraySchema = yup.array().of(diarySchema);

export const validateDiaries = async (object: any) => {
  return await diaryArraySchema.isValid(object);
};
