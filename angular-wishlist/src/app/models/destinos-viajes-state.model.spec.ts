import {
    reducerDestinosViajes,
    DestinosViajesState,
    intializeDestinosViajesState,
    InitMyDataAction,
    NuevoDestinoAction
  } from './destinos-viajes-state.model';
  import { DestinoViaje } from './destino-viaje.model';
  
  describe('reducerDestinosViajes', () => {
    it('should reduce init data', () => {
      //setup donde se arman los objetos para testear
      const prevState: DestinosViajesState = intializeDestinosViajesState();
      const action: InitMyDataAction = new InitMyDataAction(['destino 1', 'destino 2']);

     // action
      const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
     // assert (verificaciones, validación de salidas)
      expect(newState.items.length).toEqual(2);
      expect(newState.items[0].nombre).toEqual('destino 1');

      //tear down en el caso de que sea necesario en otros casos, borra la acciones realizadas
    });
  
    it('should reduce new item added', () => {
      const prevState: DestinosViajesState = intializeDestinosViajesState();
      const action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('Cachi', 'url'));

      const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
 
      expect(newState.items.length).toEqual(1);
      expect(newState.items[0].nombre).toEqual('Cachi');
    });
  });