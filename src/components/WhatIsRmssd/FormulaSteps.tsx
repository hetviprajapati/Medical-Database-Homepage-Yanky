import Image from 'next/image';

type FormulaStep = {
  title: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
};

type FormulaStepsProps = {
  steps: FormulaStep[];
};

export default function FormulaSteps({ steps }: FormulaStepsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step) => (
        <div key={step.title} className="rounded-xl bg-white p-5 flex flex-col items-center text-center">
          <Image src={step.illustration} alt={step.illustrationAlt} className="h-24 w-24" height={24} width={24} />
          <h3 className="text-lg font-bold text-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
