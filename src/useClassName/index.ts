import { useMemo } from 'react'

type ClassRuleType = [className: string | undefined, rule?: boolean | null | undefined]

const getClassName = (classRules: ClassRuleType[]): string => {
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

export const useClassName = (classRules: ClassRuleType[]): string => {
  return useMemo(() => getClassName(classRules), [classRules])
}