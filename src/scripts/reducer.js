export default function reducer(state, action) {
    switch (action.type) {
        case "SWITCH_SECTION": {
            const newSection = action.payload

            state.section = newSection

            return {
                section: newSection
            }
        }

        default: {
            return state
        }
    }

}