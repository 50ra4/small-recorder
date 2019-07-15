import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { EPath } from '../types/index';
import SampleAtomsPage from '../containers/SampleAtomsPage/SampleAtomsPage';
import SampleMoleculesPage from '../containers/SampleMoleculesPage/SampleMoleculesPage';
import SampleOrganismsPage from '../containers/SampleOrganismsPage/SampleOrganismsPage';
import SampleDraggablePage from '../containers/SampleDraggablePage/SampleDraggablePage';

class SampleRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path={EPath.SampleAtoms} component={SampleAtomsPage} />
        <Route exact={true} path={EPath.SampleMolecules} component={SampleMoleculesPage} />
        <Route exact={true} path={EPath.SampleOrganisms} component={SampleOrganismsPage} />
        <Route exact={true} path={EPath.SampleDraggable} component={SampleDraggablePage} />
        <Redirect from={EPath.Sample} to={EPath.SampleAtoms} />
      </Switch>
    );
  }
}

export default SampleRouter;
