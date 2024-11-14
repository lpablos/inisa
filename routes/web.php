<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CatalogosController;

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
            Route::post('registrar-proveedor', 'nuevoProvedor')->name('catalogo.nuevo.provedor');
            Route::delete('proveedor/{id}', 'deleteProvedor')->name('catalogo.delete.provedor');
            Route::get('detalle-proveedor/{id}','detalleProvedor')->name('catalogo.detalle.proveedor');

            //CRUD  departamentos
            Route::get('list-departamentos', 'listaDepartamentos')->name('catalogo.list.departamentos');
            Route::get('detalle-departamento/{id}','detalleDepartamento')->name('catalogo.detalle.departamento');

            //CRUD  clientes
            Route::get('list-clientes', 'listaClientes')->name('catalogo.list.clientes');
            Route::get('detalle-cliente/{id}','detalleCliente')->name('catalogo.detalle.cliente');

            //CRUD  Unidades de medida
            Route::get('list-unidadesmedidas', 'listaUnidadMedidas')->name('catalogo.list.unidadesmedidas');
            Route::get('detalle-unidadmedida/{id}','detalleUnidadMedida')->name('catalogo.detalle.unidadmedida');

            //CRUD Usuarios
            Route::get('list-usuarios', 'listaUsuarios')->name('catalogo.list.usuarios');
            Route::get('detalle-usuario/{id}','detalleUsuario')->name('catalogo.detalle.usuario');

            //CRUD  empresa
            Route::get('list-empresas', 'listaEmpresas')->name('catalogo.list.empresas');
            Route::get('detalle-empresa/{id}','detalleEmpresa')->name('catalogo.detalle.empresa');
        });
    });
    // Agrega otros grupos según el nombre de la sección con su controlador y funciones
});



require __DIR__ . '/auth.php';
