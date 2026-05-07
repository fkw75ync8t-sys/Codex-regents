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

type TeamRecord = {
  team: string;
  coach: string;
  players: number;
  target: number;
  growth: number;
};

const boysTeams: TeamRecord[] = [
  { team: 'U5-U6 Toddlers', coach: 'Keeley', players: 18, target: 16, growth: 4 },
  { team: 'U7 Toddlers', coach: 'John', players: 15, target: 16, growth: 2 },
  { team: 'U8 Rebels', coach: 'James N', players: 17, target: 16, growth: 3 },
  { team: 'U8 Spartans', coach: 'James N', players: 14, target: 16, growth: 1 },
  { team: 'U9 Rebels', coach: 'James K', players: 19, target: 18, growth: 5 },
  { team: 'U9 Spartans', coach: 'TBC', players: 12, target: 18, growth: -2 },
  { team: 'U10 Rebels', coach: 'Rhonan', players: 20, target: 18, growth: 6 },
  { team: 'U10 Spartans', coach: 'Ben', players: 16, target: 18, growth: 2 },
  { team: 'U10 Spartan Red', coach: 'Luiz', players: 13, target: 16, growth: -1 },
  { team: 'U11 Rebels', coach: 'Shay', players: 18, target: 18, growth: 3 },
  { team: 'U11 Spartans', coach: 'Paris', players: 15, target: 18, growth: 1 },
  { team: 'U9-U11 Midweek', coach: 'Shared staff', players: 22, target: 20, growth: 7 }
];

const totalPlayers = boysTeams.reduce((sum, team) => sum + team.players, 0);
const aboveTarget = boysTeams.filter((team) => team.players > team.target);
const belowTarget = boysTeams.filter((team) => team.players < team.target);
const biggestGrowthTeam = boysTeams.reduce((top, team) => (team.growth > top.growth ? team : top), boysTeams[0]);
const redFlagTeams = boysTeams.filter((team) => team.players - team.target <= -3);

const statusBadge = (gap: number) => {
  if (gap >= 2) return 'Ahead';
  if (gap >= 0) return 'On target';
  if (gap <= -3) return 'Red flag';
  return 'Watch';
};

const statusClasses = (status: string) => {
  if (status === 'Ahead') return 'border-emerald-300/30 bg-emerald-500/15 text-emerald-200';
  if (status === 'On target') return 'border-cyan-300/30 bg-cyan-500/15 text-cyan-100';
  if (status === 'Red flag') return 'border-rose-300/30 bg-rose-500/15 text-rose-100';
  return 'border-amber-300/30 bg-amber-500/15 text-amber-100';
};

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
      <header className="panel mb-8 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Matchmanager Logo</p>
        <h1 className="mt-3 text-4xl font-bold text-white">Matchmanager</h1>
        <p className="mt-2 text-slate-300">Owner dashboard • Premium sports-tech control center</p>
      </header>

      <section className="panel p-6">
        <h2 className="text-2xl font-semibold text-white">Boys U6-U11 Numbers Dashboard</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-cyan-200">
                <th className="px-3 py-3 font-medium">Team</th>
                <th className="px-3 py-3 font-medium">Coach</th>
                <th className="px-3 py-3 font-medium">Player Numbers</th>
                <th className="px-3 py-3 font-medium">Target</th>
                <th className="px-3 py-3 font-medium">Gap</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {boysTeams.map((team) => {
                const gap = team.players - team.target;
                const status = statusBadge(gap);
                return (
                  <tr key={team.team} className="border-b border-slate-800/80 text-slate-100">
                    <td className="px-3 py-3 font-medium">{team.team}</td>
                    <td className="px-3 py-3 text-slate-300">{team.coach}</td>
                    <td className="px-3 py-3">{team.players}</td>
                    <td className="px-3 py-3">{team.target}</td>
                    <td className={`px-3 py-3 font-semibold ${gap < 0 ? 'text-rose-200' : 'text-emerald-200'}`}>
                      {gap > 0 ? `+${gap}` : gap}
                    </td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses(status)}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-xl border border-cyan-200/20 bg-slate-950/40 p-4">
            <p className="text-sm text-cyan-200">Total Boys U6-U11 numbers</p>
            <p className="mt-2 text-2xl font-semibold text-white">{totalPlayers}</p>
          </div>
          <div className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-4">
            <p className="text-sm text-emerald-200">Teams above target</p>
            <p className="mt-2 text-2xl font-semibold text-white">{aboveTarget.length}</p>
          </div>
          <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 p-4">
            <p className="text-sm text-amber-200">Teams below target</p>
            <p className="mt-2 text-2xl font-semibold text-white">{belowTarget.length}</p>
          </div>
          <div className="rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-4">
            <p className="text-sm text-cyan-100">Biggest growth team</p>
            <p className="mt-2 text-lg font-semibold text-white">{biggestGrowthTeam.team}</p>
            <p className="text-xs text-cyan-200">+{biggestGrowthTeam.growth} vs last month</p>
          </div>
          <div className="rounded-xl border border-rose-300/20 bg-rose-500/10 p-4">
            <p className="text-sm text-rose-100">Red flag teams</p>
            <p className="mt-2 text-lg font-semibold text-white">{redFlagTeams.length ? redFlagTeams.map((team) => team.team).join(', ') : 'None'}</p>
          </div>
        </div>
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
