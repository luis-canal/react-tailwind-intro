export function Product({ title = "Não informado", price = "Consulte" }) {
    return (
        <div className="max-w-sm mx-auto rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-400/10 transition duration-300 hover:-translate-y-1 hover:shadow-sky-300/20 dark:border-slate-800 dark:bg-slate-950/90">
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Produto
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Disponível</span>
            </div>

            <h1 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{title}</h1>
            <p className="mt-3 text-3xl font-bold tracking-tight text-sky-600 dark:text-sky-400">{price}</p>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Um cartão limpo e elegante para destacar o nome e o valor do produto, pronto para usar em uma vitrine ou página de catálogo.
            </p>

            <button className="mt-6 w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-200 hover:bg-sky-500">
                Ver mais
            </button>
        </div>
    )
}