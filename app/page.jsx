"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Terminal, Copy } from "lucide-react"

export default function GitHubRepoDownloader() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    (<div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Github className="h-10 w-10" />
              <Terminal className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Download All GitHub Repositories</h1>
              <p className="text-xl text-muted-foreground mt-2">
                Use GitHub CLI to clone all your repositories with a single command
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="shadow-lg border-2">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <Terminal className="h-6 w-6" />
              GitHub CLI Method
            </CardTitle>
            <CardDescription className="text-lg">
              The fastest and most reliable way to download all your repositories
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Step 1: Installation */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center font-bold border">
                  1
                </div>
                <h3 className="text-xl font-semibold">Install GitHub CLI</h3>
              </div>

              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">Choose your operating system:</p>
                <div className="grid gap-3">
                  <div
                    className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Windows</Badge>
                      <code className="text-sm font-mono">winget install GitHub.cli</code>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("winget install GitHub.cli")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div
                    className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">macOS</Badge>
                      <code className="text-sm font-mono">brew install gh</code>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("brew install gh")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div
                    className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Linux</Badge>
                      <code className="text-sm font-mono">sudo apt install gh</code>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard("sudo apt install gh")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Step 2: Authentication */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center font-bold border">
                  2
                </div>
                <h3 className="text-xl font-semibold">Authenticate with GitHub</h3>
              </div>

              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">Login to access your private repositories:</p>
                <div
                  className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                  <code className="text-sm font-mono">gh auth login</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("gh auth login")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Step 3: Download All Repos */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center font-bold border">
                  3
                </div>
                <h3 className="text-xl font-semibold">Download All Your Repositories</h3>
              </div>

              <div className="ml-11 space-y-3">
                <p className="text-muted-foreground">
                  This command will clone all your public and private repositories:
                </p>
                <div
                  className="flex items-center justify-between bg-muted/50 p-4 rounded-lg border">
                  <code className="text-sm font-mono flex-1 pr-4">
                    gh repo list --limit 1000 --json name,sshUrl | jq -r '.[].sshUrl' | xargs -I {"{}"} git clone {"{}"}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        "gh repo list --limit 1000 --json name,sshUrl | jq -r '.[].sshUrl' | xargs -I {} git clone {}"
                      )
                    }
                    className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <div className="space-y-2">
            <p className="text-lg font-medium">Ready to download all your repositories?</p>
            <p className="text-muted-foreground">
              This method works for both public and private repositories, giving you complete access to your GitHub
              projects.
            </p>
          </div>
        </footer>
      </main>
    </div>)
  );
}
