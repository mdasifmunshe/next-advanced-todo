export default function Loading() {
    return (
        <div className="col-span-full flex flex-col rounded-lg border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4">
            <div className="px-4 py-4">
                <div className="pt-8">
                    <div className="flex animate-pulse space-x-4">
                        <div className="flex-1 space-y-6 py-1">
                            <div className="space-y-3">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-2 h-2 rounded bg-slate-700 py-3" />
                                </div>
                                <div className="h-2 rounded bg-slate-700" />
                                <div className="h-2 rounded bg-slate-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
