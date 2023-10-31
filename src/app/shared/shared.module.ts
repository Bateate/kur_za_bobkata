import { NgModule } from '@angular/core';
import * as components from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';
const imports = [
    FormsModule,
    ReactiveFormsModule,
]

const ALL_GUARDS = [
    AuthGuard,
    NoAuthGuard,
]
@NgModule({
    imports: [
        ...imports,
    ],
    declarations: [
        ...components.ALL_SHARED_COMPONENTS,
    ],
    exports: [
        ...components.ALL_SHARED_COMPONENTS,
        ...imports,
    ],
    providers: [
        ...ALL_GUARDS,
    ]
})
export class SharedModule {}