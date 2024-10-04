/// <reference path="../.astro/types.d.ts" />

//src/env.d.ts で ImportMetaEnv を以下のように設定することで、環境変数の自動補完が効くようになります。
interface ImportMetaEnv {
    readonly NEWT_SPACE_UID: string
    readonly NEWT_CDN_API_TOKEN: string
}
