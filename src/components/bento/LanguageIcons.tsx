import { type IconType } from 'react-icons/lib'
import {
  SiAstro,
  SiC,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiSvelte,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLatex,
  SiMarkdown,
  SiMdx,
  SiPython,
  SiTypescript,
  SiYaml,
  SiJupyter,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
} from 'react-icons/si'

export const languageIcons: { [key: string]: IconType } = {
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  react: SiReact,
  svelte: SiSvelte,
  nodejs: SiNodedotjs,
  c: SiC,
  'c++': SiCplusplus,
  markdown: SiMarkdown,
  mdx: SiMdx,
  json: SiJson,
  yaml: SiYaml,
  tex: SiLatex,
  figma: SiFigma,
  git: SiGit,
  docker: SiDocker,
  'jupyter notebook': SiJupyter,
}

export const getLanguageIcon = (language: string): React.ReactNode | null => {
  const Icon = languageIcons[language]
  return Icon ? <Icon /> : null
}

export default function LanguageIcons() {
  const mainLanguages = [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
    { name: 'Svelte', icon: SiSvelte, color: '#FF3E00' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ]

  return (
    <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6">
      {mainLanguages.map((lang) => {
        const Icon = lang.icon
        return (
          <div
            key={lang.name}
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
          >
            <div
              className="flex size-12 items-center justify-center rounded-lg border-2 border-border/50 bg-muted/30 transition-all group-hover:border-primary/50 group-hover:bg-primary/10"
            >
              <Icon className="size-6 transition-colors" style={{ color: lang.color }} />
            </div>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {lang.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
