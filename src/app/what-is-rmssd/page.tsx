import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import PageContainer from '@/components/PageContainer';
import FormulaSteps from '@/components/WhatIsRmssd/FormulaSteps';
import InfoSection from '@/components/WhatIsRmssd/InfoSection';
import QuickFactCard from '@/components/WhatIsRmssd/QuickFactCard';
import ReferenceCard from '@/components/WhatIsRmssd/ReferenceCard';
import ResourceCard from '@/components/WhatIsRmssd/ResourceCard';

export const metadata: Metadata = {
  title: 'What Is RMSSD? Formula, Meaning, HRV & Measurement | RMSSD.com',
  description:
    'Learn what RMSSD means, how it is calculated from RR intervals, how it relates to HRV, and what research says about measuring RMSSD.',
  alternates: {
    canonical: 'https://rmssd.com/what-is-rmssd',
  },
};

const quickFacts = [
  {
    label: 'Full name of RMSSD',
    value: 'Root Mean Square of Successive Differences',
    illustration: '/rmssd-full-name.svg',
    illustrationAlt: 'Book representing the definition of RMSSD',
  },
  {
    label: 'Measurement',
    value: 'Milliseconds (ms)',
    illustration: '/rmssd-measurement.svg',
    illustrationAlt: 'Milliseconds measurement',
  },
  {
    label: 'Type',
    value: 'Time-domain HRV metric',
    illustration: '/rmssd-time-domain-hrv.svg',
    illustrationAlt: 'Time-domain heart rate variability wavefor',
  },
  {
    label: 'Calculated from',
    value: 'RR / NN intervals',
    illustration: '/rmssd-rr-nn-intervals.svg',
    illustrationAlt: 'Heartbeat intervals used to calculate RMSSD',
  },
];

const calculationSteps = [
  {
    title: 'Find successive differences',
    description: 'Compare each interval with the interval immediately before it.',
    illustration: '/rmssd-successive-differences.svg',
    illustrationAlt: 'RMSSD successive differences',
  },
  {
    title: 'Square and average',
    description: 'Square those differences and calculate their average.',
    illustration: '/rmssd-square-and-average.svg',
    illustrationAlt: 'RMSSD square and average',
  },
  {
    title: 'Take the square root',
    description: 'The resulting value is RMSSD, reported in milliseconds.',
    illustration: '/rmssd-square-root.svg',
    illustrationAlt: 'RMSSD square root',
  },
];

const hrvMetrics = [
  {
    term: 'HRV',
    meaning: 'Variation between successive heartbeats',
    category: 'Broad concept',
  },
  {
    term: 'RMSSD',
    meaning: 'Successive differences between RR/NN intervals',
    category: 'Time-domain',
  },
  {
    term: 'SDNN',
    meaning: 'Standard deviation of NN intervals',
    category: 'Time-domain',
  },
];

const interpretationCards = [
  {
    title: 'Higher RMSSD',
    description:
      'A higher value can be associated with greater short-term parasympathetic modulation, but the meaning depends on the person and measurement conditions.',
    illustration: '/rmssd-higher-value.svg',
    illustrationAlt: 'RMSSD higher value',
  },
  {
    title: 'Lower RMSSD',
    description:
      'A lower value can reflect a change in autonomic regulation, but a single low measurement does not by itself indicate a medical problem.',
    illustration: '/rmssd-lower-value.svg',
    illustrationAlt: 'RMSSD lower value',
  },
];

const resources = [
  {
    href: '/rr-intervals',
    category: 'Measurement',
    title: 'RR Intervals',
    description: 'Understand the raw beat-to-beat interval data used to calculate RMSSD.',
  },
  {
    href: '/ppg-vs-ecg',
    category: 'Research',
    title: 'PPG vs ECG',
    description: 'Explore research comparing optical PPG measurements with ECG-based cardiac interval measurements.',
  },
  {
    href: '/fraud',
    category: 'Transparency',
    title: 'HRV Fraud',
    description: 'Learn how proprietary wearable HRV scores differ from transparent beat-to-beat measurements.',
  },
  {
    href: '/compare',
    category: 'Devices',
    title: 'Device Database',
    description: 'Compare devices and see what type of heart-rate and interval data they provide.',
  },
  {
    href: '/0kb-test',
    category: 'Protocol',
    title: 'The 0KB Test',
    description: 'Explore the proposed protocol for evaluating whether devices provide transparent, usable RMSSD data.',
  },
  {
    href: '/live-rmssd',
    category: 'Live measurement',
    title: 'Live RMSSD',
    description: 'Learn how live beat-to-beat measurements can be used to calculate RMSSD in real time.',
  },
];

const references = [
  {
    category: 'Foundational standard',
    title: 'Heart Rate Variability: Standards of Measurement, Physiological Interpretation and Clinical Use',
    description:
      'Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology. European Heart Journal. 1996.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/8737210/',
    linkLabel: 'View on PubMed',
  },
  {
    category: 'Methodology',
    title: 'Heart Rate Variability and Cardiac Vagal Tone in Psychophysiological Research',
    description:
      'Laborde S, Mosley E, Thayer JF. Recommendations for experiment planning, data analysis, and data reporting. Frontiers in Psychology. 2017.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28265249/',
    linkLabel: 'View on PubMed',
  },
  {
    category: 'Measurement duration',
    title: 'Validity of (Ultra-)Short Recordings for Heart Rate Variability Measurements',
    description:
      'Munoz ML et al. PLOS ONE. 2015. The study compared RMSSD and other HRV measures across ultra-short recordings and longer reference recordings.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26414314/',
    linkLabel: 'View on PubMed',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://rmssd.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'What is RMSSD?',
      item: 'https://rmssd.com/what-is-rmssd',
    },
  ],
};

export default function WhatIsRmssdPage() {
  return (
    <PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-5 xl:px-0">
        <nav aria-label="Breadcrumb" className="pt-5 text-sm font-medium text-muted">
          <Link href="/" className="transition hover:text-blue">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">What is RMSSD?</span>
        </nav>

        <section className="pb-10 pt-8 md:pb-14 md:pt-12">
          <div className="max-w-5xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-blue">RMSSD Explained</p>
            <h1 className="text-4xl font-black tracking-[-1.5px] text-navy sm:text-5xl md:text-6xl">What is RMSSD?</h1>
            <p className="mt-5 text-lg leading-[1.6] text-muted md:text-xl">
              RMSSD is a time-domain measure of heart rate variability calculated from successive heartbeat intervals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#calculation"
                className="inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90"
              >
                See the formula
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#references"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-navy transition hover:border-blue hover:text-blue"
              >
                Research & references
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="quick-facts-heading" className="pb-12">
          <h2 id="quick-facts-heading" className="sr-only">
            RMSSD quick facts
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <QuickFactCard key={fact.label} {...fact} />
            ))}
          </div>
        </section>

        <InfoSection id="what-is-rmssd" eyebrow="The basics" title="What does RMSSD mean?">
          <p>
            RMSSD stands for <strong>Root Mean Square of Successive Differences</strong>. It is one of the time-domain measures used to
            quantify heart rate variability (HRV).
          </p>
          <p>
            Instead of looking only at how many times the heart beats per minute, RMSSD uses the differences between successive heartbeat
            intervals. The result is expressed in milliseconds.
          </p>
          <p>
            Because RMSSD is calculated from beat-to-beat interval data, understanding the underlying RR or NN intervals is essential to
            understanding the metric.
          </p>
          <Link href="/rr-intervals" className="inline-flex items-center gap-2 font-bold text-blue transition hover:underline">
            Learn about RR intervals
            <ArrowRight className="h-4 w-4" />
          </Link>
        </InfoSection>

        <section id="calculation" aria-labelledby="calculation-heading" className="py-12 md:py-16">
          <div className="rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6 md:p-10">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue">The formula</p>

              <h2 id="calculation-heading" className="mt-2 text-3xl font-black tracking-[-0.8px] text-navy md:text-4xl">
                How is RMSSD calculated?
              </h2>

              <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
                RMSSD is calculated from the differences between successive <strong>RR</strong> intervals, which represent the time between
                successive R-wave peaks in an ECG waveform, or <strong>NN</strong> intervals when referring specifically to normal-to-normal
                beats.
              </p>
            </div>

            <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="min-w-130 font-mono text-xl font-bold text-navy md:text-2xl">
                RMSSD = sqrt ( 1 / (N − 1) × Σ (RRᵢ₊₁ − RRᵢ)² )
              </div>
            </div>

            <FormulaSteps steps={calculationSteps} />
          </div>
        </section>

        <InfoSection id="rmssd-vs-hrv" eyebrow="RMSSD & HRV" title="Is RMSSD the same as HRV?">
          <p>
            <strong>HRV (heart rate variability)</strong> describes the variation in time between successive heartbeats.{' '}
            <strong>RMSSD</strong> is one specific metric used to quantify that variation.
          </p>

          <p>
            In other words, HRV is the broader concept, while RMSSD is a specific way of measuring beat-to-beat variation using successive
            RR or NN intervals.
          </p>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1fr_1.5fr] border-b border-slate-200 bg-[#f7f9fc] px-4 py-3 text-sm font-bold text-navy sm:grid-cols-[1fr_1.5fr_1fr]">
              <span>Term</span>
              <span>What it means</span>
              <span className="hidden sm:block">Category</span>
            </div>

            {hrvMetrics.map((metric, index) => (
              <div
                key={metric.term}
                className={`grid grid-cols-[1fr_1.5fr] px-4 py-4 text-sm sm:grid-cols-[1fr_1.5fr_1fr] ${
                  index !== hrvMetrics.length - 1 ? 'border-b border-slate-200' : ''
                }`}
              >
                <span className="font-bold text-navy">{metric.term}</span>
                <span className="text-slate-600">{metric.meaning}</span>
                <span className="hidden text-slate-600 sm:block">{metric.category}</span>
              </div>
            ))}
          </div>

          <p className="text-sm leading-6 text-slate-500">
            RMSSD is one of several HRV metrics. RMSSD.com focuses on RMSSD because it is the central measurement used throughout this
            database.
          </p>
        </InfoSection>

        <InfoSection id="rmssd-meaning" eyebrow="Understanding the metric" title="What does RMSSD tell you?">
          <p>
            RMSSD is commonly used to assess short-term changes in heart rate variability and is particularly associated with cardiac
            parasympathetic, or vagal, modulation.
          </p>

          <p>
            RMSSD can change from one measurement to another depending on factors such as physical activity, respiration, body position,
            stress, sleep, and measurement conditions.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {interpretationCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 bg-[#f7f9fc] px-5 pb-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue">{card.title}</p>
                  <Image src={card.illustration} alt={card.illustrationAlt} className="h-24 w-24" height={24} width={24} />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#d7e3f1] bg-[#eef5fc] p-5">
            <p className="font-bold text-navy">Context matters</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              RMSSD values vary between individuals. For meaningful comparisons, use consistent measurement conditions, the same measurement
              method, and look at changes over time rather than treating one number as a universal good or bad value.
            </p>
          </div>
        </InfoSection>

        <InfoSection id="measurement" eyebrow="Measurement" title="How is RMSSD measured?">
          <p>
            RMSSD is calculated from beat-to-beat interval data. The calculation requires a sequence of RR or NN intervals, measured in
            milliseconds.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white px-5 pb-5 shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-navy">ECG</h3>
                <Image src={'/rmssd-ecg-measurement.svg'} alt={'ECG'} className="h-24 w-24" height={24} width={24} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Electrocardiography records the heart&apos;s electrical activity and provides the R-wave timing used to determine cardiac
                intervals.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-5 pb-5 shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-navy">Wearable sensors</h3>
                <Image src={'/rmssd-wearable-sensors.svg'} alt={'Wearable sensors'} className="h-24 w-24" height={24} width={24} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Wearable devices can use different sensing technologies to estimate or measure beat-to-beat timing. The available data and
                processing methods vary between devices.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#d7e3f1] bg-[#eef5fc] p-5">
            <p className="font-bold text-navy">The important part is the interval data</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              RMSSD is calculated from successive cardiac intervals, not from average heart rate alone. How those intervals are captured,
              processed, and made available can differ between measurement technologies and devices.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/rr-intervals" className="inline-flex items-center gap-2 font-bold text-blue transition hover:underline">
              Explore RR intervals
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ppg-vs-ecg" className="inline-flex items-center gap-2 font-bold text-blue transition hover:underline">
              PPG vs ECG research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </InfoSection>

        <InfoSection id="measurement-duration" eyebrow="Measurement duration" title="How long should RMSSD be measured?">
          <p>
            The duration of an HRV recording can affect the resulting measurements. For standardized short-term HRV analysis,{' '}
            <strong>five-minute recordings</strong> have traditionally been used in research and clinical methodology.
          </p>

          <p>
            Researchers have also studied shorter recordings for RMSSD, including ultra-short measurements. These shorter measurements can
            be useful in specific situations, but their results should be interpreted according to the measurement protocol and conditions.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-blue">Standard short-term</p>
                  <p className="mt-1 text-2xl font-black text-navy">5 minutes</p>
                </div>
                <Image
                  src={'/rmssd-standard-short-term-5-minutes.svg'}
                  alt={'Standard short-term 5 minutes'}
                  className="h-24 w-24"
                  height={24}
                  width={24}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">A commonly used duration for standardized short-term HRV recordings.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-blue">Ultra-short</p>
                  <p className="mt-1 text-2xl font-black text-navy">Shorter recordings</p>
                </div>
                <Image
                  src={'/rmssd-ultra-short-recording.svg'}
                  alt={'Ultra-short Shorter recordings'}
                  className="h-24 w-24"
                  height={24}
                  width={24}
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                RMSSD has also been studied using shorter recordings under controlled conditions.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#d7e3f1] bg-[#eef5fc] p-5">
            <p className="font-bold text-navy">Consistency matters</p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              When comparing RMSSD measurements, keeping the recording duration, body position, measurement method, and other conditions
              consistent can make changes over time easier to interpret.
            </p>
          </div>
        </InfoSection>

        <InfoSection id="interpretation" eyebrow="Interpretation" title="How should RMSSD values be interpreted?">
          <p>
            RMSSD values can vary considerably between people and can also change within the same person from one measurement to another.
            There is no single RMSSD value that should be considered universally good or bad.
          </p>
          <p>
            The most useful interpretation often comes from comparing measurements collected under similar conditions and looking at changes
            over time. Factors such as sleep, physical activity, respiration, body position, stress, and measurement conditions can all
            influence HRV.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white px-5 pb-5 shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-navy">Compare consistently</h3>
                <Image src={'rmssd-compare-consistently.svg'} alt={'Compare consistently'} className="h-24 w-24" height={24} width={24} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use similar measurement duration, body position, device, and conditions when comparing measurements.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-5 pb-5 shadow-[0_1px_5px_rgba(15,23,42,0.04)]">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-navy">Look at the trend</h3>
                <Image src={'rmssd-look-at-the-trend.svg'} alt={'Look at the trend'} className="h-24 w-24" height={24} width={24} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A series of measurements can provide more context than a single RMSSD value.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-slate-900">Important</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              RMSSD is a physiological measurement, not a standalone diagnosis. Changes in RMSSD should be considered alongside the
              measurement conditions and the broader context in which the data was collected.
            </p>
          </div>
        </InfoSection>

        <section id="references" aria-labelledby="references-heading" className="border-t border-slate-200 py-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue">Sources</p>
          <h2 id="references-heading" className="mt-2 text-3xl font-black tracking-[-0.8px] text-navy md:text-4xl">
            References
          </h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-[1.7] text-slate-600">
            The following scientific publications provide background and methodological context for RMSSD and heart rate variability
            measurement.
          </p>
          <div className="mt-8 space-y-4">
            {references.map((reference) => (
              <ReferenceCard key={reference.url} {...reference} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            References are provided for educational and research purposes. Scientific claims and medical interpretations should be reviewed
            against the original publications and current evidence.
          </p>
        </section>

        <section aria-labelledby="resources-heading" className="border-t border-slate-200 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue">Continue learning</p>
              <h2 id="resources-heading" className="mt-2 text-3xl font-black tracking-[-0.8px] text-navy md:text-4xl">
                Articles & Resources
              </h2>
            </div>
            <p className="text-sm leading-6 text-slate-600">Explore the science, measurement methods, and data behind True RMSSD.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.href} {...resource} />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
