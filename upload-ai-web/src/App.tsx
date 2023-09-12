import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💚 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline" color="">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1" >
            <Textarea
              placeholder="Inclua o prompt para a IA"
              className="resize-none p-4 leading-relaxed"
            />
            <Textarea
              placeholder="Resultado gerado pela IA..."
              className="resize-none p-4 leading-relaxed"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">Lembre-se: você pode utilizar a váriavel <code className="text-green-400">{`{transcription}`}</code> no seu prompt par adicionar o conteúdo da transcrição do video selecionado. </p>
        </div>

        <aside className="w-80 space-y-2">
          <form className="space-y-4">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10"
            >
              <FileVideo className="w-4 h-4" />
              Selecione um video
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription-prompt" className="">Prompt de transcrição</Label>
              <Textarea
                id="transcription-prompt"
                className="h-20 leading-relaxe resize-none"
                placeholder="Inclua palavras chaves mencionadas no video separadas por (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>
          <Separator />
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um promtp..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">
                    Título do youtube
                  </SelectItem>
                  <SelectItem value="description">
                    Descrição do youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">
                    GPT 3.5-turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">Você podera customizar essa opção em breve.</span>
            </div>

            <Separator />
            <div className="space-y-2">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tende a deixar o resultado mais criativos e com possíveis erros.</span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}
