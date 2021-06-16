type Config = {
  a: string;
  b: number;
  c: boolean;
  d?: string;
  e: {
    f: number;
  };
  g?: {
    h: number;
  };
  i?: [string, number];
  j?: string[];
};

const config: Config = {
  a: "a",
  b: 2,
  c: false,
  e: {
    f: 3,
  },
  i: ["i", 4],
  j: ["k", "l"],
};

type Key = keyof Config;

// TODO Config caching or just read directly from env?

/**
 * Gets either the whole config, or a specific value if given key
 *
 * I don't really get how this typing works, but it does,
 * and I could not figure out a better way to properly implement this.
 */
export function get(): Config;
export function get(key: undefined): Config;
export function get<K extends Key>(key: K): Config[K];
export function get<K extends Key>(key?: K): Config[K] | Config {
  return key ? config[key] : config;
}
