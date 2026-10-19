import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const scripts:Record<string,string>={reference:'voice-reference.py',render:'voice-kokoro.py','render-original':'voice-render.py',candidate:'voice-candidate.py'};
const command=process.argv[2], script=scripts[command];
if(!script)throw new Error('Use reference, render, render-original or candidate');
const base=command==='render'||command==='candidate'?join('.local','kokoro-venv'):join('.local','audio-preview','venv');
const python=process.env.HNL_VOICE_PYTHON ?? join(base,process.platform==='win32'?'Scripts':'bin',process.platform==='win32'?'python.exe':'python');
if(!existsSync(python))throw new Error('Local voice runtime is missing. See docs/VOICE_RUNBOOK.md.');
const result=spawnSync(python,['-B','-X','utf8',join('scripts',script),...process.argv.slice(3)],{stdio:'inherit',windowsHide:true});
if(result.error)throw result.error;
process.exitCode=result.status??1;
