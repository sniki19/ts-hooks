import { useMemo } from 'react'
import { type ClassRuleType } from './types'

export const getClassName = (classRules: ClassRuleType[]) => {
  return classRules
    .map(([className, rule]) => {
      if (!className) {
        return null
      }

      return rule === null || rule === undefined
        ? className
        : rule
          ? className
          : null
    })
    .filter(item => !!item)
    .join(' ')
}

export const useClassName = (classRules: ClassRuleType[]) => {
  return useMemo(() => getClassName(classRules), [classRules])
}