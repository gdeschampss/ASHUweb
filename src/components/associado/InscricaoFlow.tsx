"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  PenLine,
  FolderCheck,
  MessageCircle,
  IdCard,
  CheckCircle2,
  AlertTriangle,
  Check,
  Wallet,
} from "lucide-react";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { CONTATO, whatsappLink } from "@/config/contato";

const CAMPOS_OBRIGATORIOS = [
  "Nome, data de nascimento, CPF e RG",
  "Endereço completo com CEP",
  "E-mail e telefone",
  "Setor, ramal, cargo e SIAPE (se servidor)",
  "Salário base",
  "Dependentes: nome, grau, nascimento e sexo",
  "Banco para débito: BB ( ) ou CAIXA ( ), conta e agência",
  "Data e assinatura",
];

const DOCUMENTOS = [
  { id: "cadastro", label: "Cadastro totalmente preenchido e assinado" },
  { id: "contracheque", label: "Contracheque atualizado" },
  { id: "pessoal", label: "Documento pessoal (RG ou CNH, com CPF)" },
  {
    id: "dependentes",
    label: "Documentos dos dependentes (pais, filhos e cônjuge), com comprovação do vínculo",
    hint: "Ex.: certidão de nascimento ou de casamento. Se não tiver dependentes, marque mesmo assim.",
  },
];

const MENSAGEM_WHATSAPP =
  "Olá! Quero me associar à ASHU. Vou enviar aqui meu cadastro preenchido e assinado, o contracheque atualizado e os documentos pessoais e dos dependentes.";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function StepHeader({
  n,
  icon: Icon,
  title,
  done,
}: {
  n: number;
  icon: React.ElementType;
  title: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-sm transition-colors ${
          done ? "bg-ashu-green text-white" : "bg-ashu-red text-white"
        }`}
        aria-hidden
      >
        {done ? <Check className="w-5 h-5" /> : n}
      </div>
      <div className="flex items-center gap-2 min-w-0">
        <Icon className="w-5 h-5 text-ashu-green shrink-0" aria-hidden />
        <h3 className="text-lg font-bold text-ink font-serif leading-tight">{title}</h3>
      </div>
    </div>
  );
}

function WhatsappNumber({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappLink(MENSAGEM_WHATSAPP)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-black text-ashu-green tabular-nums hover:underline ${className}`}
    >
      <MessageCircle className="w-5 h-5" aria-hidden />
      {CONTATO.whatsappDisplay}
    </a>
  );
}

export const InscricaoFlow: React.FC = () => {
  const [baixou, setBaixou] = useState(false);
  const [marcados, setMarcados] = useState<Record<string, boolean>>({});

  const tudoPronto = DOCUMENTOS.every((d) => marcados[d.id]);

  return (
    <ol className="space-y-6 max-w-3xl mx-auto text-left">
      {/* 1. Baixar */}
      <li className="bg-white p-6 sm:p-8 rounded-[24px] border border-ashu-green/20 shadow-md">
        <StepHeader n={1} icon={FileText} title="Baixe a ficha de cadastro" done={baixou} />
        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          É a ficha oficial da ASHU (Contrato de Cadastro Associativo). Abre no Word, no Google Docs ou direto no
          celular. Se preferir, imprima e preencha à mão.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-ashu-cream rounded-2xl border-2 border-dashed border-ashu-green/40">
          <div>
            <p className="font-bold text-sm text-ashu-green break-all">Cadastro_socio_2026.docx</p>
            <p className="text-xs text-gray-500">Documento Word · ficha oficial</p>
          </div>
          <DownloadButton
            label="Baixar ficha"
            href={CONTATO.fichaCadastro}
            fileName="Cadastro_socio_ASHU_2026.docx"
            variant="red"
            className="shrink-0"
            onDownload={() => setBaixou(true)}
          />
        </div>

        <AnimatePresence>
          {baixou && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <div
                role="status"
                className="mt-4 p-4 sm:p-5 bg-ashu-green-light rounded-2xl border border-ashu-green/30 space-y-2"
              >
                <p className="text-sm font-bold text-ashu-green-dark flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-ashu-green shrink-0" aria-hidden />
                  Ficha baixada! Depois de preencher e assinar, envie para a ASHU pelo WhatsApp:
                </p>
                <WhatsappNumber className="text-2xl" />
                <p className="text-xs text-gray-700">
                  Pagamento e débito automático são combinados por lá. Siga os passos abaixo.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      {/* 2. Preencher e assinar */}
      <li className="bg-white p-6 sm:p-8 rounded-[24px] border border-ashu-green/20 shadow-md">
        <StepHeader n={2} icon={PenLine} title="Preencha tudo e assine" />
        <div className="flex items-start gap-3 p-4 mb-5 bg-ashu-red/5 border border-ashu-red/30 rounded-2xl">
          <AlertTriangle className="w-5 h-5 text-ashu-red shrink-0 mt-0.5" aria-hidden />
          <p className="text-sm text-ink leading-relaxed">
            <strong>A ficha precisa estar totalmente preenchida e assinada.</strong> Cadastros incompletos ou sem
            assinatura não são aceitos e atrasam sua associação.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {CAMPOS_OBRIGATORIOS.map((campo) => (
            <li key={campo} className="flex items-start gap-2 text-xs text-ink">
              <CheckCircle2 className="w-4 h-4 text-ashu-green shrink-0 mt-px" aria-hidden />
              <span>{campo}</span>
            </li>
          ))}
        </ul>
      </li>

      {/* 3 + 4. Documentos e envio */}
      <li className="bg-white p-6 sm:p-8 rounded-[24px] border-2 border-ashu-green shadow-lg">
        <StepHeader n={3} icon={FolderCheck} title="Separe os documentos e envie" done={tudoPronto} />
        <p className="text-sm text-gray-700 mb-4">
          Confira se você tem tudo antes de enviar. Marque cada item:
        </p>

        <fieldset className="space-y-2.5 mb-6">
          <legend className="sr-only">Documentos necessários</legend>
          {DOCUMENTOS.map((doc) => {
            const checked = !!marcados[doc.id];
            return (
              <label
                key={doc.id}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                  checked
                    ? "bg-ashu-green-light border-ashu-green/40"
                    : "bg-ashu-cream border-ashu-green/15 hover:border-ashu-green/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setMarcados((m) => ({ ...m, [doc.id]: e.target.checked }))}
                  className="mt-0.5 w-4 h-4 accent-ashu-green shrink-0"
                />
                <span className="text-sm text-ink">
                  <span className="font-semibold">{doc.label}</span>
                  {doc.hint && <span className="block text-xs text-gray-600 mt-0.5">{doc.hint}</span>}
                </span>
              </label>
            );
          })}
        </fieldset>

        <div className="p-5 sm:p-6 bg-ashu-cream rounded-2xl border border-ashu-green/20 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ashu-green mb-1">
              WhatsApp da ASHU
            </p>
            <WhatsappNumber className="text-2xl sm:text-3xl" />
          </div>

          <a
            href={tudoPronto ? whatsappLink(MENSAGEM_WHATSAPP) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!tudoPronto}
            onClick={(e) => {
              if (!tudoPronto) e.preventDefault();
            }}
            className={`w-full min-h-[48px] px-6 py-3.5 text-sm font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all ${
              tudoPronto
                ? "bg-ashu-green hover:bg-ashu-green-dark text-white shadow-md hover:-translate-y-0.5"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>Enviar pelo WhatsApp</span>
          </a>
          {!tudoPronto && (
            <p className="text-xs text-gray-600 text-center">
              Marque todos os documentos acima para liberar o envio.
            </p>
          )}

          <p className="text-xs text-gray-700 leading-relaxed">
            No WhatsApp, toque no clipe 📎 e anexe a ficha e as fotos ou PDFs dos documentos. Se preferir, entregue
            tudo presencialmente na sede da ASHU.
          </p>
        </div>
      </li>

      {/* 4. Pagamento */}
      <li className="bg-white p-6 sm:p-8 rounded-[24px] border border-ashu-green/20 shadow-md">
        <StepHeader n={4} icon={Wallet} title="Pagamento, combinado pelo WhatsApp" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Depois de receber seus documentos, a ASHU passa as instruções pelo WhatsApp. A{" "}
          <strong>1ª contribuição é paga via PIX</strong> e, em seguida, você cadastra o{" "}
          <strong>débito automático</strong> no Banco do Brasil ou na Caixa Econômica Federal.
        </p>
      </li>

      {/* 5. Carteirinha */}
      <li className="bg-white p-6 sm:p-8 rounded-[24px] border border-ashu-green/20 shadow-md">
        <StepHeader n={5} icon={IdCard} title="Retire sua carteirinha" />
        <p className="text-sm text-gray-700 leading-relaxed">
          Com tudo confirmado, é só agendar pelo WhatsApp a retirada da carteirinha e começar a aproveitar os
          benefícios da associação.
        </p>
      </li>
    </ol>
  );
};
