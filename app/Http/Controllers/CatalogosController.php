<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;
use App\Models\Cotizacion;
use App\Models\CatCliente;
use App\Models\CatDepartamento;
use App\Models\CatEmpresa;
use App\Models\CatEstatu;
use App\Models\CatProvedor;
use App\Models\CatUnidadMedida;
use App\Models\CatTipoServicio;
use App\Models\User;
use App\Models\CatMoneda;
use App\Models\CatPrioridad;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\CatRoles;

class CatalogosController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Catalogos/Index');
    }

    public function listaProvedores()
    {
        $data = CatProvedor::all();
        return response()->json($data);
    }

    public function deleteProvedor($id)
    {


        try {
            $data = CatProvedor::find($id);


            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'eliminacion_provedor' => $data->nombre
                ])
                ->log('El usuario eliminó un provedor');


            // dd($data);
            if (!$data) {
                return response()->json(['error' => 'Proveedor no encontrado'], 404);
            }
            // Eliminar el proveedor
            $data->delete();
            return response()->json(['success' => 'Proveedor eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'No se pudo eliminar... Intenta mas tarde'
            ], 404);
        }
    }

    public function detalleProvedor($id)
    {
        $data = CatProvedor::find($id);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_proveedor' => $data ? $data->nombre : null,
                'proveedor_id' => $id
            ])
            ->log('El usuario consultó el detalle de un proveedor');



        if (!$data) {
            return response()->json(['error' => 'Proveedor no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    public function registrarProvedor(Request $request)
    {
        // Validación de los datos del formulario

        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'nullable|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|string|min:8',
            'colonia' => 'nullable|string|max:255',
        ]);

        $proveedor = CatProvedor::create($validatedData);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_provedor' => $proveedor->nombre
            ])
            ->log('El usuario registró un provedor');

        return response()->json(['success' => 'Proveedor creado exitosamente', 'data' => $proveedor], 201);
    }

    public function actualizaProvedor(Request $request)
    {
        // Validación de los datos del formulario

        $validatedData = $request->validate([
            'id' => 'required',
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'nullable|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|string|min:8',
            'colonia' => 'nullable|string|max:255',
        ]);
        // Crear el nuevo proveedor con los datos validados
        $proveedor = CatProvedor::find($request->id);
        $proveedor->nombre = $request->nombre;
        $proveedor->abreviacion = $request->abreviacion;
        $proveedor->direccion = $request->direccion;
        $proveedor->telefono = $request->telefono;
        $proveedor->colonia = $request->colonia;
        $proveedor->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'actualizacion_provedor' => $proveedor->nombre
            ])
            ->log('El usuario actualizó un provedor');
        return response()->json(['success' => 'Actualizado correctamente', $proveedor], 201);
    }

    //Departamentos
    public function listaDepartamentos()
    {
        $data = CatDepartamento::all();
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'lista_departamentos' => $data->count()
            ])
            ->log('El usuario consultó la lista de departamentos');
        return response()->json($data);
    }

    public function detalleDepartamento($id)
    {
        //Recuerda el id esta mal en el model se maneja como id__departamento
        $data = CatDepartamento::where('id', $id)->first();

        if (!$data) {
            return response()->json(['error' => 'Departamento no encontrado'], 404);
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_departamento' => $data->nombre
            ])
            ->log('El usuario consultó el detalle de un departamento');
        return response()->json($data, 200);
    }


    public function actualizaDepartamento(Request $request)
    {
        // dd($request->all());
        // Validación de los datos del formulario
        $validatedData = $request->validate([
            'id' => 'required',
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string|max:100',

        ]);

        // dd($departamento);
        $departamento = CatDepartamento::where('id', $request->id)->first();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'actualizacion_departamento' => $departamento->nombre
            ])
            ->log('El usuario actualizó un departamento');

        // Validar si el departamento existe
        if (!$departamento) {
            return response()->json(['error' => 'Departamento no encontrado'], 404);
        }
        // Crear el nuevo proveedor con los datos validados
        $departamento->nombre = $request->nombre;
        $departamento->descripcion = $request->descripcion;
        $departamento->save();


        return response()->json(['success' => 'Actualizado correctamente', $departamento], 201);
    }

    public function registrarDepartamento(Request $request)
    {
            // Validación de los datos del formulario
        ;
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string|max:100',
        ]);

        $proveedor = CatDepartamento::create($validatedData);

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_departamento' => $proveedor->nombre
            ])
            ->log('El usuario registró un departamento');

        return response()->json(['success' => 'Proveedor creado exitosamente', 'data' => $proveedor], 201);
    }

    public function deleteDepartamento($id = null)
    {
        // dd($id);
        try {
            $data = CatDepartamento::find($id);
            // dd($data);
            if (!$data) {
                return response()->json(['error' => 'Departamento no encontrado'], 404);
            }
            // Eliminar el proveedor
            $data->delete();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'eliminacion_departamento' => $data->nombre
                ])
                ->log('El usuario eliminó un departamento');

            return response()->json(['success' => 'Departamento eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'No se pudo eliminar... Intenta mas tarde'
            ], 404);
        }
    }


    // Clientes
    public function listaClientes()
    {

        $empresaId = Auth::user()->empresa_id;

        $data = CatCliente::with('empresa')
            ->where('empresa_id', $empresaId)
            ->get();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'lista_clientes' => $data->count()
            ])
            ->log('El usuario consultó la lista de clientes');

        return response()->json($data);
    }

    public function detalleCliente($id =  null)
    {
        //Recuerda el id esta mal en el model se maneja como id__departamento
        $data = CatCliente::where('id', $id)->first();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_cliente' => $data->nombre
            ])
            ->log('El usuario consultó el detalle de un cliente');

        //  $data = $id;
        if (!$data) {
            return response()->json(['error' => 'Cliente no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    public function actualizaCliente(Request $request)
    {

        try {

            $validatedData = $request->validate([
                'id' => 'required',
                'nombre' => 'required|string|max:255',
                'abreviacion' => 'nullable|string|max:100',
                'direccion' => 'nullable|string|max:255',
                'telefono' => 'nullable|numeric|digits:10',
                'colonia' => 'nullable|string|max:255',
            ]);
            // dd($departamento);
            $cliente = CatCliente::where('id', $request->id)->first();
            // Validar si el departamento existe
            if (!$cliente) {
                return response()->json(['error' => 'Cliente no encontrado'], 404);
            }
            // Crear el nuevo proveedor con los datos validados
            $cliente->nombre = $request->nombre;
            $cliente->abreviacion = $request->abreviacion;
            $cliente->ap_materno = $request->ap_materno;
            $cliente->direccion = $request->direccion;
            $cliente->telefono = $request->telefono;
            $cliente->ext = $request->ext;
            $cliente->save();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'actualizacion_cliente' => $cliente->nombre
                ])
                ->log('El usuario actualizó un cliente');

            return response()->json(['success' => 'Actualizado correctamente', $cliente], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar y retornar errores de validación
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // Código HTTP 422 para errores de validación
        } catch (\Exception $e) {
            // Capturar cualquier otro error
            return response()->json([
                'error' => 'Ocurrió un error al actualizar el cliente',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function registrarCliente(Request $request)
    {


        $validatedData = $request->validate([
            'nombre' => 'required|string',
            'abreviacion' => 'nullable|string',
            'direccion' => 'nullable|string',
            'telefono' => 'nullable|string',
            'ext' => 'nullable|string',
        ]);

        $user = Auth::user();
        $cliente = new CatCliente;
        $cliente->nombre = $validatedData['nombre'];
        $cliente->abreviacion = $validatedData['abreviacion'];
        $cliente->direccion = $validatedData['direccion'];
        $cliente->telefono = $validatedData['telefono'];
        $cliente->ext = $validatedData['ext'];
        $cliente->empresa_id = $user->empresa_id;
        $cliente->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_cliente' => $cliente->nombre
            ])
            ->log('El usuario registró un cliente');

        // $proveedor = CatCliente::create($validatedData);
        return response()->json(['success' => 'Cliente creado exitosamente', 'data' => $cliente], 201);
    }

    public function deleteCliente($id = null)
    {
        // dd($id);
        try {
            // $data = CatCliente::find($id);
            $data = CatCliente::where('id', $id)->first();
            // dd($data, $id);
            if (!$data) {
                return response()->json(['error' => 'Cliente no encontrado'], 404);
            }
            // Eliminar el proveedor
            CatCliente::where('id', $id)->delete();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'eliminacion_cliente' => $data->nombre
                ])
                ->log('El usuario eliminó un cliente');

            // dd($data);
            return response()->json(['success' => 'Cliente eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 404);
        }
    }

    // Unidades de Medida
    public function listaUnidadMedidas()
    {
        $data = CatUnidadMedida::all();
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'lista_unidades_medida' => $data->count()
            ])
            ->log('El usuario consultó la lista de unidades de medida');

        return response()->json($data);
    }

    public function detalleUnidadMedida($id)
    {
        $data = CatUnidadMedida::where('id', $id)->first();
        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_unidad_medida' => $data->nombre
            ])
            ->log('El usuario consultó el detalle de una unidad de medida');

        if (!$data) {
            return response()->json(['error' => 'Unidad de medida no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    public function actualizaUnidadMedida(Request $request)
    {

        try {

            $validatedData = $request->validate([
                'id' => 'required',
                'nombre' => 'required|string|max:255',
                'abreviatura' => 'nullable|string|max:100',
                'descripcion' => 'nullable|string|max:100',
            ]);
            // dd($departamento);
            $data = CatUnidadMedida::where('id', $request->id)->first();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'actualizacion_unidad_medida' => $data->nombre
                ])
                ->log('El usuario actualizó una unidad de medida');

            // Validar si el departamento existe
            if (!$data) {
                return response()->json(['error' => 'Unidad de Medida no encontrado'], 404);
            }
            // Crear el nuevo proveedor con los datos validados
            $data->nombre = $request->nombre;
            $data->abreviatura = $request->abreviatura;
            $data->descripcion = $request->descripcion;
            $data->save();
            return response()->json(['success' => 'Actualizado correctamente', $data], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar y retornar errores de validación
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // Código HTTP 422 para errores de validación
        } catch (\Exception $e) {
            // Capturar cualquier otro error
            return response()->json([
                'error' => 'Ocurrió un error al actualizar el cliente',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function registrarUnidadMedida(Request $request)
    {

        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviatura' => 'nullable|string|max:100',
            'descripcion' => 'nullable|string|max:100',
        ]);

        $data = new CatUnidadMedida;
        $data->nombre = $validatedData['nombre'];
        $data->abreviatura = $validatedData['abreviatura'];
        $data->descripcion = $validatedData['descripcion'];
        $data->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_unidad_medida' => $data->nombre
            ])
            ->log('El usuario registró una unidad de medida');

        // $proveedor = CatCliente::create($validatedData);
        return response()->json(['success' => 'Unidad de Medida creado exitosamente', 'data' => $data], 201);
    }

    public function deleteUnidadMedida($id)
    {

        try {

            $data = CatUnidadMedida::where('id', $id)->first();
            if (!$data) {
                return response()->json(['error' => 'Unidad de Medida no encontrado'], 404);
            }
            // Eliminar
            $data->delete();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'eliminacion_unidad_medida' => $data->nombre
                ])
                ->log('El usuario eliminó una unidad de medida');

            return response()->json(['success' => 'Unidad de Medida eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 404);
        }
    }

    // Moneda
    public function listaTiposMonedas()
    {
        $data = CatMoneda::all();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'lista_monedas' => $data->count()
            ])
            ->log('El usuario consultó la lista de monedas');

        return response()->json($data);
    }

    public function detalleTipoMoneda($id)
    {
        $data = CatMoneda::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Unidad de medida no encontrado'], 404);
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_moneda' => $data->nombre
            ])
            ->log('El usuario consultó el detalle de una moneda');

        return response()->json($data, 200);
    }

    public function actualizaTipoMoneda(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'id' => 'required',
                'nombre' => 'required|string|max:255',
                'abreviacion' => 'required|string|max:100',
            ]);
            // dd($departamento);
            $data = CatMoneda::where('id', $request->id)->first();
            if (!$data) {
                return response()->json(['error' => 'Moneda no encontrado'], 404);
            }
            // Crear el nuevo proveedor con los datos validados
            $data->nombre = $request->nombre;
            $data->abreviacion = $request->abreviacion;
            $data->save();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'actualizacion_moneda' => $data->nombre
                ])
                ->log('El usuario actualizó una moneda');

            return response()->json(['success' => 'Actualizado correctamente', $data], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar y retornar errores de validación
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // Código HTTP 422 para errores de validación
        } catch (\Exception $e) {
            // Capturar cualquier otro error
            return response()->json([
                'error' => 'Ocurrió un error al actualizar la moneda',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function registrarTipoMoneda(Request $request)
    {

        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'required|string|max:100',
        ]);

        $data = new CatMoneda;
        $data->nombre = $validatedData['nombre'];
        $data->abreviacion = $validatedData['abreviacion'];
        $data->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_moneda' => $data->nombre
            ])
            ->log('El usuario registró una moneda');

        return response()->json(['success' => 'Moneda creado exitosamente', 'data' => $data], 201);
    }

    public function deleteTipoMoneda($id)
    {
        try {
            $data = CatMoneda::where('id', $id)->first();

            if (!$data) {
                return response()->json(['error' => 'Moneda no encontrado'], 404);
            }
            // Eliminar

            $data->delete();
            return response()->json(['success' => 'Moneda eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 404);
        }
    }

    // Status
    public function listaStatus()
    {
        $data = CatEstatu::all();
        return response()->json($data);
    }

    public function detalleStatu($id)
    {
        $data = CatEstatu::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Unidad de medida no encontrado'], 404);
        }
        return response()->json($data, 200);
    }

    public function actualizaStatu(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'id' => 'required',
                'nombre' => 'required|string|max:255',
                'abreviacion' => 'required|string|max:255',
                'descripcion' => 'nullable|string|max:255',

            ]);
            // dd($departamento);
            $data = CatEstatu::where('id', $request->id)->first();
            // Validar si el departamento existe
            if (!$data) {
                return response()->json(['error' => 'Moneda no encontrado'], 404);
            }
            // Crear el nuevo proveedor con los datos validados
            $data->nombre = $request->nombre;
            $data->abreviacion = $request->abreviacion;
            $data->descripcion = $request->descripcion;
            $data->save();
            return response()->json(['success' => 'Actualizado correctamente', $data], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar y retornar errores de validación
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // Código HTTP 422 para errores de validación
        } catch (\Exception $e) {
            // Capturar cualquier otro error
            return response()->json([
                'error' => 'Ocurrió un error al actualizar el status',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function registrarStatu(Request $request)
    {

        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'abreviacion' => 'required|string|max:255',
            'descripcion' => 'nullable|string|max:255',
        ]);

        $data = new CatEstatu;
        $data->nombre = $validatedData['nombre'];
        $data->abreviacion = $validatedData['abreviacion'];
        $data->descripcion = $validatedData['descripcion'];
        $data->save();
        // $proveedor = CatCliente::create($validatedData);
        return response()->json(['success' => 'Status creado exitosamente', 'data' => $data], 201);
    }

    public function deleteStatu($id)
    {

        try {
            $data = CatEstatu::where('id', $id)->first();

            if (!$data) {
                return response()->json(['error' => 'Status no encontrado'], 404);
            }
            // Eliminar
            $data->delete();
            return response()->json(['success' => 'Status eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 404);
        }
    }


    // Unidades de Medida
    //   public function listaTiposServicios()
    //   {
    //       $data = CatTipoServicio::all();
    //       return response()->json($data);
    //   }

    //   public function detalleTipoServicio($id)
    //   {
    //       $data = CatTipoServicio::where('id', $id)->first();
    //       if (!$data) {
    //           return response()->json(['error' => 'Unidad de medida no encontrado'], 404);
    //       }
    //       return response()->json($data, 200);
    //   }

    //   public function actualizaTipoServicio(Request $request)
    //   {

    //       try {

    //           $validatedData = $request->validate([
    //               'id' => 'required',
    //               'nombre' => 'required|string|max:255',
    //               'abreviatura'=> 'nullable|string|max:100',
    //               'descripcion'=> 'nullable|string|max:100',
    //           ]);
    //           // dd($departamento);
    //           $data = CatTipoServicio::where('id', $request->id)->first();
    //           // Validar si el departamento existe
    //           if (!$data) {
    //               return response()->json(['error' => 'Unidad de Medida no encontrado'], 404);
    //           }
    //           // Crear el nuevo proveedor con los datos validados
    //           $data->nombre = $request->nombre;
    //           $data->abreviatura = $request->abreviatura;
    //           $data->descripcion = $request->descripcion;
    //           $data->save();
    //           return response()->json(['success' => 'Actualizado correctamente', $data], 201);
    //       } catch (\Illuminate\Validation\ValidationException $e) {
    //           // Capturar y retornar errores de validación
    //           return response()->json([
    //               'errors' => $e->errors(),
    //           ], 422); // Código HTTP 422 para errores de validación
    //       } catch (\Exception $e) {
    //            // Capturar cualquier otro error
    //       return response()->json([
    //           'error' => 'Ocurrió un error al actualizar el cliente',
    //           'message' => $e->getMessage(),
    //       ], 500);
    //       }
    //   }

    //   public function registrarTipoServicio(Request $request)
    //   {

    //       $validatedData = $request->validate([
    //           'nombre' => 'required|string|max:255',
    //           'abreviatura'=> 'nullable|string|max:100',
    //           'descripcion'=> 'nullable|string|max:100',
    //       ]);

    //       $data = new CatTipoServicio;
    //       $data->nombre = $validatedData['nombre'];
    //       $data->abreviatura = $validatedData['abreviatura'];
    //       $data->descripcion = $validatedData['descripcion'];
    //       $data->save();
    //       // $proveedor = CatCliente::create($validatedData);
    //       return response()->json(['success' => 'Unidad de Medida creado exitosamente', 'data' => $data], 201);
    //   }

    //   public function deleteTipoServicio($id)
    //   {

    //       try {

    //           $data = CatTipoServicio::where('id', $id)->first();
    //           if (!$data) {
    //               return response()->json(['error' => 'Unidad de Medida no encontrado'], 404);
    //           }
    //           // Eliminar
    //           $data->delete();
    //           return response()->json(['success' => 'Unidad de Medida eliminado exitosamente'], 200);
    //       } catch (\Throwable $th) {
    //           return response()->json([
    //               'status' => 'error',
    //               'message' => $th
    //           ], 404);
    //       }
    //   }



    // Empresas
    public function listaEmpresas()
    {
        $data = CatEmpresa::all();
        return response()->json($data);
    }


    public function detalleEmpresa($id)
    {
        $data = CatEmpresa::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Empresa no encontrado'], 404);
        }
        return response()->json($data, 200);
    }







    // USER
    public function listaUsuarios()
    {
        $data = User::all();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'lista_usuarios' => $data->count()
            ])
            ->log('El usuario consultó la lista de usuarios');

        return response()->json($data);
    }

    public function registrarUsuario(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:100',
            'password' => 'nullable|string|max:100',
        ]);

        $data = new User;
        $data->name = $validatedData['name'];
        $data->email = $validatedData['email'];
        if ($request->password !== '' && $request->password !== null) {
            $data->password = $validatedData['password'];
        }
        $data->save();

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'registro_usuario' => $data->name
            ])
            ->log('El usuario registró un nuevo usuario');

        return response()->json(['success' => 'Usuario creado exitosamente', 'data' => $data], 201);
    }

    public function actualizaUsuario(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'id' => 'required',
                'name' => 'required|string|max:255',
                'email' => 'required|string|max:100',
                'password' => 'nullable|string|max:100',
            ]);

            // Validar si el usuario existe
            $data = User::where('id', $request->id)->first();
            if (!$data) {
                return response()->json(['error' => 'Usuario no encontrado'], 404);
            }
            // Crear el nuevo proveedor con los datos validados
            $data->name = $request->name;
            $data->email = $request->email;
            if ($request->password !== '' && $request->password !== null) {
                $data->password = Hash::make($request->password);
            }
            $data->save();

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'actualizacion_usuario' => $data->name
                ])
                ->log('El usuario actualizó un usuario');

            return response()->json(['success' => 'Actualizado correctamente', $data], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Capturar y retornar errores de validación
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // Código HTTP 422 para errores de validación
        } catch (\Exception $e) {
            // Capturar cualquier otro error
            return response()->json([
                'error' => 'Ocurrió un error al actualizar el cliente',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function deleteUsuario($id)
    {

        try {

            $data = User::where('id', $id)->first();
            if (!$data) {
                return response()->json(['error' => 'Usuario no encontrado'], 404);
            }

            activity()
                ->causedBy(auth()->user())
                ->withProperties([
                    'modulo' => 'Catalogos',
                    'eliminacion_usuario' => $data->name
                ])
                ->log('El usuario eliminó un usuario');

            $data->delete();
            return response()->json(['success' => 'Usuario eliminado exitosamente'], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 404);
        }
    }

    public function detalleUsuario($id =  null)
    {

        $data = User::where('id', $id)->first();
        if (!$data) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        activity()
            ->causedBy(auth()->user())
            ->withProperties([
                'modulo' => 'Catalogos',
                'detalle_usuario' => $data->name
            ])
            ->log('El usuario consultó el detalle de un usuario');

        return response()->json($data, 200);
    }



    // Prioridad
    public function listaPrioridades()
    {
        $data = CatPrioridad::all();
        return response()->json($data);
    }

    public function detalleCatalogos()
    {


        $empresaId = Auth::user()->empresa_id;

        $Cotizacion = Cotizacion::count();
        $CatCliente = CatCliente::where('empresa_id', $empresaId)->count();
        $CatDepartamento = CatDepartamento::count();
        $CatEmpresa = CatEmpresa::count();
        $CatEstatu = CatEstatu::count();
        $CatProvedor = CatProvedor::count();
        $CatUnidadMedida = CatUnidadMedida::count();
        $CatTipoServicio = CatTipoServicio::count();
        $User = User::count();
        $CatMoneda = CatMoneda::count();
        $CatPrioridad = CatPrioridad::count();
        $resumen = array(
            'Cotizacion' => $Cotizacion,
            'CatCliente' => $CatCliente,
            'CatDepartamento' => $CatDepartamento,
            'CatEmpresa' => $CatEmpresa,
            'CatEstatu' => $CatEstatu,
            'CatProvedor' => $CatProvedor,
            'CatUnidadMedida' => $CatUnidadMedida,
            'CatTipoServicio' => $CatTipoServicio,
            'User' => $User,
            'CatMoneda' => $CatMoneda,
            'CatPrioridad' => $CatPrioridad,
        );


        return response()->json($resumen, 200);
    }

    public function getCatRoles()
    {
        $data = CatRoles::all();
        return response()->json($data);
    }
}
