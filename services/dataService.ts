
import { CaseStudy } from '../types';
import { INITIAL_CASE_STUDIES } from '../constants';

const STORAGE_KEY = 'novexis_case_studies';

export const getCaseStudies = (): CaseStudy[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
    return INITIAL_CASE_STUDIES;
  }
  return JSON.parse(data);
};

export const getPublishedCaseStudies = (): CaseStudy[] => {
  return getCaseStudies().filter(cs => cs.published);
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return getCaseStudies().find(cs => cs.slug === slug);
};

export const saveCaseStudy = (caseStudy: CaseStudy) => {
  const studies = getCaseStudies();
  const index = studies.findIndex(cs => cs.id === caseStudy.id);
  if (index > -1) {
    studies[index] = caseStudy;
  } else {
    studies.push(caseStudy);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(studies));
};

export const deleteCaseStudy = (id: string) => {
  const studies = getCaseStudies();
  const filtered = studies.filter(cs => cs.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
