# Typescript mpv script template

Template to write mpv scripts with typescript.

## Setup

1. Clone the repo into a directory with your new script name
  - `git clone git@github.com:jonniek/mpv-typescript-template.git my-script`
  - `git clone https://github.com/jonniek/mpv-typescript-template.git my-script`
  - Alternatively you can click "Use this template" button in Github
2. Install dependencies `npm install`
3. Build script file `npm run build`
4. Add the output JS file to mpv as a script
5. Observe hello world on `mpv --idle`

I was planning on making types for the mpv interface but that already existed in definitely typed. So creating this template if it helps someone get started since the TS config and bundling is kind of tricky.

I haven't tried this on anything non-trivial so there might be something missing, let me know if you bump into something.

If you want to distribute the built bundle in your repository, I would suggest setting up some git hooks to build and add the bundle into commits.

The bundle name is `dir.js` where dir is the name of your project directory. See rollup config to modify this.
