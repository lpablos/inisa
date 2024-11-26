<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CatalogosController;
use App\Http\Controllers\CotizacionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})
    ->name('dashboard');
//    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::get('/uikit/button', function () {
    return Inertia::render('main/uikit/button/page');
})->name('button');


// Todo lo relacionado con la administracion
Route::prefix('admin')->group(function () {
    // Sección de catálogos
    Route::prefix('catalogos')->group(function () {
        Route::controller(CatalogosController::class)->group(function () {
            Route::get('show', 'index')->name('catalogo.gral.index');  // Especifica el método 'index' en el controlador

            //CRUD para eliminar un provedor
            Route::get('list-proveedores', 'listaProvedores')->name('catalogo.list.provedores');
            Route::post('registrar-proveedor', 'registrarProvedor')->name('catalogo.nuevo.provedor');
            Route::post('actualiza-proveedor', 'actualizaProvedor')->name('catalogo.actualiza.provedor');
            Route::delete('proveedor/{id}', 'deleteProvedor')->name('catalogo.delete.provedor');
            Route::get('detalle-proveedor/{id}', 'detalleProvedor')->name('catalogo.detalle.proveedor');

            //CRUD  departamentos
            Route::get('list-departamentos', 'listaDepartamentos')->name('catalogo.list.departamentos');
            Route::post('registrar-departamento', 'registrarDepartamento')->name('catalogo.nuevo.departamento');
            Route::post('actualiza-departamento', 'actualizaDepartamento')->name('catalogo.actualiza.departamento');
            Route::delete('departamento/{id}', 'deleteDepartamento')->name('catalogo.delete.departamento');
            Route::get('detalle-departamento/{id}', 'detalleDepartamento')->name('catalogo.detalle.departamento');

            //CRUD  clientes
            Route::get('list-clientes', 'listaClientes')->name('catalogo.list.clientes');
            Route::post('registrar-clientes', 'registrarCliente')->name('catalogo.nuevo.cliente');
            Route::post('actualiza-cliente', 'actualizaCliente')->name('catalogo.actualiza.cliente');
            Route::delete('cliente/{id}', 'deleteCliente')->name('catalogo.delete.cliente');
            Route::get('detalle-cliente/{id}', 'detalleCliente')->name('catalogo.detalle.cliente');

            //CRUD  Unidades de medida
            Route::get('list-unidadesmedidas', 'listaUnidadMedidas')->name('catalogo.list.unidadesmedidas');
            Route::post('registrar-unidadmedida', 'registrarUnidadMedida')->name('catalogo.nuevo.unidadmedida');
            Route::post('actualiza-unidadmedida', 'actualizaUnidadMedida')->name('catalogo.actualiza.unidadmedida');
            Route::delete('unidadmedida/{id}', 'deleteUnidadMedida')->name('catalogo.delete.unidadmedida');
            Route::get('detalle-unidadmedida/{id}', 'detalleUnidadMedida')->name('catalogo.detalle.unidadmedida');

            //CRUD  Tipos de Monedas
            Route::get('list-tiposmonedas', 'listaTiposMonedas')->name('catalogo.list.tiposmonedas');
            Route::post('registrar-tiposervicio', 'registrarTipoMoneda')->name('catalogo.nuevo.tipomoneda');
            Route::post('actualiza-tipomoneda', 'actualizaTipoMoneda')->name('catalogo.actualiza.tipomoneda');
            Route::delete('tipomoneda/{id}', 'deleteTipoMoneda')->name('catalogo.delete.tipomoneda');            
            Route::get('detalle-tipomoneda/{id}', 'detalleTipoMoneda')->name('catalogo.detalle.tipomoneda');

             //CRUD  Tipos de Status
             Route::get('list-status', 'listaStatus')->name('catalogo.list.status');
             Route::post('registrar-statu', 'registrarStatu')->name('catalogo.nuevo.statu');
             Route::post('actualiza-statu', 'actualizaStatu')->name('catalogo.actualiza.statu');
             Route::delete('statu/{id}', 'deleteStatu')->name('catalogo.delete.statu');            
             Route::get('detalle-statu/{id}', 'detalleStatu')->name('catalogo.detalle.statu');
  
 

            //CRUD Usuarios
            Route::get('list-usuarios', 'listaUsuarios')->name('catalogo.list.usuarios');
            Route::post('registrar-usuario', 'registrarUsuario')->name('catalogo.nuevo.usuario');
            Route::post('actualiza-usuario', 'actualizaUsuario')->name('catalogo.actualiza.usuario');
            Route::delete('usuario/{id}', 'deleteUsuario')->name('catalogo.delete.usuario');     
            Route::get('detalle-usuario/{id}', 'detalleUsuario')->name('catalogo.detalle.usuario');

            //CRUD  empresa
            Route::get('list-empresas', 'listaEmpresas')->name('catalogo.list.empresas');
            Route::get('detalle-empresa/{id}', 'detalleEmpresa')->name('catalogo.detalle.empresa');
        });
    });
    // Agrega otros grupos según el nombre de la sección con su controlador y funciones

    Route::prefix('cotizacion')->group(function () {
        Route::controller(CotizacionController::class)->group(function () {
            Route::get('show', 'index')->name('cotizacion.show.index');

            Route::get('list-cotizaciones', 'listCotizaciones')->name('cotizacion.list.cotizaciones');
            Route::post('registrar-cotizacion', 'RegistrarCotizacion')->name('cotizacion.registrar.cotizacion');
            Route::put('actualiza-cotizacion', 'updateCotizacion')->name('cotizacion.actualiza.cotizacion');
            Route::delete('cotizacion/{id}', 'deleteCotizacion')->name('cotizacion.delete.cotizacion');

            Route::prefix('captura')->group(function(){
                Route::get('{identy?}/detalle','datelleCaptura')->name('cotizacion.captura.detalle');
            });
            

        });
    });
});



require __DIR__ . '/auth.php';
