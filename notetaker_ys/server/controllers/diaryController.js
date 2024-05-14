import { createDiaryEntry, getDiaryEntriesByUser } from '../models/diaryModel';

export const createEntry = async (req, res) => {
  const { text, createAt } = req.body;
  const userid = req.user.id;

  try {
    const entryId = await createDiaryEntry(text, createAt, userid);
    res.status(201).json({ id: entryId });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getEntries = async (req, res) => {
  const userid = req.user.id;

  try {
    const entries = await getDiaryEntriesByUser(userid);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
