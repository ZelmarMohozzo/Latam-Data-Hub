"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  phone: z.string().optional(),
  service: z.enum(
    [
      "Dashboards Interactivos",
      "Análisis Predictivo",
      "Consultoría Estratégica",
      "Análisis Financiero",
      "Integración de Datos",
      "Inteligencia Artificial",
      "Otro",
    ],
    {
      errorMap: () => ({ message: "Por favor, selecciona un servicio." }),
    },
  ),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    })
    .max(500, {
      message: "El mensaje no puede exceder los 500 caracteres.",
    }),
})

export function ContactForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(values)
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Empresa</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Teléfono</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+598 99 123 456"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Servicio de Interés</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Dashboards Interactivos">Dashboards Interactivos</SelectItem>
                  <SelectItem value="Análisis Predictivo">Análisis Predictivo</SelectItem>
                  <SelectItem value="Consultoría Estratégica">Consultoría Estratégica</SelectItem>
                  <SelectItem value="Análisis Financiero">Análisis Financiero</SelectItem>
                  <SelectItem value="Integración de Datos">Integración de Datos</SelectItem>
                  <SelectItem value="Inteligencia Artificial">Inteligencia Artificial</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-slate-700 mb-2">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto y necesidades..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20 transition-colors resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="btn-primary-modern w-full">
          Enviar Consulta
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </Form>
  )
}
