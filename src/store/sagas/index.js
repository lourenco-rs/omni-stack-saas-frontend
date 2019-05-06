import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { signIn, signOut } from './auth';

import { TeamsTypes } from '../ducks/teams';
import { getTeams, createTeam } from './teams';

import { ProjectsTypes } from '../ducks/projects';
import { getProjects, createProject } from './projects';

import { MembersTypes } from '../ducks/members';
import { getMembers, updateMember } from './members';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),

    takeLatest(TeamsTypes.SELECT_TEAM, getProjects),
    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),

    takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers),
    takeLatest(MembersTypes.UPDATE_MEMBER_REQUEST, updateMember),
  ]);
}

/*
takeLatest - última action enviada
*/
