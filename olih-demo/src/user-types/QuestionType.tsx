import React from "react";

export type QuestionType = {
  id: React.Key;
  friendlyId?: string;
  status?: string;
  associate?: string;
  questionsNum?: number;
  type?: string;
  fraction?: number;
  scoringMethod?: string;
  lastModified?: string;
  created?: string;
};
