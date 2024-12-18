import type { UserConfigExport } from "@tarojs/cli";
export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {
    output: {
      environment: {
        asyncFunction: true,
      },
    },
  },
} satisfies UserConfigExport<"webpack5">;
