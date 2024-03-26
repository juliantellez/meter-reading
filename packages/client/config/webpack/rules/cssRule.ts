import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const sassCss: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: 'css-loader',
        },
        {
            loader: 'postcss-loader',
        },
        {
            loader: 'sass-loader',
        },
    ],
}

/**
 * Imports raw css, helpful when using 3rd party libraries such as prism
 * e.g:
 * import 'prismjs/themes/prism-tomorrow?raw';
 */
const rawCss: RuleSetRule = {
    test: /\.css$/,
    resourceQuery: /^\?raw$/,
    use: ['style-loader', 'css-loader'],
}

const cssRule: RuleSetRule = {
    oneOf: [rawCss, sassCss],
}

export default cssRule
