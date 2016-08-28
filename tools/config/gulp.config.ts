class Config {
  APP_SRC = './src';
  TEMPLATES_SRC = `${this.APP_SRC}/**/*.pug`;
  STYLES_SRC = `${this.APP_SRC}/**/*.styl`;
  SCRIPTS_SRC = [
    'typings/index.d.ts',
    `${this.APP_SRC}/**/*.ts`,
    `!${this.APP_SRC}/**/*.spec.ts`,
    `!${this.APP_SRC}/**/*.e2e-spec.ts`
  ];
  IMAGES_SRC = `${this.APP_SRC}/assets/images/**/*`;
  FONTS_SRC = `${this.APP_SRC}/assets/fonts/**/*`;

  APP_DEST = './public';
  IMAGES_DEST = `${this.APP_DEST}/assets/images`;
  FONTS_DEST = `${this.APP_DEST}/assets/fonts`;
  LIBS_DEST = `${this.APP_DEST}/lib`;
}

const config: Config = new Config();

export = config;