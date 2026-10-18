import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const scripts:Record<string,string>={reference:'voice-reference.py',render:'voice-render.py'};
const command=process.argv[2], script=scripts[command];
if(!script)throw new Error('Use reference or render');
const python=process.env.HNL_VOICE_PYTHON ?? join('.local','audio-preview','venv',process.platform==='win32'?'Scripts':'bin',process.platform==='win32'?'python.exe':'python');
if(!existsSync(python))throw new Error('Local voice runtime is missing. See docs/VOICE_RUNBOOK.md.');
const result=spawnSync(python,['-X','utf8',join('scripts',script),...process.argv.slice(3)],{stdio:'inherit',windowsHide:true});
if(result.error)throw result.error;
process.exitCode=result.status??1;
