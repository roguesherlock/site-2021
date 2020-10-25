const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  typography: (t) => {
    const theme = t();
    return {
      default: {
        css: [
          {
            color: theme.colors.primary,
            maxWidth: "65ch",
            '[class~="lead"]': {
              color: theme.colors.primary,
            },
            a: {
              display: "inline-flex",
              cursor: "pointer",
              fontWeight: 500,
              color: theme.colors.primary,
              borderBottomWidth: 2,
              lineHeight: 2,
              letterSpacing: "0.025em",
              textDecoration: "None",
              transitionDuration: "300ms",
              transitionDelay: "0s !important",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              "--transform-translate-x": 0,
              "--transform-translate-y": 0,
              "--transform-rotate": 0,
              "--transform-skew-x": 0,
              "--transform-skew-y": 0,
              "--transform-scale-x": 1,
              "--transform-scale-y": 1,
              transform:
                "translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))",
            },
            "a:hover": {
              backgroundColor: theme.colors.primary,
              color: theme.colors.secondary,
              "--transform-translate-y": "-0.50rem",
            },
            strong: {
              color: theme.colors.primary,
              fontWeight: "600",
            },
            img: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
              objectFit: "cover",
            },
            ol: {
              counterReset: "list-counter",
            },
            li: {
              listPosition: "inside",
            },
            "ol > li": {
              position: "relative",
              counterIncrement: "list-counter",
            },
            "ol > li::before": {
              content: 'counter(list-counter) "."',
              position: "absolute",
              fontWeight: "400",
              color: theme.colors.primary,
            },
            ul: { listStyle: "inside" },
            "ul > li": {
              display: "flex",
              flexDirection: "column",
            },
            "ul > li > a": { width: "fit-content" },
            "ul > li::before": {
              content: '""',
              display: "none",
              position: "absolute",
              backgroundColor: theme.colors.primary,
              borderRadius: "50%",
            },
            "ul > li > p:first-child": {
              fontWeight: 600,
            },
            hr: {
              borderColor: theme.colors.primary,
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: theme.colors.primary,
              borderLeftWidth: "0.25rem",
              borderLeftColor: theme.colors.primary,
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: theme.colors.primary,
              fontFamily: theme.fontFamily.display[0],
              fontWeight: "800",
            },
            h2: {
              color: theme.colors.primary,
              fontWeight: "700",
            },
            h3: {
              color: theme.colors.primary,
              fontWeight: "600",
            },
            h4: {
              color: theme.colors.primary,
              fontWeight: "600",
            },
            "figure figcaption": {
              color: theme.colors.primary,
            },
            code: {
              color: theme.colors.primary,
              fontWeight: "600",
            },
            "code::before": {
              content: '"`"',
            },
            "code::after": {
              content: '"`"',
            },
            pre: {
              color: theme.colors.secondary,
              backgroundColor: theme.colors.primary,
              overflowX: "auto",
            },
            "pre code": {
              color: theme.colors.secondary,
              backgroundColor: theme.colors.primary,
              borderWidth: "0",
              borderRadius: "0",
              padding: "0",
              fontWeight: "400",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit",
            },
            "pre code::before": {
              content: '""',
            },
            "pre code::after": {
              content: '""',
            },
            table: {
              width: "100%",
              tableLayout: "auto",
              textAlign: "left",
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
            },
            thead: {
              color: theme.colors.primary,
              fontWeight: "600",
              borderBottomWidth: "1px",
              borderBottomColor: theme.colors.primary,
            },
            "thead th": {
              verticalAlign: "bottom",
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: theme.colors.primary,
            },
            "tbody tr:last-child": {
              borderBottomWidth: "0",
            },
            "tbody td": {
              verticalAlign: "top",
            },
          },
        ],
      },
    };
  },
};
