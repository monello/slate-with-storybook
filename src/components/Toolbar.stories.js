// React
import { useMemo } from "react";

// Slate
import { withReact, Slate } from "slate-react";
import { createEditor } from "slate";

// Component
import Toolbar from "./Toolbar";

// Example Documents
import { BlankDocument } from '../utils/ExampleDocuments';

// MRL: Tell Storybook about the component we are documenting.
// MRL: component -- the component itself
// MRL: title -- how to refer to the component in the sidebar of the Storybook app
export default {
    component: Toolbar,
    title: 'Components/Toolbar'
}

// MRL: Stories are defined by functions that return a rendered component, given different props for each story (state)

// MRL: We create a "Template" function that we can re-use for each story.
// MRL: This helps us type less code as we don't need new functions for each story, we can re-use the Template function for each story by implementing the JS .bind() function to make copies if this Template Function
const Template = args => {
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate editor={editor} value={BlankDocument}>
            <Toolbar {...args} />
        </Slate>
    )
}

// MRL: STORY 1 - The Default Toolbar
// MRL: This is where we use .bind() to make a "new" function (copy of the Template function instance)
export const Default = Template.bind({})
