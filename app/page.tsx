const sessions = [
  'Saturday',
  'Sunday',
  'Tuesday Acland',
  'Tuesday Fleet',
  'Tuesday UCL',
  'Wednesday Acland',
  'Wednesday Fleet',
  'Wednesday UCL'
];

const operationTasks = ['Venue readiness audit', 'Kit inventory sync', 'Transport rota approvals'];
const subgroupManagerTasks = ['Girls squad progression review', 'Boys communication digest', 'Youth parent onboarding'];
const coachTasks = ['Build weekly drills', 'Log player welfare notes', 'Review trialist clips'];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <header className="panel mb-8 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Matchmanager Logo</p>
        <h1 className="mt-3 text-4xl font-bold text-white">Matchmanager</h1>
        <p className="mt-2 text-slate-300">Owner dashboard • Premium sports-tech control center</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="panel p-5"><p className="text-sm text-cyan-200">Player numbers</p><p className="mt-3 text-3xl font-semibold">286</p><p className="text-xs text-emerald-300">+12 this month</p></div>
        <div className="panel p-5"><p className="text-sm text-cyan-200">Attendance snapshot</p><p className="mt-3 text-3xl font-semibold">91%</p><p className="text-xs text-emerald-300">On-time arrivals: 87%</p></div>
        <div className="panel p-5"><p className="text-sm text-cyan-200">Trialist sign ups</p><p className="mt-3 text-3xl font-semibold">44</p><p className="text-xs text-amber-300">Pending confirmation: 9</p></div>
        <div className="panel p-5"><p className="text-sm text-cyan-200">Trialist not signed up</p><p className="mt-3 text-3xl font-semibold">17</p><p className="text-xs text-slate-300">Top reason: timing conflict</p></div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <article className="panel p-6 xl:col-span-2">
          <h2 className="text-xl font-semibold">Finance overview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ['Total group', '£78,240', '+8.2%'],
              ['Girls subgroup', '£23,640', '+6.4%'],
              ['Boys subgroup', '£31,420', '+9.1%'],
              ['Youth subgroup', '£23,180', '+7.6%']
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-xl border border-cyan-200/20 bg-slate-950/40 p-4">
                <p className="text-sm text-slate-300">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                <p className="text-xs text-mint">{delta} vs last cycle</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel p-6">
          <h2 className="text-xl font-semibold">Trialist pipeline details</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-lg border border-emerald-300/20 bg-emerald-500/10 p-3">Signed up: 44 • Conversion 72% • Avg age 11.8</li>
            <li className="rounded-lg border border-amber-300/20 bg-amber-500/10 p-3">Not signed up: 17 • Follow-up due: 8 • Lost: 9</li>
            <li className="rounded-lg border border-cyan-300/20 bg-cyan-500/10 p-3">Most active channel: Parent referrals (38%)</li>
          </ul>
        </article>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        {[['Operation manager tasks', operationTasks], ['Sub group manager tasks', subgroupManagerTasks], ['Coach tasks', coachTasks]].map(([title, tasks]) => (
          <article key={title} className="panel p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {(tasks as string[]).map((task) => (
                <li key={task} className="rounded-lg bg-slate-800/60 px-3 py-2">{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-6 panel p-6">
        <h2 className="text-xl font-semibold">Session lanes</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sessions.map((session) => (
            <div key={session} className="rounded-xl border border-cyan-300/20 bg-slate-900/60 p-4 text-center text-sm font-medium text-cyan-100">
              {session}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
