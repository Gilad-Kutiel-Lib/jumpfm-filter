import { JumpFm } from 'jumpfm-api'

export const load = (jumpFm: JumpFm) => {
    jumpFm.panels.forEach(panel => {
        panel.bind('showFilter', ['f'], () =>
            panel.filterBox.focus()
        )

        panel.bind('clearFilter', ['esc'], () => {
            panel.filterBox.set('')
            panel.filterRemove('filter')
        })

        panel.filterBox.bind('hideFilter', ['esc'], panel.filterBox.hide)

        panel.filterBox.onChange(pattern => {
            if (!pattern) {
                panel.filterRemove('filter')
                return
            }
            panel.filterSet('filter', item => item.name.indexOf(pattern) >= 0)
        })
    })
}