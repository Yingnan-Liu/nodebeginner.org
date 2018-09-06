import React from "react";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiGrid from "@material-ui/core/Grid";
import AddTaskControlContainer from "../container/AddTaskControlContainer";
import TaskListContainer from "../container/TaskListContainer";
import store from "../../redux-state/store";
import { fetchTasksThunk } from "../../redux-actions/thunks";

const TasksScreen = () => (
    <MuiCard>
        <MuiCardHeader title="Your tasks" />

        <MuiCardContent>

            <MuiGrid container direction="column">

                <MuiGrid item>
                    <AddTaskControlContainer/>
                </MuiGrid>

                <MuiGrid item>
                    <TaskListContainer/>
                </MuiGrid>

            </MuiGrid>

        </MuiCardContent>

    </MuiCard>
);

TasksScreen.ssrTrigger = () => { store.dispatch(fetchTasksThunk) };

export default TasksScreen;