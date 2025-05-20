import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Star,
} from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            John Doe
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-sm hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download CV</span>
          </Button>
        </div>
      </header>

      <main className="container py-8 space-y-20">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-10">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">John Doe</h1>
              <p className="text-xl text-muted-foreground">Senior Software Engineer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground">
              Passionate software engineer with 5+ years of experience building scalable web applications and leading
              development teams. Specialized in React, Node.js, and cloud architecture.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="mailto:john.doe@example.com">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image src="/placeholder.svg?height=280&width=280" alt="John Doe" fill className="object-cover" priority />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <div className="grid md:grid-cols-[1fr_250px] gap-8">
              <div className="space-y-4">
                <p>
                  I'm a Senior Software Engineer with a passion for creating elegant solutions to complex problems. With
                  over 5 years of experience in the tech industry, I've worked on a diverse range of projects from
                  high-traffic e-commerce platforms to innovative fintech applications.
                </p>
                <p>
                  My expertise lies in full-stack development with a focus on React, Node.js, and cloud architecture. I
                  enjoy optimizing application performance, implementing robust security measures, and mentoring junior
                  developers.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
                  or exploring the latest technologies in the software development landscape.
                </p>
              </div>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>San Francisco, CA (Open to Remote)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Available from June 2023</span>
                  </div>
                  <div className="pt-2">
                    <Button className="w-full">Download Full Resume</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        Jan 2021 - Present
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">TechCorp Inc., San Francisco</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Led the development of a microservices architecture that improved system reliability by 40%</li>
                    <li>Mentored a team of 5 junior developers, implementing code reviews and best practices</li>
                    <li>Optimized database queries resulting in a 60% reduction in page load times</li>
                    <li>Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 70%</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-8">
                <div className="absolute w-4 h-4 bg-primary/80 rounded-full -left-[9px] top-1"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        Mar 2019 - Dec 2020
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">InnovateSoft, New York</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Developed and maintained RESTful APIs for a fintech application with 100K+ users</li>
                    <li>Implemented authentication and authorization using OAuth 2.0 and JWT</li>
                    <li>Collaborated with UX designers to implement responsive UI components</li>
                    <li>Participated in agile development processes, including daily stand-ups and sprint planning</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">Jest</Badge>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                <div className="absolute w-4 h-4 bg-primary/60 rounded-full -left-[9px] top-1"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        Jun 2017 - Feb 2019
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">WebSolutions LLC, Boston</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Built responsive websites for small to medium-sized businesses</li>
                    <li>Implemented e-commerce functionality using Stripe and PayPal integrations</li>
                    <li>Optimized website performance and SEO for improved search engine rankings</li>
                    <li>Provided technical support and maintenance for existing client websites</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">WordPress</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <div className="space-y-8">
              {/* Education 1 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        2015 - 2017
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground font-medium">Massachusetts Institute of Technology</p>
                  </div>
                  <p>
                    Specialized in Artificial Intelligence and Machine Learning. Thesis: "Optimizing Neural Networks for
                    Edge Computing Devices"
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">GPA: 3.9/4.0</Badge>
                    <Badge variant="secondary">Dean's List</Badge>
                  </div>
                </div>
              </div>

              {/* Education 2 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                <div className="absolute w-4 h-4 bg-primary/80 rounded-full -left-[9px] top-1"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs font-normal">
                        2011 - 2015
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground font-medium">University of California, Berkeley</p>
                  </div>
                  <p>Focused on software development and computer architecture. Minor in Mathematics.</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">GPA: 3.8/4.0</Badge>
                    <Badge variant="secondary">Cum Laude</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Programming Languages
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">JavaScript/TypeScript</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Python</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Java</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">C++</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Go</span>
                        <span className="text-muted-foreground">Basic</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Frameworks & Libraries
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">React/Next.js</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Node.js/Express</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Django</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Vue.js</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Angular</span>
                        <span className="text-muted-foreground">Basic</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Databases & Cloud
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">MongoDB</span>
                        <span className="text-muted-foreground">Expert</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">PostgreSQL</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">AWS</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Docker/Kubernetes</span>
                        <span className="text-muted-foreground">Advanced</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Firebase</span>
                        <span className="text-muted-foreground">Intermediate</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Other Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Development</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>RESTful APIs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>GraphQL</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Microservices</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>CI/CD</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>TDD</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Soft Skills</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Team Leadership</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Mentoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Problem Solving</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>Agile/Scrum</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="E-commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    A full-stack e-commerce platform with product management, cart functionality, and payment processing
                    using Stripe.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href="https://github.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="https://example.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Task Management App"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    A collaborative task management application with real-time updates, drag-and-drop functionality, and
                    team collaboration features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Socket.io</Badge>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href="https://github.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="https://example.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="AI Content Generator"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">AI Content Generator</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    An AI-powered content generation tool that creates blog posts, social media content, and marketing
                    copy based on user prompts.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">OpenAI API</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href="https://github.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href="https://example.com" target="_blank">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight">Contact Me</h2>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Get In Touch</h3>
                    <p className="text-muted-foreground">
                      I'm currently open to new opportunities and would love to hear from you. Whether you have a
                      question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <Link href="mailto:john.doe@example.com" className="hover:text-primary transition-colors">
                          john.doe@example.com
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-muted-foreground" />
                        <Link
                          href="https://linkedin.com"
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          linkedin.com/in/johndoe
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <Link
                          href="https://github.com"
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          github.com/johndoe
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-muted-foreground" />
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          @johndoe
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button size="lg" className="gap-2">
                      <Mail className="h-5 w-5" />
                      Send me an email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:john.doe@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
