(function(e) {
    function t(t) {
        for (var r, n, s = t[0], l = t[1], d = t[2], u = 0, c = []; u < s.length; u++)
            n = s[u],
            Object.prototype.hasOwnProperty.call(i, n) && i[n] && c.push(i[n][0]),
            i[n] = 0;
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        m && m(t);
        while (c.length)
            c.shift()();
        return o.push.apply(o, d || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], r = !0, n = 1; n < a.length; n++) {
                var s = a[n];
                0 !== i[s] && (r = !1)
            }
            r && (o.splice(t--, 1),
            e = l(l.s = a[0]))
        }
        return e
    }
    var r = {}
      , n = {
        app: 0
    }
      , i = {
        app: 0
    }
      , o = [];
    function s(e) {
        return l.p + "js/" + ({}[e] || e) + "." + {
            "chunk-2d0ab43a": "596666e7",
            "chunk-2d0ac239": "17d155d1",
            "chunk-2d0b3289": "6ee4b25b",
            "chunk-2d0b6566": "6e5cb89f",
            "chunk-2d0cbae0": "33bfe9b3",
            "chunk-2d0e68b3": "b97e08d9",
            "chunk-2d0e8c9b": "af4fea47",
            "chunk-2d2086b7": "4a1a94a1",
            "chunk-2d210f7e": "2d63e568",
            "chunk-3d89b4ab": "19a1d245",
            "chunk-3d8c34dc": "bd6a06b1",
            "chunk-3d8c43c0": "6d58853c",
            "chunk-4bf1d037": "8435759b",
            "chunk-aeb07c80": "89a32016",
            "chunk-c74ae546": "2a409065",
            "chunk-f4c33922": "dc935aac"
        }[e] + ".js"
    }
    function l(t) {
        if (r[t])
            return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l),
        a.l = !0,
        a.exports
    }
    l.e = function(e) {
        var t = []
          , a = {
            "chunk-aeb07c80": 1,
            "chunk-f4c33922": 1
        };
        n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function(t, a) {
            for (var r = "css/" + ({}[e] || e) + "." + {
                "chunk-2d0ab43a": "31d6cfe0",
                "chunk-2d0ac239": "31d6cfe0",
                "chunk-2d0b3289": "31d6cfe0",
                "chunk-2d0b6566": "31d6cfe0",
                "chunk-2d0cbae0": "31d6cfe0",
                "chunk-2d0e68b3": "31d6cfe0",
                "chunk-2d0e8c9b": "31d6cfe0",
                "chunk-2d2086b7": "31d6cfe0",
                "chunk-2d210f7e": "31d6cfe0",
                "chunk-3d89b4ab": "31d6cfe0",
                "chunk-3d8c34dc": "31d6cfe0",
                "chunk-3d8c43c0": "31d6cfe0",
                "chunk-4bf1d037": "31d6cfe0",
                "chunk-aeb07c80": "de6470b0",
                "chunk-c74ae546": "31d6cfe0",
                "chunk-f4c33922": "7ebd0237"
            }[e] + ".css", i = l.p + r, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var d = o[s]
                  , u = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (u === r || u === i))
                    return t()
            }
            var c = document.getElementsByTagName("style");
            for (s = 0; s < c.length; s++) {
                d = c[s],
                u = d.getAttribute("data-href");
                if (u === r || u === i)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
            m.type = "text/css",
            m.onload = t,
            m.onerror = function(t) {
                var r = t && t.target && t.target.src || i
                  , o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = r,
                delete n[e],
                m.parentNode.removeChild(m),
                a(o)
            }
            ,
            m.href = i;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        }
        )).then((function() {
            n[e] = 0
        }
        )));
        var r = i[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var o = new Promise((function(t, a) {
                    r = i[e] = [t, a]
                }
                ));
                t.push(r[2] = o);
                var d, u = document.createElement("script");
                u.charset = "utf-8",
                u.timeout = 120,
                l.nc && u.setAttribute("nonce", l.nc),
                u.src = s(e);
                var c = new Error;
                d = function(t) {
                    u.onerror = u.onload = null,
                    clearTimeout(m);
                    var a = i[e];
                    if (0 !== a) {
                        if (a) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , n = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")",
                            c.name = "ChunkLoadError",
                            c.type = r,
                            c.request = n,
                            a[1](c)
                        }
                        i[e] = void 0
                    }
                }
                ;
                var m = setTimeout((function() {
                    d({
                        type: "timeout",
                        target: u
                    })
                }
                ), 12e4);
                u.onerror = u.onload = d,
                document.head.appendChild(u)
            }
        return Promise.all(t)
    }
    ,
    l.m = e,
    l.c = r,
    l.d = function(e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (l.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                l.d(a, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return a
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "/",
    l.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var d = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = d.push.bind(d);
    d.push = t,
    d = d.slice();
    for (var c = 0; c < d.length; c++)
        t(d[c]);
    var m = u;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "0070": function(e) {
        e.exports = JSON.parse('{"FileManager":"Filbehandling","NewFolder":"Ny mappe","NewFile":"Ny fil","LastModified":"Sist endret","ConfirmDelete":"Er du sikker på at du vil slette denne filen?","Upload":"Last opp","Download":"Last ned","Size":"Størrelse","NoFiles":"Det finnes ingen filer her ennå, gå og opprette noen for eksempel ved å klikke på \'install\'-knappen øverst på siden","FileLoadFailed":"Mislykket lasting av fil","Refresh":"Oppdater","CreateFile":"Opprett fil","CreateFolder":"Opprett mappe","ArchiveCurrentFolder":"Opprett arkiv fra gjeldende mappe","ArchiveFolder":"Opprett arkiv fra mappe","ExtractArchive":"Pakk ut arkiv","DropToUpload":"Slipp filer her for å laste dem opp"}')
    },
    "007e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Erreur inconnue","ErrUnknownError":"Erreur inconnue","ErrInvalidCredentials":"Identifiants invalides","ErrServiceNotAvailable":"Serveur indisponible","ErrEmailNotConfigured":"Email non configuré","ErrTokenInvalid":"Jeton invalide","ErrClientNotFound":"Client introuvable","ErrUserNotFound":"Utilisateur introuvable","ErrLoginNotPermitted":"Connexion non autorisée","ErrInvalidTokenState":"État du jeton (token) invalide","ErrSettingNotConfigured":"{setting} n\'est pas configuré","ErrNoTemplate":"Aucun modèle avec le nom \'{name}\' n\'a été trouvé","ErrServiceInvalidProvider":"{service} ne supporte pas {provider}","ErrFieldRequired":"\\"{field}\\" est requis","ErrFieldMustBePrintable":"{field} doit être des caractères ascii affichables","ErrFieldHasURICharacters":"{field} ne doit pas contenir de caractères qui ne peuvent pas être utilisés dans les URIs","ErrFieldIsInvalidHost":"{field} doit être une IP valide ou un nom de domaine","ErrFieldIsInvalidIP":"{field} doit être une IP valide","ErrFieldTooLarge":"{field} ne peut pas être plus grand que {max}","ErrFieldTooSmall":"{field} ne peut pas être plus petit que {min}","ErrFieldNotBetween":"{field} doit être compris entre {min} et {max}","ErrFieldEqual":"{field1} ne peut pas être égal à {field2}","ErrFieldNotEqual":"{field1} n\'est pas égal à {field2}","ErrFieldNotEmail":"{field} n\'est pas une adresse mail valide","ErrFieldLength":"{field} doit contenir au moins {length} caractères","ErrNoPermission":"Vous n\'avez pas la permission d\'effectuer cette action","ErrDatabaseNotAvailable":"La base de données est indisponible","ErrNoNodes":"Aucun nœud disponible","ErrNoTemplates":"Aucun modèle n\'est disponible","ErrPasswordRequirements":"Le mot de passe doit contenir au moins 8 caractères","ErrUsernameRequirements":"Le nom d\'utilisateur doit comporter au moins 5 caractères et ne contenir que des caractères alphanumériques, _, ou -","ErrPasswordsNotIdentical":"Les mot de passe ne sont pas identiques","ErrSessionTimedOut":"Session expirée, merci de vous reconnecter","ErrMissingScope":"Vous n\'êtes pas autorisé à effectuer cette action","ErrInvalidJson":"Les données JSON sont invalides","ErrSocketFailed":"La connexion WebSocket a rencontré une erreur, certaines fonctionnalités peuvent être ralenties ou indisponibles","ErrInviteLinkInvalid":"Votre lien d\'invitation semble être invalide","ErrSavingInviteduser":"Une erreur s\'est produite lors de la création du compte","ErrDuplicateServerName":"Un serveur avec ce nom existe déjà","ErrDuplicateNodeName":"Un nœud avec ce nom existe déjà","ErrDirectoryUploadNotSupported":"Impossible d\'envoyer des dossiers","ErrDockerNotSupported":"Docker n\'est pas pris en charge sur ce nœud","ErrMissingBinary":"Binaires manquantes : {expected}","ErrUnsupportedOS":"OS ({actual}) non supporté. OS pris en charge : {expected}","ErrUnsupportedArch":"Architecture {actual} non supportée. Architectures supportées : {expected}"}')
    },
    "009c": function(e) {
        e.exports = JSON.parse('{"Templates":"بازی ها","NoTemplates":"لا توجد قوالب هنا حتى الآن","Deleted":"تم حذف القالب","New":"إنشاء قالب جديد","Edit":"تحرير قالب","Editor":"المحرر","Json":"JSON","Display":"الإسم الظاهر","Type":"نوع","Variables":"المتغيرات","Install":"تثبيت","AddInstallStep":"إضافة خطوة التثبيت","DeleteInstallStep":"حذف خطوة التثبيت","Description":"الوصف","DataType":"نوع البيانات","DefaultValue":"القيمة الافتراضية","Required":"مطلوب","UserEditable":"يمكن للمستخدمين التعديل","Value":"القيمة","AddOption":"إضافة خيار","AddCommand":"إضافة أمر","Filename":"اسم الملفّ","Content":"المحتوى","Source":"المصدر","Target":"الهدف","Version":"الإصدار","ReleaseType":"Release Type","AddFile":"إضافة ملف","AddVariable":"إضافة متغير","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"اسم المتغير لا يمكن أن يكون فارغاً أو يحتوي على مسافات","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"تحميل","files":"الملفات"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"تغيير الملف","regex":"Treat search as RegEx","search":"Text to search","replace":"استبدل بـ"},"writefile":{"ProcessorName":"Write to file","text":"محتوى"},"move":{"ProcessorName":"نقل الملف","source":"المصدر","target":"الهدف"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"تحميل Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "00d6": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"這個環境沒有特定選項","docker":{"name":"Docker","image":"圖片","networkMode":"網路模式","networkName":"網路名稱","bindings":"綁定","portBindings":"端口綁定","OutsidePort":"外部端口","InsidePort":"內部端口","HostPath":"主機位置","ContainerPath":"內容位置"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "00e2": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Erro Desconhecido","ErrUnknownError":"Erro Desconhecido","ErrInvalidCredentials":"Credenciais Inválidas","ErrServiceNotAvailable":"Serviço não disponível","ErrEmailNotConfigured":"Email não configurado","ErrTokenInvalid":"Token é inválido","ErrClientNotFound":"Cliente não encontrado","ErrUserNotFound":"Utilizador não encontrado","ErrLoginNotPermitted":"Login não permitido","ErrInvalidTokenState":"Estado de token inválido","ErrSettingNotConfigured":"{setting} não está configurado","ErrNoTemplate":"Nenhum modelo com o nome \\"{name}\\" foi encontrado","ErrServiceInvalidProvider":"{service} não suporta {provider}","ErrFieldRequired":"{field} é obrigatório","ErrFieldMustBePrintable":"{field} deve ser caracteres ASCII imprimíveis","ErrFieldHasURICharacters":"{field} não devem conter caracteres que não podem ser usados em URLs","ErrFieldIsInvalidHost":"{field} deve ser um IP ou FQDN válido","ErrFieldIsInvalidIP":"{field} deve ser um IP válido","ErrFieldTooLarge":"{field} não pode ser superior a {max}","ErrFieldTooSmall":"{field} não pode ser inferior a {min}","ErrFieldNotBetween":"{field} deve estar entre {min} e {max}","ErrFieldEqual":"{field1} não pode ser igual a {field2}","ErrFieldNotEqual":"{field1} não é igual a {field2}","ErrFieldNotEmail":"{field} não é um email válido","ErrFieldLength":"{field} deve ter pelo menos {length} caracteres","ErrNoPermission":"Não tens permissão para realizar esta ação","ErrDatabaseNotAvailable":"Base de Dados não está disponível","ErrNoNodes":"Nenhuma node disponível","ErrNoTemplates":"Nenhum modelo disponível","ErrPasswordRequirements":"Palavra-passe deve ter pelo menos 8 caracteres","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"As palavra-passes não correspondem","ErrSessionTimedOut":"A tua sessão expirou, por favor inicia sessão novamente","ErrMissingScope":"Não tens autorização para realizar esta ação","ErrInvalidJson":"Os dados json são inválidos","ErrSocketFailed":"A conexão da WebSocket encontrou um erro, alguns recursos podem estar lentos ou corrompidos","ErrInviteLinkInvalid":"O teu link de convite parece ser inválido","ErrSavingInviteduser":"Houve um erro na criação da conta","ErrDuplicateServerName":"Um servidor com este nome já existe","ErrDuplicateNodeName":"Uma node com este nome já existe","ErrDirectoryUploadNotSupported":"Não é possível enviar pastas","ErrDockerNotSupported":"Docker não é suportado nesta node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"SO ({actual}) não suportado. SO suportado: {expected}","ErrUnsupportedArch":"Arquitetura {actual} não suportada. Arquiteturas suportadas: {expected}"}')
    },
    "00f7": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","Statistics":"Statistics","CPU":"CPU","Memory":"Memory","Files":"Files","Name":"Server Name","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","Admin":"Admin","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "01fb": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.AdminControls"))
                }
            })]), a("v-card-text", [e.isAdmin() ? a("ui-switch", {
                attrs: {
                    loading: e.loading,
                    disabled: e.loading,
                    label: e.$t("servers.Autostart")
                },
                on: {
                    click: function(t) {
                        return e.toggleSwitch("autostart")
                    }
                },
                model: {
                    value: e.autostart,
                    callback: function(t) {
                        e.autostart = t
                    },
                    expression: "autostart"
                }
            }) : e._e(), e.isAdmin() ? a("ui-switch", {
                attrs: {
                    loading: e.loading,
                    disabled: e.loading,
                    label: e.$t("servers.Autorestart")
                },
                on: {
                    click: function(t) {
                        return e.toggleSwitch("autorestart")
                    }
                },
                model: {
                    value: e.autorestart,
                    callback: function(t) {
                        e.autorestart = t
                    },
                    expression: "autorestart"
                }
            }) : e._e(), e.isAdmin() ? a("ui-switch", {
                staticClass: "mb-4",
                attrs: {
                    loading: e.loading,
                    disabled: e.loading,
                    label: e.$t("servers.Autorecover")
                },
                on: {
                    click: function(t) {
                        return e.toggleSwitch("autorecover")
                    }
                },
                model: {
                    value: e.autorecover,
                    callback: function(t) {
                        e.autorecover = t
                    },
                    expression: "autorecover"
                }
            }) : e._e(), e.isAdmin() ? a("v-btn", {
                staticClass: "mb-4",
                attrs: {
                    block: "",
                    color: "primary"
                },
                domProps: {
                    textContent: e._s(e.$t("servers.EditDefinition"))
                },
                on: {
                    click: function(t) {
                        return e.editServerDefinition()
                    }
                }
            }) : e._e(), e.isAdmin() ? a("v-btn", {
                staticClass: "mb-4",
                attrs: {
                    block: "",
                    color: "primary"
                },
                domProps: {
                    textContent: e._s(e.$t("servers.Reload"))
                },
                on: {
                    click: function(t) {
                        return e.reloadServer()
                    }
                }
            }) : e._e(), e.server.permissions.deleteServer || e.isAdmin() ? a("v-btn", {
                attrs: {
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("servers.Delete"))
                },
                on: {
                    click: function(t) {
                        e.confirmDeleteOpen = !0
                    }
                }
            }) : e._e(), a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: ""
                },
                scopedSlots: e._u([{
                    key: "title",
                    fn: function() {
                        return [a("span", {
                            domProps: {
                                textContent: e._s(e.$t("servers.EditDefinition"))
                            }
                        }), a("div", {
                            staticStyle: {
                                "flex-grow": "50"
                            }
                        }), a("v-btn-toggle", {
                            attrs: {
                                borderless: "",
                                dense: "",
                                mandatory: ""
                            },
                            model: {
                                value: e.editMode,
                                callback: function(t) {
                                    e.editMode = t
                                },
                                expression: "editMode"
                            }
                        }, [a("v-btn", {
                            attrs: {
                                value: "editor"
                            },
                            domProps: {
                                textContent: e._s(e.$t("templates.Editor"))
                            }
                        }), a("v-btn", {
                            attrs: {
                                value: "json"
                            },
                            domProps: {
                                textContent: e._s(e.$t("templates.Json"))
                            }
                        })], 1)]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.editDefinition,
                    callback: function(t) {
                        e.editDefinition = t
                    },
                    expression: "editDefinition"
                }
            }, ["editor" === e.editMode ? a("template-editor", {
                attrs: {
                    server: ""
                },
                model: {
                    value: e.definition,
                    callback: function(t) {
                        e.definition = t
                    },
                    expression: "definition"
                }
            }) : a("ace", {
                ref: "editor",
                attrs: {
                    "editor-id": e.server.id,
                    height: "75vh",
                    lang: "json"
                },
                model: {
                    value: e.defJson,
                    callback: function(t) {
                        e.defJson = t
                    },
                    expression: "defJson"
                }
            }), a("v-btn", {
                staticClass: "mt-4",
                attrs: {
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.saveServerDefinition()
                    }
                }
            })], 1), a("v-dialog", {
                attrs: {
                    "max-width": "600"
                },
                model: {
                    value: e.confirmDeleteOpen,
                    callback: function(t) {
                        e.confirmDeleteOpen = t
                    },
                    expression: "confirmDeleteOpen"
                }
            }, [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("servers.ConfirmDelete"))
                }
            }), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        e.confirmDeleteOpen = !1
                    }
                }
            }), a("v-btn", {
                attrs: {
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Confirm"))
                },
                on: {
                    click: function(t) {
                        return e.deleteConfirmed()
                    }
                }
            })], 1)], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    confirmDeleteOpen: !1,
                    loading: !0,
                    autostart: !1,
                    autorestart: !1,
                    autorecover: !1,
                    editDefinition: !1,
                    editMode: "editor",
                    definition: {},
                    defJson: ""
                }
            },
            watch: {
                editMode(e) {
                    "editor" === e ? this.definition = this.$api.templateFromApiJson(this.defJson, !0) : (this.defJson = this.$api.templateToApiJson(this.definition),
                    this.$refs.editor && this.$refs.editor.ready && this.$refs.editor.setValue(this.defJson))
                }
            },
            mounted() {
                this.loadData()
            },
            methods: {
                async loadData() {
                    if (!this.isAdmin())
                        return;
                    this.loading = !0;
                    const e = await this.$api.getServerDefinition(this.server.id);
                    this.autostart = !!e.run.autostart,
                    this.autorestart = !!e.run.autorestart,
                    this.autorecover = !!e.run.autorecover,
                    this.loading = !1
                },
                async toggleSwitch(e) {
                    this.loading = !0;
                    const t = await this.$api.getServerDefinition(this.server.id);
                    t.run[e] = this[e],
                    await this.$api.updateServerDefinition(this.server.id, t),
                    await this.loadData()
                },
                async reloadServer() {
                    await this.$api.reloadServer(this.server.id),
                    this.$toast.success(this.$t("servers.Reloaded"))
                },
                async deleteConfirmed() {
                    await this.$api.deleteServer(this.server.id),
                    this.$toast.success(this.$t("servers.Deleted")),
                    await this.$router.push({
                        name: "Servers"
                    })
                },
                async editServerDefinition() {
                    this.definition = this.$api.templateFromApiJson(await this.$api.getServerDefinition(this.server.id), !0),
                    this.editDefinition = !0
                },
                async saveServerDefinition() {
                    await this.$api.updateServerDefinition(this.server.id, this.$api.templateToApiJson(this.definition)),
                    this.editDefinition = !1
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("a609")
          , m = a("b0af")
          , p = a("99d9")
          , v = a("169a")
          , h = a("2fa4")
          , g = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = g.exports;
        d()(g, {
            VBtn: u["a"],
            VBtnToggle: c["a"],
            VCard: m["a"],
            VCardActions: p["a"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VDialog: v["a"],
            VSpacer: h["a"]
        })
    },
    "0242": function(e) {
        e.exports = JSON.parse('{"Credentials":"Credenciales de cliente de OAuth2","ClientId":"ID de cliente","ClientSecret":"Clave secreta","NewClientWarning":"Tenga en cuenta que la clave secreta del cliente, después de cerrar este diálogo nunca se mostrará de nuevo. Perderlo, y olvidarlo hará que este cliente esté completamente inutilizable.","Create":"Crear nuevo cliente OAuth2","UnnamedClient":"Cliente OAuth2 sin nombre","Docs":"Encontrar documentación API aquí","DeleteWarning":"La eliminación de un cliente OAuth2 no se puede deshacer, ni se puede crear un nuevo cliente con las mismas credenciales. Todas las integraciones que todavía utilizan este cliente se romperán después de su eliminación.","ConfirmDelete":"Soy consciente de los efectos que la eliminación de este cliente OAuth2 tendrá y desea continuar.","Delete":"¿Eliminar {clientName}?","Clients":"Clientes de OAuth2","AccountDescription":"Los clientes de OAuth2 listados aquí heredan todos los permisos de sus cuentas","ServerDescription":"Los clientes de OAuth2 listados aquí solo heredan los permisos de sus cuentas en este servidor"}')
    },
    "02cb": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("v-list", e._l(e.value, (function(t, r) {
                return a("v-list-item", {
                    key: r,
                    attrs: {
                        link: ""
                    },
                    on: {
                        click: function(t) {
                            return e.startEdit(r)
                        }
                    }
                }, [a("v-list-item-content", {
                    domProps: {
                        textContent: e._s(t.type)
                    }
                }), a("v-list-item-action", {
                    staticClass: "flex-row"
                }, [a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var r = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                }
                            }, r), [a("v-icon", [e._v("mdi-pencil")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Edit"))
                    }
                })]), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        return t.stopPropagation(),
                                        e.remove(r)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-close")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Delete"))
                    }
                })])], 1)], 1)
            }
            )), 1), a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        return e.add()
                    }
                }
            }), a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.reset()
                    }
                },
                model: {
                    value: e.edit,
                    callback: function(t) {
                        e.edit = t
                    },
                    expression: "edit"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("template-processor", {
                model: {
                    value: e.currentEdit,
                    callback: function(t) {
                        e.currentEdit = t
                    },
                    expression: "currentEdit"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "success",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.save()
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Array,
                    default: ()=>[]
                }
            },
            data() {
                return {
                    template: {
                        type: "command"
                    },
                    new: !1,
                    edit: !1,
                    editIndex: 0,
                    currentEdit: {}
                }
            },
            methods: {
                add() {
                    const e = [...this.value];
                    e.push({
                        ...this.template
                    }),
                    this.new = !0,
                    this.$emit("input", e),
                    this.startEdit(this.value.length, !0)
                },
                startEdit(e, t=!1) {
                    this.editIndex = e,
                    this.currentEdit = t ? {
                        ...this.template
                    } : {
                        ...this.value[e]
                    },
                    this.edit = !0
                },
                remove(e) {
                    const t = [...this.value];
                    t.splice(e, 1),
                    this.$emit("input", t)
                },
                save() {
                    const e = [...this.value];
                    e[this.editIndex] = this.currentEdit,
                    this.$emit("input", e),
                    this.reset(!1)
                },
                reset(e=!0) {
                    if (this.new && e) {
                        const e = [...this.value];
                        e.splice(this.editIndex, 1),
                        this.$emit("input", e)
                    }
                    this.new = !1,
                    this.edit = !1,
                    this.editIndex = 0,
                    this.currentEdit = {}
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("132d")
          , p = a("8860")
          , v = a("da13")
          , h = a("1800")
          , g = a("5d23")
          , f = a("0fd9")
          , S = a("3a2f")
          , k = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = k.exports;
        d()(k, {
            VBtn: u["a"],
            VCol: c["a"],
            VIcon: m["a"],
            VList: p["a"],
            VListItem: v["a"],
            VListItemAction: h["a"],
            VListItemContent: g["a"],
            VRow: f["a"],
            VTooltip: S["a"]
        })
    },
    "03f0": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-container", [e._l(e.value, (function(t, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [a("v-divider")], 1), a("v-col", {
                    staticClass: "d-flex align-center",
                    attrs: {
                        cols: "12"
                    }
                }, [a("div", [e._v(e._s(t))]), a("div", {
                    staticClass: "flex-grow-1"
                }), a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            return e.startEdit(r)
                        }
                    }
                }, [a("v-icon", [e._v("mdi-pencil")])], 1), a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            return e.remove(r)
                        }
                    }
                }, [a("v-icon", [e._v("mdi-close")])], 1)], 1)], 1)
            }
            )), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        return e.add()
                    }
                }
            })], 1)], 1), a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.reset()
                    }
                },
                model: {
                    value: e.edit,
                    callback: function(t) {
                        e.edit = t
                    },
                    expression: "edit"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    lg: "3"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("common.Host")
                },
                model: {
                    value: e.host,
                    callback: function(t) {
                        e.host = t
                    },
                    expression: "host"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    lg: "3"
                }
            }, [a("ui-input", {
                attrs: {
                    type: "number",
                    label: e.$t("env.docker.OutsidePort")
                },
                model: {
                    value: e.outsidePort,
                    callback: function(t) {
                        e.outsidePort = t
                    },
                    expression: "outsidePort"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    lg: "3"
                }
            }, [a("ui-input", {
                attrs: {
                    type: "number",
                    label: e.$t("env.docker.InsidePort")
                },
                model: {
                    value: e.insidePort,
                    callback: function(t) {
                        e.insidePort = t
                    },
                    expression: "insidePort"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    lg: "3"
                }
            }, [a("ui-input-suggestions", {
                attrs: {
                    label: e.$t("common.Protocol"),
                    items: ["tcp", "udp"]
                },
                model: {
                    value: e.protocol,
                    callback: function(t) {
                        e.protocol = t
                    },
                    expression: "protocol"
                }
            })], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "success",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.save()
                    }
                }
            })], 1)], 1)], 1)], 2)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Array,
                    required: !0
                }
            },
            data() {
                return {
                    edit: !1,
                    new: !0,
                    editIndex: 0,
                    host: "0.0.0.0",
                    outsidePort: "",
                    insidePort: "",
                    protocol: "tcp"
                }
            },
            methods: {
                onInput(e, t) {
                    const a = [...this.value];
                    a[e] = t,
                    this.$emit("input", a)
                },
                remove(e) {
                    const t = [...this.value];
                    t.splice(e, 1),
                    this.$emit("input", t)
                },
                reset() {
                    this.host = "0.0.0.0",
                    this.outsidePort = "",
                    this.insidePort = "",
                    this.protocol = "tcp",
                    this.edit = !1,
                    this.new = !0,
                    this.editIndex = 0
                },
                add() {
                    this.new = !0,
                    this.edit = !0
                },
                startEdit(e) {
                    this.editIndex = e,
                    this.new = !1;
                    const t = this.value[e];
                    this.host = t.split(":")[0],
                    this.outsidePort = t.split(":")[1],
                    this.insidePort = t.split(":")[2].split("/")[0],
                    this.protocol = t.split("/")[1],
                    this.edit = !0
                },
                save() {
                    const e = [...this.value]
                      , t = `${this.host}:${this.outsidePort}:${this.insidePort}/${this.protocol}`;
                    this.new ? e.push(t) : e[this.editIndex] = t,
                    this.reset(),
                    this.$emit("input", e)
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("a523")
          , p = a("ce7e")
          , v = a("132d")
          , h = a("0fd9")
          , g = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = g.exports;
        d()(g, {
            VBtn: u["a"],
            VCol: c["a"],
            VContainer: m["a"],
            VDivider: p["a"],
            VIcon: v["a"],
            VRow: h["a"]
        })
    },
    "04a2": function(e) {
        e.exports = JSON.parse('{"Templates":"Şablonlar","NoTemplates":"Burada henüz şablon yok","Deleted":"Şablon silindi","New":"Yeni şablon oluştur","Edit":"Şablon düzenle","Editor":"Düzenleyici","Json":"JSON","Display":"Görüntülenen İsim","Type":"Tür","Variables":"Değişkenler","Install":"Kurulum","AddInstallStep":"Kurulum aşaması ekle","DeleteInstallStep":"Kurulum aşaması sil","Description":"Açıklama","DataType":"Veri Tipi","DefaultValue":"Varsayılan Değer","Required":"Gerekli","UserEditable":"Kullanıcılar düzenleyebilir","Value":"Değer","AddOption":"Bir seçenek ekle","AddCommand":"Komut Ekle","Filename":"Dosya Adı","Content":"İçerik","Source":"Kaynak","Target":"Hedef","Version":"Versiyon","ReleaseType":"Yayın Türü","AddFile":"Dosya ekle","AddVariable":"Değişken ekle","Environment":"Ortam","Environments":"Ortamlar","AddEnvironment":"Ortam ekle","DefaultEnvironment":"Varsayılan Ortam","AddEnvVar":"Bir ortam değişkeni ekle","EnvVars":"Ortam Değişkenleri","DockerImage":"Docker Görüntüsü","SaveSuccess":"Şablon Kaydedildi","VarNameNoSpaces":"Değişken adı boş olamaz veya boşluk içeremez","SupportedEnvironments":"Desteklenen Ortamlar","RunConfig":"Yapılandırmayı Çalıştır","PreHook":"Ön çalıştırma kancası","PostHook":"Çalıştırma sonrası kancası","AddPreStep":"Ön çalıştırma adımı ekle","AddPostStep":"Çalıştırma sonrası adımı ekle","DeletePreStep":"Ön çalıştırma adımı sil","DeletePostStep":"Çalıştırma sonrası adımı sil","Shutdown":"Kapat","Command":"Komut","WorkingDirectory":"Çalışma dizini","Arguments":"Argümanlar","AddArgument":"Argüman Ekle","Convert":"Dönüştür","OfferV1Convert":"Bu JSON şablonu PufferPanel 1.x şablonuna benziyor, bunu PufferPanel 2.x sürümüne çevirmek ister misin?","import":{"CommunityWarning":"Bu şablonlar topluluk tarafından yapılır ve herhangi bir garanti olmaksızın sağlanır","OverrideWarning":"UYARI: İçe aktarılan şablonlar, Mevcut şablonların üzerine YAZILACAK","Import":"Şablonları içe aktar","Tooltip":"Resmi depodan şablonları içe aktarın","Select":"İçe aktarılacak şablonları seçin","Started":"Şablonlar içe aktarılıyor, lütfen biraz bekleyin","Successful":"Şablon başarıyla içe aktarıldı {template}","NoTemplatesTitle":"Şablonları içe aktarmak istiyor musunuz?","NoTemplatesContent":"Şu anda herhangi bir şablonunuz yok. Sunucu oluşturmak için şablonlar gereklidir.<br/>Resmi PufferPanel şablonlar deposundan bazı şablonları şimdi içe aktarmak istiyor musunuz?"},"stop":{"Command":"Komut","Signal":"Sinyal"},"processors":{"download":{"ProcessorName":"İndir","files":"Dosyalar"},"command":{"ProcessorName":"Komut Çalıştır","commands":"Komutlar"},"alterfile":{"ProcessorName":"Dosyayı değiştir","regex":"Aramayı RegEx olarak al","search":"Aranacak metin","replace":"Şununla değiştir"},"writefile":{"ProcessorName":"Dosyaya Yaz","text":"İçerik"},"move":{"ProcessorName":"Dosya Taşı","source":"Kaynak","target":"Hedef"},"mkdir":{"ProcessorName":"Dizin Oluştur"},"mojangdl":{"ProcessorName":"Minecraft İndir"},"forgedl":{"ProcessorName":"Minecraft Forge İndir"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForge İndir","releaseType":"Yayın türü"},"fabricdl":{"ProcessorName":"Minecraft Fabric İndir"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "0548": function(e) {
        e.exports = JSON.parse('{"ServersView":"Puede ver este servidor","ServersEdit":"Editar el servidor","ServersInstall":"Instalar el servidor","ServersConsole":"Ver la consola","ServersConsoleSend":"Enviar comandos a la consola","ServersStop":"Detener y matar el servidor","ServersStart":"Iniciar el servidor","ServersStat":"Ver estadísticas de CPU y memoria","ServersFiles":"Permitir el acceso a archivos usando SFTP","ServersFilesGet":"Ver y descargar archivos usando el gestor de archivos","ServersFilesPut":"Editar y subir archivos usando el gestor de archivos","ServersEditUsers":"Editar el acceso del usuario a este servidor","Admin":"Admin (esto concede todos los permisos posibles)","ViewServers":"Ver servidores","CreateServers":"Crear nuevos servidores","DeleteServers":"Eliminar servidores","EditServerAdmin":"Editar ajustes del servidor","ViewNodes":"Ver Nodos","EditNodes":"Editar Nodos","DeployNodes":"Desplegar nuevos Nodos","ViewTemplates":"Ver Más Plantillas","EditTemplates":"Editar Plantillas","ViewUsers":"Ver todos los usuarios","EditUsers":"Editar otros usuarios","PanelSettings":"Cambiar ajustes del panel"}')
    },
    "05a8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Tidak ada opsi environment khusus untuk environment ini","docker":{"name":"Docker -> nama","image":"Image","networkMode":"Mode Jaringan","networkName":"Nama Jaringan","bindings":"Binding","portBindings":"Port Binding","OutsidePort":"Port Keluar","InsidePort":"Port Kedalam","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standar"},"tty":{"name":"TTY"}}')
    },
    "0651": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Brak opcji specyficznych dla tego środowiska","docker":{"name":"Docker","image":"Obraz","networkMode":"Tryb Sieci","networkName":"Nazwa Sieci","bindings":"Powiązania","portBindings":"Przypięcia Portów","OutsidePort":"Port Zewnętrzny","InsidePort":"Port Wewnętrzny","HostPath":"Ścieżka hosta","ContainerPath":"Ścieżka kontenera"},"standard":{"name":"Standardowy"},"tty":{"name":"TTY"}}')
    },
    "06b9": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Bu ortam için özel seçenek yok","docker":{"name":"Docker","image":"Görüntü","networkMode":"Ağ modu","networkName":"Ağ adı","bindings":"Atamalar","portBindings":"Port atamaları","OutsidePort":"Çıkış portu","InsidePort":"Giriş portu","HostPath":"Sunucu yolu","ContainerPath":"Konteyner yolu"},"standard":{"name":"Standart"},"tty":{"name":"TTY"}}')
    },
    "06ec": function(e) {
        e.exports = JSON.parse('{"Node":"Uzol","Nodes":"Uzly","Edit":"Upraviť uzol","Add":"Pridať uzol","Update":"Aktualizovať uzol","Delete":"Vymazať uzol","PublicHost":"Verejný uzol","PublicPort":"Verejný port","PrivateHost":"Súkromný hostiteľ","PrivatePort":"Privátny port","SftpPort":"SFTP Port","WithPrivateAddress":"Použite iného hostiteľa/port na komunikáciu medzi servermi","WithPrivateAddressHint":"Táto samostatná adresa sa používa, keď hlavný uzol potrebuje komunikovať s novým uzlom. Užitočné napríklad vtedy, keď sú uzly v rovnakej sieti za NAT.","SaveConfig":"Uložiť konfiguráciu","SavePublicKey":"Uložiť verejný kľúč (Public Key)","DeploymentInstruction":"Ak chcete uzol nasadiť, nainštalujte PufferPanel na nový server a umiestnite konfiguračný súbor do adresára `/etc/pufferpanel/`<br/>Potom spustite PufferPanel na novom serveri.","UpdateSuccess":"Uzol bol úspešne aktualizovaný","UpdateError":"Chyba pri aktualizovaní uzla","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "0753": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Navn","Address":"Adresse","Online":"Online","Offline":"Offline","Loading":"Indlæser...","General":"Generelt","Language":"Sprog","SelectLanguage":"Vælg sprog","Settings":"Indstillinger","Update":"Opdatér","Edit":"Rediger","Delete":"Slet","Create":"Opret","Save":"Gem","Saved":"Gemt","SaveFailed":"Kunne ikke gemme","Cancel":"Annuller","Confirm":"Bekræft","Actions":"Handlinger","Host":"Vært","Port":"Port","Template":"Skabelon","Options":"Valgmuligheder","Collapse":"Minimer","Copied":"Kopieret til udklipsholder","Unknown":"Ukendt","Search":"Søg","Back":"Tilbage","Next":"Næste","LanguageName":"Dansk","Details":"Detaljer","ErrorDetails":"Fejloplysninger","HelpTranslate":"Hjælp os med at oversætte PufferPanel","DarkMode":"Mørke tilstand","ThemeOptions":"Indstillinger for tema","Protocol":"Protokol","Add":"Tilføj","Ignore":"Ignorér","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday","Sunday":"Sunday","Description":"Description"}')
    },
    "07cb": function(e) {
        e.exports = JSON.parse('{"FileManager":"Manager de fișiere","NewFolder":"Folder nou","NewFile":"Fișier nou","LastModified":"Ultima modificare","ConfirmDelete":"Eşti sigur că vrei să ştergi acest fişier?","Upload":"Încarcă","Download":"Descarcă","Size":"Dimensiune","NoFiles":"Nu sunt fişiere aici încă, mergi şi creează-le de exemplu făcând clic pe butonul de instalare din partea de sus a paginii","FileLoadFailed":"Încărcarea fișierului a eșuat","Refresh":"Reîncarcă","CreateFile":"Crează fișier","CreateFolder":"Creează folder","ArchiveCurrentFolder":"Creare arhivă din folderul curent","ArchiveFolder":"Creare arhivă din folder","ExtractArchive":"Extrage arhiva","DropToUpload":"Trage fișierele aici pentru a le încărca"}')
    },
    "0834": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Tuntematon virhe","ErrUnknownError":"Tuntematon virhe","ErrInvalidCredentials":"Virheelliset kirjautumistiedot","ErrServiceNotAvailable":"Palvelu ei ole käytettävissä","ErrEmailNotConfigured":"Sähköpostia ei ole määritelty","ErrTokenInvalid":"Tokeni on virheellinen","ErrClientNotFound":"Asiakasta ei löydy","ErrUserNotFound":"Käyttäjää ei löydy","ErrLoginNotPermitted":"Sinulla ei ole käyttöoikeutta kirjautumiseen","ErrInvalidTokenState":"Virheellinen tokenin tila","ErrSettingNotConfigured":"{setting} ei ole määritelty","ErrNoTemplate":"Mallia nimeltä \'{name}\' ei löytynyt","ErrServiceInvalidProvider":"{service} ei tue {provider}","ErrFieldRequired":"{field} on pakollinen","ErrFieldMustBePrintable":"{field} on oltava tulostettavia ascii-merkkejä","ErrFieldHasURICharacters":"{field} ei saa sisältää merkkejä, joita ei voi käyttää URI-osoitteissa","ErrFieldIsInvalidHost":"{field} pitää olla kelvollinen IP-osoite tai FQDN-tunnus","ErrFieldIsInvalidIP":"{field} pitää olla kelvollinen IP-osoite","ErrFieldTooLarge":"{field} ei voi olla suurempi kuin {max}","ErrFieldTooSmall":"{field} ei voi olla pienempi kuin {min}","ErrFieldNotBetween":"{field} pitää olla {min} ja {max} välissä","ErrFieldEqual":"{field1} ei voi olla sama kuin {field2}","ErrFieldNotEqual":"{field1} ei täsmää {field2} kanssa","ErrFieldNotEmail":"{field} ei ole kelvollinen sähköpostiosoite","ErrFieldLength":"{field} pitää olla ainakin {length} kirjainta","ErrNoPermission":"Sinulla ei ole oikeuksia tämän toiminnon suorittamiseen","ErrDatabaseNotAvailable":"Tietokanta ei ole käytettävissä","ErrNoNodes":"Noodeja ei ole saatavilla","ErrNoTemplates":"Sivupohjia ei ole saatavilla","ErrPasswordRequirements":"Salasanan pitää olla vähintään 8 merkkiä pitkä","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Salasanat eivät täsmää","ErrSessionTimedOut":"Istuntosi aikakatkaistiin. Ole hyvä ja kirjaudu uudelleen","ErrMissingScope":"Sinulla ei ole oikeutta tämän toiminnon suorittamiseen","ErrInvalidJson":"Json-tieto on virheellinen","ErrSocketFailed":"WebSocket-yhteydessä tapahtui virhe, jotkin ominaisuudet voivat olla hitaita tai rikki","ErrInviteLinkInvalid":"Kutsulinkkisi näyttää olevan virheellinen","ErrSavingInviteduser":"Tilisi luomisessa tapahtui virhe","ErrDuplicateServerName":"Palvelin tällä nimellä on jo olemassa","ErrDuplicateNodeName":"Noodi tällä nimellä on jo olemassa","ErrDirectoryUploadNotSupported":"Kansioden siirtäminen palvelimelle epäonnistui","ErrDockerNotSupported":"Tämä noodi ei tue Dockeria","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "0847": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    "0872": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodos","Edit":"Editar Nodo","Add":"Añadir Nodo","Update":"Actualizar Nodo","Delete":"Eliminar Nodo","PublicHost":"Host publico","PublicPort":"Puerto publico","PrivateHost":"Host privado","PrivatePort":"Puerto privado","SftpPort":"Puerto SFTP","WithPrivateAddress":"Usar un host/puerto diferente para la comunicación entre servidores","WithPrivateAddressHint":"Esta dirección separada se utiliza cuando el nodo principal necesita comunicarse con el nuevo nodo. Esto es útil por ejemplo cuando los nodos están en la misma red detrás de NAT.","SaveConfig":"Guardar configuración","SavePublicKey":"Guardar clave pública","DeploymentInstruction":"Para desplegar el nodo, instale PufferPanel en el nuevo servidor y coloque el archivo de configuración en `etc/pufferpanel/`<br/>Después en el nuevo servidor reinicie PufferPanel.","UpdateSuccess":"Nodo actualizado correctamente","UpdateError":"Error al actualizar el nodo","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "094f": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Неизвестная ошибка","ErrUnknownError":"Неизвестная ошибка","ErrInvalidCredentials":"Неправильное имя пользователя или пароль","ErrServiceNotAvailable":"Сервис недоступен","ErrEmailNotConfigured":"Сервер электронной почты не настроен","ErrTokenInvalid":"Неверный токен","ErrClientNotFound":"Клиент не найден","ErrUserNotFound":"Пользователь не найден","ErrLoginNotPermitted":"Вход запрещен","ErrInvalidTokenState":"Неверное состояние токена","ErrSettingNotConfigured":"{setting} не настроен","ErrNoTemplate":"Шаблон с именем \\"{name}\\" не найден","ErrServiceInvalidProvider":"{service} не поддерживает {provider}","ErrFieldRequired":"{field} обязательное поле","ErrFieldMustBePrintable":"Поле {field} должно быть напечатано символами в кодировке ascii","ErrFieldHasURICharacters":"Поле {field} не должно содержать символы, которые не могут быть использованы в URI","ErrFieldIsInvalidHost":"Поле {field} должно быть действительным IP-адресом или FQDN","ErrFieldIsInvalidIP":"Поле {field} должно быть действительным IP-адресом","ErrFieldTooLarge":"Поле {field} не может быть больше чем {max}","ErrFieldTooSmall":"Поле {field} не может быть больше чем {min}","ErrFieldNotBetween":"Поле {field} должно быть между {min} и {max}","ErrFieldEqual":"Поле {field1} не может быть равно {field2}","ErrFieldNotEqual":"Поле {field1} не равно {field2}","ErrFieldNotEmail":"Поле {field} является недействительной электронной почтой","ErrFieldLength":"Поле {field} должно содержать не менее {length} символов","ErrNoPermission":"У вас нет разрешений на выполнение этого действия","ErrDatabaseNotAvailable":"База данных недоступна","ErrNoNodes":"Нет доступных хостов","ErrNoTemplates":"Нет доступных шаблонов","ErrPasswordRequirements":"Пароль должен состоять из как минимум {min} символов","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Пароли не совпадают","ErrSessionTimedOut":"Время сессии истекло, пожалуйста, повторите вход","ErrMissingScope":"У вас нет прав для совершения данного действия","ErrInvalidJson":"Json данные недействительны","ErrSocketFailed":"Соединение WebSocket обнаружило ошибку, некоторые функции могут работать медленно или не работать","ErrInviteLinkInvalid":"Ваша пригласительная ссылка недействительна","ErrSavingInviteduser":"Во время создания аккаунта произошла ошибка","ErrDuplicateServerName":"Сервер с таким именем уже существует","ErrDuplicateNodeName":"Узел с таким именем уже существует","ErrDirectoryUploadNotSupported":"Не удается загрузить папки","ErrDockerNotSupported":"Docker не поддерживается на этом хосте","ErrMissingBinary":"Отсутствует библиотека: {expected}","ErrUnsupportedOS":"Ваша ОС ({actual}) не поддерживается. Поддерживаемые ОС: {expected}","ErrUnsupportedArch":"Архитектура {actual} не поддерживается. Поддерживаемые архитектуры: {expected}"}')
    },
    "097b": function(e) {
        e.exports = JSON.parse('{"Templates":"Sjablonen","NoTemplates":"Er zijn nog geen sjablonen","Deleted":"Sjabloon verwijderd","New":"Nieuw sjabloon aanmaken","Edit":"Bewerkt sjabloon","Editor":"Bewerken","Json":"JSON","Display":"Naam","Type":"Soort","Variables":"Variabelen","Install":"Installeren","AddInstallStep":"Installatie stap toevoegen","DeleteInstallStep":"Installatiestap verwijderen","Description":"Beschrijving","DataType":"Type gegevens","DefaultValue":"Standaard waarde","Required":"Verplicht","UserEditable":"Gebruikers kunnen bewerken","Value":"Waarde","AddOption":"Een optie toevoegen","AddCommand":"Voeg een commando toe","Filename":"Bestandsnaam","Content":"Inhoud","Source":"Bron","Target":"Doel","Version":"Versie","ReleaseType":"Versienummer","AddFile":"Bestand toevoegen","AddVariable":"Variabele toevoegen","Environment":"Omgeving","Environments":"Omgeving","AddEnvironment":"Omgeving toevoegen","DefaultEnvironment":"Standaard omgeving","AddEnvVar":"Voeg nieuwe variabele","EnvVars":"Omgevingsvariabelen","DockerImage":"Docker afbeelding","SaveSuccess":"Opgeslagen Templates","VarNameNoSpaces":"Een variabelenaam mag niet leeg zijn of spaties bevatten","SupportedEnvironments":"Ondersteunde Omgevingen","RunConfig":"Configuratie starten","PreHook":"Pre Run Hook","PostHook":"Laad Run Hook","AddPreStep":"Voeg Pre Run Stap toe","AddPostStep":"Voeg post-run-stap toe","DeletePreStep":"Verwijder Pre Run Stap","DeletePostStep":"Verwijder post-run-stap","Shutdown":"Afsluiten","Command":"Commando","WorkingDirectory":"Werkmap","Arguments":"Parameters","AddArgument":"Argument toevoegen","Convert":"Converteer","OfferV1Convert":"Deze template json ziet eruit als een template voor PufferPanel 1.x, wilt u dit automatisch omzetten naar een template voor PufferPanel 2.x?","import":{"CommunityWarning":"Deze sjablonen worden gemaakt door de gemeenschap en geleverd zonder enige garanties","OverrideWarning":"WAARSCHUWING: Geimporteerde templates overschrijven bestaande sjablonen met dezelfde ID","Import":"Sjabloon importeren","Tooltip":"Sjablonen importeren uit de officiële repository","Select":"Selecteer sjablonen om te importeren","Started":"Sjablonen importeren, even geduld a.u.b","Successful":"Sjabloon {template} succesvol geïmporteerd","NoTemplatesTitle":"Wilt u templates importeren?","NoTemplatesContent":"U heeft momenteel geen sjablonen. Sjablonen zijn noodzakelijk om servers aan te maken.<br/>Wilt u nu enkele sjablonen importeren uit de officiële PufferPanel templates?"},"stop":{"Command":"Commando","Signal":"Signaal"},"processors":{"download":{"ProcessorName":"Downloaden","files":"Bestanden"},"command":{"ProcessorName":"Opdrachten uitvoeren","commands":"Commando‘s"},"alterfile":{"ProcessorName":"Bestand wijzigen","regex":"Behandel zoeken als RegEx","search":"Tekst zoeken","replace":"Vervangen door"},"writefile":{"ProcessorName":"Schrijf naar bestand","text":"Inhoud"},"move":{"ProcessorName":"Bestanden verplaatsen","source":"Bron","target":"Doel"},"mkdir":{"ProcessorName":"Map aanmaken"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Versietype"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "0a23": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Tundmatu tõrge","ErrUnknownError":"Tundmatu tõrge","ErrInvalidCredentials":"Vigased andmed","ErrServiceNotAvailable":"Teenus pole saadaval","ErrEmailNotConfigured":"Meil pole seadistatud","ErrTokenInvalid":"Token on kehtetu","ErrClientNotFound":"Klienti ei leitud","ErrUserNotFound":"Kasutajat ei leitud","ErrLoginNotPermitted":"Logimine ei ole lubatud","ErrInvalidTokenState":"Kehtetu tokeni staatus","ErrSettingNotConfigured":"{setting} pole seadistatud","ErrNoTemplate":"Ühtegi malli nimega \'{name}\' ei leitud","ErrServiceInvalidProvider":"{service} ei toeta {provider}","ErrFieldRequired":"{field} on nõutud","ErrFieldMustBePrintable":"{field} peab olema prinditav ascii tähemärkidega","ErrFieldHasURICharacters":"{field} ei tohi sisaldada tähemärke mida ei kasutada URIdes","ErrFieldIsInvalidHost":"{field} peab olema kehtiv IP-aadress või FQDN","ErrFieldIsInvalidIP":"{field} peab olema kehtiv IP-aadress","ErrFieldTooLarge":"{field} ei saa olla suurem kui {max}","ErrFieldTooSmall":"{field} ei saa olla väiksem kui {min}","ErrFieldNotBetween":"{field} peab olema vahemikus {min} ja {max}","ErrFieldEqual":"{field1} ei tohi olla võrdne {field2}","ErrFieldNotEqual":"{field1} ei ole võrdne {field2}","ErrFieldNotEmail":"{field} ei ole kehtiv e-post","ErrFieldLength":"{field} peab olema vähemalt {length} tähemärki","ErrNoPermission":"Vabandame, teil pole luba sellele toimingule","ErrDatabaseNotAvailable":"Andmebaas pole saadaval","ErrNoNodes":"Sõlmesid pole saadaval","ErrNoTemplates":"Ühtegi malli pole saadaval","ErrPasswordRequirements":"Salasõna peab olema vähemalt {min} tähemärki","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Salasõnad ei ühti","ErrSessionTimedOut":"Sinu sessioon on aegunud, palun logi uuesti sisse","ErrMissingScope":"Teil puudub õigus selle tegevuse jaoks","ErrInvalidJson":"Json andmed on kehtetud","ErrSocketFailed":"WebSocketi ühenduses ilmnes viga, mõned funktsioonid võivad olla aeglased või katki","ErrInviteLinkInvalid":"Teie kutselink näib olevat vale","ErrSavingInviteduser":"Teie konto loomisel ilmnes viga","ErrDuplicateServerName":"Selle nimega server eksisteerib juba","ErrDuplicateNodeName":"Selle nimega sõlm juba eksisteerib","ErrDirectoryUploadNotSupported":"Kaustu ei saa üles laadida","ErrDockerNotSupported":"Docker ei ole toetatud selles sõlmes","ErrMissingBinary":"Puuduv binaar: {expected}","ErrUnsupportedOS":"OS ({actual}) ei toetata. toetatakse OS: {expected}","ErrUnsupportedArch":"Arhitektuur {actual} ei ole toetatud. Toetatud arhitektuurid: {expected}"}')
    },
    "0a9e": function(e) {
        e.exports = JSON.parse('{"Settings":"Ajustes","PanelSettings":"Configuración del panel","EmailSettings":"Ajustes del correo","MasterUrl":"URL Principal","MasterUrlHint":"El enlace desde el cual accederás al panel de control siguiendo el siguiente formato: http://localhost:8080","CompanyName":"Nombre de la empresa","DefaultTheme":"Tema por defecto","RegistrationEnabled":"Permitir que los usuarios se puedan registrar","RegistrationEnabledHint1":"Los usuarios autorregistrados no pueden hacer nada hasta que se den los permisos","RegistrationEnabledHint2":"Desactivar esto sólo previene el registro directo, la invitación a un servidor y la página de usuarios no se ven afectados","EmailProvider":"Proveedor de e-mail","emailProviders":{"none":"Ninguno","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Dirección de remitente","domain":"Dominio","key":"Clave API","host":"Servidor","username":"Usuario","password":"Contraseña"}}')
    },
    "0b0a": function(e) {
        e.exports = JSON.parse('{"Node":"Uzel","Nodes":"Uzly","Edit":"Upravit uzel","Add":"Přidat uzel","Update":"Aktualizovat uzel","Delete":"Smazat uzel","PublicHost":"Veřejný hostitel","PublicPort":"Veřejný port","PrivateHost":"Soukromý hostitel","PrivatePort":"Soukromý port","SftpPort":"SFTP port","WithPrivateAddress":"Použít jiný host/port pro komunikaci se serverem","WithPrivateAddressHint":"Tato oddělená adresa se již používá, když hlavní uzel potřebuje komunikovat s novým uzlem. Užitečné například, když jsou uzly ve stejné síti NAT.","SaveConfig":"Uložit konfiguraci","SavePublicKey":"Uložit veřejný klíč","DeploymentInstruction":"Pro nasazení uzlu nainstalujte PufferPanel na nový server a umístěte konfigurační soubor do `/etc/pufferpanel/`<br/>Poté restartujte PufferPanel na novém serveru.","UpdateSuccess":"Uzel byl úspěšně aktualizován","UpdateError":"Chyba při aktualizaci uzlu","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "0d04": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","Statistics":"Statistics","CPU":"CPU","Memory":"Memory","Files":"Files","Name":"Server Name","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","Admin":"Admin","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "0d3d": function(e) {
        e.exports = JSON.parse('{"Templates":"Шаблоны","NoTemplates":"Нет шаблонов","Deleted":"Шаблон удалён","New":"Создать новый шаблон","Edit":"Редактировать шаблон","Editor":"Редактор","Json":"JSON","Display":"Отображаемое имя","Type":"Тип","Variables":"Переменные","Install":"Установить","AddInstallStep":"Добавить шаг установки","DeleteInstallStep":"Удалить шаг установки","Description":"Описание","DataType":"Тип данных","DefaultValue":"Значение по умолчанию","Required":"Обязательно","UserEditable":"Пользователи могут редактировать","Value":"Значение","AddOption":"Добавить свойство","AddCommand":"Добавить команду","Filename":"Имя файла","Content":"Содержимое","Source":"Источник","Target":"Цель","Version":"Версия","ReleaseType":"Тип выпуска","AddFile":"Добавить файл","AddVariable":"Добавить переменную","Environment":"Окружение","Environments":"Окружения","AddEnvironment":"Добавить окружение","DefaultEnvironment":"Стандартное окружение","AddEnvVar":"Добавить переменную окружения","EnvVars":"Переменные окружения","DockerImage":"Снимок Docker","SaveSuccess":"Шаблон сохранён","VarNameNoSpaces":"Имя переменной не может быть пустым или содержать пробелы","SupportedEnvironments":"Поддерживаемые окружения","RunConfig":"Запустить конфигурацию","PreHook":"Хук перед запуском","PostHook":"Хук после запуска","AddPreStep":"Добавить шаг перед запуском","AddPostStep":"Добавить шаг после запуска","DeletePreStep":"Удалить шаг перед запуском","DeletePostStep":"Удалить шаг после запуска","Shutdown":"Выключить","Command":"Команда","WorkingDirectory":"Рабочий каталог","Arguments":"Аргументы","AddArgument":"Добавить аргумент","Convert":"Перерабатывать","OfferV1Convert":"Этот шаблон json выглядит как шаблон для PufferPanel 1.x, хотите ли вы автоматически преобразовать его в шаблон для PufferPanel 2.x?","import":{"CommunityWarning":"Эти шаблоны созданы сообществом и предоставляются без каких-либо гарантий","OverrideWarning":"ВНИМАНИЕ: Импортированные шаблоны БУДУТ перезаписывать существующие шаблоны с тем же ID","Import":"Импорт шаблонов","Tooltip":"Импорт шаблонов из официального репозитория","Select":"Выбрать шаблон для импорта","Started":"Импорт шаблонов, подождите минутку","Successful":"Шаблон {template} успешно импортирован","NoTemplatesTitle":"Вы хотите импортировать шаблон?","NoTemplatesContent":"В настоящее время у вас нет шаблонов. Шаблоны необходимы для создания серверов.<br/>Вы хотите импортировать шаблон из официального хранилища шаблонов PufferPanel?"},"stop":{"Command":"Команда","Signal":"Сигнал"},"processors":{"download":{"ProcessorName":"Скачать","files":"Файлы"},"command":{"ProcessorName":"Выполнить команду","commands":"Команды"},"alterfile":{"ProcessorName":"Сменить файл","regex":"Рассматривать поиск как RegEx","search":"Текст для поиска","replace":"Заменить"},"writefile":{"ProcessorName":"Записать в файл","text":"Содержание"},"move":{"ProcessorName":"Переместить файл","source":"Источник","target":"Цель"},"mkdir":{"ProcessorName":"Создать директорию"},"mojangdl":{"ProcessorName":"Загрузить Minecraft"},"forgedl":{"ProcessorName":"Скачать Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Скачать Minecraft SpongeForge","releaseType":"Тип релиза"},"fabricdl":{"ProcessorName":"Скачать Minecraft Fabric"},"javadl":{"ProcessorName":"Скачать Java","version":"Версия Java для установки (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Скачать игру из Steam","appId":"App Id"}}}')
    },
    "0dc9": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodi","Edit":"Modifica Nodo","Add":"Aggiungi Nodo","Update":"Aggiorna Nodo","Delete":"Elimina Nodo","PublicHost":"Host Pubblico","PublicPort":"Porta Pubblica","PrivateHost":"Host Privato","PrivatePort":"Porta Privata","SftpPort":"Porta SFTP","WithPrivateAddress":"Usa un host/porta diverso per la comunicazione tra server e altri server","WithPrivateAddressHint":"Questo indirizzo separato è usato quando il nodo principale deve parlare con il nuovo nodo. Utile per esempio quando i nodi sono nella stessa rete dietro un NAT.","SaveConfig":"Salva Configurazione","SavePublicKey":"Salva Chiave Pubblica","DeploymentInstruction":"Per distribuire il nodo, installa PufferPanel sul nuovo server e metti il file di configurazione in \'/etc/pufferpanel/\'<br/>Riavvia PufferPanel sul serve successivamente.","UpdateSuccess":"Nodo aggiornato con successo","UpdateError":"Errore durante l\'aggiornamento del nodo","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "0e57": function(e) {
        e.exports = JSON.parse('{"Users":"Użytkownicy","Add":"Dodaj użytkownika","AccountSettings":"Ustawienia konta","OldPassword":"Stare hasło","NewPassword":"Nowe Hasło","ConfirmPassword":"Potwierdź hasło","ChangePassword":"Zmień Hasło","ChangeInfo":"Zmień podstawowe dane konta","InfoChanged":"Twoje informacje zostały zmienione","PasswordChanged":"Twoje hasło zostało zmienione","AccountPassword":"Hasło do konta","Account":"Konto","Login":"Zaloguj","LoginLink":"Lub zaloguj się tutaj","Logout":"Wyloguj","Register":"Zarejestruj się","RegisterLink":"Lub zarejestruj się tutaj","RegisterSuccess":"Zarejestrowano pomyślnie.","NoEmailGiven":"Musisz podać adres e-mail użytkownika, który chcesz dodać","Username":"Nazwa użytkownika","Password":"Hasło","Email":"Adres e-mail","Edit":"Edytuj użytkownika","Update":"Zaktualizuj użytkownika","Delete":"Usuń użytkownika","CreateSuccess":"Konto utworzone pomyślnie","CreateError":"Nie udało się zaktualizować użytkownika","UpdateSuccess":"Zaktualizowano użytkowników","UpdateError":"Nie udało się zaktualizować użytkownika","PermsUpdateError":"Nie udało się zaktualizować uprawnień użytkownika","Otp":"Weryfikacja dwuetapowa","OtpEnable":"Włącz weryfikację dwuetapową","OtpDisable":"Wyłącz weryfikację dwuetapową","OtpHint":"Uwierzytelnianie dwuetapowe dodaje dodatkową warstwę zabezpieczeń twojego konta, wymagając więcej niż tylko hasła do logowania.","OtpSetup":"Konfiguracja 2FA","OtpSetupHint":"Zeskanuj kod QR za pomocą aplikacji uwierzytelniającej lub skopiuj poniższy tajny kod.","OtpSecret":"Tajny Kod","OtpConfirm":"Potwierdź używając kodu 2FA","OtpNeeded":"Wymagane 2FA"}')
    },
    "0f84": function(e) {
        e.exports = JSON.parse('{"Settings":"Beállítások","PanelSettings":"Panel Beállítások","EmailSettings":"Email Beállítások","MasterUrl":"Fő URL","MasterUrlHint":"Az alap URL, amin a http://localhost:8080 formában lehet elérni a panelt","CompanyName":"Vállakozás Neve","DefaultTheme":"Alapértelmezett Téma","RegistrationEnabled":"A felhasználók maguk regisztrálhatnak","RegistrationEnabledHint1":"A magukat regisztrált felhasználók nem csinálhatnak semmit, ameddig arra jogot nem kapnak","RegistrationEnabledHint2":"Ennek a kikapcsolása csak a közvetlen regisztrálást akadályozza meg, a szerverre való meghívásra és a Felhasználók lapra nincs hatással","EmailProvider":"Email Szolgáltató","emailProviders":{"none":"Ezek közül egyik sem","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"A feladó címe","domain":"Domain","key":"API kulcs","host":"Kiszolgáló","username":"Felhasználónév","password":"Jelszó"}}')
    },
    "0f9f": function(e) {
        e.exports = JSON.parse('{"Settings":"Paramètres","PanelSettings":"Paramètres panel","EmailSettings":"Paramètres e-mail","MasterUrl":"URL principale","MasterUrlHint":"L\'URL de base du panel est accessible sous le format http://localhost:8080","CompanyName":"Nom de la compagnie","DefaultTheme":"Thème par défaut","RegistrationEnabled":"Autoriser les utilisateurs à s\'inscrire en autonomie","RegistrationEnabledHint1":"Les utilisateurs qui se sont inscris eux-même ne peuvent rien faire sans permissions","RegistrationEnabledHint2":"Désactiver ceci n\'empêche que l\'enregistrement direct, les invitations à un serveur et la page des utilisateurs ne sont pas affectées","EmailProvider":"Fournisseur d\'e-mail","emailProviders":{"none":"Aucun","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Adresse de l\'expéditeur","domain":"Domaine","key":"Clé API","host":"Hôte","username":"Nom d\'utilisateur","password":"Mot de passe"}}')
    },
    "0fe0": function(e) {
        e.exports = JSON.parse('{"Templates":"Modelos","NoTemplates":"Não há modelos disponíveis","Deleted":"Modelo excluido","New":"Criar novo modelo","Edit":"Editar modelo","Editor":"Editor","Json":"JSON","Display":"Exibir nome","Type":"Tipo","Variables":"Variáveis","Install":"Instalar","AddInstallStep":"Adicionar passo de instalação","DeleteInstallStep":"Remover passo de instalação","Description":"Descrição","DataType":"Tipos do Dado","DefaultValue":"Valor padrão","Required":"Obrigatório","UserEditable":"Usuários podem editar","Value":"Valor","AddOption":"Adicionar uma opção","AddCommand":"Adicionar comando","Filename":"Nome do arquivo","Content":"Conteúdo","Source":"Fonte","Target":"Destino","Version":"Versão","ReleaseType":"Tipo de lançamento","AddFile":"Adicionar arquivo","AddVariable":"Adicionar variável","Environment":"Ambiente","Environments":"Ambientes","AddEnvironment":"Adicionar ambiente","DefaultEnvironment":"Ambiente padrão","AddEnvVar":"Adicionar variável de ambiente","EnvVars":"Variáveis de ambiente","DockerImage":"Imagem Docker","SaveSuccess":"Template Salvo","VarNameNoSpaces":"O nome da variável não pode estar em branco ou conter espaços","SupportedEnvironments":"Ambientes Suportados","RunConfig":"Rodar configuração","PreHook":"Pré-executar Hook","PostHook":"Pós-executar Hook","AddPreStep":"Adicionar etapa de pré-execução","AddPostStep":"Adicionar etapa de pós-execução","DeletePreStep":"Excluir etapa de pré-execução","DeletePostStep":"Excluir etapa de pré-execução","Shutdown":"Desligar","Command":"Comando","WorkingDirectory":"Diretório de execução","Arguments":"Argumentos","AddArgument":"Adicionar argumento","Convert":"Converter","OfferV1Convert":"Esse modelo json se parece com um modelo para o PufferPanel 1.x, você deseja converter automaticamente para um modelo para o PufferPanel 2.x?","import":{"CommunityWarning":"Estes modelos são feitos pela comunidade e sem qualquer garantia de pleno funcionamento","OverrideWarning":"AVISO: Modelos importados substituirão modelos existentes com o mesmo ID","Import":"Importar modelos","Tooltip":"Importar modelos do repositório oficial","Select":"Selecionar modelos para importar","Started":"Importando modelos, por favor, aguarde um momento","Successful":"O modelo {template} foi importado com sucesso","NoTemplatesTitle":"Você quer importar esses modelos?","NoTemplatesContent":"Atualmente, você não tem nenhum modelo. Modelos são necessários para criar servidores.<br/>Você deseja importar alguns templates do repositório oficial do PufferPanel?"},"stop":{"Command":"Comando","Signal":"Sinal"},"processors":{"download":{"ProcessorName":"Baixar","files":"Arquivos"},"command":{"ProcessorName":"Executar comando","commands":"Comandos"},"alterfile":{"ProcessorName":"Alterar arquivo","regex":"Tratar a pesquisa com RegEx","search":"Texto para procurar","replace":"Substituir por"},"writefile":{"ProcessorName":"Gravar ao arquivo","text":"Conteúdo"},"move":{"ProcessorName":"Mover arquivo","source":"Origem","target":"Destino"},"mkdir":{"ProcessorName":"Criar diretório"},"mojangdl":{"ProcessorName":"Baixe Minecraft"},"forgedl":{"ProcessorName":"Baixe Minecraft Fabric"},"spongeforgedl":{"ProcessorName":"Baixe Minecraft SpongeForge","releaseType":"Tipo de lançamento"},"fabricdl":{"ProcessorName":"Baixar Minecraft Fabric"},"javadl":{"ProcessorName":"Baixar Java","version":"Versão do Java para instalar (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Baixar jogo da Steam","appId":"App Id"}}}')
    },
    1: function(e, t) {},
    1093: function(e) {
        e.exports = JSON.parse('{"Credentials":"Dane uwierzytelniające OAuth2","ClientId":"ID Klienta","ClientSecret":"Sekret Klienta","NewClientWarning":"Zauważ, że po zamknięciu tego okna dialogowego, dialog nigdy nie zostanie on ponownie wyświetlony. Utrata lub zapomnianie o nim sprawi, że klient będzie całkowicie bezużyteczny.","Create":"Utwórz nowego klienta OAuth2","UnnamedClient":"Klient OAuth2 bez nazwy","Docs":"Zobacz dokumentację API","DeleteWarning":"Usunięcie klienta OAuth2 nie może zostać cofnięte i nie da się utworzyć nowego klienta z tymi samymi danymi uwierzytelniającymi. Wszystkie integracje nadal używające tego klienta zostaną przerwane po jego usunięciu.","ConfirmDelete":"Zdaję sobie sprawę z efektów, jakie będzie miało usunięcie tego klienta OAuth2 i chcę kontynuować.","Delete":"Usunąć {clientName}?","Clients":"Klienci OAuth2","AccountDescription":"Klienci OAuth2 wymienieni tutaj dziedziczą wszystkie uprawnienia twoich kont","ServerDescription":"Klienci OAuth2 wymienieni tutaj tylko dziedziczą uprawnienia twoich kont na tym serwerze"}')
    },
    "10f3": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("server-type-generic", {
                attrs: {
                    server: e.server
                }
            })
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = Object(s["a"])(o, r, n, !1, null, "0bc0373d", null);
        t["default"] = l.exports
    },
    "110f": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("v-list", e._l(e.value, (function(t, r) {
                return a("v-list-item", {
                    key: t.name,
                    attrs: {
                        link: ""
                    },
                    on: {
                        click: function(t) {
                            return e.startEdit(r)
                        }
                    }
                }, [a("v-list-item-content", {
                    domProps: {
                        textContent: e._s(t.display)
                    }
                }), a("v-list-item-action", {
                    staticClass: "flex-row"
                }, [a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var r = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                }
                            }, r), [a("v-icon", [e._v("mdi-pencil")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Edit"))
                    }
                })]), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        return t.stopPropagation(),
                                        e.remove(r)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-close")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Delete"))
                    }
                })])], 1)], 1)
            }
            )), 1), a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        return e.addVar()
                    }
                }
            }), a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.reset()
                    }
                },
                model: {
                    value: e.edit,
                    callback: function(t) {
                        e.edit = t
                    },
                    expression: "edit"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("common.Name")
                },
                model: {
                    value: e.currentEdit.name,
                    callback: function(t) {
                        e.$set(e.currentEdit, "name", t)
                    },
                    expression: "currentEdit.name"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("template-variable", {
                model: {
                    value: e.currentEdit,
                    callback: function(t) {
                        e.currentEdit = t
                    },
                    expression: "currentEdit"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "success",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.save()
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = [];
        const i = e=>"" !== e && -1 === e.indexOf(" ");
        var o = {
            props: {
                value: {
                    type: Array,
                    default: ()=>[]
                }
            },
            data() {
                return {
                    add: !1,
                    edit: !1,
                    editIndex: 0,
                    currentEdit: {},
                    variableTemplate: {
                        required: !0,
                        userEdit: !0,
                        display: "",
                        desc: "",
                        type: "string",
                        value: "",
                        name: ""
                    }
                }
            },
            methods: {
                addVar() {
                    const e = [...this.value];
                    e.push({
                        ...this.variableTemplate
                    }),
                    this.$emit("input", e),
                    this.add = !0,
                    this.startEdit(this.value.length)
                },
                startEdit(e) {
                    this.editIndex = e,
                    this.currentEdit = {
                        ...this.value[e]
                    },
                    this.edit = !0
                },
                remove(e) {
                    const t = [...this.value];
                    t.splice(e, 1),
                    this.$emit("input", t)
                },
                save() {
                    if (!i(this.currentEdit.name || ""))
                        return void this.$toast.error(this.$t("templates.VarNameNoSpaces"));
                    const e = [...this.value];
                    e[this.editIndex] = this.currentEdit,
                    this.$emit("input", e),
                    this.add = !1,
                    this.reset()
                },
                reset() {
                    this.add && this.$emit("input", [...this.value].filter(e=>"" !== e.name)),
                    this.add = !1,
                    this.edit = !1,
                    this.editIndex = 0,
                    this.currentEdit = {}
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("8336")
          , m = a("62ad")
          , p = a("132d")
          , v = a("8860")
          , h = a("da13")
          , g = a("1800")
          , f = a("5d23")
          , S = a("0fd9")
          , k = a("3a2f")
          , E = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = E.exports;
        u()(E, {
            VBtn: c["a"],
            VCol: m["a"],
            VIcon: p["a"],
            VList: v["a"],
            VListItem: h["a"],
            VListItemAction: g["a"],
            VListItemContent: f["a"],
            VRow: S["a"],
            VTooltip: k["a"]
        })
    },
    "12a8": function(e) {
        e.exports = JSON.parse('{"Settings":"Settings","PanelSettings":"Panel Settings","EmailSettings":"Email Settings","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Company Name","DefaultTheme":"Default Theme","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Address","domain":"Domain","key":"API Key","host":"Host","username":"Username","password":"Password"}}')
    },
    "12f6": function(e) {
        e.exports = JSON.parse('{"Users":"Kasutajad","Add":"Lisa Kasutaja","AccountSettings":"Konto seaded","OldPassword":"Vana Parool","NewPassword":"Uus Parool","ConfirmPassword":"Kinnita Parool","ChangePassword":"Muuda Parooli","ChangeInfo":"Muuda Konto Seadeid","InfoChanged":"Teie informatsioon on muudetud","PasswordChanged":"Sinu salasõna on muudetud","AccountPassword":"Konto salasõna","Account":"Konto","Login":"Logimine","LoginLink":"Või logi siit","Logout":"Väljalogimine","Register":"Registreerumine","RegisterLink":"Või registreeruge siin","RegisterSuccess":"Oled edukalt registreerunud","NoEmailGiven":"Sa pead andma kasutaja meiliaadressi mida soovid lisada","Username":"Kasutajanimi","Password":"Salasõna","Email":"E-post","Edit":"Muuda kasutajat","Update":"Uuenda kasutajat","Delete":"Kustuta kasutaja","CreateSuccess":"Kasutaja loomine õnnestus","CreateError":"Kasutaja loomine ebaõnnestus","UpdateSuccess":"Uuendatud Kasutaja","UpdateError":"Kasutaja uuendamine ebaõnnestus","PermsUpdateError":"Kasutaja õiguste muutmine ebaõnnestus","Otp":"Kaheatsemeline autentimine","OtpEnable":"Luba 2FA","OtpDisable":"Keela 2FA","OtpHint":"Kahefaktoriline autentimine lisab teie kontole täiendava turvakihi, nõudes sisselogimiseks enamat kui lihtsalt parooli.","OtpSetup":"2FA Seadistamine","OtpSetupHint":"Skannige QR-kood oma autentimisrakenduse abil või kopeerige sellesse allolev salakood.","OtpSecret":"Salajane Kood","OtpConfirm":"Kinnita kasutades 2FA koodi","OtpNeeded":"2FA nõutud"}')
    },
    1448: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Errore sconosciuto","ErrUnknownError":"Errore sconosciuto","ErrInvalidCredentials":"Credenziali non valide","ErrServiceNotAvailable":"Servizio non disponibile","ErrEmailNotConfigured":"Email non configurata","ErrTokenInvalid":"Il token non è valido","ErrClientNotFound":"Client non trovato","ErrUserNotFound":"Utente non trovato","ErrLoginNotPermitted":"Accesso non permesso","ErrInvalidTokenState":"Stato del token non valido","ErrSettingNotConfigured":"{setting} non è configurato","ErrNoTemplate":"Nessun modello con nome \'{name}\' è stato trovato","ErrServiceInvalidProvider":"{service} non supporta {provider}","ErrFieldRequired":"{field} è obbligatorio","ErrFieldMustBePrintable":"{field} deve essere in caratteri ascii stampabili","ErrFieldHasURICharacters":"{field} deve contenere caratteri che non possono essere usati negli URI","ErrFieldIsInvalidHost":"{field} deve essere un IP o FQDN valido","ErrFieldIsInvalidIP":"{field} deve essere un IP valido","ErrFieldTooLarge":"{field} non può essere più grande di {max}","ErrFieldTooSmall":"{field} non può essere più piccolo di {min}","ErrFieldNotBetween":"{field} deve essere compreso tra {min} e {max}","ErrFieldEqual":"{field1} non può essere uguale a {field2}","ErrFieldNotEqual":"{field1} non è uguale a {field2}","ErrFieldNotEmail":"{field} non è un email valida","ErrFieldLength":"{field} deve essere di almeno {length} caratteri","ErrNoPermission":"Non hai il permesso di praticare quest\'azione","ErrDatabaseNotAvailable":"Il database non è disponibile","ErrNoNodes":"Nessun nodo disponibile","ErrNoTemplates":"Nessun modello disponibile","ErrPasswordRequirements":"La password deve essere di almeno {min} caratteri","ErrUsernameRequirements":"Il nome utente deve contenere almeno 5 caratteri e contenere solo alfanumerici, _, o -","ErrPasswordsNotIdentical":"Le password non sono uguali","ErrSessionTimedOut":"La tua sessione è scaduta, sei pregato di accedere di nuovo","ErrMissingScope":"Non sei autorizzato a praticare quest\'azione","ErrInvalidJson":"I dati json non sono validi","ErrSocketFailed":"La connessione WebSocket ha riscontrato un errore, alcune funzionalità potrebbero essere lente o danneggiate","ErrInviteLinkInvalid":"Il tuo link di invito sembra non essere valido","ErrSavingInviteduser":"Si è verificato un errore nella creazione dell\'account","ErrDuplicateServerName":"Esiste già un server con questo nome","ErrDuplicateNodeName":"Esiste già un nodo con questo nome","ErrDirectoryUploadNotSupported":"Impossibile caricare i file","ErrDockerNotSupported":"Docker non è supportato in questo nodo","ErrMissingBinary":"Binario mancante: {expected}","ErrUnsupportedOS":"Il tuo sistema operativo ({actual}) non è supportato. I sistemi operativi supportati sono: {expected}","ErrUnsupportedArch":"L\'architettura {actual} non è supportata. Le architetture supportate sono: {expected}"}')
    },
    1469: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Det finns inga servrar du har tillgång till","Servers":"Servrar","Add":"Lägg till server","Console":"Konsol","Controls":"Kontroller","SFTPInfo":"SFTP-information","Restart":"Starta om","Start":"Starta","Stop":"Stoppa","Kill":"Döda","Install":"Installera","Send":"Skicka","Pause":"Pausa","Statistics":"Statistik","CPU":"CPU","Memory":"Minne","Files":"Filer","Name":"Servernamn","NameInvalid":"Servernamnet kan inte vara tomt eller innehålla specialtecken","SelectNode":"Välj nod","SelectTemplate":"Välj mall","SelectThisTemplate":"Använd denna mall","SelectUser":"Välj en användare","Environment":"Miljö","SelectEnvironment":"Välj miljö","TypeUsername":"Ange användarnamn","Admin":"Admin","AdminControls":"Administratörsinställningar","Settings":"Inställningar","NoEditableVars":"Den här servern har inga variabler som du kan redigera","ConfirmDelete":"Vill du verkligen ta bort denna server? (detta kan inte ångras)","Delete":"Ta bort server","Deleted":"Server borttagen","NoReadme":"Ingen \\"readme\\" tillgänglig för denna mall","SftpConnection":"Anslut till SFTP","EditDefinition":"Redigera serverdefinition","Reload":"Ladda om serverdata från disk","Reloaded":"Serverdata omladdad","Autostart":"Starta servern när noden startar","Autorestart":"Starta om servern när den stoppas vanligt","Autorecover":"Starta om servern när den kraschar","Rename":"Döp om server","Tasks":"Uppgifter","NoTasks":"Inga uppgifter","RunTask":"Kör aktivitet","NewTask":"Ny uppgift","EditTask":"Redigera uppgift","TaskDeleted":"Uppgift borttagen","TaskTriggered":"Uppgift utlöst","EnableSchedule":"Kör uppgiften automatiskt","TaskScheduleInvalid":"Uppgiftsschema är ogiltigt","TaskScheduleManual":"Endast manuell körning","CronExpression":"Cron uttryck","Hourly":"Varje timme","Daily":"Varje dag","Weekly":"Varje vecka","Monthly":"Varje månad","Advanced":"Avancerat","HourlyTab":"Var {hourInterval} timme vid minut {minute}","DailyTab":"Var {dayInterval} dag vid {hour}:{minute}","WeeklyTab":"Var {weekdays} vid {hour}:{minute}","MonthlyTab":"Var {monthInterval} månad den {day} dagen vid {hour}:{minute}"}')
    },
    1491: function(e) {
        e.exports = JSON.parse('{"Users":"Gebruikers","Add":"Gebruiker Toevoegen","AccountSettings":"Accountinstellingen","OldPassword":"Oud Wachtwoord","NewPassword":"Nieuw Wachtwoord","ConfirmPassword":"Bevestig Wachtwoord","ChangePassword":"Verander Wachtwoord","ChangeInfo":"Accountgegevens Wijzigen","InfoChanged":"Jouw informatie is gewijzigd","PasswordChanged":"Jouw wachtwoord is gewijzigd","AccountPassword":"Account Wachtwoord","Account":"Account","Login":"Inloggen","LoginLink":"Of log hier in","Logout":"Uitloggen","Register":"Registreren","RegisterLink":"Of registreer hier","RegisterSuccess":"Je bent succesvol geregistreerd","NoEmailGiven":"Je moet het e-mailadres opgeven van de gebruiker die je wilt toevoegen","Username":"Gebruikersnaam","Password":"Wachtwoord","Email":"E-mail","Edit":"Wijzig gebruiker","Update":"Gebruiker Bijwerken","Delete":"Gebruiker Verwijderen","CreateSuccess":"Gebruiker succesvol aangemaakt","CreateError":"Gebruiker aanmaken mislukt","UpdateSuccess":"Gebruiker Bijgewerkt","UpdateError":"Gebruiker bijwerken mislukt","PermsUpdateError":"Gebruikersrechten updaten mislukt","Otp":"Authenticatie in twee stappen","OtpEnable":"Schakel 2FA in","OtpDisable":"Schakel 2FA uit","OtpHint":"Tweestapsverificatie voegt een extra beveiligingslaag toe aan je account door meer dan alleen een wachtwoord in te loggen.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan de QR-code met uw authenticator-applicatie of kopieer de onderstaande geheime code erin.","OtpSecret":"Geheime code","OtpConfirm":"Bevestig met een 2FA-code","OtpNeeded":"2FA vereist"}')
    },
    1551: function(e) {
        e.exports = JSON.parse('{"Node":"Nœud","Nodes":"Nœuds","Edit":"Éditer le Nœud","Add":"Ajouter un Nœud","Update":"Mettre à jour le Nœud","Delete":"Supprimer le Nœud","PublicHost":"Hôte Public","PublicPort":"Port Public","PrivateHost":"Hôte Privé","PrivatePort":"Port Privé","SftpPort":"Port SFTP","WithPrivateAddress":"Avec adresse privée","WithPrivateAddressHint":"Avec indice d\'adresse privée.","SaveConfig":"Sauvegarder la configuration","SavePublicKey":"Sauvegarder la clé publique","DeploymentInstruction":"Pour déployer le nœud, installez PufferPanel sur le nouveau serveur et placez le fichier de configuration dans `/etc/pufferpanel`<br/>Redémarrez PufferPanel sur le nouveau serveur une fois terminé.","UpdateSuccess":"Nœud mis à jour avec succès","UpdateError":"Erreur lors de la mise à jour du nœud","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "159a": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"لا توجد خيارات محددة لهذهة البيئة","docker":{"name":"Docker","image":"صورة","networkMode":"وضع الشبكة","networkName":"إسم الشبكة","bindings":"الروابط","portBindings":"روابط المنفذ","OutsidePort":"المنفذ الخارجي","InsidePort":"المنفذ الداخلي","HostPath":"مسار المضيف","ContainerPath":"مسار الحاوية"},"standard":{"name":"قياسي"},"tty":{"name":"TTY"}}')
    },
    1616: function(e) {
        e.exports = JSON.parse('{"Users":"Kullanıcılar","Add":"Kullanıcı Ekle","AccountSettings":"Hesap Ayarları","OldPassword":"Eski Parola","NewPassword":"Yeni Parola","ConfirmPassword":"Parolayı Doğrula","ChangePassword":"Parola Değiştir","ChangeInfo":"Hesap Ayrıntılarını Değiştir","InfoChanged":"Bilgileriniz değiştirildi","PasswordChanged":"Parolanız değiştirildi","AccountPassword":"Hesap Parolası","Account":"Hesap","Login":"Giriş","LoginLink":"Veya buradan giriş yapın","Logout":"Çıkış Yap","Register":"Kayıt Ol","RegisterLink":"Veya buradan Kayıt olun","RegisterSuccess":"Başarılı bir şekilde kayıt oldunuz","NoEmailGiven":"Eklemek istediğiniz kullanıcının e-postası nı yazmalısınız","Username":"Kullanıcı Adı","Password":"Şifre","Email":"E-Posta","Edit":"Kullanıcı Düzenle","Update":"Kullanıcıyı Güncelle","Delete":"Kullanıcı Sil","CreateSuccess":"Kullanıcı başarıyla oluşturuldu","CreateError":"Kullanıcı oluşturulması başarısız","UpdateSuccess":"Kullanıcı Güncelleme Başarılı","UpdateError":"Kullanıcı Güncellenemedi","PermsUpdateError":"Kullanıcı izinleri güncellenemedi","Otp":"İki aşamalı doğrulama","OtpEnable":"İki aşamalı doğrulamayı aç","OtpDisable":"İki aşamalı doğrulamayı kapat","OtpHint":"İki aşamalı doğrulama, oturum açmak için yalnızca bir paroladan fazlasını gerektirerek hesabınıza ek bir güvenlik katmanı ekler.","OtpSetup":"İki aşamalı doğrulama kurulum","OtpSetupHint":"Doğrulayıcı uygulamanızı kullanarak QR kodunu tarayın veya aşağıdaki gizli kodu içine kopyalayın.","OtpSecret":"Gizli kod","OtpConfirm":"İki aşamalı doğrulama kullanarak doğrula","OtpNeeded":"İki aşamalı doğrulama gerekli"}')
    },
    1649: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nimi","Address":"Aadress","Online":"Võrgus","Offline":"Võrgust väljas","Loading":"Laadimine...","General":"Üldine","Language":"Keel","SelectLanguage":"Vali Keel","Settings":"Seaded","Update":"Uuenda","Edit":"Redigeeri","Delete":"Kustuta","Create":"Loo","Save":"Salvesta","Saved":"Salvestatud","SaveFailed":"Salvestamine ebaõnnestus","Cancel":"Loobu","Confirm":"Kinnita","Actions":"Tegevused","Host":"Host","Port":"Port","Template":"Mallid","Options":"Valikud","Collapse":"Koonda","Copied":"Kopeeritud lõikelauale","Unknown":"Teadmata","Search":"Otsi","Back":"Tagasi","Next":"Järgmine","LanguageName":"Eesti","Details":"Üksikasjad","ErrorDetails":"Tõrke Üksikasjad","HelpTranslate":"Aita tõlkida PufferPanelit","DarkMode":"Tume Režiim","ThemeOptions":"Teema Valikud","Protocol":"Protokoll","Add":"Lisa","Ignore":"Ignoreeri","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäev","Friday":"Reede","Saturday":"Laupäev","Sunday":"Pühapäev","Description":"Kirjeldus"}')
    },
    "164a": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 クライアント認証情報","ClientId":"クライアント ID","ClientSecret":"クライアントシークレット","NewClientWarning":"クライアントシークレットをメモしてください。このダイアログを閉じた後は二度と表示されません。これを紛失したり忘れたりすると、このクライアントは完全に使用できなくなります。","Create":"新しい OAuth2 クライアントを作成","UnnamedClient":"名前なしOAuth2クライアント","Docs":"APIドキュメントはこちら","DeleteWarning":"OAuth2クライアントを削除すると、元に戻すことも、同じ認証情報で新しいクライアントを作成することもできません。このクライアントを使用している全てのインテグレーションは、削除後機能しなくなります。","ConfirmDelete":"このOAuth2クライアントを削除することによる影響を理解しており、続行します。","Delete":"{clientName} を削除しますか？","Clients":"OAuth2クライアント","AccountDescription":"このOAuth2クライアントは、あなたのアカウントのすべての権限を継承します","ServerDescription":"このOAuth2クライアントは、このサーバー上のあなたのアカウントの権限のみ継承します"}')
    },
    "16bf": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    "16e4": function(e) {
        e.exports = JSON.parse('{"ServersView":"Może wyświetlać ten serwer","ServersEdit":"Edytuj serwer","ServersInstall":"Zainstaluj serwer","ServersConsole":"Zobacz konsolę","ServersConsoleSend":"Wysyłanie poleceń do konsoli","ServersStop":"Zatrzymaj i zabij serwer","ServersStart":"Uruchom serwer","ServersStat":"Zobacz statystyki procesora i pamięci","ServersFiles":"Zezwalaj na dostęp do plików za pomocą SFTP","ServersFilesGet":"Przeglądaj i pobieraj pliki za pomocą menedżera plików","ServersFilesPut":"Edytuj i wysyłaj pliki za pomocą menedżera plików","ServersEditUsers":"Edytuj dostęp użytkownika do tego serwera","Admin":"Administrator (daje to wszelkie możliwe uprawnienia)","ViewServers":"Zobacz moje Serwery","CreateServers":"Tworzenie nowych serwerów","DeleteServers":"Usuwanie serwerów","EditServerAdmin":"Edycja ustawień serwera","ViewNodes":"Wyświetl Maszyny","EditNodes":"Edytuj Maszyny","DeployNodes":"Dodaj nowe Maszyny","ViewTemplates":"Zobacz szablony","EditTemplates":"Edytuj szablony","ViewUsers":"Zobacz wszystkich użytkowników","EditUsers":"Edytuj innych użytkowników","PanelSettings":"Zmień ustawienia panelu"}')
    },
    1727: function(e) {
        e.exports = JSON.parse('{"Server":"服务器","NoServers":"您没有可使用的服务器","Servers":"服务器","Add":"添加服务器","Console":"控制台","Controls":"控制","SFTPInfo":"SFTP 信息","Restart":"重启","Start":"开启","Stop":"停止","Kill":"强制关闭","Install":"安装","Send":"发送","Pause":"暂停","Statistics":"统计","CPU":"CPU","Memory":"内存","Files":"文件","Name":"服务器名称","NameInvalid":"服务器名称不能为空或包含特殊字符","SelectNode":"请选择节点","SelectTemplate":"请选择模板","SelectThisTemplate":"使用此模板","SelectUser":"请选择用户","Environment":"环境","SelectEnvironment":"请选择环境","TypeUsername":"请键入用户名","Admin":"管理员","AdminControls":"管理员控制","Settings":"设置","NoEditableVars":"此服务器暂无您可编辑的变量","ConfirmDelete":"您真的想要删除此服务器吗？（此操作无法撤销）","Delete":"删除服务器","Deleted":"已删除服务器","NoReadme":"此模板暂无可用的自述文件","SftpConnection":"连接至 SFTP","EditDefinition":"编辑服务器定义","Reload":"从磁盘上重新载入服务器数据","Reloaded":"已重载服务器数据","Autostart":"在节点开启时启动此服务器","Autorestart":"在服务器正常关闭后重启","Autorecover":"在服务器崩溃后重启","Rename":"重命名服务器","Tasks":"任务","NoTasks":"无任务","RunTask":"运行任务","NewTask":"新建任务","EditTask":"编辑任务","TaskDeleted":"任务已删除","TaskTriggered":"触发任务","EnableSchedule":"自动运行任务","TaskScheduleInvalid":"任务计划无效","TaskScheduleManual":"仅手动运行","CronExpression":"Cron 表达式","Hourly":"每小时","Daily":"每天","Weekly":"每周","Monthly":"每月","Advanced":"高级选项","HourlyTab":"每 {hourInterval} 小时的 {minute} 分钟","DailyTab":"每 {dayInterval} 天在 {hour}:{minute}","WeeklyTab":"每 {weekdays} 的 {hour}:{minute}","MonthlyTab":"每 {monthInterval} 个月在 {day} 天的 {hour}:{minute}"}')
    },
    1773: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 klientens opplysninger","ClientId":"Klient ID","ClientSecret":"Klient hemmelighet","NewClientWarning":"Noter klienthemmeligheten, etter at du har lukket denne dialogboksen vil den aldri bli vist igjen. Å miste eller glemme den vil gjøre denne klienten helt ubrukelig.","Create":"Lag ny OAuth2-klient","UnnamedClient":"OAuth2-klienten uten navn","Docs":"Finn API-dokumentasjon her","DeleteWarning":"Sletting av en OAuth2-klient kan ikke angres og det kan heller ikke opprettes en ny klient med samme legitimasjon. Alle integrasjoner som fortsatt bruker denne klienten, vil bryte etter at den er slettet.","ConfirmDelete":"Jeg er klar over effektene ved å slette denne OAuth2-klienten vil ha, og jeg ønsker å fortsette.","Delete":"Slett {clientName}?","Clients":"OAuth2 klienter","AccountDescription":"OAuth2 klientene listet opp her får alle dine kontotillatelser","ServerDescription":"OAuth2 klientene oppført her får bare dine kontotillatelser på denne serveren"}')
    },
    "17a8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"この環境に固有のオプションはありません","docker":{"name":"Docker","image":"画像","networkMode":"ネットワークモード","networkName":"ネットワーク名","bindings":"割り当て","portBindings":"ポート割り当て","OutsidePort":"外部ポート","InsidePort":"内部ポート","HostPath":"ホストパス","ContainerPath":"コンテナパス"},"standard":{"name":"標準"},"tty":{"name":"TTY"}}')
    },
    1813: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 klientuppgifter","ClientId":"Klient-ID","ClientSecret":"Klienthemlighet","NewClientWarning":"Notera klientens hemlighet, efter att ha stängt denna dialog kommer den aldrig att visas igen. Om du förlorar eller glömmer den kommer den här klienten att bli helt oanvändbar.","Create":"Skapa ny OAuth2-klient","UnnamedClient":"Namnlös OAuth2-klient","Docs":"Hitta API-dokumentation här","DeleteWarning":"Att ta bort en OAuth2-klient kan inte ångras och inte heller kan en ny klient skapas med samma uppgifter. Alla integrationer som fortfarande använder denna klient kommer att brytas efter dess borttagning.","ConfirmDelete":"Jag är medveten om effekterna av att ta bort den här OAuth2-klienten och jag vill fortsätta.","Delete":"Ta bort {clientName}?","Clients":"OAuth2 klienter","AccountDescription":"OAuth2-klienter som listas här ärver alla dina kontobehörigheter","ServerDescription":"OAuth2-klienter som listas här ärver endast dina kontobehörigheter på denna server"}')
    },
    "18c4": function(e) {
        e.exports = JSON.parse('{"Users":"Utenti","Add":"Aggiungi Utente","AccountSettings":"Impostazioni Profilo","OldPassword":"Vecchia Password","NewPassword":"Nuova Password","ConfirmPassword":"Conferma Password","ChangePassword":"Modifica Password","ChangeInfo":"Modifica Dettagli Profilo","InfoChanged":"Le tue informazioni sono state modificate","PasswordChanged":"La tua password è stata modificata","AccountPassword":"Password del Profilo","Account":"Profilo","Login":"Accesso","LoginLink":"O accedi qui","Logout":"Disconnettiti","Register":"Registrati","RegisterLink":"O registrati qui","RegisterSuccess":"Ti sei registrato correttamente","NoEmailGiven":"Devi fornire l\'email dell\'utente che vuoi aggiungere","Username":"Nome utente","Password":"Password","Email":"Email","Edit":"Modifica Utente","Update":"Aggiorna Utente","Delete":"Elimina Utente","CreateSuccess":"Utente creato correttamente","CreateError":"Creazione utente fallita","UpdateSuccess":"Utente Aggiornato","UpdateError":"Impossibile aggiornare l\'utente","PermsUpdateError":"Impossibile aggiungere i permessi dell\'utente","Otp":"Autenticazione a due fattori","OtpEnable":"Abilita 2FA","OtpDisable":"Disabilita 2FA","OtpHint":"L\'autenticazione a due fattori aggiunge un ulteriore livello di sicurezza al tuo account richiedendo più di una semplice password per accedere.","OtpSetup":"2FA Setup","OtpSetupHint":"Scansiona il codice QR usando l\'applicazione di autenticazione o copia il codice segreto qui sotto.","OtpSecret":"Codice Segreto","OtpConfirm":"Conferma utilizzando un codice 2FA","OtpNeeded":"2FA richiesto"}')
    },
    "18c6": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"未知錯誤","ErrUnknownError":"未知錯誤","ErrInvalidCredentials":"無效憑證","ErrServiceNotAvailable":"服務無法使用","ErrEmailNotConfigured":"尚未設定電子郵件","ErrTokenInvalid":"無效 Token","ErrClientNotFound":"找不到用戶端","ErrUserNotFound":"找不到使用者","ErrLoginNotPermitted":"不允許登入","ErrInvalidTokenState":"未知 token 狀態","ErrSettingNotConfigured":"未設定 {setting}","ErrNoTemplate":"找不到名為「{name}」的範本","ErrServiceInvalidProvider":"{service} 不支援 {provider}","ErrFieldRequired":"{field} 必填","ErrFieldMustBePrintable":"{field} 必須是個可顯示的 ascii 字元","ErrFieldHasURICharacters":"{field} 中不能包含不能在網址中使用的字元","ErrFieldIsInvalidHost":"{field} 必須為有效的 IP 或 FQDN","ErrFieldIsInvalidIP":"{field} 必須為有效的 IP","ErrFieldTooLarge":"{field} 不能大於 {max}","ErrFieldTooSmall":"{field} 不能小於 {min}","ErrFieldNotBetween":"{field} 必須包含在 {min} 與 {max} 之間","ErrFieldEqual":"{field1} 不能等於 {field2}","ErrFieldNotEqual":"{field1} 不等於 {field2}","ErrFieldNotEmail":"{field} 不是一個有效的電子郵件","ErrFieldLength":"{field} 必須至少有 {length} 字元","ErrNoPermission":"您無權執行此操作","ErrDatabaseNotAvailable":"資料庫無法使用","ErrNoNodes":"沒有已知節點","ErrNoTemplates":"沒有已知範本","ErrPasswordRequirements":"密碼必須至少有 8 個字元","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"密碼不相同","ErrSessionTimedOut":"您的登入階段已過期，請重新登入","ErrMissingScope":"您無權執行此操作","ErrInvalidJson":"無效的 JSON 檔案","ErrSocketFailed":"WebSocket 連線出現錯誤，有些功能可能會變慢或無法使用","ErrInviteLinkInvalid":"您的邀請連結似乎無效","ErrSavingInviteduser":"建立帳戶時發生錯誤","ErrDuplicateServerName":"具有此名稱的服務器已存在","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"無法上傳資料夾","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "19d7": function(e) {
        e.exports = JSON.parse('{"Users":"Användare","Add":"Lägg till användare","AccountSettings":"Kontoinställningar","OldPassword":"Gammalt lösenord","NewPassword":"Nytt lösenord","ConfirmPassword":"Bekräfta lösenord","ChangePassword":"Ändra lösenord","ChangeInfo":"Ändra kontouppgifter","InfoChanged":"Din information har ändrats","PasswordChanged":"Ditt lösenord har ändrats","AccountPassword":"Kontolösenord","Account":"Konto","Login":"Logga in","LoginLink":"Eller logga in här","Logout":"Logga ut","Register":"Registrera","RegisterLink":"Eller registrera dig här","RegisterSuccess":"Du har registrerat dig","NoEmailGiven":"Du måste ange e-post för den användare du vill lägga till","Username":"Användarnamn","Password":"Lösenord","Email":"E-post","Edit":"Redigera användare","Update":"Uppdatera användare","Delete":"Ta bort användare","CreateSuccess":"Användaren har skapats","CreateError":"Kunde inte skapa användare","UpdateSuccess":"Uppdaterat användare","UpdateError":"Det gick inte att uppdatera användaren","PermsUpdateError":"Misslyckades att uppdatera användarbehörigheter","Otp":"Tvåfaktorsautentisering","OtpEnable":"Aktivera 2FA","OtpDisable":"Inaktivera 2FA","OtpHint":"Tvåfaktorsautentisering lägger till ytterligare ett säkerhetslager till ditt konto genom att kräva mer än bara ett lösenord för att logga in.","OtpSetup":"2FA installation","OtpSetupHint":"Skanna QR-koden med din autentiseringsapplikation eller kopiera den hemliga koden nedan till den.","OtpSecret":"Hemlig kod","OtpConfirm":"Bekräfta med en 2FA-kod","OtpNeeded":"2FA krävs"}')
    },
    "19fd": function(e) {
        e.exports = JSON.parse('{"Settings":"Setări","PanelSettings":"Setări panou","EmailSettings":"Setări Email","MasterUrl":"URL principal","MasterUrlHint":"Pagina URL de bază poate fi găsită în formatul http://localhost:8080","CompanyName":"Nume Companie","DefaultTheme":"Temă default","RegistrationEnabled":"Permite utilizatorilor să se înregistreze singuri","RegistrationEnabledHint1":"Utilizatorii care s-au înregistrat singuri nu pot face nimic până când nu primesc acces","RegistrationEnabledHint2":"Dezactivarea acestei opțiuni împiedică doar înregistrarea directă, invitațiile pe servere si pagina de Utilizatori nu sunt influențate","EmailProvider":"Furnizor De E-Mail","emailProviders":{"none":"Nimeni","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domeniu","key":"Cheie API","host":"Host","username":"Nume de utilizator","password":"Parolă"}}')
    },
    "1a38": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-row", [a("v-col", {
                staticClass: "pb-0",
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn-toggle", {
                attrs: {
                    value: e.value.type,
                    borderless: "",
                    dense: "",
                    mandatory: ""
                },
                on: {
                    change: function(t) {
                        return e.$emit("input", {
                            type: t,
                            stop: "command" === t ? "" : 0
                        })
                    }
                }
            }, [a("v-btn", {
                attrs: {
                    value: "command"
                },
                domProps: {
                    textContent: e._s(e.$t("templates.stop.Command"))
                }
            }), a("v-btn", {
                attrs: {
                    value: "signal"
                },
                domProps: {
                    textContent: e._s(e.$t("templates.stop.Signal"))
                }
            })], 1)], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-input", {
                attrs: {
                    value: e.value.stop,
                    label: e.$t("templates.stop.Command"),
                    type: "command" === e.value.type ? "text" : "number"
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", Object.assign({}, e.value, {
                            stop: t
                        }))
                    }
                }
            })], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Object,
                    default: ()=>{}
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("a609")
          , m = a("62ad")
          , p = a("0fd9")
          , v = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: u["a"],
            VBtnToggle: c["a"],
            VCol: m["a"],
            VRow: p["a"]
        })
    },
    "1a5d": function(e, t, a) {
        var r = {
            "./Account.vue": ["77be", "chunk-3d8c43c0"],
            "./AddNode.vue": ["b9c4", "chunk-2d210f7e"],
            "./AddServer.vue": ["14bf", "chunk-f4c33922"],
            "./Invite.vue": ["0c50", "chunk-3d89b4ab"],
            "./Login.vue": ["a55b", "chunk-2d2086b7"],
            "./Node.vue": ["8b83", "chunk-2d0e8c9b"],
            "./Nodes.vue": ["4c0f", "chunk-aeb07c80"],
            "./Register.vue": ["73cf", "chunk-3d8c34dc"],
            "./Server.vue": ["1d74", "chunk-2d0b6566"],
            "./Servers.vue": ["5bc3", "chunk-4bf1d037"],
            "./Settings.vue": ["26d3", "chunk-2d0b3289"],
            "./Template.vue": ["17eb", "chunk-2d0ac239"],
            "./Templates.vue": ["98ca", "chunk-2d0e68b3"],
            "./User.vue": ["1511", "chunk-2d0ab43a"],
            "./Users.vue": ["ed81", "chunk-c74ae546"],
            "./errors/404.vue": ["4b62", "chunk-2d0cbae0"]
        };
        function n(e) {
            if (!a.o(r, e))
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                ));
            var t = r[e]
              , n = t[0];
            return a.e(t[1]).then((function() {
                return a(n)
            }
            ))
        }
        n.keys = function() {
            return Object.keys(r)
        }
        ,
        n.id = "1a5d",
        e.exports = n
    },
    "1b41": function(e) {
        e.exports = JSON.parse('{"Users":"کاربران","Add":"اضافه کردن کاربر","AccountSettings":"تنظیمات حساب کاربری","OldPassword":"پسورد قدیمی","NewPassword":"پسورد جدید","ConfirmPassword":"تکرار مجدد پسورد","ChangePassword":"تغییر پسورد انجام شد","ChangeInfo":"تغییرات پروفایل حساب کاربری","InfoChanged":"تغییرات درخواستی شما اعمال گردید","PasswordChanged":"تغییر پسورد شما اعمال گردید","AccountPassword":"پسورد اکانت شما","Account":"ناحیه کاربری","Login":"ورود به حساب کاربری","LoginLink":"برای ورود کلیک کنید","Logout":"خروج","Register":"ثبت نام","RegisterLink":"آیا تاکنون ثبت نام نکرده اید","RegisterSuccess":"ثبت نام شما تکمیل شد","NoEmailGiven":"باید ایمیل کاربری را که می خواهید اضافه کنید ارائه دهید","Username":"نارم کاربری شما","Password":"پسورد شما","Email":"ایمیل شما","Edit":"ویرایش کاربر","Update":"بروز رسانی کاربر","Delete":"حذف کاربر","CreateSuccess":"نام کاربری شما ساخته شد","CreateError":"مشکل در ساخت نام کاربری","UpdateSuccess":"بروز رسانی نام کاربری","UpdateError":"مشکل در بروزرسانی نام کاربری","PermsUpdateError":"به روز رسانی مجوزهای کاربر ناموفق بود","Otp":"احراز هویت دو عاملی","OtpEnable":"فعال سازی ورود امنیتی","OtpDisable":"غیر فعال سازی ورود امنیتی","OtpHint":"احراز هویت دو مرحله ای با نیاز به چیزی بیش از یک رمز عبور برای ورود به حساب شما، یک لایه امنیتی اضافی به حساب شما اضافه می کند.","OtpSetup":"راه اندازی 2FA","OtpSetupHint":"کد QR را با استفاده از برنامه احراز هویت خود اسکن کنید یا کد مخفی زیر را در آن کپی کنید.","OtpSecret":"کد امنیتی","OtpConfirm":"با استفاده از کد 2FA تأیید کنید","OtpNeeded":"2FA مورد نیاز است"}')
    },
    "1d15": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Neznáma chyba","ErrUnknownError":"Neznáma chyba","ErrInvalidCredentials":"Neplatné prihlasovacie údaje","ErrServiceNotAvailable":"Služba je nedostupná","ErrEmailNotConfigured":"E-mail nie je nakonfigurovaný","ErrTokenInvalid":"Neplatný token","ErrClientNotFound":"Klient nebol nájdený","ErrUserNotFound":"Používateľ nebol nájdený","ErrLoginNotPermitted":"Prihlásenie nie je povolené","ErrInvalidTokenState":"Neplatný stav tokenu","ErrSettingNotConfigured":"{setting} nie je nakonfigurované","ErrNoTemplate":"Nebola nájdená žiadna šablóna s názvom \'{name}\'","ErrServiceInvalidProvider":"{service} nepodporuje {provider}","ErrFieldRequired":"{field} je povinné","ErrFieldMustBePrintable":"{field} musia byť tlačiteľné znaky ascii","ErrFieldHasURICharacters":"{field} nesmie obsahovať znaky, ktoré sa nemôžu používať v URL","ErrFieldIsInvalidHost":"{field} musí obsahovať platnú IP alebo FQDN","ErrFieldIsInvalidIP":"{field} musí byť platná IP adresa","ErrFieldTooLarge":"{field} nemôže byť väčšie ako {max}","ErrFieldTooSmall":"{field} nemôže byť menšie ako {min}","ErrFieldNotBetween":"{field} musí byť medzí {min} a {max}","ErrFieldEqual":"{field1} nemôže byť rovnaké ako {field2}","ErrFieldNotEqual":"{field1} sa nerovná {field2}","ErrFieldNotEmail":"{field} není platný e-mail","ErrFieldLength":"{field} musí byť aspoň {length} znakov dlhý","ErrNoPermission":"Nemáte povolenie na vykonanie tejto akcie","ErrDatabaseNotAvailable":"Databáza nie je dostupná","ErrNoNodes":"Nie sú k dispozícii žiadne uzly","ErrNoTemplates":"Nie sú k dispozícii žiadne šablóny","ErrPasswordRequirements":"Heslo musí byť dlhé aspoň 8 znakov","ErrUsernameRequirements":"Používateľské meno musí mať aspoň 5 znakov a obsahovať len alfanumerické znaky, _ alebo -","ErrPasswordsNotIdentical":"Heslá sa nezhodujú","ErrSessionTimedOut":"Vaša relácia skončila, prihláste sa znova","ErrMissingScope":"Nie ste oprávnení vykonať túto činnosť","ErrInvalidJson":"Údaje json sú neplatné","ErrSocketFailed":"Pripojenie WebSocket narazilo na chybu, niektoré funkcie môžu byť pomalé alebo nefunkčné","ErrInviteLinkInvalid":"Váš odkaz sa zdá byť neplatný","ErrSavingInviteduser":"Nastala chyba pri vytváraní účtu","ErrDuplicateServerName":"Server s týmto názvom už existuje","ErrDuplicateNodeName":"Uzol s týmto názvom už existuje","ErrDirectoryUploadNotSupported":"Nie je možné nahrať súbory","ErrDockerNotSupported":"Docker nie je podporovaný na tomto uzle","ErrMissingBinary":"Chýbajúce binárne údaje: {expected}","ErrUnsupportedOS":"Operačný systém \'{actual}\' nieje podporovaný. Podporované operačné systémy sú: {expected}","ErrUnsupportedArch":"Architektúra {actual} nie je podporovaná. Podporovane architektúry sú: {expected}"}')
    },
    "1d67": function(e) {
        e.exports = JSON.parse('{"Settings":"Asetukset","PanelSettings":"Paneelin Asetukset","EmailSettings":"Sähköpostin Asetukset","MasterUrl":"Pääkäyttäjän URL","MasterUrlHint":"URL-osoite, jossa paneeli on tavoitettavissa muodossa http://localhost:8080","CompanyName":"Yrityksen Nimi","DefaultTheme":"Oletusteema","RegistrationEnabled":"Salli käyttäjien rekisteröityä itse","RegistrationEnabledHint1":"Itserekisteröidyt käyttäjät eivät voi tehdä mitään ennen kuin heille annetaan käyttöoikeudet","RegistrationEnabledHint2":"Tämän poistaminen käytöstä estää vain suoran rekisteröinnin, palvelimelle kutsut ja käyttäjäsivun muutokset eivät vaikuta","EmailProvider":"Sähköpostin tarjoaja","emailProviders":{"none":"Ei mitään","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Lähettäjän osoite","domain":"Verkkotunnus","key":"API-avain","host":"Isäntä","username":"Käyttäjänimi","password":"Salasana"}}')
    },
    "1e0d": function(e) {
        e.exports = JSON.parse('{"Credentials":"İki aşamalı doğrulama bilgileri","ClientId":"Kullanıcı ID","ClientSecret":"Kullanıcı anahtarı","NewClientWarning":"Kullanıcı anahtarınızı lütfen kaydedin, bu sayfayı kapattıktan sonra anahtar kesinlikle tekrar gösterilemez.","Create":"Yeni iki aşamalı doğrulama oluştur","UnnamedClient":"İsimsiz iki aşamalı doğrulama","Docs":"API dökümantasyonlarını görüntüle","DeleteWarning":"İki aşamalı doğrulamanın silinmesi geri alınamaz ve aynı bilgilerle başka bir doğrulama oluşturulamaz. Hâlâ bu doğrulamayı kullanan tüm entegrasyonlar, silindikten sonra bozulacak.","ConfirmDelete":"Bu iki aşamalı doğrulamanın silinmesinden kaynaklanabilecek sorunların farkındayım ve devam etmek istiyorum.","Delete":"{clientName} silinsin mi?","Clients":"İki aşamalı doğrulama","AccountDescription":"Burada listelenen iki aşamalı doğrulama tüm hesap izinlerini devralır","ServerDescription":"Burada listelenen iki aşamalı doğrulama yalnızca bu sunucudaki hesap izinlerini devralır"}')
    },
    "20a7": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Pre toto prostredie neexistujú žiadne špecifické možnosti","docker":{"name":"Docker","image":"Obrázok","networkMode":"Sieťový režim","networkName":"Názov siete","bindings":"Bindovanie","portBindings":"Bindovanie portov","OutsidePort":"Vonkajší port","InsidePort":"Vnútorný port","HostPath":"Cesta Hostiteľa","ContainerPath":"Cesta Kontajnera"},"standard":{"name":"Štandardné"},"tty":{"name":"TTY"}}')
    },
    2143: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Rediger Node","Add":"Tilføj Node","Update":"Opdater Node","Delete":"Slet Node","PublicHost":"Offentlig Host","PublicPort":"Offentlig Port","PrivateHost":"Privat Host","PrivatePort":"Privat Port","SftpPort":"SFTP Port","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"Gem konfiguration","SavePublicKey":"Gem Offentlig Nøgle","DeploymentInstruction":"For at installere noden, installér PufferPanel på den nye server og placér konfigurationsfilen i `/etc/pufferpanel/`<br/>Genstart PufferPanel på den nye server bagefter.","UpdateSuccess":"Noden blev opdateret","UpdateError":"Fejl under opdatering af noden","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "21b2": function(e) {
        e.exports = JSON.parse('{"ServersView":"이 서버를 볼 수 있습니다","ServersEdit":"서버 수정","ServersInstall":"서버 설치","ServersConsole":"콘솔 보기","ServersConsoleSend":"콘솔에 명령어 보내기","ServersStop":"서버 강제 종료","ServersStart":"서버 시작","ServersStat":"CPU와 메모리 통계 보기","ServersFiles":"SFTP를 이용한 파일 접근 허용","ServersFilesGet":"파일 관리자를 이용해 파일을 보고 수정","ServersFilesPut":"파일 관리자를 통해 파일을 수정하고 업로드","ServersEditUsers":"이 유저의 서버 접근 권한 수정","Admin":"관리자(모든 권한을 가집니다)","ViewServers":"모든 서버 보기","CreateServers":"서버 추가하기","DeleteServers":"서버들 삭제하기","EditServerAdmin":"서버 정보 저장","ViewNodes":"노드 보기","EditNodes":"노드 수정","DeployNodes":"노드 배포하기","ViewTemplates":"다른 템플릿 보기","EditTemplates":"템플릿 수정","ViewUsers":"모든 유저 보기","EditUsers":"다른 유저 수정","PanelSettings":"패널 설정 변경"}')
    },
    "21bb": function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"No hay servidores a los que tenga acceso","Servers":"Servidores","Add":"Añadir servidor","Console":"Consola","Controls":"Controles","SFTPInfo":"Información SFTP","Restart":"Reiniciar","Start":"Iniciar","Stop":"Detener","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","Statistics":"Estadísticas","CPU":"CPU","Memory":"Memoria","Files":"Archivos","Name":"Nombre del servidor","NameInvalid":"El nombre del servidor no puede estar vacío o contener caracteres especiales","SelectNode":"Por favor, seleccione un nodo","SelectTemplate":"Por favor, seleccione una plantilla","SelectThisTemplate":"Utilizar esta plantilla","SelectUser":"Por favor seleccione usuario","Environment":"Entorno","SelectEnvironment":"Por favor, seleccione entorno","TypeUsername":"Escriba un nombre de usuario","Admin":"Administrador","AdminControls":"Controles de administración","Settings":"Configuración","NoEditableVars":"Este servidor no tiene variables que puedes editar","ConfirmDelete":"¿Realmente desea eliminar este servidor? (Esto no se puede deshacer)","Delete":"Elimine el servidor","Deleted":"Servidor eliminado","NoReadme":"No hay ningún léame disponible para esta plantilla","SftpConnection":"Conectar a SFTP","EditDefinition":"Editar definición del servidor","Reload":"Recargar datos del servidor desde el disco","Reloaded":"Datos del servidor recargados","Autostart":"Iniciar el servidor cuando se inicie el nodo","Autorestart":"Reiniciar el servidor cuando se detenga normalmente","Autorecover":"Reiniciar el servidor cuando se bloquee","Rename":"Renombrar servidor","Tasks":"Tareas","NoTasks":"Sin tareas","RunTask":"Realizar tarea","NewTask":"Nueva tarea","EditTask":"Editar tarea","TaskDeleted":"Tarea eliminada","TaskTriggered":"Tarea inicializada","EnableSchedule":"Inicializar tarea automáticamente","TaskScheduleInvalid":"La tarea automática es incorrecta","TaskScheduleManual":"Sólo manual","CronExpression":"Expresión Cron","Hourly":"Cada hora","Daily":"Cada día","Weekly":"Cada semana","Monthly":"Cada mes","Advanced":"Avanzado","HourlyTab":"Cada {hourInterval} horas, al minuto {minute}","DailyTab":"Cada {dayInterval} día(s) a las {hour}:{minute}","WeeklyTab":"Cada {weekdays} a las {hour}:{minute}","MonthlyTab":"Cada {monthInterval} meses, en el día {day} a las {hour}:{minute}"}')
    },
    2227: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users","PanelSettings":"Change panel settings"}')
    },
    "229d": function(e) {
        e.exports = JSON.parse('{"Node":"Κόμβος","Nodes":"Κόμβοι","Edit":"Επεξεργασία Κόμβου","Add":"Προσθήκη Κόμβου","Update":"Ενημέρωση Κόμβου","Delete":"Διαγραφή Κόμβου","PublicHost":"Δημόσιος Διακομιστής","PublicPort":"Δημόσια Θύρα","PrivateHost":"Ιδιωτικός Διακομιστής","PrivatePort":"Ιδιωτική Θύρα","SftpPort":"Θύρα SFTP","WithPrivateAddress":"Χρήση διαφορετικού κεντρικού υπολογιστή/θύρας για το διακομιστή κατά την επικοινωνία με τον διακομιστή","WithPrivateAddressHint":"Αυτή η ξεχωριστή διεύθυνση χρησιμοποιείται όταν ο κύριος κόμβος πρέπει να \\"μιλήσει\\" στον νέο κόμβο. Χρήσιμο, για παράδειγμα, όταν οι κόμβοι βρίσκονται στο ίδιο δίκτυο πίσω από NAT.","SaveConfig":"Αποθήκευση Ρυθμίσεων","SavePublicKey":"Αποθήκευση Δημόσιου Κλειδιού","DeploymentInstruction":"Για να αναρτήσετε/χρησιμοποιήσετε τον κόμβο, εγκαταστήστε το PufferPanel στο νέο διακομιστή και τοποθετήστε το αρχείο config στον φάκελο `/etc/pufferpanel/`<br/>. Επανεκκινήστε το PufferPanel στο νέο διακομιστή αμέσως μετά.","UpdateSuccess":"Επιτυχής ενημέρωση κόμβου","UpdateError":"Σφάλμα ενημέρωσης κόμβου","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    2515: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Невідома помилка","ErrUnknownError":"Невідома помилка","ErrInvalidCredentials":"Невірні облікові дані","ErrServiceNotAvailable":"Сервіс недоступний","ErrEmailNotConfigured":"Адресу ел. скриньки не налаштовано","ErrTokenInvalid":"Неприпустимий токен","ErrClientNotFound":"Клієнт не знайдений","ErrUserNotFound":"Користувач не знайдений","ErrLoginNotPermitted":"Вхід не дозволено","ErrInvalidTokenState":"Неприпустимий стан токена","ErrSettingNotConfigured":"{setting} не налаштований","ErrNoTemplate":"Не знайдено жодного шаблону з іменем {name}","ErrServiceInvalidProvider":"{service} не підтримує {provider}","ErrFieldRequired":"поле {field} обов\'язкове","ErrFieldMustBePrintable":"{field} має бути друкованими символами ascii","ErrFieldHasURICharacters":"{field} не може містити символи, які не можуть бути використані в посиланнях","ErrFieldIsInvalidHost":"{field} має бути дійсною IP або FQDN","ErrFieldIsInvalidIP":"{field} повинен мати припустимий IP","ErrFieldTooLarge":"{field} не може бути більше, ніж {max}","ErrFieldTooSmall":"{field} не може бути менше, ніж {min}","ErrFieldNotBetween":"{field} має бути між {min} і {max}","ErrFieldEqual":"{field1} не може дорівнювати {field2}","ErrFieldNotEqual":"{field1} не дорівнює {field2}","ErrFieldNotEmail":"Електронна адреса {field} некоректна","ErrFieldLength":"{field} повинен бути не менше {length} символів","ErrNoPermission":"Ви не маєте дозволу на виконання цієї дії","ErrDatabaseNotAvailable":"База данних недоступна","ErrNoNodes":"Немає доступних вузлів","ErrNoTemplates":"Немає доступних шаблонів","ErrPasswordRequirements":"Пароль має складатися хоча б з {min} символів","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Паролі не співпадають","ErrSessionTimedOut":"Ваш сеанс минув, будь ласка, увійдіть знову","ErrMissingScope":"Ви не маєте прав на виконання цієї дії","ErrInvalidJson":"Неприпустимі дані json","ErrSocketFailed":"З\'єднання WebSocket зіткнулося з помилкою, деякі функції можуть працювати повільно","ErrInviteLinkInvalid":"Схоже, що ваше посилання на запрошення недійсне","ErrSavingInviteduser":"Виникла помилка під час створення вашого облікового запису","ErrDuplicateServerName":"Сервер з таким ім\'ям вже існує","ErrDuplicateNodeName":"Вузол з таким ім\'ям вже існує","ErrDirectoryUploadNotSupported":"Неможливо завантажити папки","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    2534: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    "257d": function(e, t, a) {},
    2652: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nome","Address":"Indirizzo","Online":"Online","Offline":"Offline","Loading":"Caricamento...","General":"Generale","Language":"Lingua","SelectLanguage":"Seleziona Lingua","Settings":"Impostazioni","Update":"Aggiorna","Edit":"Modifica","Delete":"Elimina","Create":"Crea","Save":"Salva","Saved":"Salvato","SaveFailed":"Salvataggio fallito","Cancel":"Annulla","Confirm":"Conferma","Actions":"Azioni","Host":"Ospite","Port":"Porta","Template":"Modello","Options":"Opzioni","Collapse":"Riduci","Copied":"Copiato negli appunti","Unknown":"Sconosciuto","Search":"Cerca","Back":"Indietro","Next":"Successivo","LanguageName":"Italiano","Details":"Dettagli","ErrorDetails":"Dettagli Errore","HelpTranslate":"Aiutaci a tradurre PufferPanel","DarkMode":"Modalità scura","ThemeOptions":"Opzioni Tema","Protocol":"Protocollo","Add":"Aggiungi","Ignore":"Ignorare","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato","Sunday":"Domenica","Description":"Descrizione"}')
    },
    2667: function(e) {
        e.exports = JSON.parse('{"Settings":"Settings","PanelSettings":"Panel Settings","EmailSettings":"Email Settings","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Company Name","DefaultTheme":"Default Theme","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domain","key":"API Key","host":"Host","username":"Username","password":"Password"}}')
    },
    "27fc": function(e) {
        e.exports = JSON.parse('{"Users":"Felhasználók","Add":"Új felhasználó","AccountSettings":"Fiókbeállítások","OldPassword":"Régi jelszó","NewPassword":"Új jelszó","ConfirmPassword":"Jelszó megerősítése","ChangePassword":"Jelszó módosítása","ChangeInfo":"Fiókadatok változtatása","InfoChanged":"Az adataid módosítva lettek","PasswordChanged":"A jelszavad módosítva lett","AccountPassword":"Fiók jelszava","Account":"Fiók","Login":"Belépés","LoginLink":"Vagy jelentkezz be itt","Logout":"Kilépés","Register":"Regisztráció","RegisterLink":"Vagy regisztrálj itt","RegisterSuccess":"Sikeresen regisztráció","NoEmailGiven":"Meg kell adnod a hozzáadni kívánt felhasználó e-mail címét","Username":"Felhasználónév","Password":"Jelszó","Email":"E-mail","Edit":"Felhasználó szerkesztése","Update":"Fiók módosítása","Delete":"Fiók törlése","CreateSuccess":"Felhasználó sikeresen létrehozva","CreateError":"Felhasználó létrehozása sikertelen","UpdateSuccess":"Felhasználó módosítva","UpdateError":"Felhasználó módosítása sikertelen","PermsUpdateError":"Felhasználói jogok módosítása sikertelen","Otp":"Kétlépcsős azonosítás","OtpEnable":"2FA Bekapcsolása","OtpDisable":"2FA Kikapcsolása","OtpHint":"A kétlépcsős azonosítás egy extra réteggel biztosítja a fiókodat, hiszen többet igényel egy jelszónál.","OtpSetup":"2FA Beállítása","OtpSetupHint":"Szkellend be a QR kódot a hitelesítő alkalmazásoddal vagy másol át a lenti titkos kódot.","OtpSecret":"Titkos Kód","OtpConfirm":"Kétlépcsős azonosító kód megerősítése","OtpNeeded":"Kétlépcsős azonosítás szükséges"}')
    },
    2883: function(e) {
        e.exports = JSON.parse('{"Settings":"설정","PanelSettings":"패널 설정","EmailSettings":"이메일 설정","MasterUrl":"Master URL","MasterUrlHint":"패널에 접속할수 있는 기본 URL","CompanyName":"회사 이름","DefaultTheme":"기본 테마","RegistrationEnabled":"사용자가 직접 등록할 수 있도록 허용","RegistrationEnabledHint1":"직접 등록된 계정은 권한이 부여될 때까지 아무것도 할 수 없습니다.","RegistrationEnabledHint2":"이것을 비활성화하면 직접 등록, 서버 초대 및 사용자 페이지가 영향을 받지 않습니다.","EmailProvider":"이메일 제공 업체","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"발신자 주소","domain":"도메인","key":"API 키","host":"호스트","username":"Username","password":"비밀번호"}}')
    },
    "28ca": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.Settings"))
                }
            })]), a("v-card-text", [a("v-row", [0 === Object.keys(e.items).length ? a("v-col", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.NoEditableVars"))
                }
            })]) : e._e(), e._l(e.items, (function(t, r) {
                return a("v-col", {
                    key: r,
                    attrs: {
                        cols: "12"
                    }
                }, [a("ui-variable-input", {
                    model: {
                        value: e.items[r],
                        callback: function(t) {
                            e.$set(e.items, r, t)
                        },
                        expression: "items[name]"
                    }
                })], 1)
            }
            ))], 2), Object.keys(e.items).length > 0 ? a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: e.save
                }
            })], 1)], 1) : e._e()], 1)], 1)
        }
          , n = []
          , i = a("8e36")
          , o = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    items: {}
                }
            },
            mounted() {
                this.loadData()
            },
            methods: {
                async loadData() {
                    this.items = await this.$api.getServerData(this.server.id)
                },
                async save() {
                    await this.$api.updateServerData(this.server.id, this.items),
                    this.$toast.success(this.$t("common.Saved"))
                },
                markdown: i["a"]
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("8336")
          , m = a("b0af")
          , p = a("99d9")
          , v = a("62ad")
          , h = a("0fd9")
          , g = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = g.exports;
        u()(g, {
            VBtn: c["a"],
            VCard: m["a"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VCol: v["a"],
            VRow: h["a"]
        })
    },
    "29be": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"未知错误","ErrUnknownError":"未知错误","ErrInvalidCredentials":"无效凭证","ErrServiceNotAvailable":"服务不可用","ErrEmailNotConfigured":"未配置电子邮件","ErrTokenInvalid":"无效令牌","ErrClientNotFound":"未找到客户端","ErrUserNotFound":"未找到用户","ErrLoginNotPermitted":"禁止登录","ErrInvalidTokenState":"无效令牌状态","ErrSettingNotConfigured":"未配置 {setting}","ErrNoTemplate":"未找到名为 \'{name}\' 的模板","ErrServiceInvalidProvider":"{service} 不支持 {provider}","ErrFieldRequired":"{field} 为必填","ErrFieldMustBePrintable":"{field} 必须为可输出的 ASCII 字符","ErrFieldHasURICharacters":"{field} 不可包含不能用于 URI 的字符","ErrFieldIsInvalidHost":"{field} 必须为有效 IP 或 FQDN","ErrFieldIsInvalidIP":"{field} 必须为有效 IP","ErrFieldTooLarge":"{field} 不能大于 {max}","ErrFieldTooSmall":"{field} 不能小于 {min}","ErrFieldNotBetween":"{field} 必须介于 {min} 和 {max} 之间","ErrFieldEqual":"{field1} 不能等于 {field2}","ErrFieldNotEqual":"{field1} 不等于 {field2}","ErrFieldNotEmail":"{field} 为无效电子邮件地址","ErrFieldLength":"{field} 的长度必须大于 {length} 个字符","ErrNoPermission":"您没有执行此操作的权限","ErrDatabaseNotAvailable":"数据库不可用","ErrNoNodes":"无可用节点","ErrNoTemplates":"无可用模板","ErrPasswordRequirements":"密码长度应至少为 8 个字符","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"密码不一致","ErrSessionTimedOut":"会话超时，请重新登录","ErrMissingScope":"您不被允许执行此操作","ErrInvalidJson":"JSON 数据无效","ErrSocketFailed":"WebSocket 连接出错，部分功能可能较为缓慢或无法使用","ErrInviteLinkInvalid":"您的邀请链接似乎无效","ErrSavingInviteduser":"创建账户时出错","ErrDuplicateServerName":"服务器名称已存在","ErrDuplicateNodeName":"该文件夹名称已经存在","ErrDirectoryUploadNotSupported":"无法上传文件夹","ErrDockerNotSupported":"此节点不支持 Docker","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "2a3a": function(e) {
        e.exports = JSON.parse('{"Settings":"Innstillinger","PanelSettings":"Panel innstillinger","EmailSettings":"E-post innstillinger","MasterUrl":"Hoved Url","MasterUrlHint":"Hoved-URL-en som panelet kan nås under i formatet http://localhost:8080","CompanyName":"Firmanavn","DefaultTheme":"Standardtema","RegistrationEnabled":"Tillatt brukere å registrere seg selv","RegistrationEnabledHint1":"Selvregistrerte brukere kan ikke gjøre noe før de har fått rettigheter","RegistrationEnabledHint2":"Deaktivering av dette forhindrer bare direkte registrering og invitasjon til en server. Brukersiden påvirkes ikke","EmailProvider":"E-post leverandør","emailProviders":{"none":"Ingen","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Avsenderadresse","domain":"Domene","key":"API-nøkkel","host":"Vert","username":"Brukernavn","password":"Passord"}}')
    },
    "2a8d": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodos","Edit":"Editar Nodo","Add":"Agregar Nodo","Update":"Actualizar Nodo","Delete":"Borrar Nodo","PublicHost":"Anfitrión público","PublicPort":"Puerto público","PrivateHost":"Anfitrión privado","PrivatePort":"Puerto privado","SftpPort":"Puerto SFTP","WithPrivateAddress":"Usar un host/puerto diferente para la comunicación entre servidores","WithPrivateAddressHint":"Esta dirección separada se utiliza cuando el nodo principal necesita comunicarse con el nuevo nodo. Esto es útil por ejemplo cuando los nodos están en la misma red detrás de NAT.","SaveConfig":"Guardar configuración","SavePublicKey":"Guardar clave pública","DeploymentInstruction":"Para desplegar el nodo, instale PufferPanel en el nuevo servidor y coloque el archivo de configuración en `/etc/pufferpanel/`<br/>Reinicie PufferPanel en el nuevo servidor después.","UpdateSuccess":"Nodo actualizado correctamente","UpdateError":"Error al actualizar el nodo","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "2aae": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Il n\'y a pas d\'options spécifique pour cet environnement","docker":{"name":"Docker","image":"Image","networkMode":"Mode réseau","networkName":"Nom du réseau","bindings":"Liaisons","portBindings":"Liaison de port","OutsidePort":"Port externe","InsidePort":"Port interne","HostPath":"Chemin vers l\'hôte","ContainerPath":"Chemin d’accès au container"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "2ab5": function(e) {
        e.exports = JSON.parse('{"Templates":"Vorlagen","NoTemplates":"Es gibt noch keine Vorlagen","Deleted":"Vorlage gelöscht","New":"Neue Vorlage erstellen","Edit":"Vorlage bearbeiten","Editor":"Editor","Json":"JSON","Display":"Anzeigename","Type":"Typ","Variables":"Variablen","Install":"Installation","AddInstallStep":"Installationsschritt hinzufügen","DeleteInstallStep":"Installationsschritt löschen","Description":"Beschreibung","DataType":"Datentyp","DefaultValue":"Standardwert","Required":"Erforderlich","UserEditable":"Kann von Nutzern bearbeitet werden","Value":"Wert","AddOption":"Option hinzufügen","AddCommand":"Befehl hinzufügen","Filename":"Dateiname","Content":"Inhalt","Source":"Quelle","Target":"Ziel","Version":"Version","ReleaseType":"Release-Typ","AddFile":"Datei hinzufügen","AddVariable":"Variable hinzufügen","Environment":"Umgebung","Environments":"Umgebungen","AddEnvironment":"Umgebung hinzufügen","DefaultEnvironment":"Standardumgebung","AddEnvVar":"Umgebungsvariable hinzufügen","EnvVars":"Umgebungsvariablen","DockerImage":"Docker Image","SaveSuccess":"Vorlage gespeichert","VarNameNoSpaces":"Ein Variablenname darf weder leer sein noch Leerzeichen enthalten","SupportedEnvironments":"Unterstützte Umgebungen","RunConfig":"Startkonfiguration","PreHook":"Pre-Run-Hooks","PostHook":"Post-Run-Hooks","AddPreStep":"Pre-run-Schritt hinzufügen","AddPostStep":"Post-run-Schritt hinzufügen","DeletePreStep":"Pre-run-Schritt entfernen","DeletePostStep":"Installationsschritt löschen","Shutdown":"Herunterfahren","Command":"Befehl","WorkingDirectory":"Arbeitsverzeichnis","Arguments":"Argumente","AddArgument":"Argument hinzufügen","Convert":"Umwandeln","OfferV1Convert":"Diese Vorlage sieht aus als wäre sie für Pufferpanel 1.x angelegt, willst du sie automatisch in eine Vorlage für Pufferpanel 2.x umwandeln?","import":{"CommunityWarning":"Diese Vorlagen wurden von der Community erstellt und werden ohne jegliche Garantie zur Verfügung gestellt","OverrideWarning":"WARNUNG: Importierte Vorlagen WERDEN bestehende Vorlagen mit der gleichen ID ÜBERSCHREIBEN","Import":"Vorlagen importieren","Tooltip":"Templates aus dem offiziellen Repository importieren","Select":"Zu importierende Vorlagen auswählen","Started":"Importiere Vorlagen, bitte warte einen Moment","Successful":"Vorlage {template} erfolgreich importiert","NoTemplatesTitle":"Möchtest du Vorlagen importieren?","NoTemplatesContent":"Sie haben derzeit keine Vorlagen. Vorlagen sind notwendig, um Server zu erstellen.<br/>Möchten Sie jetzt einige Vorlagen aus dem offiziellen PufferPanel Repository importieren?"},"stop":{"Command":"Befehl","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Herunterladen","files":"Dateien"},"command":{"ProcessorName":"Befehl ausführen","commands":"Befehle"},"alterfile":{"ProcessorName":"Datei ändern","regex":"Suche als RegEx behandeln","search":"Zu suchender Text","replace":"Ersetzen durch"},"writefile":{"ProcessorName":"In Datei schreiben","text":"Inhalt"},"move":{"ProcessorName":"Datei verschieben","source":"Quelle","target":"Ziel"},"mkdir":{"ProcessorName":"Ordner erstellen"},"mojangdl":{"ProcessorName":"Minecraft herunterladen"},"forgedl":{"ProcessorName":"Minecraft Forge herunterladen"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForge herunterladen","releaseType":"Release-Typ"},"fabricdl":{"ProcessorName":"Minecraft Fabric herunterladen"},"javadl":{"ProcessorName":"Java Herunterladen","version":"Zu installierende Java Version (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Spiel von Steam herunterladen","appId":"App Id"}}}')
    },
    "2ade": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","Statistics":"Statistics","CPU":"CPU","Memory":"Memory","Files":"Files","Name":"Server Name","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","Admin":"Admin","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "2ba5": function(e) {
        e.exports = JSON.parse('{"Users":"Utilisateurs","Add":"Ajouter un utilisateur","AccountSettings":"Paramètres du compte","OldPassword":"Ancien mot de passe","NewPassword":"Nouveau mot de passe","ConfirmPassword":"Confirmer le mot de passe","ChangePassword":"Modifier le mot de passe","ChangeInfo":"Modifier les détails du compte","InfoChanged":"Vos informations ont bien été modifiées","PasswordChanged":"Votre mot de passe a bien été modifié","AccountPassword":"Mot de passe du compte","Account":"Compte","Login":"Connexion","LoginLink":"Ou connectez-vous ici","Logout":"Déconnexion","Register":"Inscription","RegisterLink":"Ou inscrivez-vous ici","RegisterSuccess":"Vous vous êtes inscrit avec succès","NoEmailGiven":"Vous devez indiquer l\'adresse mail de l\'utilisateur que vous souhaitez ajouter","Username":"Nom d\'utilisateur","Password":"Mot de passe","Email":"Adresse mail","Edit":"Modifier l\'utilisateur","Update":"Mettre à jour l\'utilisateur","Delete":"Supprimer l\'utilisateur","CreateSuccess":"Utilisateur créé avec succès","CreateError":"Échec de création de l\'utilisateur","UpdateSuccess":"Utilisateur mis à jour","UpdateError":"Échec de mise à jour de l\'utilisateur","PermsUpdateError":"Échec de la mise à jour des permissions de l\'utilisateur","Otp":"Authentification à deux facteurs","OtpEnable":"Activer l\'A2F","OtpDisable":"Désactiver l\'A2F","OtpHint":"L\'authentification à deux facteurs ajoute une couche de sécurité supplémentaire à votre compte en exigeant plus qu\'un mot de passe pour se connecter.","OtpSetup":"Paramétrage de l\'A2F","OtpSetupHint":"Scannez le QR code en utilisant votre application d\'authentification ou copiez-y le code secret ci-dessous.","OtpSecret":"Code secret","OtpConfirm":"Confirmez en utilisant un code A2F","OtpNeeded":"A2F requise"}')
    },
    "2cc5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Ukendt fejl","ErrUnknownError":"Ukendt fejl","ErrInvalidCredentials":"Ugyldige legitimationsoplysninger","ErrServiceNotAvailable":"Tjenesten er ikke tilgængelig","ErrEmailNotConfigured":"E-mail ikke konfigureret","ErrTokenInvalid":"Token ugyldig","ErrClientNotFound":"Klient ikke fundet","ErrUserNotFound":"Bruger ikke fundet","ErrLoginNotPermitted":"Login ikke tilladt","ErrInvalidTokenState":"Ugyldig token status","ErrSettingNotConfigured":"{setting} er ikke konfigureret","ErrNoTemplate":"Ingen skabelon med navnet \'{name}\' var fundet","ErrServiceInvalidProvider":"{service} understøtter ikke {provider}","ErrFieldRequired":"{field} er påkrævet","ErrFieldMustBePrintable":"{field} skal være udskrivbare i ascii-tegn","ErrFieldHasURICharacters":"{field} må ikke indeholde tegn, der ikke kan bruges i URI\'er","ErrFieldIsInvalidHost":"{field} skal være en gyldig IP eller FQDN","ErrFieldIsInvalidIP":"{field} skal være et gyldig IP","ErrFieldTooLarge":"{field} kan ikke være større end {max}","ErrFieldTooSmall":"{field} kan ikke være mindre end {min}","ErrFieldNotBetween":"{field} skal være mellem {min} og {max}","ErrFieldEqual":"{field1} kan ikke være lig med {field2}","ErrFieldNotEqual":"{field1} er ikke lig med {field2}","ErrFieldNotEmail":"{field} er ikke en gyldig e-mail","ErrFieldLength":"{field} skal være på mindst {length} tegn","ErrNoPermission":"Du har ikke tilladelse til at udføre denne handling","ErrDatabaseNotAvailable":"Database er ikke tilgængelig","ErrNoNodes":"Ingen tilgængelige nodes","ErrNoTemplates":"Der er ingen tilgængelige skabeloner","ErrPasswordRequirements":"Adgangskoden skal være mindst 8 tegn","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Adgangskoder matcher ikke","ErrSessionTimedOut":"Din session er udløbet. Log venligst ind igen","ErrMissingScope":"Du har ikke tilladelse til at udføre denne handling","ErrInvalidJson":"JSON-dataen er ugyldigt","ErrSocketFailed":"WebSocket forbindelsen stødte på en fejl, nogle funktioner kan være langsom eller afbrudt","ErrInviteLinkInvalid":"Dit invitationslink er ugyldigt","ErrSavingInviteduser":"Der opstod en fejl under oprettelsen af din konto","ErrDuplicateServerName":"A server with this name already exists","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"Kan ikke uploade mapper","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "2d1c": function(e, t, a) {},
    "2d42": function(e) {
        e.exports = JSON.parse('{"Settings":"設定","PanelSettings":"パネル設定","EmailSettings":"メール設定","MasterUrl":"マスターURL","MasterUrlHint":"パネルのベースURLは、http://localhost:8080 の形式でアクセスすることができます","CompanyName":"会社名","DefaultTheme":"デフォルトテーマ","RegistrationEnabled":"ユーザーが自分自身を登録できるようにする","RegistrationEnabledHint1":"自己登録ユーザーは、権限が与えられるまで何もできません","RegistrationEnabledHint2":"これを無効にすると直接登録ができなくなりますが、サーバーへの招待やユーザーページは影響を受けません","EmailProvider":"メールプロバイダー","emailProviders":{"none":"なし","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"送信者メールアドレス","domain":"ドメイン","key":"API キー","host":"ホスト名","username":"ユーザー名","password":"パスワード"}}')
    },
    "2d52": function(e) {
        e.exports = JSON.parse('{"ServersView":"Peut voir ce serveur","ServersEdit":"Éditer le serveur","ServersInstall":"Installer le serveur","ServersConsole":"Voir la console","ServersConsoleSend":"Envoyer une commande vers la console","ServersStop":"Arrêter et tuer le serveur","ServersStart":"Démarrer le serveur","ServersStat":"Voir les statistiques du CPU et de la mémoire","ServersFiles":"Autoriser l\'accès aux fichiers via le SFTP","ServersFilesGet":"Voir et télécharger les fichiers via le gestionnaire","ServersFilesPut":"Éditer et envoyer des fichiers via le gestionnaire","ServersEditUsers":"Éditer les accès de l\'utilisateur à ce serveur","Admin":"Administrateur (ceci accorde toutes les permissions possibles)","ViewServers":"Voir les serveurs","CreateServers":"Créer des serveurs","DeleteServers":"Supprimer des serveurs","EditServerAdmin":"Éditer les paramètres du serveur","ViewNodes":"Consulter les nœuds","EditNodes":"Éditer les nœuds","DeployNodes":"Déployer de nouveaux nœuds","ViewTemplates":"Consulter les modèles","EditTemplates":"Modifier les modèles","ViewUsers":"Consulter tous les utilisateurs","EditUsers":"Éditer les autres utilisateurs","PanelSettings":"Modifier les paramètres du panel"}')
    },
    "2e27": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","Statistics":"Statistics","CPU":"CPU","Memory":"Memory","Files":"Files","Name":"Server Name","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","Admin":"Admin","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "2f97": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e._l(e.inputValue, (function(t, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("ui-input", {
                    ref: "key-" + t.key,
                    refInFor: !0,
                    attrs: {
                        value: t.key,
                        label: e.keyLabel
                    },
                    on: {
                        input: function(a) {
                            return e.onKeyInput(t.key, a)
                        }
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("ui-input", {
                    attrs: {
                        value: t.value,
                        label: e.valueLabel,
                        "icon-behind": "mdi-close"
                    },
                    on: {
                        "click:append-outer": function(a) {
                            return e.remove(t.key)
                        },
                        input: function(a) {
                            return e.onValueInput(t.key, a)
                        }
                    }
                })], 1)], 1)
            }
            )), e.add ? a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("ui-input", {
                attrs: {
                    value: "",
                    autofocus: "",
                    label: e.keyLabel
                },
                on: {
                    input: function(t) {
                        return e.addKey(t)
                    }
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.valueLabel
                },
                model: {
                    value: e.addValue,
                    callback: function(t) {
                        e.addValue = t
                    },
                    expression: "addValue"
                }
            })], 1)], 1) : a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.addLabel ? e.addLabel : e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        e.add = !0
                    }
                }
            })], 1)], 1)], 2)
        }
          , n = []
          , i = {
            props: {
                keyLabel: {
                    type: String,
                    default: ()=>{}
                },
                valueLabel: {
                    type: String,
                    default: ()=>{}
                },
                addLabel: {
                    type: String,
                    default: ()=>{}
                },
                value: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    add: !1,
                    addValue: ""
                }
            },
            computed: {
                inputValue() {
                    return Object.keys(this.value).map((e,t)=>({
                        key: e,
                        value: this.value[e],
                        position: t
                    }))
                }
            },
            methods: {
                onKeyInput(e, t) {
                    const a = {};
                    Object.keys(this.value).map(r=>{
                        r === e ? a[t] = this.value[r] : a[r] = this.value[r]
                    }
                    ),
                    this.$emit("input", a)
                },
                onValueInput(e, t) {
                    const a = {
                        ...this.value
                    };
                    a[e] = t,
                    this.$emit("input", a)
                },
                remove(e) {
                    const t = {
                        ...this.value
                    };
                    delete t[e],
                    this.$emit("input", t)
                },
                addKey(e) {
                    const t = {
                        ...this.value
                    };
                    t[e] = this.addValue,
                    this.addValue = "",
                    this.add = !1,
                    this.$emit("input", t),
                    this.$nextTick(()=>{
                        this.$refs["key-" + e][0].focus()
                    }
                    )
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("0fd9")
          , p = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: u["a"],
            VCol: c["a"],
            VRow: m["a"]
        })
    },
    3042: function(e) {
        e.exports = JSON.parse('{"Users":"ユーザー一覧","Add":"ユーザーを追加","AccountSettings":"アカウント設定","OldPassword":"現在のパスワード","NewPassword":"新しいパスワード","ConfirmPassword":"パスワードの再入力","ChangePassword":"パスワードを変更","ChangeInfo":"アカウントの詳細を変更","InfoChanged":"あなたの情報は変更されました","PasswordChanged":"パスワードが変更されました","AccountPassword":"アカウントパスワード","Account":"アカウント","Login":"ログイン","LoginLink":"またはこちらからログイン","Logout":"ログアウト","Register":"登録","RegisterLink":"またはこちらから登録","RegisterSuccess":"登録が完了しました","NoEmailGiven":"追加したいユーザーのメールアドレスを入力する必要があります","Username":"ユーザー名","Password":"パスワード","Email":"メールアドレス","Edit":"ユーザーを編集","Update":"ユーザーを更新","Delete":"ユーザーを削除","CreateSuccess":"ユーザーは正常に作成されました","CreateError":"ユーザー生成に失敗しました","UpdateSuccess":"ユーザー情報が更新されました","UpdateError":"ユーザー情報の更新に失敗しました","PermsUpdateError":"ユーザー権限の更新に失敗しました","Otp":"2段階認証","OtpEnable":"2段階認証を有効化","OtpDisable":"2段階認証を無効化","OtpHint":"二要素認証は、ログイン時にパスワード以上のものを要求することで、あなたのアカウントにさらなる安全性をもたらします。","OtpSetup":"2段階認証の設定","OtpSetupHint":"お使いの認証アプリケーションでQRコードを読み取るか、下記のシークレットコードをコピーして入れてください。","OtpSecret":"シークレットコード","OtpConfirm":"2FAコードで確認","OtpNeeded":"2段階認証が必要です"}')
    },
    3050: function(e) {
        e.exports = JSON.parse('{"Credentials":"Kredensial Klien OAuth2","ClientId":"ID Klien","ClientSecret":"Client Secret","NewClientWarning":"Catat client secret, setelah menutup dialog ini tidak akan pernah ditampilkan lagi. Kehilangan atau lupa itu akan membuat klien ini benar -benar tidak dapat digunakan.","Create":"Buat klien OAuth2 baru","UnnamedClient":"Tidak bernama Klien OAuth2","Docs":"Lihat dokumentasi API disini","DeleteWarning":"Menghapus klien OAuth2 tidak dapat dibatalkan dan klien baru tidak dapat dibuat dengan kredensial yang sama. Semua integrasi masih menggunakan klien ini akan pecah setelah penghapusannya.","ConfirmDelete":"Saya menyadari efek yang menghapus klien OAuth2 ini akan dan tetap ingin melanjutkan.","Delete":"Menghapus {clientName}?","Clients":"Klien OAuth2","AccountDescription":"Klien OAuth2 yang tercantum di sini mewarisi semua izin akun mu","ServerDescription":"Klien OAuth2 yang tercantum di sini hanya mewarisi izin akun mu di server ini"}')
    },
    "30a2": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    "31ec": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                staticStyle: {
                    position: "absolute",
                    top: "0px",
                    bottom: "56px",
                    left: "0px",
                    right: "0px",
                    "overflow-y": "auto"
                }
            }, [a("v-container", [a("v-row", {
                ref: "headerRow"
            }, [a("v-col", [a("h1", {
                staticStyle: {
                    float: "left"
                }
            }, [a("server-status", {
                attrs: {
                    server: e.server
                }
            }), e._v(" " + e._s(e.server.name) + " "), e.server.permissions.editServerData ? a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(t) {
                        return e.startRename()
                    }
                }
            }, [a("v-icon", [e._v("mdi-pencil")])], 1) : e._e()], 1), a("div", {
                staticStyle: {
                    float: "right"
                }
            }, [a("server-controls", {
                attrs: {
                    server: e.server
                }
            })], 1), a("div", {
                staticClass: "mb-2",
                staticStyle: {
                    clear: "both"
                }
            })])], 1), e.socketError ? a("v-row", {
                ref: "alertRow"
            }, [a("v-col", [a("v-alert", {
                attrs: {
                    border: "left",
                    text: "",
                    type: "warning"
                }
            }, [e._v(" " + e._s(e.$t("errors.ErrSocketFailed")) + " ")])], 1)], 1) : e._e(), e.server.permissions.viewServerConsole || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "console" === e.currentTab,
                    expression: "currentTab === 'console'"
                }]
            }, [a("v-col", [a("server-console", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.viewServerStats || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "stats" === e.currentTab,
                    expression: "currentTab === 'stats'"
                }]
            }, [a("v-col", [a("server-cpu", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.viewServerStats || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "stats" === e.currentTab,
                    expression: "currentTab === 'stats'"
                }]
            }, [a("v-col", [a("server-memory", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.viewServerFiles || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "files" === e.currentTab,
                    expression: "currentTab === 'files'"
                }]
            }, [a("v-col", [a("server-files", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.sftpServer || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "files" === e.currentTab,
                    expression: "currentTab === 'files'"
                }]
            }, [a("v-col", [a("server-sftp", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.editServerData || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "tasks" === e.currentTab,
                    expression: "currentTab === 'tasks'"
                }]
            }, [a("v-col", [a("server-tasks", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.editServerData || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "settings" === e.currentTab,
                    expression: "currentTab === 'settings'"
                }]
            }, [a("v-col", [a("server-settings", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), e.server.permissions.editServerUsers || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "users" === e.currentTab,
                    expression: "currentTab === 'users'"
                }]
            }, [a("v-col", [a("server-users", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e(), a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "admin" === e.currentTab,
                    expression: "currentTab === 'admin'"
                }]
            }, [a("v-col", [a("ui-oauth", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1), e.server.permissions.deleteServer || e.isAdmin() ? a("v-row", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "admin" === e.currentTab,
                    expression: "currentTab === 'admin'"
                }]
            }, [a("v-col", [a("server-admin", {
                attrs: {
                    server: e.server
                }
            })], 1)], 1) : e._e()], 1)], 1), a("v-row", {
                ref: "bottomRow",
                staticClass: "mt-8"
            }, [a("v-col", [a("v-bottom-navigation", {
                staticStyle: {
                    "z-index": "3"
                },
                attrs: {
                    absolute: "",
                    mandatory: "",
                    color: "primary"
                },
                model: {
                    value: e.currentTab,
                    callback: function(t) {
                        e.currentTab = t
                    },
                    expression: "currentTab"
                }
            }, [a("v-slide-group", [e.server.permissions.viewServerConsole || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t c",
                                expression: "'t c'"
                            }],
                            attrs: {
                                value: "console"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Console")))]), a("v-icon", [e._v("mdi-console-line")])], 1)]
                    }
                }], null, !1, 4249100814)
            }) : e._e(), e.server.permissions.viewServerStats || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t i",
                                expression: "'t i'"
                            }],
                            attrs: {
                                value: "stats"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Statistics")))]), a("v-icon", [e._v("mdi-chart-line")])], 1)]
                    }
                }], null, !1, 523759697)
            }) : e._e(), e.server.permissions.viewServerFiles || e.server.permissions.sftpServer || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t f",
                                expression: "'t f'"
                            }],
                            attrs: {
                                value: "files"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Files")))]), a("v-icon", [e._v("mdi-file")])], 1)]
                    }
                }], null, !1, 3579652892)
            }) : e._e(), e.showTasks && (e.server.permissions.editServerData || e.isAdmin()) ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t t",
                                expression: "'t t'"
                            }],
                            attrs: {
                                value: "tasks"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Tasks")))]), a("v-icon", [e._v("mdi-timer")])], 1)]
                    }
                }], null, !1, 1019420573)
            }) : e._e(), e.server.permissions.editServerData || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t s",
                                expression: "'t s'"
                            }],
                            attrs: {
                                value: "settings"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Settings")))]), a("v-icon", [e._v("mdi-cog")])], 1)]
                    }
                }], null, !1, 1428444753)
            }) : e._e(), e.server.permissions.editServerUsers || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t u",
                                expression: "'t u'"
                            }],
                            attrs: {
                                value: "users"
                            }
                        }, [a("span", [e._v(e._s(e.$t("users.Users")))]), a("v-icon", [e._v("mdi-account-multiple")])], 1)]
                    }
                }], null, !1, 3699895602)
            }) : e._e(), a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "t a",
                                expression: "'t a'"
                            }],
                            attrs: {
                                value: "admin"
                            }
                        }, [a("span", [e._v(e._s(e.$t("servers.Admin")))]), a("v-icon", [e._v("mdi-account-star")])], 1)]
                    }
                }])
            })], 1)], 1)], 1)], 1), a("ui-overlay", {
                attrs: {
                    title: e.$t("servers.Rename"),
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.resetRename()
                    }
                },
                model: {
                    value: e.renameOpen,
                    callback: function(t) {
                        e.renameOpen = t
                    },
                    expression: "renameOpen"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("common.Name"),
                    autofocus: ""
                },
                model: {
                    value: e.newName,
                    callback: function(t) {
                        e.newName = t
                    },
                    expression: "newName"
                }
            })], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.resetRename()
                    }
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.confirmRename()
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    socketError: !1,
                    currentTab: "console",
                    showTasks: !1,
                    renameOpen: !1,
                    newName: ""
                }
            },
            mounted() {
                this.$api.startServerTask(this.server.id, ()=>{
                    this.$api.requestServerStats(this.server.id)
                }
                , 3e3),
                this.$api.addServerListener(this.server.id, "error", ()=>{
                    this.$toast.warning(this.$t("errors.ErrSocketFailed")),
                    this.socketError = !0
                }
                )
            },
            methods: {
                startRename() {
                    this.newName = this.server.name,
                    this.renameOpen = !0
                },
                resetRename() {
                    this.renameOpen = !1,
                    this.newName = ""
                },
                confirmRename() {
                    this.$api.updateServerName(this.server.id, this.newName),
                    this.server.name = this.newName,
                    this.resetRename()
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("0798")
          , c = a("b81c")
          , m = a("8336")
          , p = a("62ad")
          , v = a("a523")
          , h = a("132d")
          , g = a("0fd9")
          , f = a("7efd")
          , S = a("9dbe")
          , k = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = k.exports;
        d()(k, {
            VAlert: u["a"],
            VBottomNavigation: c["a"],
            VBtn: m["a"],
            VCol: p["a"],
            VContainer: v["a"],
            VIcon: h["a"],
            VRow: g["a"],
            VSlideGroup: f["b"],
            VSlideItem: S["a"]
        })
    },
    "332e": function(e) {
        e.exports = JSON.parse('{"FileManager":"Failihaldur","NewFolder":"Uus Kaust","NewFile":"Uus Fail","LastModified":"Viimati Muudetud","ConfirmDelete":"Olete kindel et soovite kustutada seda faili?","Upload":"Üleslaadimine","Download":"Allalaadimine","Size":"Suurus","NoFiles":"Siin pole faile veel, mine ja loo mõned failid, näiteks klikkides paigaldamise nupule lehe üleval","FileLoadFailed":"Faili laadimine ebaõnnestus","Refresh":"Värskenda","CreateFile":"Loo fail","CreateFolder":"Loo kaust","ArchiveCurrentFolder":"Loo arhiiv praegusest kaustast","ArchiveFolder":"Loo arhiiv kaustast","ExtractArchive":"Ekstrakti arhiiv","DropToUpload":"Lohistage üleslaadimiseks failid siia"}')
    },
    3443: function(e) {
        e.exports = JSON.parse('{"Users":"用戶","Add":"新增用戶","AccountSettings":"帳戶設定","OldPassword":"舊密碼","NewPassword":"新密碼","ConfirmPassword":"確認密碼","ChangePassword":"更改密碼","ChangeInfo":"更改帳戶資料","InfoChanged":"你的資料已變更","PasswordChanged":"你的密碼已變更","AccountPassword":"帳戶密碼","Account":"帳戶","Login":"登入","LoginLink":"或在這登入","Logout":"登出","Register":"註冊","RegisterLink":"或在這注冊","RegisterSuccess":"你已更功註冊","NoEmailGiven":"您必須提供要添加的用戶的電郵地址","Username":"用戶名稱","Password":"密碼","Email":"電郵地址","Edit":"編輯用戶","Update":"更新用戶","Delete":"刪除用戶","CreateSuccess":"User successfully created","CreateError":"創建用戶失敗","UpdateSuccess":"更新用戶","UpdateError":"變更用戶失敗","PermsUpdateError":"變更用戶權限失敗","Otp":"Two factor authentication","OtpEnable":"Enable 2FA","OtpDisable":"Disable 2FA","OtpHint":"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"Secret Code","OtpConfirm":"Confirm using a 2FA code","OtpNeeded":"2FA required"}')
    },
    "34e5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"خطأ غير معروف","ErrUnknownError":"خطأ غير معروف","ErrInvalidCredentials":"بيانات اعتماد غير صالحة","ErrServiceNotAvailable":"الخدمة غير متوفرة","ErrEmailNotConfigured":"لم يتم ظبط البريد الإلكتروني","ErrTokenInvalid":"الرمز غير صالح","ErrClientNotFound":"لم يتم العثور على العميل","ErrUserNotFound":"المستخدم غير موجود","ErrLoginNotPermitted":"تسجيل الدخول غير مسموح","ErrInvalidTokenState":"إجراء خاطئ","ErrSettingNotConfigured":"{setting} لم يتم ظبطه","ErrNoTemplate":"لم يتم ايجاد نموذج باسم \'{name}\'","ErrServiceInvalidProvider":"{service} لا تدعم {provider}","ErrFieldRequired":"{field} مطلوب","ErrFieldMustBePrintable":"{field} يجب ان يحتوي على حروف أسكي","ErrFieldHasURICharacters":"{field} يجب ألا يحتوي على حروف لا يمكن استخدامها في الروابط","ErrFieldIsInvalidHost":"{field} يجب أن يكون اي بي صالح او اسم دومين صالح","ErrFieldIsInvalidIP":"{field} يجب أن يكون اي بي صالح","ErrFieldTooLarge":"{field} لا يمكن أن يكون أكبر من {max}","ErrFieldTooSmall":"{field} لا يمكن أن يكون أصغر من {min}","ErrFieldNotBetween":"{field} يجب أن يكون بين {min} و {max}","ErrFieldEqual":"{field1} لا يمكن أن يساوي {field2}","ErrFieldNotEqual":"{field1} لا يساوي {field2}","ErrFieldNotEmail":"{field} ليس بريد الكتروني صحيح","ErrFieldLength":"{field} يجب أن يكون على الأقل {length} حرفاً","ErrNoPermission":"لا يوجد لديك صلاحيات كافية لتفيذ هذا الإجراء","ErrDatabaseNotAvailable":"قاعدة البيانات غير متوفرة","ErrNoNodes":"لا يوجد Nodes متوفرة","ErrNoTemplates":"لا يوجد نماذج متوفرة","ErrPasswordRequirements":"يجب على كلمة المرور أن تكون على الاقل 8 أحرف","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"كلمات المرور ليست متطابقة","ErrSessionTimedOut":"انتهى وقت الجلسة الخاصة بك، يرجى تسجيل الدخول مرة أخرى","ErrMissingScope":"ليس لديك صلاحية لتقوم بهذا الإجراء","ErrInvalidJson":"بيانات ال json غير صحيحة","ErrSocketFailed":"واجهه اتصال WebSocket حدث لها خطأ، بعض الميزات قد تكون بطيئة او لا تعمل","ErrInviteLinkInvalid":"يبدو أن رابط دعوتك غير صالح","ErrSavingInviteduser":"حدث خطأ أثناء إنشاء حسابك","ErrDuplicateServerName":"يوجد خادم بهذا الاسم مسبقاً","ErrDuplicateNodeName":"يوجد نود بالفعل بهذا الإسم","ErrDirectoryUploadNotSupported":"لا يمكن تحميل المجلدات","ErrDockerNotSupported":"Docker غير مدعوم في هذا النود","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "357e": function(e) {
        e.exports = JSON.parse('{"Users":"Používatelia","Add":"Pridať používateľa","AccountSettings":"Nastavenia účtu","OldPassword":"Staré heslo","NewPassword":"Nové heslo","ConfirmPassword":"Potvrdiť heslo","ChangePassword":"Zmeniť heslo","ChangeInfo":"Zmeniť podrobnosti účtu","InfoChanged":"Vaše informácie boli zmenené","PasswordChanged":"Vaše heslo bolo zmenené","AccountPassword":"Heslo účtu","Account":"Účet","Login":"Prihlásiť sa","LoginLink":"Alebo sa prihláste tu","Logout":"Odhlásiť","Register":"Registrovať","RegisterLink":"Alebo sa zaregistrujte tu","RegisterSuccess":"Úspešne ste sa zaregistrovali","NoEmailGiven":"Musíte zadať e-mail používateľa, ktorého chcete pridať","Username":"Užívateľské meno","Password":"Heslo","Email":"E-mail","Edit":"Upraviť používateľa","Update":"Aktualizovať používateľa","Delete":"Odstrániť používateľa","CreateSuccess":"Používateľ bol úspešne vytvorený","CreateError":"Nepodarilo sa vytvoriť používateľa","UpdateSuccess":"Používateľ aktualizovaný","UpdateError":"Nepodarilo sa aktualizovať používateľa","PermsUpdateError":"Nepodarilo sa aktualizovať oprávnenia používateľa","Otp":"Dvojfaktorové overovanie","OtpEnable":"Povoliť 2FA","OtpDisable":"Vypnúť 2FA","OtpHint":"Dvojfaktorové overovanie pridáva do vášho účtu ďalšiu úroveň zabezpečenia tým, že na prihlásenie sa vyžaduje viac ako len heslo.","OtpSetup":"Nastavenie 2FA","OtpSetupHint":"Naskenujte kód QR pomocou aplikácie autentifikátora alebo do nej skopírujte tajný kód uvedený nižšie.","OtpSecret":"Tajný kód","OtpConfirm":"Potvrďte pomocou kódu 2FA","OtpNeeded":"2FA je povinné"}')
    },
    "35a3": function(e) {
        e.exports = JSON.parse('{"Templates":"템플릿","NoTemplates":"템플릿이 아직 없습니다","Deleted":"템플릿이 삭제되었습니다","New":"새 템플릿 만들기","Edit":"템플릿 수정","Editor":"편집기","Json":"JSON","Display":"이름","Type":"유형","Variables":"변수","Install":"설치","AddInstallStep":"설치 과정 추가","DeleteInstallStep":"설치 과정 삭제","Description":"설명","DataType":"데이터 유형","DefaultValue":"기본값","Required":"필수","UserEditable":"유저가 수정 가능","Value":"값","AddOption":"옵션 추가","AddCommand":"명령어 추가","Filename":"파일 이름","Content":"내용","Source":"원본","Target":"목표","Version":"버전","ReleaseType":"출시 유형","AddFile":"파일 추가","AddVariable":"변수 추가","Environment":"환경","Environments":"환경","AddEnvironment":"구동환경 추가","DefaultEnvironment":"기본 구동환경","AddEnvVar":"환경 변수 추가","EnvVars":"환경 변수","DockerImage":"Docker 이미지","SaveSuccess":"템플릿이 추가되었습니다","VarNameNoSpaces":"변수 이름은 비거나 띄어쓰기가 있을 수 없습니다","SupportedEnvironments":"지원되는 환경","RunConfig":"실행 설정","PreHook":"실행 전 연결","PostHook":"실행 후 연결","AddPreStep":"실행 전 단계 추가","AddPostStep":"실행 후 단계 추가","DeletePreStep":"실행 전 단계 제거","DeletePostStep":"실행 후 단계 제거","Shutdown":"정지","Command":"명령","WorkingDirectory":"작업 폴더","Arguments":"인자","AddArgument":"인자 추가","Convert":"변환","OfferV1Convert":"이 템플릿은 PufferPanel 1.x용 템플릿입니다. 이 템플릿을 PufferPanel 2.x용 템플릿으로 자동변환하시겠습니까?","import":{"CommunityWarning":"이 템플릿은 커뮤니티에서 제작되며, 보증없이 제공됩니다.","OverrideWarning":"경고: 불러와진 템플릿들은 이미 존재하는 같은 ID의 템플릿들을 덮어 쓸것입니다","Import":"템플릿 가져오기","Tooltip":"공식 리포지토리에서 템플릿 가져오기","Select":"가져올 템플릿 선택","Started":"템플릿을 가져오는중입니다. 잠시만 기다려주세요","Successful":"템플릿 {template} 을(를) 불러왔습니다","NoTemplatesTitle":"템플릿을 가져올까요?","NoTemplatesContent":"현재 템플릿이 없습니다. 템플릿은 서버를 만들기 위해 필요합니다.<br/>템플릿을 지금 공식 PufferPanel 레포지토리에서 가져올까요?"},"stop":{"Command":"명령","Signal":"신호"},"processors":{"download":{"ProcessorName":"다운로드","files":"파일"},"command":{"ProcessorName":"명령어 실행","commands":"명령어"},"alterfile":{"ProcessorName":"파일 수정","regex":"RegEx를 이용한 검색","search":"텍스트로 검색","replace":"로 바꾸기"},"writefile":{"ProcessorName":"파일로 쓰기","text":"내용"},"move":{"ProcessorName":"파일 이동","source":"원본","target":"목표"},"mkdir":{"ProcessorName":"폴더 생성"},"mojangdl":{"ProcessorName":"마인크래프트 다운로드"},"forgedl":{"ProcessorName":"마인크래프트 forge 다운로드"},"spongeforgedl":{"ProcessorName":"마인크래프트 spongeforge 다운로드","releaseType":"출시 유형"},"fabricdl":{"ProcessorName":"마인크래프트 Fabric 다운로드"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "35c7": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Для этого окружения нет специальных параметров","docker":{"name":"Docker","image":"Снимок","networkMode":"Сетевой режим","networkName":"Название сети","bindings":"Привязка","portBindings":"Порт привязки","OutsidePort":"Внешний порт","InsidePort":"Внутренний порт","HostPath":"Путь к хосту","ContainerPath":"Путь к контейнеру"},"standard":{"name":"Стандартный"},"tty":{"name":"TTY"}}')
    },
    3613: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Adresse","Online":"Online","Offline":"Offline","Loading":"Lädt...","General":"Allgemein","Language":"Sprache","SelectLanguage":"Sprache auswählen","Settings":"Einstellungen","Update":"Aktualisieren","Edit":"Bearbeiten","Delete":"Löschen","Create":"Erstellen","Save":"Speichern","Saved":"Gespeichert","SaveFailed":"Speichern fehlgeschlagen","Cancel":"Abbrechen","Confirm":"Bestätigen","Actions":"Aktionen","Host":"Host","Port":"Port","Template":"Vorlage","Options":"Optionen","Collapse":"Einklappen","Copied":"In die Zwischenablage kopiert","Unknown":"Unbekannt","Search":"Suchen","Back":"Zurück","Next":"Weiter","LanguageName":"Deutsch","Details":"Details","ErrorDetails":"Fehlerdetails","HelpTranslate":"Hilf uns, PufferPanel zu übersetzen","DarkMode":"Dark Mode","ThemeOptions":"Theme-Einstellungen","Protocol":"Protokoll","Add":"Hinzufügen","Ignore":"Ignorieren","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag","Sunday":"Sonntag","Description":"Beschreibung"}')
    },
    "382f": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users","PanelSettings":"Change panel settings"}')
    },
    3916: function(e) {
        e.exports = JSON.parse('{"Credentials":"Přihlašovací údaje klienta OAuth2","ClientId":"ID klienta","ClientSecret":"Tajný klíč klienta","NewClientWarning":"Zaznamenejte si tajemství klienta, po zavření tohoto dialogu se již nikdy nezobrazí. Ztrátou nebo zapomenutím bude tento klient zcela nepoužitelný.","Create":"Vytvořit nového klienta OAuth2","UnnamedClient":"Nepojmenovaný klient OAuth2","Docs":"Zde naleznete API dokumentaci","DeleteWarning":"Smazání klienta OAuth2 je nevratné. Nelze ani vytvořit nového klienta se stejnými údaji. Všechny integrace, které stále používají tohoto klienta, se po jeho smazání rozbijí.","ConfirmDelete":"Chápu důsledky, které odstranění tohoto klienta OAuth2 bude mít a chci pokračovat.","Delete":"Smazat {clientName}?","Clients":"Klienti OAuth2","AccountDescription":"Klienti OAuth2 zde uvedení zdědí všechna oprávnění vašich účtů","ServerDescription":"Klienti OAuth2 zde uvedení zdědí pouze vaše účty na tomto serveru"}')
    },
    "395d": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nombre","Address":"Dirección","Online":"Online","Offline":"Offline","Loading":"Cargando...","General":"General","Language":"Idioma","SelectLanguage":"Seleccionar Idioma","Settings":"Configuración","Update":"Actualizar","Edit":"Editar","Delete":"Eliminar","Create":"Crear","Save":"Guardar","Saved":"Guardado","SaveFailed":"Guardado falló","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Acciones","Host":"Host","Port":"Puerto","Template":"Plantilla","Options":"Opciones","Collapse":"Colapsar","Copied":"Copiado al portapapeles","Unknown":"Desconocido","Search":"Buscar","Back":"Atras","Next":"Siguiente","LanguageName":"Español(LAT)","Details":"Detalles","ErrorDetails":"Detalles del error","HelpTranslate":"Ayúdanos a traducir PufferPanel","DarkMode":"Modo Oscuro","ThemeOptions":"Opciones del Tema","Protocol":"Protocolo","Add":"Añadir","Ignore":"Ignorar","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado","Sunday":"Domingo","Description":"Descripción"}')
    },
    "3a5f": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Ügyfél Adatok","ClientId":"Ügyfél ID","ClientSecret":"Titkos ügyfélkód","NewClientWarning":"Jegyezze fel a klienstitkot, a párbeszédpanel bezárása után soha többé nem jelenik meg. Ha elveszíti vagy elfelejti, a kliens teljesen használhatatlanná válik.","Create":"Új OAuth2 Ügyfél létrehozása","UnnamedClient":"Névtelen OAuth2 Ügyfél","Docs":"Itt találod az API dokumentációját","DeleteWarning":"Egy OAuth2-kliens törlése nem vonható vissza, és új kliens sem hozható létre ugyanazokkal a hitelesítő adatokkal. A törlés után a klienset még mindig használó összes integráció megszakad.","ConfirmDelete":"Tisztában vagyok az OAuth2-kliens törlésének hatásaival, és folytatni kívánom.","Delete":"Valóban törlöd a(z) {clientName} adatait?","Clients":"OAuth2 Ügyfelek","AccountDescription":"Az itt szereplő OAuth2 Ügyfelek öröklik az összes jogod","ServerDescription":"Az itt szereplő OAuth2 Ügyfelek csak a fiókod jogaid öröklik"}')
    },
    "3a68": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.Variables"))
                }
            }), a("v-card-text", [a("template-variables", {
                model: {
                    value: e.value.vars,
                    callback: function(t) {
                        e.$set(e.value, "vars", t)
                    },
                    expression: "value.vars"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.Install"))
                }
            }), a("v-card-text", [a("template-processors", {
                model: {
                    value: e.value.install,
                    callback: function(t) {
                        e.$set(e.value, "install", t)
                    },
                    expression: "value.install"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.RunConfig"))
                }
            }), a("v-card-text", [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    label: e.$t("templates.Command")
                },
                model: {
                    value: e.value.command,
                    callback: function(t) {
                        e.$set(e.value, "command", t)
                    },
                    expression: "value.command"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    label: e.$t("templates.WorkingDirectory")
                },
                model: {
                    value: e.value.workingDirectory,
                    callback: function(t) {
                        e.$set(e.value, "workingDirectory", t)
                    },
                    expression: "value.workingDirectory"
                }
            })], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.Shutdown"))
                }
            }), a("v-card-text", [a("template-shutdown", {
                model: {
                    value: e.value.stop,
                    callback: function(t) {
                        e.$set(e.value, "stop", t)
                    },
                    expression: "value.stop"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.PreHook"))
                }
            }), a("v-card-text", [a("template-processors", {
                model: {
                    value: e.value.pre,
                    callback: function(t) {
                        e.$set(e.value, "pre", t)
                    },
                    expression: "value.pre"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.PostHook"))
                }
            }), a("v-card-text", [a("template-processors", {
                model: {
                    value: e.value.post,
                    callback: function(t) {
                        e.$set(e.value, "post", t)
                    },
                    expression: "value.post"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.EnvVars"))
                }
            }), a("v-card-text", [a("ui-map-input", {
                on: {
                    input: function(t) {
                        return e.$forceUpdate()
                    }
                },
                model: {
                    value: e.value.envVars,
                    callback: function(t) {
                        e.$set(e.value, "envVars", t)
                    },
                    expression: "value.envVars"
                }
            })], 1)], 1)], 1)], 1), a("v-row", [a("v-col", [a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t(e.server ? "templates.Environment" : "templates.Environments"))
                }
            }), e.server ? a("v-card-text", [a("ui-env-config", {
                attrs: {
                    "no-fields-text": e.$t("env.NoEnvFields")
                },
                model: {
                    value: e.value.defaultEnv,
                    callback: function(t) {
                        e.$set(e.value, "defaultEnv", t)
                    },
                    expression: "value.defaultEnv"
                }
            })], 1) : a("v-card-text", [a("template-environments", {
                model: {
                    value: e.value.supportedEnvs,
                    callback: function(t) {
                        e.$set(e.value, "supportedEnvs", t)
                    },
                    expression: "value.supportedEnvs"
                }
            }), Object.keys(e.value.supportedEnvs).length > 0 ? a("ui-select", {
                attrs: {
                    label: e.$t("templates.DefaultEnvironment"),
                    items: e.configuredEnvironments
                },
                model: {
                    value: e.value.defaultEnv,
                    callback: function(t) {
                        e.$set(e.value, "defaultEnv", t)
                    },
                    expression: "value.defaultEnv"
                }
            }) : e._e()], 1)], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Object,
                    required: !0
                },
                server: {
                    type: Boolean,
                    default: ()=>!1
                }
            },
            computed: {
                configuredEnvironments() {
                    return this.value.supportedEnvs.map(e=>({
                        text: e.type,
                        value: e
                    }))
                }
            },
            watch: {
                "value.supportedEnvs"(e) {
                    this.value.defaultEnv && (this.value.defaultEnv = e.filter(e=>e.type === this.value.defaultEnv.type)[0])
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("b0af")
          , c = a("99d9")
          , m = a("62ad")
          , p = a("0fd9")
          , v = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VCard: u["a"],
            VCardText: c["c"],
            VCardTitle: c["d"],
            VCol: m["a"],
            VRow: p["a"]
        })
    },
    "3bd7": function(e) {
        e.exports = JSON.parse('{"ServersView":"Saab vaadata seda serverit","ServersEdit":"Muuda serverit","ServersInstall":"Paigalda server","ServersConsole":"Vaata konsooli","ServersConsoleSend":"Saada käsklused konsooli","ServersStop":"Peata ja killi server","ServersStart":"Käivita server","ServersStat":"Vaata CPU ja mälu statistikat","ServersFiles":"Luba ligipääs failidele kasutades SFTP","ServersFilesGet":"Vaata ja laadi alla faile kasutades failihaldurit","ServersFilesPut":"Muuda ja laadi üles faile kasutades failihaldurit","ServersEditUsers":"Muuda kasutaja ligipääsu sellele serverile","Admin":"Admin (see annab iga võimaliku õiguse)","ViewServers":"Vaata Servereid","CreateServers":"Loo uusi Servereid","DeleteServers":"Kustuta Servereid","EditServerAdmin":"Muuda Serveri sätteid","ViewNodes":"Vaata Sõlmi","EditNodes":"Muuda Sõlmi","DeployNodes":"Juuruta uued Sõlmed","ViewTemplates":"Vaata Malle","EditTemplates":"Muuda Malle","ViewUsers":"Vaata kõiki Kasutajaid","EditUsers":"Muuda teisi Kasutajaid","PanelSettings":"Muuda paneeli sätteid"}')
    },
    "3bd9": function(e) {
        e.exports = JSON.parse('{"Server":"서버","NoServers":"접근 가능한 서버가 없습니다","Servers":"서버","Add":"서버 추가","Console":"콘솔","Controls":"제어","SFTPInfo":"SFTP 정보","Restart":"재시작","Start":"시작","Stop":"정지","Kill":"강제 중지","Install":"설치","Send":"전송","Pause":"일시 정지","Statistics":"통계","CPU":"CPU","Memory":"메모리","Files":"파일","Name":"서버 이름","NameInvalid":"서버 이름은 비워두거나 특수 문자를 포함할 수 없습니다.","SelectNode":"노드를 선택해주세요","SelectTemplate":"템플릿 선택","SelectThisTemplate":"이 템플릿 사용하기","SelectUser":"유저를 선택해주세요","Environment":"구동환경","SelectEnvironment":"구동환경을 선택해주세요","TypeUsername":"닉네임을 입력해주세요","Admin":"Admin","AdminControls":"관리자 제어판","Settings":"설정","NoEditableVars":"이 서버에 수정할 수 있는 변수가 없습니다.","ConfirmDelete":"이 서버를 삭제할까요?(되돌릴 수 없습니다.)","Delete":"서버 삭제","Deleted":"서버가 삭제되었습니다.","NoReadme":"이 템플릿에 설명이 없습니다","SftpConnection":"SFTP 연결","EditDefinition":"서버 정의 변경","Reload":"디스크에서 서버 정보 다시 로드","Reloaded":"서버 정보를 다시 불러왔습니다.","Autostart":"노드가 시작되었을때 서버 시작","Autorestart":"서버가 중지되었을 때 재시작","Autorecover":"오류로 서버가 중지되었을 때 재시작","Rename":"서버 이름 변경","Tasks":"작업","NoTasks":"작업 없음","RunTask":"작업 실행","NewTask":"새 작업","EditTask":"작업 수정","TaskDeleted":"작업 삭제됨","TaskTriggered":"작업이 트리거됨","EnableSchedule":"자동으로 작업 실행","TaskScheduleInvalid":"작업 스케쥴이 맞지 않습니다","TaskScheduleManual":"수동 실행","CronExpression":"Cron Expression","Hourly":"매 시간","Daily":"일일","Weekly":"매주","Monthly":"매월","Advanced":"고급","HourlyTab":"{hourInterval} 시간 {minute} 마다","DailyTab":"{dayInterval} 일마다 {hour}:{minute} 에","WeeklyTab":"{dayInterval} 주마다 {hour}:{minute} 에","MonthlyTab":"{monthInterval} 개월마다 {day} 일 {hour}:{minute} 에"}')
    },
    "3c10": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.Tasks"))
                }
            })]), a("v-card-text", [a("v-row", [0 === e.tasks.length ? a("v-col", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.NoTasks"))
                }
            })]) : e._e(), a("v-col", [a("v-list", e._l(e.tasks, (function(t, r) {
                return a("v-list-item", {
                    key: r,
                    on: {
                        click: function(t) {
                            return e.edit(r)
                        }
                    }
                }, [a("v-list-item-content", [a("v-list-item-title", [e._v(e._s(t.name))]), a("v-list-item-subtitle", [e._v(e._s(e.describe(t.cronSchedule)))])], 1), a("v-list-item-action", {
                    staticClass: "flex-row"
                }, [a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var r = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                }
                            }, r), [a("v-icon", [e._v("mdi-pencil")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Edit"))
                    }
                })]), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        return t.stopPropagation(),
                                        e.trigger(r)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-play")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.RunTask"))
                    }
                })]), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        return t.stopPropagation(),
                                        e.remove(r)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-close")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Delete"))
                    }
                })])], 1)], 1)
            }
            )), 1)], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    text: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        e.add = !0
                    }
                }
            })], 1)], 1), a("ui-overlay", {
                attrs: {
                    closable: "",
                    card: "",
                    title: e.$t("servers.NewTask")
                },
                on: {
                    close: e.reset
                },
                model: {
                    value: e.add,
                    callback: function(t) {
                        e.add = t
                    },
                    expression: "add"
                }
            }, [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    label: e.$t("common.Name"),
                    autofocus: ""
                },
                model: {
                    value: e.newTask.name,
                    callback: function(t) {
                        e.$set(e.newTask, "name", t)
                    },
                    expression: "newTask.name"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("ui-switch", {
                staticClass: "px-1",
                attrs: {
                    label: e.$t("servers.EnableSchedule")
                },
                model: {
                    value: e.newTask.scheduled,
                    callback: function(t) {
                        e.$set(e.newTask, "scheduled", t)
                    },
                    expression: "newTask.scheduled"
                }
            })], 1)], 1), e.newTask.scheduled ? a("v-row", [a("v-col", [a("v-sheet", {
                staticClass: "pb-2",
                attrs: {
                    elevation: "1"
                }
            }, [a("ui-cron-editor", {
                model: {
                    value: e.newTask.cronSchedule,
                    callback: function(t) {
                        e.$set(e.newTask, "cronSchedule", t)
                    },
                    expression: "newTask.cronSchedule"
                }
            })], 1)], 1)], 1) : e._e(), a("v-row", [a("v-col", [a("template-processors", {
                model: {
                    value: e.newTask.operations,
                    callback: function(t) {
                        e.$set(e.newTask, "operations", t)
                    },
                    expression: "newTask.operations"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success",
                    disabled: !e.canSave("new")
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: e.saveNew
                }
            })], 1)], 1)], 1), a("ui-overlay", {
                attrs: {
                    value: !1 !== e.editId,
                    closable: "",
                    card: "",
                    title: e.$t("servers.EditTask")
                },
                on: {
                    close: e.reset
                }
            }, [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    label: e.$t("common.Name"),
                    autofocus: ""
                },
                model: {
                    value: e.editTask.name,
                    callback: function(t) {
                        e.$set(e.editTask, "name", t)
                    },
                    expression: "editTask.name"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("ui-switch", {
                staticClass: "px-1",
                attrs: {
                    label: e.$t("servers.EnableSchedule")
                },
                model: {
                    value: e.editTask.scheduled,
                    callback: function(t) {
                        e.$set(e.editTask, "scheduled", t)
                    },
                    expression: "editTask.scheduled"
                }
            })], 1)], 1), e.editTask.scheduled ? a("v-row", [a("v-col", [a("v-sheet", {
                staticClass: "pb-2",
                attrs: {
                    elevation: "1"
                }
            }, [a("ui-cron-editor", {
                model: {
                    value: e.editTask.cronSchedule,
                    callback: function(t) {
                        e.$set(e.editTask, "cronSchedule", t)
                    },
                    expression: "editTask.cronSchedule"
                }
            })], 1)], 1)], 1) : e._e(), a("v-row", [a("v-col", [a("template-processors", {
                model: {
                    value: e.editTask.operations,
                    callback: function(t) {
                        e.$set(e.editTask, "operations", t)
                    },
                    expression: "editTask.operations"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success",
                    disablef: !e.canSave("edit")
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: e.saveEdit
                }
            })], 1)], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = a("7aa9")
          , o = a.n(i)
          , s = a("01a8")
          , l = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    add: !1,
                    editId: !1,
                    tasks: {},
                    newTask: {},
                    editTask: {}
                }
            },
            mounted() {
                this.loadData(),
                this.reset()
            },
            methods: {
                async loadData() {
                    this.tasks = await this.$api.getServerTasks(this.server.id) || {}
                },
                async saveNew() {
                    this.newTask.scheduled || (this.newTask.cronSchedule = null);
                    const e = await this.$api.createServerTask(this.server.id, this.newTask);
                    this.$toast.success(this.$t("common.Saved")),
                    this.tasks[e] = this.newTask,
                    this.reset(),
                    this.loadData()
                },
                edit(e) {
                    this.editTask = {
                        ...this.tasks[e],
                        scheduled: this.tasks[e].cronSchedule && "" !== this.tasks[e].cronSchedule.trim()
                    },
                    this.editTask.scheduled || (this.editTask.cronSchedule = "0 0 */1 * *"),
                    this.editId = e
                },
                async saveEdit() {
                    this.editTask.scheduled || (this.editTask.cronSchedule = null),
                    await this.$api.editServerTask(this.server.id, this.editId, this.editTask),
                    this.$toast.success(this.$t("common.Saved")),
                    this.tasks[this.editId] = this.editTask,
                    this.reset(),
                    this.loadData()
                },
                async remove(e) {
                    await this.$api.deleteServerTask(this.server.id, e),
                    this.$toast.success(this.$t("servers.TaskDeleted")),
                    delete this.tasks[e],
                    this.loadData()
                },
                async trigger(e) {
                    await this.$api.runServerTask(this.server.id, e),
                    this.$toast.success(this.$t("servers.TaskTriggered"))
                },
                reset() {
                    this.newTask = {
                        name: "",
                        scheduled: !0,
                        cronSchedule: "0 0 */1 * *",
                        operations: []
                    },
                    this.add = !1,
                    this.editTask = {
                        name: "",
                        scheduled: !1,
                        cronSchedule: "0 0 */1 * *",
                        operations: []
                    },
                    this.editId = !1
                },
                describe(e) {
                    if (!e || "" === e)
                        return this.$t("servers.TaskScheduleManual");
                    if (!this.isValidSchedule(e))
                        return;
                    let t = "en";
                    return t = "zh_TW" === this.$i18n.locale || "zh_HK" === this.$i18n.locale ? "zh_TW" : "zh_CN" === this.$i18n.locale ? "zh_CN" : this.$i18n.locale.split("_")[0] || "en",
                    o.a.toString(e, {
                        verbose: !0,
                        locale: t
                    })
                },
                canSave(e) {
                    const t = "edit" === e ? this.editTask : this.newTask;
                    return !(!t.name || "" === t.name.trim()) && !!this.isValidSchedule(t.cronSchedule)
                },
                isValidSchedule(e) {
                    return !e || "" === e || Object(s["isValidCron"])(e, {
                        alias: !0,
                        allowBlankDay: !0
                    })
                }
            }
        }
          , d = l
          , u = a("2877")
          , c = a("6544")
          , m = a.n(c)
          , p = a("8336")
          , v = a("b0af")
          , h = a("99d9")
          , g = a("62ad")
          , f = a("132d")
          , S = a("8860")
          , k = a("da13")
          , E = a("1800")
          , y = a("5d23")
          , b = a("0fd9")
          , P = a("8dd9")
          , N = a("3a2f")
          , C = Object(u["a"])(d, r, n, !1, null, null, null);
        t["default"] = C.exports;
        m()(C, {
            VBtn: p["a"],
            VCard: v["a"],
            VCardText: h["c"],
            VCardTitle: h["d"],
            VCol: g["a"],
            VIcon: f["a"],
            VList: S["a"],
            VListItem: k["a"],
            VListItemAction: E["a"],
            VListItemContent: y["a"],
            VListItemSubtitle: y["b"],
            VListItemTitle: y["c"],
            VRow: b["a"],
            VSheet: P["a"],
            VTooltip: N["a"]
        })
    },
    "3c45": function(e) {
        e.exports = JSON.parse('{"FileManager":"Menadżer Plików","NewFolder":"Nowy Katalog","NewFile":"Nowy Plik","LastModified":"Ostatnio modyfikowany","ConfirmDelete":"Czy na pewno chcesz usunąć ten plik?","Upload":"Wyślij","Download":"Pobierz","Size":"Rozmiar","NoFiles":"Nie ma jeszcze tutaj żadnych plików, utwórz je na przykład klikając przycisk instaluj na górze strony","FileLoadFailed":"Nie udało się wczytać pliku","Refresh":"Odśwież","CreateFile":"Utwórz Plik","CreateFolder":"Stwórz Folder","ArchiveCurrentFolder":"Utwórz archiwum z bieżącego folderu","ArchiveFolder":"Stwórz archiwum z folderu","ExtractArchive":"Rozpakuj archiwum","DropToUpload":"Upuść pliki tutaj, aby je dodać"}')
    },
    "3c6b": function(e) {
        e.exports = JSON.parse('{"Id":"아이디","Name":"이름","Address":"주소","Online":"온라인","Offline":"오프라인","Loading":"불러오는중...","General":"일반","Language":"언어","SelectLanguage":"언어 선택하기","Settings":"설정","Update":"업데이트","Edit":"수정","Delete":"삭제","Create":"생성","Save":"저장","Saved":"저장됨","SaveFailed":"저장 실패","Cancel":"취소","Confirm":"확인","Actions":"작업","Host":"호스트","Port":"포트","Template":"템플릿","Options":"옵션","Collapse":"접기","Copied":"클림보드에 복사되었습니다","Unknown":"알 수 없음","Search":"검색","Back":"이전","Next":"다음","LanguageName":"한국어","Details":"자세히 보기","ErrorDetails":"오류 정보","HelpTranslate":"PufferPanel을 번역하는걸 도와주세요","DarkMode":"다크모드","ThemeOptions":"테마 옵션","Protocol":"프로토콜","Add":"추가","Ignore":"무시","Monday":"월요일","Tuesday":"화요일","Wednesday":"수요일","Thursday":"목요일","Friday":"금요일","Saturday":"토요일","Sunday":"일요일","Description":"상세정보"}')
    },
    "3d3c": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "3da2": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Editar Node","Add":"Adicionar Node","Update":"Atualizar Node","Delete":"Apagar Node","PublicHost":"Host Público","PublicPort":"Porta Pública","PrivateHost":"Host Privado","PrivatePort":"Porta Privada","SftpPort":"Porta SFTP","WithPrivateAddress":"Usa uma host/porta diferente para comumicação de servidor para servidor","WithPrivateAddressHint":"Este endereço separado é usado quando a node principal precisa de comunicar com a nova node. Útil, por exemplo, quando as nodes estão na mesma rede por trás do NAT.","SaveConfig":"Salvar Configuração","SavePublicKey":"Salvar Chave Pública","DeploymentInstruction":"Para implantar a node, instala o PufferPanel no novo servidor e coloca o ficheiro de configuração em \\"/etc/pufferpanel\\"<br/>Reinicia o PufferPanel no novo servidor a seguir.","UpdateSuccess":"Node atualizada com sucesso","UpdateError":"Erro ao atualizar node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "3f7b": function(e) {
        e.exports = JSON.parse('{"Settings":"设置","PanelSettings":"面板设置","EmailSettings":"邮件设置","MasterUrl":"主 URL","MasterUrlHint":"面板的基准地址，如 http://localhost:8080","CompanyName":"企业名称","DefaultTheme":"默认主题","RegistrationEnabled":"允许用户自行注册","RegistrationEnabledHint1":"在开通权限之前，自行注册的用户不能做任何事情。","RegistrationEnabledHint2":"禁用此选项用户则不能自行注册，邀请服务器和用户页面不受影响","EmailProvider":"邮件供应商","emailProviders":{"none":"无","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"发送地址","domain":"域名","key":"API密钥","host":"主机","username":"用户名","password":"密码"}}')
    },
    "404a": function(e) {
        e.exports = JSON.parse('{"Server":"Serveur","NoServers":"Il n\'y a aucun serveur auquel vous avez accès","Servers":"Serveurs","Add":"Ajouter un Serveur","Console":"Console","Controls":"Contrôles","SFTPInfo":"Informations SFTP","Restart":"Redémarrer","Start":"Démarrer","Stop":"Arrêter","Kill":"Forcer l\'arrêt","Install":"Installer","Send":"Envoyer","Pause":"Pause","Statistics":"Statistiques","CPU":"CPU","Memory":"Mémoire","Files":"Fichiers","Name":"Nom du Serveur","NameInvalid":"Le nom du serveur ne peut pas être vide ou contenir des caractères spéciaux","SelectNode":"Veuillez sélectionner un nœud","SelectTemplate":"Veuillez sélectionner un modèle","SelectThisTemplate":"Utiliser ce modèle","SelectUser":"Veuillez sélectionner un utilisateur","Environment":"Environnement","SelectEnvironment":"Veuillez sélectionner un environnement","TypeUsername":"Saisissez un nom d\'utilisateur","Admin":"Admin","AdminControls":"Contrôles Administratifs","Settings":"Paramètres","NoEditableVars":"Ce serveur n\'a aucune variable que vous pouvez éditer","ConfirmDelete":"Êtes-vous vraiment sûr de vouloir supprimer ce serveur ? (cette opération est irréversible)","Delete":"Supprimer le serveur","Deleted":"Serveur supprimé","NoReadme":"Aucun \\"Read Me\\" disponible pour ce modèle","SftpConnection":"Se connecter au SFTP","EditDefinition":"Modifier la définition du serveur","Reload":"Recharger les données du serveur depuis le disque","Reloaded":"Données du serveur rechargées","Autostart":"Démarrer le serveur au démarrage du nœud","Autorestart":"Redémarrer le serveur lorsqu\'il s\'arrête normalement","Autorecover":"Redémarrer le serveur quand il plante","Rename":"Renommer le serveur","Tasks":"Tâches","NoTasks":"Aucune tâche","RunTask":"Exécuter la tâche","NewTask":"Nouvelle tâche","EditTask":"Modifier la tâche","TaskDeleted":"Tâche supprimée","TaskTriggered":"Tâche déclenchée","EnableSchedule":"activer la planification","TaskScheduleInvalid":"Planification de tâche invalide","TaskScheduleManual":"Exécution manuelle seulement","CronExpression":"expression de Cron","Hourly":"Horaire","Daily":"du quotidien","Weekly":"par semaine","Monthly":"Mensuel","Advanced":"Avancé","HourlyTab":"onglet des horaire","DailyTab":"onglet quotidien","WeeklyTab":"onglet hebdo\\n","MonthlyTab":"onglet mensuel"}')
    },
    4052: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    4211: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Neexistují žádné servery, ke kterým máte přístup","Servers":"Servery","Add":"Přidat server","Console":"Konzole","Controls":"Ovládání","SFTPInfo":"SFTP informace","Restart":"Restartovat","Start":"Spustit","Stop":"Zastavit","Kill":"Shodit","Install":"Instalovat","Send":"Odeslat","Pause":"Pozastavit","Statistics":"Statistiky","CPU":"CPU","Memory":"Paměť","Files":"Soubory","Name":"Název serveru","NameInvalid":"Jméno serveru nesmí být prázné nebo obsahovat speciální znaky","SelectNode":"Prosím vyberte uzel","SelectTemplate":"Vyberte šablonu","SelectThisTemplate":"Použít tuto šablonu","SelectUser":"Vyberte uživatele","Environment":"Prostředí","SelectEnvironment":"Vyberte prosím prostředí","TypeUsername":"Zadejte své uživatelské jméno","Admin":"Administrátor","AdminControls":"Admin ovládání","Settings":"Nastavení","NoEditableVars":"Tento server nemá proměnné, které můžete upravovat","ConfirmDelete":"Opravdu chcete smazat tento server? (toto nelze vrátit zpět)","Delete":"Odstranit server","Deleted":"Smazaný server","NoReadme":"Pro tuto šablonu není k dispozici žádné čtení","SftpConnection":"Připojit k SFTP","EditDefinition":"Upravit definici serveru","Reload":"Znovu načíst data serveru z disku","Reloaded":"Znovu načtená data serveru","Autostart":"Spustit server při spuštění uzlu","Autorestart":"Restartovat server, když se normálně zastaví","Autorecover":"Restartovat server při pádu","Rename":"Přejmenovat server","Tasks":"Úkoly","NoTasks":"Žádné úkoly","RunTask":"Spustit úkol","NewTask":"Nový úkol","EditTask":"Upravit úkol","TaskDeleted":"Úkol smazán","TaskTriggered":"Úkol spuštěn","EnableSchedule":"Automaticky spustit úkol","TaskScheduleInvalid":"Rozvrh úkolů je neplatný","TaskScheduleManual":"Pouze ruční spuštění","CronExpression":"Cron výraz","Hourly":"Každou hodinu","Daily":"Denně","Weekly":"Každý týden","Monthly":"Měsíčně","Advanced":"Pokročilý","HourlyTab":"Každých {hourInterval} hodin v minutě {minute}","DailyTab":"Každé {dayInterval} dny v {hour}:{minute}","WeeklyTab":"Každý {weekdays}. týden v {hour}:{minute}","MonthlyTab":"Každých {monthInterval} měsíců v den {day} v {hour}:{minute}"}')
    },
    "425f": function(e) {
        e.exports = JSON.parse('{"ServersView":"Можуть переглядати цей сервер","ServersEdit":"Редагувати сервер","ServersInstall":"Встановити сервер","ServersConsole":"Перегляд консолі","ServersConsoleSend":"Надіслати команди в консоль","ServersStop":"Зупинити і закрити сервер","ServersStart":"Запустити сервер","ServersStat":"Перегляд статистики ЦП та пам\'яті","ServersFiles":"Дозволити доступ до файлів за допомогою SFTP","ServersFilesGet":"Перегляд та завантаження файлів за допомогою файлового менеджера","ServersFilesPut":"Редагування та вивантаження файлів за допомогою файлового менеджера","ServersEditUsers":"Змінити доступ користувача на цьому сервері","Admin":"Адміністратор (це надає всі можливі дозволи)","ViewServers":"Дивитися сервери","CreateServers":"Створити нові сервери","DeleteServers":"Видалити сервери","EditServerAdmin":"Змінити параметри сервера","ViewNodes":"Дивитися вузли","EditNodes":"Редагувати вузли","DeployNodes":"Розгорнути нові вузли","ViewTemplates":"Переглянути шаблони","EditTemplates":"Редагувати шаблони","ViewUsers":"Переглянути всіх користувачів","EditUsers":"Редагувати інших користувачів","PanelSettings":"Зміна налаштувань панелі"}')
    },
    "428c": function(e) {
        e.exports = JSON.parse('{"Settings":"Settings","PanelSettings":"Panel Settings","EmailSettings":"Email Settings","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Company Name","DefaultTheme":"Default Theme","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domain","key":"API Key","host":"Host","username":"Username","password":"Password"}}')
    },
    "444f": function(e) {
        e.exports = JSON.parse('{"Server":"Palvelin","NoServers":"Palvelimia, johon sinulla on käytöoikeudet, ei löytynyt","Servers":"Palvelimet","Add":"Lisää palvelin","Console":"Konsoli","Controls":"Kontrollit","SFTPInfo":"SFTP:n tiedot","Restart":"Käynnistä uudelleen","Start":"Käynnistä","Stop":"Sammuta","Kill":"Tapa","Install":"Asenna","Send":"Lähetä","Pause":"Tauota","Statistics":"Tilastot","CPU":"CPU","Memory":"Muisti","Files":"Tiedostot","Name":"Serverin nimi","NameInvalid":"Palvelimen nimi ei voi olla tyhjä tai sisältää erikoismerkkejä","SelectNode":"Valitse noodi","SelectTemplate":"Valitse pohja","SelectThisTemplate":"Käytä tätä pohjaa","SelectUser":"Valitse käyttäjä","Environment":"Ympäristö","SelectEnvironment":"Valitse ympäristö","TypeUsername":"Kirjoita käyttäjänimi","Admin":"Admin","AdminControls":"Adminin hallinta","Settings":"Asetukset","NoEditableVars":"Tällä palvelimella ei ole muuttujia, joita voit muokata","ConfirmDelete":"Haluatko varmasti poistaa tämän palvelimen? (tätä ei voi kumota)","Delete":"Poista palvelin","Deleted":"Poistettu palvelin","NoReadme":"Tälle pohjalle ei ole saatavilla readme-tiedostoa","SftpConnection":"Yhdistä SFTP:hen","EditDefinition":"Muokkaa palvelimen määritystä","Reload":"Lataa palvelimen tiedot uudelleen levyltä","Reloaded":"Ladattiin palvelimen tiedot uudelleen","Autostart":"Käynnistä palvelin, kun noodi käynnistyy","Autorestart":"Käynnistä palvelin uudelleen, kun se pysähtyy normaalisti","Autorecover":"Käynnistä palvelin uudelleen, kun se kaatuu","Rename":"Nimeä palvelin uudelleen","Tasks":"Tehtävät","NoTasks":"Ei tehtäviä","RunTask":"Suorita tehtävä","NewTask":"Uusi tehtävä","EditTask":"Muokkaa tehtävää","TaskDeleted":"Tehtävä poistettu","TaskTriggered":"Tehtävä käynnistynyt","EnableSchedule":"Suorita tehtävä automaattisesti","TaskScheduleInvalid":"Tehtävän aikataulutus virheellinen","TaskScheduleManual":"Vain manuaalinen ajo","CronExpression":"Cron-lauseke","Hourly":"Tunneittain","Daily":"Päivittäin","Weekly":"Viikoittain","Monthly":"Kuukausittain","Advanced":"Lisäasetukset","HourlyTab":"{hourInterval} tunnin välein minuutilla {minute}","DailyTab":"{dayInterval} päivän välein aikaan {hour}:{minute}","WeeklyTab":"Joka {weekdays} aikaan {hour}:{minute}","MonthlyTab":"Joka {monthInterval}. kuukauden {day}. päivänä aikaan {hour}:{minute}"}')
    },
    4575: function(e) {
        e.exports = JSON.parse('{"FileManager":"Dosya yöneticisi","NewFolder":"Yeni klasör","NewFile":"Yeni dosya","LastModified":"Son değiştirilme","ConfirmDelete":"Bu dosyayı silmek istediğinden emin misin?","Upload":"Karşıya yükle","Download":"İndir","Size":"Boyut","NoFiles":"Henüz bir dosya mevcut değil, Lütfen kurulumu yapmak için üstteki Kurulum düğmesine basın","FileLoadFailed":"Dosya yüklenemedi","Refresh":"Yenile","CreateFile":"Dosya oluştur","CreateFolder":"Klasör oluştur","ArchiveCurrentFolder":"Geçerli klasörü arşivle","ArchiveFolder":"Klasörü arşivle","ExtractArchive":"Arşivi çıkar","DropToUpload":"Dosyaları yüklemek için buraya sürükleyin"}')
    },
    "45c1": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"English","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add","Ignore":"Ignore","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday","Sunday":"Sunday","Description":"Description"}')
    },
    4714: function(e) {
        e.exports = JSON.parse('{"Settings":"Instellingen","PanelSettings":"Panel instellingen","EmailSettings":"Email instellingen","MasterUrl":"Hoofd URL","MasterUrlHint":"De basis URL waar het paneel onder kan worden bereikt in het formaat http://localhost:8080","CompanyName":"Organisatienaam","DefaultTheme":"Standaard Thema","RegistrationEnabled":"Sta gebruikers toe om zich te registreren","RegistrationEnabledHint1":"Eigen geregistreerde gebruikers kunnen niets doen totdat ze toestemming hebben gegeven","RegistrationEnabledHint2":"Het uitschakelen hiervan voorkomt alleen directe registratie, uitnodiging voor een server en de gebruikerspagina wordt niet beïnvloed","EmailProvider":"E-Mail Provider","emailProviders":{"none":"Geen","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domein","key":"API Key","host":"Hostnaam","username":"Gebruikersnaam","password":"Wachtwoord"}}')
    },
    "472f": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","Statistics":"Statistics","CPU":"CPU","Memory":"Memory","Files":"Files","Name":"Server Name","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","Admin":"Admin","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "477d": function(e) {
        e.exports = JSON.parse('{"ServersView":"Bu sunucuyu görüntüleyebilir","ServersEdit":"Sunucuyu düzenle","ServersInstall":"Sunucu kur","ServersConsole":"Konsola bak","ServersConsoleSend":"Konsola komut gönder","ServersStop":"Sunucuyu durdur ve sonlandır","ServersStart":"Sunucuyu başlat","ServersStat":"CPU ve Bellek kullanımını gör","ServersFiles":"SFTP ile dosya erişimine izin ver","ServersFilesGet":"Dosya yöneticisi ile dosya görüntüle ve indir","ServersFilesPut":"Dosya yöneticisi ile dosya yükle","ServersEditUsers":"Kullanıcının bu sunucuya erişimini düzenle","Admin":"Yönetici (bu yetki verilmesi mümkün olan tüm yetkileri verir)","ViewServers":"Tüm sunucuları görüntüle","CreateServers":"Yeni sunucular oluştur","DeleteServers":"Sunucuları sil","EditServerAdmin":"Sunucu ayarlarını düzenle","ViewNodes":"Düğümleri gör","EditNodes":"Düğümleri düzenle","DeployNodes":"Yeni düğüm yerleştir","ViewTemplates":"Şablonları gör","EditTemplates":"Şablonu düzenle","ViewUsers":"Tüm kullanıcıları görüntüle","EditUsers":"Diğer kullanıcıları düzenle","PanelSettings":"Panel ayarlarını değiştir"}')
    },
    4783: function(e) {
        e.exports = JSON.parse('{"Settings":"Configurações","PanelSettings":"Configuração do painel","EmailSettings":"Configurações de email","MasterUrl":"URL principal","MasterUrlHint":"A URL principal do painel não pode ser alcançada no formato http://localhost:8080","CompanyName":"Nome da empresa","DefaultTheme":"Tema Padrão","RegistrationEnabled":"Permitir que os usuários se registrem","RegistrationEnabledHint1":"Usuários registrados por conta própria não podem fazer nada até que recebam determinadas permissões","RegistrationEnabledHint2":"Desabilitar isso apenas impede que o registro direto, o convite para um servidor e a página de usuários não serão afetados","EmailProvider":"Provedor de e-mail","emailProviders":{"none":"Nenhum","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domínio","key":"Chave de API","host":"Host","username":"Nome do usuário","password":"Senha"}}')
    },
    4886: function(e) {
        e.exports = JSON.parse('{"Users":"Usuarios","Add":"Añadir usuario","AccountSettings":"Configuración de la Cuenta","OldPassword":"Contraseña vieja","NewPassword":"Nueva contraseña","ConfirmPassword":"Confirma Contraseña","ChangePassword":"Cambiar contraseña","ChangeInfo":"Cambiar detalles de la cuenta","InfoChanged":"Su información fue actualizada","PasswordChanged":"Su contraseña ha sido cambiada","AccountPassword":"Contraseña de la cuenta","Account":"Cuenta","Login":"Iniciar sesión","LoginLink":"O inicia sesión aquí","Logout":"Cerrar sesión","Register":"Registrarse","RegisterLink":"O regístrate aquí","RegisterSuccess":"Te has registrado correctamente","NoEmailGiven":"Debes brindar el correo electrónico del usuario que deseas agregar","Username":"Nombre de Usuario","Password":"Contraseña","Email":"E-mail","Edit":"Editar usuario","Update":"Actualizar usuario","Delete":"Eliminar usuario","CreateSuccess":"Se ha creado un usuario satisfactoriamente","CreateError":"Error al crear el usuario","UpdateSuccess":"Usuario actualizado","UpdateError":"Error al actualizar el usuario","PermsUpdateError":"Error al actualizar los permisos del usuario","Otp":"Autenticación de dos pasos","OtpEnable":"Habilitar A2F","OtpDisable":"Deshabilitar A2F","OtpHint":"La autenticación de dos pasos agrega una capa de seguridad adicional a tu cuenta, requiriendo un código especial además de tu contraseña.","OtpSetup":"Ajustes de A2F","OtpSetupHint":"Escanea el código QR utilizando tu aplicación o copia el código secreto que verás debajo.","OtpSecret":"Código secreto","OtpConfirm":"Confirma los cambios utilizando tu código de A2F","OtpNeeded":"2FA requerido"}')
    },
    "48ea": function(e) {
        e.exports = JSON.parse('{"Id":"Ідентифікатор","Name":"Ім’я","Address":"Адреса","Online":"У мережі","Offline":"Не в мережі","Loading":"Завантаження...","General":"Загальне","Language":"Мова","SelectLanguage":"Вибір мови","Settings":"Налаштування","Update":"Оновити","Edit":"Редагувати","Delete":"Видалити","Create":"Створити","Save":"Зберегти","Saved":"Збережено","SaveFailed":"Не вдалося зберегти","Cancel":"Скасувати","Confirm":"Підтвердити","Actions":"Дії","Host":"Хост","Port":"Порт","Template":"Шаблон","Options":"Опції","Collapse":"Згорнути","Copied":"Скопійовано до буфера обміну","Unknown":"Не вказано","Search":"Пошук","Back":"Назад","Next":"Далі","LanguageName":"Українська","Details":"Подробиці","ErrorDetails":"Деталі помилки","HelpTranslate":"Допоможіть нам перекласти PufferPanel","DarkMode":"Темний режим","ThemeOptions":"Параметри тем","Protocol":"Протокол","Add":"Додати","Ignore":"Нехтувати","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П\'ятниця","Saturday":"Субота","Sunday":"Неділя","Description":"Опис"}')
    },
    4983: function(e) {
        e.exports = JSON.parse('{"Server":"サーバー","NoServers":"あなたがアクセスできるサーバーがありません","Servers":"サーバー一覧","Add":"サーバーを追加","Console":"コンソール","Controls":"コントロール","SFTPInfo":"SFTP 情報","Restart":"再起動","Start":"起動","Stop":"停止","Kill":"強制終了","Install":"インストール","Send":"送信","Pause":"一時停止","Statistics":"統計","CPU":"CPU","Memory":"メモリ","Files":"ファイル","Name":"サーバー名","NameInvalid":"サーバー名は空白や特殊文字を含むことはできません","SelectNode":"ノードを選択してください","SelectTemplate":"テンプレートを選択してください","SelectThisTemplate":"このテンプレートを使う","SelectUser":"ユーザーを選択してください","Environment":"使用環境","SelectEnvironment":"使用環境を選択してください","TypeUsername":"ユーザー名を入力してください。","Admin":"管理者","AdminControls":"管理者コントロール","Settings":"設定","NoEditableVars":"このサーバーには編集可能な変数がありません","ConfirmDelete":"このコメントを削除してもよろしいですか? この操作は元に戻すことができません。","Delete":"サーバーを削除","Deleted":"サーバーを削除しました","NoReadme":"このテンプレートで利用可能なreadmeがありません","SftpConnection":"SFTP に接続","EditDefinition":"サーバー設定を編集","Reload":"サーバーのデータをディスクから再読み込み","Reloaded":"サーバーのデータを再読み込みしました","Autostart":"ノード開始時にサーバーを起動する","Autorestart":"サーバーが正常に停止した際にサーバーを再起動する","Autorecover":"クラッシュした際にサーバーを再起動する","Rename":"サーバー名を変更","Tasks":"タスク","NoTasks":"タスクがありません","RunTask":"タスクを実行","NewTask":"新規タスク","EditTask":"タスクを編集","TaskDeleted":"タスクが削除されました","TaskTriggered":"タスクがトリガーされました","EnableSchedule":"タスクを自動で実行","TaskScheduleInvalid":"タスクスケジュールが無効です","TaskScheduleManual":"手動実行のみ","CronExpression":"Cron表現","Hourly":"毎時","Daily":"毎日","Weekly":"毎週","Monthly":"毎月","Advanced":"高度な設定","HourlyTab":"毎 {hourInterval} 時、{minute} 分","DailyTab":"毎 {dayInterval} 日、{hour}:{minute}","WeeklyTab":"毎週 {weekdays} の {hour}:{minute}","MonthlyTab":"毎 {monthInterval} 月、{day} 日の {hour}:{minute}"}')
    },
    4999: function(e, t, a) {
        var r = {
            "./ar_SA/common.json": "d6e2",
            "./ar_SA/env.json": "159a",
            "./ar_SA/errors.json": "34e5",
            "./ar_SA/files.json": "5299",
            "./ar_SA/nodes.json": "9c61",
            "./ar_SA/oauth.json": "f151",
            "./ar_SA/scopes.json": "e40d",
            "./ar_SA/servers.json": "b6ae",
            "./ar_SA/settings.json": "6459",
            "./ar_SA/templates.json": "009c",
            "./ar_SA/users.json": "1b41",
            "./cs_CZ/common.json": "c0ae",
            "./cs_CZ/env.json": "bc12",
            "./cs_CZ/errors.json": "be1e",
            "./cs_CZ/files.json": "e245",
            "./cs_CZ/nodes.json": "0b0a",
            "./cs_CZ/oauth.json": "3916",
            "./cs_CZ/scopes.json": "dddc",
            "./cs_CZ/servers.json": "4211",
            "./cs_CZ/settings.json": "89c5",
            "./cs_CZ/templates.json": "9288",
            "./cs_CZ/users.json": "510e",
            "./da_DK/common.json": "0753",
            "./da_DK/env.json": "9047",
            "./da_DK/errors.json": "2cc5",
            "./da_DK/files.json": "cf15",
            "./da_DK/nodes.json": "2143",
            "./da_DK/oauth.json": "0847",
            "./da_DK/scopes.json": "b0ce",
            "./da_DK/servers.json": "cb95",
            "./da_DK/settings.json": "e620",
            "./da_DK/templates.json": "bf70",
            "./da_DK/users.json": "b3d7",
            "./de_DE/common.json": "3613",
            "./de_DE/env.json": "7912",
            "./de_DE/errors.json": "6fbc",
            "./de_DE/files.json": "5bdb",
            "./de_DE/nodes.json": "7765",
            "./de_DE/oauth.json": "ea0d",
            "./de_DE/scopes.json": "853d",
            "./de_DE/servers.json": "f04d",
            "./de_DE/settings.json": "e8ae",
            "./de_DE/templates.json": "2ab5",
            "./de_DE/users.json": "9a68",
            "./el_GR/common.json": "ff1b",
            "./el_GR/env.json": "b414",
            "./el_GR/errors.json": "aa9e",
            "./el_GR/files.json": "cce6",
            "./el_GR/nodes.json": "229d",
            "./el_GR/oauth.json": "77aa",
            "./el_GR/scopes.json": "5c7b",
            "./el_GR/servers.json": "472f",
            "./el_GR/settings.json": "428c",
            "./el_GR/templates.json": "3d3c",
            "./el_GR/users.json": "ec20",
            "./en_US/common.json": "45c1",
            "./en_US/env.json": "f6c5",
            "./en_US/errors.json": "8b82",
            "./en_US/files.json": "675d",
            "./en_US/nodes.json": "920f",
            "./en_US/oauth.json": "16bf",
            "./en_US/scopes.json": "d611",
            "./en_US/servers.json": "2e27",
            "./en_US/settings.json": "12a8",
            "./en_US/templates.json": "cfa3",
            "./en_US/users.json": "4c8f",
            "./es_419/common.json": "395d",
            "./es_419/env.json": "9a18",
            "./es_419/errors.json": "d8ed",
            "./es_419/files.json": "c6b0",
            "./es_419/nodes.json": "0872",
            "./es_419/oauth.json": "0242",
            "./es_419/scopes.json": "4ef2",
            "./es_419/servers.json": "fac4",
            "./es_419/settings.json": "6b6c",
            "./es_419/templates.json": "d0ca",
            "./es_419/users.json": "4886",
            "./es_ES/common.json": "6b00",
            "./es_ES/env.json": "8cb8",
            "./es_ES/errors.json": "6932",
            "./es_ES/files.json": "e937",
            "./es_ES/nodes.json": "2a8d",
            "./es_ES/oauth.json": "a6e0",
            "./es_ES/scopes.json": "0548",
            "./es_ES/servers.json": "21bb",
            "./es_ES/settings.json": "0a9e",
            "./es_ES/templates.json": "c652",
            "./es_ES/users.json": "ed5d",
            "./et_EE/common.json": "1649",
            "./et_EE/env.json": "c398",
            "./et_EE/errors.json": "0a23",
            "./et_EE/files.json": "332e",
            "./et_EE/nodes.json": "79f8",
            "./et_EE/oauth.json": "8678",
            "./et_EE/scopes.json": "3bd7",
            "./et_EE/servers.json": "6425",
            "./et_EE/settings.json": "efe0",
            "./et_EE/templates.json": "e404",
            "./et_EE/users.json": "12f6",
            "./fi_FI/common.json": "9a8d",
            "./fi_FI/env.json": "594f",
            "./fi_FI/errors.json": "0834",
            "./fi_FI/files.json": "67b8",
            "./fi_FI/nodes.json": "fc16",
            "./fi_FI/oauth.json": "d0c9",
            "./fi_FI/scopes.json": "db49",
            "./fi_FI/servers.json": "444f",
            "./fi_FI/settings.json": "1d67",
            "./fi_FI/templates.json": "4d0c",
            "./fi_FI/users.json": "b3a1",
            "./fr_FR/common.json": "a45f",
            "./fr_FR/env.json": "2aae",
            "./fr_FR/errors.json": "007e",
            "./fr_FR/files.json": "5c1b",
            "./fr_FR/nodes.json": "1551",
            "./fr_FR/oauth.json": "94f6",
            "./fr_FR/scopes.json": "2d52",
            "./fr_FR/servers.json": "404a",
            "./fr_FR/settings.json": "0f9f",
            "./fr_FR/templates.json": "9e9f",
            "./fr_FR/users.json": "2ba5",
            "./he_IL/common.json": "f956",
            "./he_IL/env.json": "cf91",
            "./he_IL/errors.json": "7952",
            "./he_IL/files.json": "70b6",
            "./he_IL/nodes.json": "9ba7",
            "./he_IL/oauth.json": "4052",
            "./he_IL/scopes.json": "9acc",
            "./he_IL/servers.json": "0d04",
            "./he_IL/settings.json": "5610",
            "./he_IL/templates.json": "6917",
            "./he_IL/users.json": "ea6c",
            "./hu_HU/common.json": "bcbc",
            "./hu_HU/env.json": "c879",
            "./hu_HU/errors.json": "e3a2",
            "./hu_HU/files.json": "b4a8",
            "./hu_HU/nodes.json": "7575",
            "./hu_HU/oauth.json": "3a5f",
            "./hu_HU/scopes.json": "64a0",
            "./hu_HU/servers.json": "5cdd",
            "./hu_HU/settings.json": "0f84",
            "./hu_HU/templates.json": "c2a0",
            "./hu_HU/users.json": "27fc",
            "./id_ID/common.json": "5363",
            "./id_ID/env.json": "05a8",
            "./id_ID/errors.json": "49a7",
            "./id_ID/files.json": "b689",
            "./id_ID/nodes.json": "a7cd",
            "./id_ID/oauth.json": "3050",
            "./id_ID/scopes.json": "d9f9",
            "./id_ID/servers.json": "ec78",
            "./id_ID/settings.json": "c82e",
            "./id_ID/templates.json": "7743",
            "./id_ID/users.json": "a654",
            "./it_IT/common.json": "2652",
            "./it_IT/env.json": "ef2c",
            "./it_IT/errors.json": "1448",
            "./it_IT/files.json": "5dd9",
            "./it_IT/nodes.json": "0dc9",
            "./it_IT/oauth.json": "6bbc",
            "./it_IT/scopes.json": "b617",
            "./it_IT/servers.json": "f84f",
            "./it_IT/settings.json": "dfdc",
            "./it_IT/templates.json": "7306",
            "./it_IT/users.json": "18c4",
            "./ja_JP/common.json": "6176",
            "./ja_JP/env.json": "17a8",
            "./ja_JP/errors.json": "4e65",
            "./ja_JP/files.json": "a566",
            "./ja_JP/nodes.json": "a43f",
            "./ja_JP/oauth.json": "164a",
            "./ja_JP/scopes.json": "ac0b",
            "./ja_JP/servers.json": "4983",
            "./ja_JP/settings.json": "2d42",
            "./ja_JP/templates.json": "73e3",
            "./ja_JP/users.json": "3042",
            "./ko_KR/common.json": "3c6b",
            "./ko_KR/env.json": "dbe0",
            "./ko_KR/errors.json": "7380",
            "./ko_KR/files.json": "8136",
            "./ko_KR/nodes.json": "5ac7",
            "./ko_KR/oauth.json": "624b",
            "./ko_KR/scopes.json": "21b2",
            "./ko_KR/servers.json": "3bd9",
            "./ko_KR/settings.json": "2883",
            "./ko_KR/templates.json": "35a3",
            "./ko_KR/users.json": "531d",
            "./nl_NL/common.json": "de60",
            "./nl_NL/env.json": "6075",
            "./nl_NL/errors.json": "92a6",
            "./nl_NL/files.json": "5cce",
            "./nl_NL/nodes.json": "88c8",
            "./nl_NL/oauth.json": "954f",
            "./nl_NL/scopes.json": "fe5a",
            "./nl_NL/servers.json": "cf44",
            "./nl_NL/settings.json": "4714",
            "./nl_NL/templates.json": "097b",
            "./nl_NL/users.json": "1491",
            "./no_NO/common.json": "a888",
            "./no_NO/env.json": "d2a6",
            "./no_NO/errors.json": "6e7e",
            "./no_NO/files.json": "0070",
            "./no_NO/nodes.json": "696b",
            "./no_NO/oauth.json": "1773",
            "./no_NO/scopes.json": "ed51",
            "./no_NO/servers.json": "5d8c",
            "./no_NO/settings.json": "2a3a",
            "./no_NO/templates.json": "f2e1",
            "./no_NO/users.json": "8b75",
            "./pl_PL/common.json": "5510",
            "./pl_PL/env.json": "0651",
            "./pl_PL/errors.json": "7c0e",
            "./pl_PL/files.json": "3c45",
            "./pl_PL/nodes.json": "f8be",
            "./pl_PL/oauth.json": "1093",
            "./pl_PL/scopes.json": "16e4",
            "./pl_PL/servers.json": "5636",
            "./pl_PL/settings.json": "7677",
            "./pl_PL/templates.json": "d9bdf",
            "./pl_PL/users.json": "0e57",
            "./pt_BR/common.json": "53d7",
            "./pt_BR/env.json": "5a9e",
            "./pt_BR/errors.json": "e1bb",
            "./pt_BR/files.json": "dffa",
            "./pt_BR/nodes.json": "8e54",
            "./pt_BR/oauth.json": "e926",
            "./pt_BR/scopes.json": "8051",
            "./pt_BR/servers.json": "a243",
            "./pt_BR/settings.json": "4783",
            "./pt_BR/templates.json": "0fe0",
            "./pt_BR/users.json": "b053",
            "./pt_PT/common.json": "c87d",
            "./pt_PT/env.json": "abcb",
            "./pt_PT/errors.json": "00e2",
            "./pt_PT/files.json": "edba",
            "./pt_PT/nodes.json": "3da2",
            "./pt_PT/oauth.json": "c22b",
            "./pt_PT/scopes.json": "2227",
            "./pt_PT/servers.json": "2ade",
            "./pt_PT/settings.json": "fd1c",
            "./pt_PT/templates.json": "eb61",
            "./pt_PT/users.json": "b8d7",
            "./ro_RO/common.json": "bb3a",
            "./ro_RO/env.json": "6d8f",
            "./ro_RO/errors.json": "9e7c",
            "./ro_RO/files.json": "07cb",
            "./ro_RO/nodes.json": "bb78",
            "./ro_RO/oauth.json": "75de",
            "./ro_RO/scopes.json": "fbb2",
            "./ro_RO/servers.json": "735e",
            "./ro_RO/settings.json": "19fd",
            "./ro_RO/templates.json": "9560",
            "./ro_RO/users.json": "4e51",
            "./ru_RU/common.json": "76ca",
            "./ru_RU/env.json": "35c7",
            "./ru_RU/errors.json": "094f",
            "./ru_RU/files.json": "7295",
            "./ru_RU/nodes.json": "9459",
            "./ru_RU/oauth.json": "d39b",
            "./ru_RU/scopes.json": "dcdb",
            "./ru_RU/servers.json": "504c",
            "./ru_RU/settings.json": "6328",
            "./ru_RU/templates.json": "0d3d",
            "./ru_RU/users.json": "4adf",
            "./sk_SK/common.json": "e803",
            "./sk_SK/env.json": "20a7",
            "./sk_SK/errors.json": "1d15",
            "./sk_SK/files.json": "acf5",
            "./sk_SK/nodes.json": "06ec",
            "./sk_SK/oauth.json": "5bdd",
            "./sk_SK/scopes.json": "c383",
            "./sk_SK/servers.json": "6794",
            "./sk_SK/settings.json": "f1e4",
            "./sk_SK/templates.json": "c04ed",
            "./sk_SK/users.json": "357e",
            "./sr_SP/common.json": "4f16",
            "./sr_SP/env.json": "ec4d",
            "./sr_SP/errors.json": "5899",
            "./sr_SP/files.json": "d982",
            "./sr_SP/nodes.json": "cf13",
            "./sr_SP/oauth.json": "96fa",
            "./sr_SP/scopes.json": "382f",
            "./sr_SP/servers.json": "00f7",
            "./sr_SP/settings.json": "2667",
            "./sr_SP/templates.json": "91b3",
            "./sr_SP/users.json": "dfe9",
            "./sv_SE/common.json": "7074",
            "./sv_SE/env.json": "9445",
            "./sv_SE/errors.json": "b1ba",
            "./sv_SE/files.json": "f50e",
            "./sv_SE/nodes.json": "8822",
            "./sv_SE/oauth.json": "1813",
            "./sv_SE/scopes.json": "eadd",
            "./sv_SE/servers.json": "1469",
            "./sv_SE/settings.json": "5753",
            "./sv_SE/templates.json": "bf01",
            "./sv_SE/users.json": "19d7",
            "./tr_TR/common.json": "6bc6",
            "./tr_TR/env.json": "06b9",
            "./tr_TR/errors.json": "5ab5",
            "./tr_TR/files.json": "4575",
            "./tr_TR/nodes.json": "e796",
            "./tr_TR/oauth.json": "1e0d",
            "./tr_TR/scopes.json": "477d",
            "./tr_TR/servers.json": "bc7a",
            "./tr_TR/settings.json": "b246",
            "./tr_TR/templates.json": "04a2",
            "./tr_TR/users.json": "1616",
            "./uk_UA/common.json": "48ea",
            "./uk_UA/env.json": "f67c",
            "./uk_UA/errors.json": "2515",
            "./uk_UA/files.json": "9f41",
            "./uk_UA/nodes.json": "6485",
            "./uk_UA/oauth.json": "bcbf",
            "./uk_UA/scopes.json": "425f",
            "./uk_UA/servers.json": "9de9",
            "./uk_UA/settings.json": "d37e",
            "./uk_UA/templates.json": "d790",
            "./uk_UA/users.json": "ce16",
            "./vi_VN/common.json": "e3d4",
            "./vi_VN/env.json": "7c5d",
            "./vi_VN/errors.json": "a630",
            "./vi_VN/files.json": "8e6a",
            "./vi_VN/nodes.json": "83a2",
            "./vi_VN/oauth.json": "f4a0",
            "./vi_VN/scopes.json": "87a5",
            "./vi_VN/servers.json": "bb68",
            "./vi_VN/settings.json": "e1d6",
            "./vi_VN/templates.json": "a6c2",
            "./vi_VN/users.json": "cd69",
            "./zh_CN/common.json": "574d",
            "./zh_CN/env.json": "9dd4",
            "./zh_CN/errors.json": "29be",
            "./zh_CN/files.json": "5529",
            "./zh_CN/nodes.json": "e483",
            "./zh_CN/oauth.json": "81fb",
            "./zh_CN/scopes.json": "59e1",
            "./zh_CN/servers.json": "1727",
            "./zh_CN/settings.json": "3f7b",
            "./zh_CN/templates.json": "5b90",
            "./zh_CN/users.json": "7d77",
            "./zh_HK/common.json": "8245",
            "./zh_HK/env.json": "ca66",
            "./zh_HK/errors.json": "c370",
            "./zh_HK/files.json": "d7a8",
            "./zh_HK/nodes.json": "705a",
            "./zh_HK/oauth.json": "30a2",
            "./zh_HK/scopes.json": "84f0",
            "./zh_HK/servers.json": "9da9",
            "./zh_HK/settings.json": "59ec",
            "./zh_HK/templates.json": "506c",
            "./zh_HK/users.json": "3443",
            "./zh_TW/common.json": "f05a",
            "./zh_TW/env.json": "00d6",
            "./zh_TW/errors.json": "18c6",
            "./zh_TW/files.json": "e6ec",
            "./zh_TW/nodes.json": "be06",
            "./zh_TW/oauth.json": "2534",
            "./zh_TW/scopes.json": "92a3",
            "./zh_TW/servers.json": "5da6",
            "./zh_TW/settings.json": "5296",
            "./zh_TW/templates.json": "d84c",
            "./zh_TW/users.json": "d487"
        };
        function n(e) {
            var t = i(e);
            return a(t)
        }
        function i(e) {
            if (!a.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        n.keys = function() {
            return Object.keys(r)
        }
        ,
        n.resolve = i,
        e.exports = n,
        n.id = "4999"
    },
    "49a4": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-tooltip", {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on;
                        return [a("v-icon", e._g({
                            attrs: {
                                dense: "",
                                color: !0 === e.online ? "success" : !1 === e.online ? "error" : "grey"
                            }
                        }, r), [e._v(" mdi-brightness-1 ")])]
                    }
                }])
            }, [a("span", {
                domProps: {
                    textContent: e._s(!0 === e.online ? e.$t("common.Online") : !1 === e.online ? e.$t("common.Offline") : e.$t("common.Unknown"))
                }
            })])
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    online: null
                }
            },
            mounted() {
                this.$api.addServerListener(this.server.id, "status", e=>{
                    this.online = e.running
                }
                ),
                this.$api.requestServerStatus(this.server.id)
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("132d")
          , c = a("3a2f")
          , m = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = m.exports;
        d()(m, {
            VIcon: u["a"],
            VTooltip: c["a"]
        })
    },
    "49a7": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error tidak diketahui","ErrUnknownError":"Error tidak diketahui","ErrInvalidCredentials":"Kredensial tidak valid","ErrServiceNotAvailable":"Layanan tidak tersedia","ErrEmailNotConfigured":"Email belum dikonfigurasi","ErrTokenInvalid":"Token tidak valid","ErrClientNotFound":"Klien tidak ditemukan","ErrUserNotFound":"Pengguna tidak ditemukan","ErrLoginNotPermitted":"Login tidak di izinkan","ErrInvalidTokenState":"Keadaan token tidak valid","ErrSettingNotConfigured":"{setting} belum di configurasi","ErrNoTemplate":"Tidak ada templat dengan nama {name}","ErrServiceInvalidProvider":"{service} tidak di dukung {provider}","ErrFieldRequired":"{field} diperlukan","ErrFieldMustBePrintable":"{field} harus mengunakan karakter ascii","ErrFieldHasURICharacters":"{field} tidak boleh berisi karakter yang tidak dapat digunakan dalam URL","ErrFieldIsInvalidHost":"{field} ip atau FQDN harus valid","ErrFieldIsInvalidIP":"{field} ip harus valid","ErrFieldTooLarge":"{field} tidak dapat sebesar {max}","ErrFieldTooSmall":"{field} tidak dapat sekecil {min}","ErrFieldNotBetween":"{field} harus diantara {min} dan {max}","ErrFieldEqual":"{field1} tidak dapat sama seperti {field2}","ErrFieldNotEqual":"{field1} tidak sama dengan {field2}","ErrFieldNotEmail":"{field} email tidak valid","ErrFieldLength":"{field} harus sepanjang {length} karakter","ErrNoPermission":"Anda tidak punya izin untuk melakukan tindakan ini","ErrDatabaseNotAvailable":"Database tidak tersedia","ErrNoNodes":"Tidak ada node yang tersedia","ErrNoTemplates":"Tidak ada template yang tersedia","ErrPasswordRequirements":"Kata sandi minimal harus sepanjang {min} karakter","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Kata sandi tidak sama","ErrSessionTimedOut":"Sesi anda telah habis, silahkan masuk kembali","ErrMissingScope":"Anda tidak di ijinkan melakukan aksi ini","ErrInvalidJson":"Data json tidak valid","ErrSocketFailed":"Koneksi Websocket mengalami kesalahan, beberapa fitur mungkin lambat atau rusak","ErrInviteLinkInvalid":"Tautan undangan kamu tampaknya tidak valid","ErrSavingInviteduser":"Ada kesalahan saat membuat account mu","ErrDuplicateServerName":"Server dengan nama ini sudah ada","ErrDuplicateNodeName":"Nama node ini telah digunakan","ErrDirectoryUploadNotSupported":"Tidak dapat mengupload file","ErrDockerNotSupported":"Docker tidak didukung di node ini","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) tak didukung. OS yang didukung: {expected}","ErrUnsupportedArch":"Arsitektur {actual} tidak didukung. Arsitektur yang didukung: {expected}"}')
    },
    "4a65": function(e, t, a) {},
    "4adf": function(e) {
        e.exports = JSON.parse('{"Users":"Пользователи","Add":"Добавить пользователя","AccountSettings":"Настройки аккаунта","OldPassword":"Старый пароль","NewPassword":"Новый пароль","ConfirmPassword":"Подтвердите пароль","ChangePassword":"Изменить пароль","ChangeInfo":"Изменить данные аккаунта","InfoChanged":"Ваша информация была изменена","PasswordChanged":"Ваш пароль был успешно изменён","AccountPassword":"Пароль учетной записи","Account":"Аккаунт","Login":"Вход","LoginLink":"Или войдите здесь","Logout":"Выйти","Register":"Зарегистрироваться","RegisterLink":"Или зарегистрируйтесь здесь","RegisterSuccess":"Ваш аккаунт успешно зарегистрирован","NoEmailGiven":"Вы должны указать email пользователя, которого вы хотите добавить","Username":"Пользователь","Password":"Пароль","Email":"E-mail","Edit":"Редактировать пользователя","Update":"Обновить пользователя","Delete":"Удалить пользователя","CreateSuccess":"Пользователь успешно создан","CreateError":"Ошибка в создании пользователя","UpdateSuccess":"Пользователь обновлен","UpdateError":"Не удалось обновить пользователя","PermsUpdateError":"Не удалось обновить права пользователя","Otp":"Двухфакторная аутентификация","OtpEnable":"Включить 2FA","OtpDisable":"Отключить 2FA","OtpHint":"Двухфакторная аутентификация добавляет дополнительный уровень безопасности вашей учетной записи, требуя для входа больше, чем просто пароль.","OtpSetup":"Настройка 2FA","OtpSetupHint":"Отсканируйте QR-код с помощью приложения аутентификатора или скопируйте в него секретный код указанный ниже.","OtpSecret":"Секретный код","OtpConfirm":"Подтвердите с помощью кода 2FA","OtpNeeded":"Требуется 2FA"}')
    },
    "4b15": function(e, t, a) {
        "use strict";
        a("ac0e")
    },
    "4c8f": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"User successfully created","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions","Otp":"Two factor authentication","OtpEnable":"Enable 2FA","OtpDisable":"Disable 2FA","OtpHint":"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"Secret Code","OtpConfirm":"Confirm using a 2FA code","OtpNeeded":"2FA required"}')
    },
    "4d0c": function(e) {
        e.exports = JSON.parse('{"Templates":"Mallipohjat","NoTemplates":"Mallipohjia ei ole vielä lisätty","Deleted":"Mallipohja poistettu","New":"Luo uusi mallipohja","Edit":"Muokka mallipohjaa","Editor":"Editori","Json":"JSON","Display":"Näyttönimi","Type":"Tyyppi","Variables":"Muuttujat","Install":"Asenna","AddInstallStep":"Lisää Asennusvaihe","DeleteInstallStep":"Poista Asennusvaihe","Description":"Kuvaus","DataType":"Tietotyyppi","DefaultValue":"Oletusarvo","Required":"Pakollinen","UserEditable":"Käyttäjät voivat muokata","Value":"Arvo","AddOption":"Lisää vaihtoehto","AddCommand":"Lisää komento","Filename":"Tiedoston nimi","Content":"Sisältö","Source":"Lähde","Target":"Kohde","Version":"Versio","ReleaseType":"Julkaisun Tyyppi","AddFile":"Lisää tiedosto","AddVariable":"Lisää muuttuja","Environment":"Ympäristö","Environments":"Ympäristöt","AddEnvironment":"Lisää ympäristö","DefaultEnvironment":"Oletus ympäristö","AddEnvVar":"Lisää env muuttuja","EnvVars":"Ympäristön muuttujat","DockerImage":"Docker-kuva","SaveSuccess":"Tallennettu mallipohja","VarNameNoSpaces":"Muuttujan nimi ei voi olla tyhjä tai sisältää välilyöntejä","SupportedEnvironments":"Tuetut Ympäristöt","RunConfig":"Suorita Asetukset","PreHook":"Ajoa edeltävä koukku","PostHook":"Ajon jälkeinen koukku","AddPreStep":"Lisää ajoa edeltävä vaihe","AddPostStep":"Lisää ajon jälkeinen vaihe","DeletePreStep":"Poista ajoa edeltävä vaihe","DeletePostStep":"Poista ajon jälkeinen vaihe","Shutdown":"Sammuta","Command":"Komento","WorkingDirectory":"Työhakemisto","Arguments":"Argumentit","AddArgument":"Lisää argumentti","Convert":"Muunna","OfferV1Convert":"Tämän pohjan json näyttää olevan pohja PufferPanelin 1.x-versiolle. Haluatko automaattisesti muuntaa sen PufferPanelin 2.x-versiolle?","import":{"CommunityWarning":"Nämä pohjat ovat yhteisön tekemiä ja annetaan ilman takuita","OverrideWarning":"VAROITUS: Tuodut pohjat korvaavat olemassa olevat pohjat, joilla on sama ID","Import":"Tuo mallit","Tooltip":"Tuo mallipohjat virallisesta arkistosta","Select":"Valitse tuotavat pohjat","Started":"Pohjia tuodaan, odota hetki","Successful":"Tuotu onnistuneesti pohja {template}","NoTemplatesTitle":"Haluatko tuoda pohjat?","NoTemplatesContent":"Sinulla ei ole tällä hetkellä yhtään pohjaa. Pohjia tarvitaan palvelinten luontiin.<br/>Haluatko tuoda joitakin pohjia virallisesta PufferPanelin pohjien arkistosta?"},"stop":{"Command":"Komento","Signal":"Signaali"},"processors":{"download":{"ProcessorName":"Lataa","files":"Tiedostot"},"command":{"ProcessorName":"Suorita komento","commands":"Komennot"},"alterfile":{"ProcessorName":"Muuta tiedostoa","regex":"Käsittele hakua RegEx-lausekkeena","search":"Haettava teksti","replace":"Korvaa"},"writefile":{"ProcessorName":"Kirjoita tiedostoon","text":"Sisältö"},"move":{"ProcessorName":"Siirrä tiedosto","source":"Lähde","target":"Kohde"},"mkdir":{"ProcessorName":"Luo hakemisto"},"mojangdl":{"ProcessorName":"Lataa Minecraft"},"forgedl":{"ProcessorName":"Lataa Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Lataa Minecraft SpongeForge","releaseType":"Julkaisun tyyppi"},"fabricdl":{"ProcessorName":"Lataa Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "4e51": function(e) {
        e.exports = JSON.parse('{"Users":"Utilizatori","Add":"Adaugă utilizator","AccountSettings":"Setările contului","OldPassword":"Parola veche","NewPassword":"Parola Nouă","ConfirmPassword":"Confirmă parola","ChangePassword":"Modificare parola","ChangeInfo":"Schimbă detaliile contului","InfoChanged":"Informațiile dvs. au fost modificate","PasswordChanged":"Parola ta a fost schimbată","AccountPassword":"Parola contului","Account":"Cont","Login":"Autentificare","LoginLink":"Sau autentifică-te aici","Logout":"Deconectare","Register":"Înregistrare","RegisterLink":"Sau înregistrează-te aici","RegisterSuccess":"V-ați înregistrat cu success","NoEmailGiven":"Trebuie să furnizați adresa de e-mail a utilizatorului pe care doriți să o adăugați","Username":"Nume de utilizator","Password":"Parolă","Email":"E-mail","Edit":"Editare utilizator","Update":"Actualizeaza utilizator","Delete":"Șterge utilizator","CreateSuccess":"Utilizator creat cu succes","CreateError":"Creare utilizator eșuată","UpdateSuccess":"Utilizator actualizat","UpdateError":"Actualizarea utilizatorului a eșuat","PermsUpdateError":"Eroare la actualizarea permisiunilor utilizatorului","Otp":"Autentificare in doi pași","OtpEnable":"Activează 2FA","OtpDisable":"Dezactivează 2FA","OtpHint":"Autentificarea în doi pași adaugă un strat suplimentar de securitate contului tău solicitând mai mult decât o parolă pentru autentificare.","OtpSetup":"Configurare 2FA","OtpSetupHint":"Scanează codul QR folosind aplicația ta de autentificare sau folosește codul secret de mai jos.","OtpSecret":"Cod secret","OtpConfirm":"Confirmați folosind un cod 2FA","OtpNeeded":"2FA necesar"}')
    },
    "4e65": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"不明なエラー","ErrUnknownError":"不明なエラー","ErrInvalidCredentials":"無効なログイン","ErrServiceNotAvailable":"このサービスは利用できません","ErrEmailNotConfigured":"メールアドレスが未設定です","ErrTokenInvalid":"無効なトークンです","ErrClientNotFound":"クライアントが見つかりません","ErrUserNotFound":"ユーザーが見つかりません","ErrLoginNotPermitted":"ログインが許可されていません","ErrInvalidTokenState":"トークンが無効になっています","ErrSettingNotConfigured":"{setting} 項目が設定されていません","ErrNoTemplate":"{name} というテンプレートは存在しません","ErrServiceInvalidProvider":"{service} は {provider} をサポートしていません","ErrFieldRequired":"{field} は入力必須の項目です","ErrFieldMustBePrintable":"{field} は表示可能なASCII文字でなければなりません","ErrFieldHasURICharacters":"{field} には使用できないURIが含まれています","ErrFieldIsInvalidHost":"{field} は有効な IP または FQDN でなければなりません","ErrFieldIsInvalidIP":"{field} は有効な IP アドレスでなければなりません","ErrFieldTooLarge":"{field} の値は {max} より大きくすることはできません","ErrFieldTooSmall":"{field} の値は {min} より小さくすることはできません","ErrFieldNotBetween":"{field} の値は {min} から {max} の間でなければなりません","ErrFieldEqual":"{field1} の値は {field2} に等しくすることはできません","ErrFieldNotEqual":"{field1} の値は {field2} と等しくありません","ErrFieldNotEmail":"{field} は有効なメールアドレスではありません。","ErrFieldLength":"{field} は少なくとも {length} 文字必要です","ErrNoPermission":"操作を行う権限がありません","ErrDatabaseNotAvailable":"データベースが利用できません","ErrNoNodes":"利用可能なノードがありません","ErrNoTemplates":"利用可能なテンプレートがありません","ErrPasswordRequirements":"パスワードは最低8文字以上である必要があります","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"パスワードが一致しません","ErrSessionTimedOut":"セッションが時間切れです。再度ログインしてください。","ErrMissingScope":"この操作を実行する権限をもっていません。","ErrInvalidJson":"Json データが無効です","ErrSocketFailed":"WebSocket接続でエラーが発生し、一部の機能が低下または破損している可能性があります","ErrInviteLinkInvalid":"招待リンクが無効のようです","ErrSavingInviteduser":"アカウント作成時にエラーが発生しました","ErrDuplicateServerName":"この名前のサーバーは既に存在しています","ErrDuplicateNodeName":"この名前のノードは既に存在しています","ErrDirectoryUploadNotSupported":"フォルダをアップロードできません","ErrDockerNotSupported":"Dockerはこのノードでサポートされていません","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "4ef2": function(e) {
        e.exports = JSON.parse('{"ServersView":"Puede ver este servidor","ServersEdit":"Editar el servidor","ServersInstall":"Instalar el servidor","ServersConsole":"Ver la consola","ServersConsoleSend":"Enviar comandos a la consola","ServersStop":"Detener y matar el servidor","ServersStart":"Iniciar el servidor","ServersStat":"Ver estadísticas de CPU y memoria","ServersFiles":"Permitir el acceso a archivos usando SFTP","ServersFilesGet":"Ver y descargar archivos usando el administrador de archivos","ServersFilesPut":"Editar y subir archivos usando el administrador de archivos","ServersEditUsers":"Editar el acceso del usuario a este servidor","Admin":"Admin (esto concede todos los permisos posibles)","ViewServers":"Ver servidores","CreateServers":"Crear nuevos servidores","DeleteServers":"Eliminar servidores","EditServerAdmin":"Editar ajustes del servidor","ViewNodes":"Ver nodos","EditNodes":"Editar nodos","DeployNodes":"Desplegar Nodos nuevos","ViewTemplates":"Ver plantillas","EditTemplates":"Editar plantillas","ViewUsers":"Ver todos los usuarios","EditUsers":"Editar otros usuarios","PanelSettings":"Cambiar ajustes del panel"}')
    },
    "4f16": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Српски","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add","Ignore":"Ignore","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday","Sunday":"Sunday","Description":"Description"}')
    },
    "504c": function(e) {
        e.exports = JSON.parse('{"Server":"Сервер","NoServers":"Нет серверов, к которым вы имеете доступ","Servers":"Сервера","Add":"Добавить сервер","Console":"Консоль","Controls":"Управление","SFTPInfo":"Информация о SFTP","Restart":"Перезапуск","Start":"Запуск","Stop":"Выключить","Kill":"Убить","Install":"Установить","Send":"Отправить","Pause":"Пауза","Statistics":"Статистика","CPU":"CPU","Memory":"Память","Files":"Файлы","Name":"Имя сервера","NameInvalid":"Имя сервера не может быть пустым или содержать специальные символы","SelectNode":"Пожалуйста, выберите хост","SelectTemplate":"Пожалуйста, выберите шаблон","SelectThisTemplate":"Использовать этот шаблон","SelectUser":"Пожалуйста, выберите пользователя","Environment":"Переменные окружения","SelectEnvironment":"Пожалуйста, выберите среду","TypeUsername":"Введите имя пользователя","Admin":"Админ","AdminControls":"Элементы управления администратора","Settings":"Настройки","NoEditableVars":"У этого сервера нет переменных, которые вы можете редактировать","ConfirmDelete":"Вы действительно хотите удалить этот сервер? Действие не может быть отменено.","Delete":"Удалить сервер","Deleted":"Сервер удален","NoReadme":"У этого шаблона нет описания","SftpConnection":"Подключится к SFTP","EditDefinition":"Изменить определение сервера","Reload":"Перезагрузить данные сервера с диска","Reloaded":"Данные сервера перезагружены","Autostart":"Запускать сервер при запуске хоста","Autorestart":"Перезагружать сервер когда он останавливается","Autorecover":"Перезагружать сервер при сбое","Rename":"Переименовать сервер","Tasks":"Задачи","NoTasks":"Нет задач","RunTask":"Запустить задачу","NewTask":"Новая задача","EditTask":"Изменить задачу","TaskDeleted":"Задача удалена","TaskTriggered":"Задание срабатывает","EnableSchedule":"Автоматически запускать задание","TaskScheduleInvalid":"Недопустимое расписание задач","TaskScheduleManual":"Только вручную","CronExpression":"Cron выражение","Hourly":"Часовой","Daily":"Ежедневно","Weekly":"Еженедельно","Monthly":"Ежемесячно","Advanced":"Дополнительно","HourlyTab":"Каждые {hourInterval} часов в минуту {minute}","DailyTab":"Каждые {dayInterval} дней в {hour}:{minute}","WeeklyTab":"Каждый {weekdays} в {hour}:{minute}","MonthlyTab":"Каждые {monthInterval} месяцев в {day} день в {hour}:{minute}"}')
    },
    "506c": function(e) {
        e.exports = JSON.parse('{"Templates":"範本","NoTemplates":"這裡沒有可用範本","Deleted":"範本已刪除","New":"創建新範本","Edit":"編輯範本","Editor":"編輯器","Json":"JSON","Display":"顯示名稱","Type":"類型","Variables":"變數","Install":"安裝","AddInstallStep":"添加安裝步驟","DeleteInstallStep":"刪除安裝步驟","Description":"描述","DataType":"數據類型","DefaultValue":"預設值","Required":"必填項目","UserEditable":"用戶可編輯","Value":"值","AddOption":"添加選項","AddCommand":"添加指令","Filename":"檔案名稱","Content":"內容","Source":"來源","Target":"目標","Version":"版本","ReleaseType":"發佈類型","AddFile":"添加檔案","AddVariable":"添加變數","Environment":"Environment","Environments":"環境","AddEnvironment":"添加環境","DefaultEnvironment":"預設環境","AddEnvVar":"添加環境變數","EnvVars":"環境變數","DockerImage":"Docker 映像","SaveSuccess":"已儲存範本","VarNameNoSpaces":"環境變數不能為空或包含空格","SupportedEnvironments":"支持的環境","RunConfig":"執行配置","PreHook":"運行前的Hook","PostHook":"運行後的Hook","AddPreStep":"添加運行前的步驟","AddPostStep":"添加運行後的步驟","DeletePreStep":"刪除運行前的步驟","DeletePostStep":"刪除運行後的步驟","Shutdown":"關機","Command":"指令","WorkingDirectory":"Working Directory","Arguments":"參數","AddArgument":"添加參數","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"警告：匯入的範本將覆蓋現有具相同ID的範本","Import":"匯入範本","Tooltip":"從官方代碼資料庫匯入範本","Select":"選擇要導入的範本","Started":"匯入範本中，請稍候","Successful":"已成功匯入範本{template}","NoTemplatesTitle":"你想匯入範本嗎?","NoTemplatesContent":"您目前沒有任何範本，而創建伺服器時，範本是必需的。<br/>是否要立即從官方PufferPanel的範本資料庫中匯入一些範本？"},"stop":{"Command":"指令","Signal":"信號"},"processors":{"download":{"ProcessorName":"下載","files":"檔案"},"command":{"ProcessorName":"執行指令","commands":"指令"},"alterfile":{"ProcessorName":"變更檔案","regex":"以正則表達式搜索","search":"搜尋文字","replace":"用於取替"},"writefile":{"ProcessorName":"寫入檔案","text":"內容"},"move":{"ProcessorName":"移動檔案","source":"來源","target":"目標"},"mkdir":{"ProcessorName":"創建目錄"},"mojangdl":{"ProcessorName":"下載Minecraft"},"forgedl":{"ProcessorName":"下載Minecraft Forge"},"spongeforgedl":{"ProcessorName":"下載Minecraft SpongeForge","releaseType":"發佈類型"},"fabricdl":{"ProcessorName":"下載Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "510e": function(e) {
        e.exports = JSON.parse('{"Users":"Uživatelé","Add":"Přidat uživatele","AccountSettings":"Nastavení účtu","OldPassword":"Staré heslo","NewPassword":"Nové heslo","ConfirmPassword":"Potvrďte heslo","ChangePassword":"Změnit heslo","ChangeInfo":"Změnit podrobnosti účtu","InfoChanged":"Vaše údaje byly změněny","PasswordChanged":"Vaše heslo bylo změněno","AccountPassword":"Heslo k účtu","Account":"Účet","Login":"Přihlásit","LoginLink":"Nebo se přihlaste zde","Logout":"Odhlásit","Register":"Registrace","RegisterLink":"Nebo se zaregistrujte zde","RegisterSuccess":"Úspěšně jste se zaregistrovali","NoEmailGiven":"Musíte zadat e-mail uživatele, kterého chcete přidat","Username":"Uživatelské jméno","Password":"Heslo","Email":"E-mail","Edit":"Upravit uživatele","Update":"Upravit uživatele","Delete":"Smazat uživatele","CreateSuccess":"Uživatel úspěšně vytvořen","CreateError":"Vytvoření uživatele se nezdařilo","UpdateSuccess":"Aktualizovaný uživatel","UpdateError":"Chyba při aktualizaci uživatele","PermsUpdateError":"Aktualizace uživatelských oprávnění se nezdařila","Otp":"Dvoufázová autentifikace","OtpEnable":"Aktivovat 2FA","OtpDisable":"Zakázat 2FP","OtpHint":"Dvoufázová autentifikace přidává k vašemu účtu další vrstvu zabezpečení tím, že vyžaduje více než jen heslo k přihlášení.","OtpSetup":"Nastavení 2FA","OtpSetupHint":"Naskenujte QR kód pomocí vaší ověřovací aplikace nebo do ní zkopírujte tajný kód","OtpSecret":"Tajný kód","OtpConfirm":"Potvrdit pomocí kódu 2FA","OtpNeeded":"Vyžadováno 2 fázové ověření"}')
    },
    5296: function(e) {
        e.exports = JSON.parse('{"Settings":"設定","PanelSettings":"面板設定","EmailSettings":"電子郵件設定","MasterUrl":"主 URL","MasterUrlHint":"可以用來存取本面板的 URL 基底，格式為 http://localhost:8080","CompanyName":"公司名稱","DefaultTheme":"預設主題","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"電子信箱提供者","emailProviders":{"none":"無","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"網域","key":"API Key","host":"主機","username":"使用者名稱","password":"密碼"}}')
    },
    5299: function(e) {
        e.exports = JSON.parse('{"FileManager":"مدير الملفات","NewFolder":"مجلد جديد","NewFile":"ملف جديد","LastModified":"آخر تعديل","ConfirmDelete":"هل أنت متأكد من أنك تريد حذف هذا الملف؟","Upload":"رفع","Download":"تحميل","Size":"الحجم","NoFiles":"لا توجد ملفات هنا حتى الآن، اذهب وأنشئ بعض على سبيل المثال بالنقر على زر التثبيت في الجزء العلوي من الصفحة","FileLoadFailed":"فشل تحميل الملف","Refresh":"تحديث","CreateFile":"إنشاء ملف","CreateFolder":"إنشاء مجلد","ArchiveCurrentFolder":"إنشاء أرشيف من المجلد الحالي","ArchiveFolder":"إنشاء أرشيف من المجلد","ExtractArchive":"استخراج الأرشيف","DropToUpload":"قم بإسقاط الملفات هنا لتحميلها"}')
    },
    "531d": function(e) {
        e.exports = JSON.parse('{"Users":"사용자","Add":"사용자 추가","AccountSettings":"계정 설정","OldPassword":"기존 비밀번호","NewPassword":"새 비밀번호","ConfirmPassword":"비밀번호 확인","ChangePassword":"비밀번호 변경","ChangeInfo":"계정 정보 변경","InfoChanged":"정보가 변경되었습니다.","PasswordChanged":"비밀번호가 변경되었습니다.","AccountPassword":"비밀번호","Account":"계정","Login":"로그인","LoginLink":"또는 여기에서 로그인하세요","Logout":"로그아웃","Register":"가입","RegisterLink":"또는 여기에서 가입하세요","RegisterSuccess":"성공적으로 가입되었습니다.","NoEmailGiven":"추가하려는 유저의 이메일을 입력해야 합니다.","Username":"아이디","Password":"비밀번호","Email":"이메일","Edit":"사용자 편집","Update":"사용자 업데이트","Delete":"사용자 삭제","CreateSuccess":"사용자가 생성되었습니다.","CreateError":"사용자 생성에 실패했습니다","UpdateSuccess":"사용자가 업데이트 되었습니다","UpdateError":"사용자 업데이트에 실패했습니다","PermsUpdateError":"사용자 권한 수정에 실패했습니다","Otp":"2단계 인증","OtpEnable":"2단계 인증 활성화","OtpDisable":"2단계 인증 비활성화","OtpHint":"2단계 인증은 로그인 시 비밀번호 이상을 요구함으로써 계정을 강화합니다.","OtpSetup":"2단계 인증 설정","OtpSetupHint":"인증 애플리케이션을 사용하여 QR 코드를 스캔하거나 아래의 코드를 복사하십시오.","OtpSecret":"비밀 코드","OtpConfirm":"2단계 인증 코드를 이용하여 계속하기","OtpNeeded":"2단계 인증 필요"}')
    },
    5363: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nama","Address":"Alamat","Online":"Aktif","Offline":"Mati","Loading":"Sedang memuat...","General":"Umum","Language":"Bahasa","SelectLanguage":"Pilih bahasa","Settings":"Pengaturan","Update":"Perbarui","Edit":"Ubah","Delete":"Hapus","Create":"Buat","Save":"Simpan","Saved":"Disimpan","SaveFailed":"Gagal menyimpan","Cancel":"Batalkan","Confirm":"Konfirmasi","Actions":"Aksi","Host":"Host","Port":"Port","Template":"Templat","Options":"Opsi","Collapse":"Ciutkan","Copied":"Disalin ke clipboard","Unknown":"Tidak Diketahui","Search":"Cari","Back":"Kembali","Next":"Selanjutnya","LanguageName":"Bahasa Indonesia","Details":"Detail","ErrorDetails":"Detail Masalah","HelpTranslate":"Bantu kami terjemahkan Pufferpanel","DarkMode":"Mode Gelap","ThemeOptions":"Pilihan Tema","Protocol":"Protokol","Add":"Tambahkan","Ignore":"Abaikan","Monday":"Senin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Kamis","Friday":"Jumat","Saturday":"Sabtu","Sunday":"Minggu","Description":"Deskripsi"}')
    },
    "53d7": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nome","Address":"Endereço","Online":"Online","Offline":"Offline","Loading":"Carregando...","General":"Geral","Language":"Linguagem","SelectLanguage":"Selecionar linguagem","Settings":"Configurações","Update":"Atualizar","Edit":"Editar","Delete":"Remover","Create":"Criar","Save":"Salvar","Saved":"Salvo","SaveFailed":"Falha ao salvar","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Ações","Host":"Host","Port":"Porta","Template":"Modelo","Options":"Opções","Collapse":"Ocultar","Copied":"Copiado para a área de transferência","Unknown":"Desconhecido","Search":"Buscar","Back":"Voltar","Next":"Próximo","LanguageName":"Português (Brasil)","Details":"Detalhes","ErrorDetails":"Detalhes do erro","HelpTranslate":"Nós ajude a traduzir o PufferPanel","DarkMode":"Modo escuro","ThemeOptions":"Opções do Tema","Protocol":"Protocolo","Add":"Adicionar","Ignore":"Ignore","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado","Sunday":"Domingo","Description":"Descrição"}')
    },
    "54f4": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.Memory"))
                }
            }), a("div", {
                staticClass: "flex-grow-1"
            }), a("v-btn-toggle", {
                attrs: {
                    borderless: "",
                    dense: "",
                    mandatory: ""
                },
                model: {
                    value: e.mibMode,
                    callback: function(t) {
                        e.mibMode = t
                    },
                    expression: "mibMode"
                }
            }, [a("v-btn", {
                attrs: {
                    value: !1
                },
                domProps: {
                    textContent: e._s("MB")
                }
            }), a("v-btn", {
                attrs: {
                    value: !0
                },
                domProps: {
                    textContent: e._s("MiB")
                }
            })], 1)], 1), a("v-card-text", [a("apexchart", {
                attrs: {
                    series: e.series,
                    options: e.options,
                    height: "250"
                }
            })], 1)], 1)
        }
          , n = []
          , i = a("1321")
          , o = a.n(i)
          , s = {
            components: {
                apexchart: o.a
            },
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    intl: new Intl.NumberFormat("en-US",{
                        maximumFractionDigits: 2
                    }),
                    maxPoints: 40,
                    mibMode: !1,
                    options: {
                        chart: {
                            id: "memory",
                            type: "line",
                            animations: {
                                enabled: !1
                            },
                            toolbar: {
                                show: !1
                            },
                            foreColor: this.$isDark() ? "#FFF" : "#000000DE"
                        },
                        colors: [this.$isDark() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent],
                        tooltip: {
                            theme: [this.$isDark() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent]
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "straight"
                        },
                        markers: {
                            size: 0
                        },
                        xaxis: {
                            labels: {
                                show: !0,
                                rotate: 0,
                                formatter: e=>new Date(e).toLocaleTimeString()
                            },
                            tooltip: {
                                enabled: !1
                            },
                            type: "datetime"
                        },
                        yaxis: {
                            labels: {
                                show: !0,
                                formatter: e=>this.mibMode ? e < Math.pow(2, 10) ? this.intl.format(e) + " B" : e < Math.pow(2, 20) ? this.intl.format(e / Math.pow(2, 10)) + " KiB" : e < Math.pow(2, 30) ? this.intl.format(e / Math.pow(2, 20)) + " MiB" : e < Math.pow(2, 40) ? this.intl.format(e / Math.pow(2, 30)) + " GiB" : this.intl.format(e / Math.pow(2, 40)) + " TiB" : e < 1e3 ? this.intl.format(e) + " B" : e < 1e6 ? this.intl.format(e / 1e3) + " KB" : e < 1e9 ? this.intl.format(e / 1e6) + " MB" : e < 1e12 ? this.intl.format(e / 1e9) + " GB" : this.intl.format(e / 1e12) + " TB"
                            },
                            min: 0,
                            max: ()=>this.series[0] ? Math.ceil(this.series[0].data.reduce((e,t)=>Math.max(e, t[1]), this.mibMode ? 1025 : 1e3)) : this.mibMode ? 1025 : 1e3
                        },
                        legend: {
                            show: !0
                        }
                    },
                    series: []
                }
            },
            mounted() {
                this.$api.addServerListener(this.server.id, "stat", e=>{
                    this.updateStats(e)
                }
                );
                const e = new Array(this.maxPoints)
                  , t = (new Date).getTime();
                for (let a = 0; a < e.length; a++)
                    e[a] = [t - 3e3 * (e.length - a), 0];
                this.series = [{
                    name: this.$t("servers.Memory"),
                    data: e
                }]
            },
            methods: {
                updateStats(e) {
                    this.options = {
                        ...this.options,
                        chart: {
                            ...this.options.chart,
                            foreColor: this.$isDark() ? "#FFF" : "#000000DE"
                        }
                    };
                    const t = [...(this.series[0] || {}).data || [], [(new Date).getTime(), e.memory]];
                    this.series = [{
                        name: this.$t("servers.Memory"),
                        data: t.length > this.maxPoints ? t.slice(t.length - this.maxPoints) : t
                    }]
                }
            }
        }
          , l = s
          , d = a("2877")
          , u = a("6544")
          , c = a.n(u)
          , m = a("8336")
          , p = a("a609")
          , v = a("b0af")
          , h = a("99d9")
          , g = Object(d["a"])(l, r, n, !1, null, null, null);
        t["default"] = g.exports;
        c()(g, {
            VBtn: m["a"],
            VBtnToggle: p["a"],
            VCard: v["a"],
            VCardText: h["c"],
            VCardTitle: h["d"]
        })
    },
    5510: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nazwa","Address":"Adres","Online":"Online","Offline":"Offline","Loading":"Ładowanie...","General":"Ogólne","Language":"Język","SelectLanguage":"Wybierz Język","Settings":"Ustawienia","Update":"Zaktualizuj","Edit":"Edytuj","Delete":"Usuń","Create":"Stwórz","Save":"Zapisz","Saved":"Zapisano","SaveFailed":"Nie udało się zapisać","Cancel":"Anuluj","Confirm":"Potwierdź","Actions":"Akcje","Host":"Host","Port":"Port","Template":"Motyw","Options":"Opcje","Collapse":"Zwiń","Copied":"Skopiowano do schowka","Unknown":"Nieznany","Search":"Szukaj","Back":"Powrót","Next":"Dalej","LanguageName":"Polski","Details":"Szczegóły","ErrorDetails":"Szczegóły błędu","HelpTranslate":"Pomóż nam przetłumaczyć PufferPanel","DarkMode":"Ciemny motyw","ThemeOptions":"Opcje Motywu","Protocol":"Protokół","Add":"Dodaj","Ignore":"Ignoruj","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota","Sunday":"Niedziela","Description":"Opis"}')
    },
    5529: function(e) {
        e.exports = JSON.parse('{"FileManager":"文件管理器","NewFolder":"新建文件夹","NewFile":"新建文件","LastModified":"修改时间","ConfirmDelete":"您确认要删除此文件吗？","Upload":"上传","Download":"下载","Size":"大小","NoFiles":"此处暂无文件，点击页面上方的安装按钮来试试新建一些吧","FileLoadFailed":"加载文件时出错","Refresh":"刷新","CreateFile":"新建文件","CreateFolder":"新建文件夹","ArchiveCurrentFolder":"压缩当前文件夹","ArchiveFolder":"压缩文件夹","ExtractArchive":"解压文件","DropToUpload":"托拽文件至此处以上传"}')
    },
    5610: function(e) {
        e.exports = JSON.parse('{"Settings":"Settings","PanelSettings":"Panel Settings","EmailSettings":"Email Settings","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Company Name","DefaultTheme":"Default Theme","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domain","key":"API Key","host":"Host","username":"Username","password":"Password"}}')
    },
    5636: function(e) {
        e.exports = JSON.parse('{"Server":"Serwer","NoServers":"Brak serwerów, do których masz dostęp","Servers":"Serwery","Add":"Dodaj serwer","Console":"Konsola","Controls":"Ustawienia","SFTPInfo":"Informacje SFTP","Restart":"Uruchom ponownie","Start":"Uruchom","Stop":"Zatrzymaj","Kill":"Zabij","Install":"Zainstaluj","Send":"Wyślij","Pause":"Wstrzymaj","Statistics":"Statystyki","CPU":"Procesor","Memory":"Pamięć RAM","Files":"Pliki","Name":"Nazwa Serwera","NameInvalid":"Nazwa serwera nie może być pusta ani zawierać znaków specjalnych","SelectNode":"Proszę wybrać węzeł","SelectTemplate":"Proszę wybrać szablon","SelectThisTemplate":"Użyj tego szablonu","SelectUser":"Wybierz użytkownika","Environment":"Środowisko","SelectEnvironment":"Proszę wybrać środowisko","TypeUsername":"Wprowadź nazwę użytkownika","Admin":"Administrator","AdminControls":"Ustawienia administratora","Settings":"Ustawienia","NoEditableVars":"Ten serwer nie posiada zmiennych, które możesz edytować","ConfirmDelete":"Czy chcesz usunąć ten serwer? (tego nie można cofnąć)","Delete":"Usuń serwer","Deleted":"Serwer usunięty","NoReadme":"Brak dostępnego pliku README dla tego szablonu","SftpConnection":"Połącz z SFTP","EditDefinition":"Edytuj definicję serwera","Reload":"Odśwież dane serwera z dysku","Reloaded":"Przeładowano dane serwera","Autostart":"Uruchom serwer po uruchomieniu węzła","Autorestart":"Uruchom ponownie serwer po normalnym zatrzymaniu","Autorecover":"Uruchom ponownie serwer po awarii","Rename":"Zmień nazwę Serwera","Tasks":"Zadania","NoTasks":"Brak Zadań","RunTask":"Uruchom Zadanie","NewTask":"Nowe Zadanie","EditTask":"Edytuj Zadanie","TaskDeleted":"Zadanie zostało Usunięte","TaskTriggered":"Zadanie Uruchomione","EnableSchedule":"Uruchom Zadanie automatycznie","TaskScheduleInvalid":"Nieprawidłowy harmonogram Zadania","TaskScheduleManual":"Tylko ręczne uruchamianie","CronExpression":"Wyrażenie Cron","Hourly":"Co godzinę","Daily":"Codziennie","Weekly":"Co tydzień","Monthly":"Co miesiąc","Advanced":"Zaawansowane","HourlyTab":"Co {hourInterval} godzin w minucie {minute}","DailyTab":"Co {dayInterval} dni o {hour}:{minute}","WeeklyTab":"Co {weekdays} o {hour}:{minute}","MonthlyTab":"Co {monthInterval} miesięcy w {day} o {hour}:{minute}"}')
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = a("2b0e")
          , n = a("8103")
          , i = a.n(n)
          , o = a("bba4")
          , s = a.n(o)
          , l = a("df7c")
          , d = a.n(l);
        const u = a("ffe0")
          , c = [];
        u.keys().forEach(e=>{
            const t = u(e)
              , a = i()(s()(e.replace(/^\.\//, "").replace(/\.\w+$/, "")));
            if (a.startsWith("ServerType")) {
                const t = d.a.basename(e, ".vue");
                c.push(t)
            }
            r["a"].component(a, t.default || t)
        }
        ),
        r["a"].component("server-render", {
            render(e, t) {
                const a = this.$attrs.server;
                if (!a)
                    return;
                let r = "server-type-generic";
                for (const n in c)
                    if (c[n] === a.type) {
                        r = "server-type-" + c[n];
                        break
                    }
                return e(r, {
                    props: {
                        server: a
                    }
                }, [])
            }
        });
        var m = a("2db4")
          , p = a("f309")
          , v = a("87f6")
          , h = a.n(v);
        const g = {
            components: {
                VSnackbar: m["a"]
            },
            theme: {
                options: {
                    customProperties: !0,
                    inputStyle: "outlined",
                    console: {
                        daemonChip: null
                    }
                },
                themes: {
                    light: {
                        primary: "#07a7e3",
                        anchor: "#07a7e3",
                        accent: "#65a5f8"
                    },
                    dark: {
                        primary: "#3b8db8",
                        anchor: "#07a7e3",
                        accent: "#65a5f8"
                    }
                }
            },
            icons: {
                iconfont: "mdi"
            }
        }
          , f = new p["a"](g);
        r["a"].use(p["a"], g),
        r["a"].use(h.a, {
            $vuetify: f.framework,
            x: "center",
            y: "top",
            timeout: 2500,
            queueable: !0
        });
        var S = f
          , k = a("ade3")
          , E = a("faa1")
          , y = a.n(E)
          , b = a("a78e")
          , P = a.n(b)
          , N = a("bc3a")
          , C = a.n(N)
          , T = a("2fa4")
          , w = a("8336");
        a("3c5d");
        class A extends y.a {
            constructor(e, t) {
                super(),
                Object(k["a"])(this, "_expectClose", !1),
                Object(k["a"])(this, "_connectionAttemptsFailed", 0),
                Object(k["a"])(this, "_connectionAttemptsMax", 5),
                Object(k["a"])(this, "_connectionFailReset", null),
                Object(k["a"])(this, "_socket", null),
                Object(k["a"])(this, "_api", null),
                Object(k["a"])(this, "_id", null),
                Object(k["a"])(this, "_tasks", []),
                Object(k["a"])(this, "_preOpenMessages", []),
                Object(k["a"])(this, "readyState", WebSocket.CONNECTING),
                this._id = t,
                this._api = e,
                this._openSocket(),
                this.emit("open")
            }
            _openSocket() {
                this._socket = new WebSocket(this._api.getServerSocketUrl(this._id)),
                this.readyState = this._socket.readyState,
                this._socket.addEventListener("open", e=>this._onOpen(e)),
                this._socket.addEventListener("message", e=>this._onMessage(e)),
                this._socket.addEventListener("close", e=>this._onClose(e))
            }
            _onOpen(e) {
                this.readyState = this._socket.readyState,
                this.emit("socket-open", e),
                this._preOpenMessages.forEach(e=>this.send(e))
            }
            _onMessage(e) {
                this.readyState = this._socket.readyState;
                const t = JSON.parse(e.data);
                this.emit("message", t),
                this.emit(t.type, t.data)
            }
            _onClose(e) {
                this.readyState = this._socket.readyState,
                this.emit("socket-close", e),
                clearTimeout(this._connectionFailReset),
                this._expectClose ? this._cleanup() : this._connectionAttemptsFailed >= this._connectionAttemptsMax ? this._onError({
                    msg: "Socket closed unexpectedly",
                    event: e
                }) : (this._connectionAttemptsFailed += 1,
                setTimeout(()=>{
                    this._connectionAttemptsFailed = 0
                }
                , 3e4),
                setTimeout(()=>this._openSocket(), 500 + 500 * this._connectionAttemptsFailed))
            }
            _onError(e) {
                console.error("SOCKET ERROR", e),
                this.readyState = this._socket.readyState,
                this.emit("error", e)
            }
            _cleanup() {
                this._tasks.forEach(e=>clearInterval(e))
            }
            startTask(e, t) {
                return e(),
                this._tasks.push(setInterval(e, t))
            }
            stopServerTaks(e) {
                for (const t in this._tasks)
                    t === e && clearInterval(e)
            }
            needsPolling() {
                const e = this._socket.readyState;
                return e === WebSocket.CLOSING || e === WebSocket.CLOSED
            }
            async send(e) {
                let t;
                if (t = "string" !== typeof e ? JSON.stringify(e) : e,
                this._socket.readyState === WebSocket.CONNECTING)
                    this._preOpenMessages.push(e);
                else if (this._socket.readyState === WebSocket.OPEN)
                    this._socket.send(t);
                else
                    switch (e.type) {
                    case "start":
                    case "stop":
                    case "kill":
                    case "install":
                        this._api.serverAction(this._id, e.type);
                        break;
                    case "stat":
                        {
                            const e = await this._api.getServerStatus(this._id);
                            let t = {
                                cpu: 0,
                                memory: 0
                            };
                            e && (t = await this._api.getServerStats(this._id)),
                            this._onMessage({
                                data: JSON.stringify({
                                    data: {
                                        running: e
                                    },
                                    type: "status"
                                })
                            }),
                            this._onMessage({
                                data: JSON.stringify({
                                    data: t,
                                    type: "stat"
                                })
                            });
                            break
                        }
                    case "status":
                        {
                            const e = await this._api.getServerStatus(this._id);
                            this._onMessage({
                                data: JSON.stringify({
                                    data: {
                                        running: e
                                    },
                                    type: "status"
                                })
                            });
                            break
                        }
                    case "replay":
                        {
                            const t = await this._api.getServerConsole(this._id, e.since);
                            this._onMessage({
                                data: JSON.stringify({
                                    data: t,
                                    type: "console"
                                })
                            });
                            break
                        }
                    case "file":
                        switch (e.action) {
                        case "get":
                            {
                                const t = await this._api.downloadServerFile(this._id, e.path);
                                this._onMessage({
                                    data: JSON.stringify({
                                        data: {
                                            files: t,
                                            path: e.path
                                        },
                                        type: "file"
                                    })
                                });
                                break
                            }
                        case "create":
                            await this._api.createServerFolder(this._id, e.path),
                            this.send({
                                type: "file",
                                action: "get",
                                path: e.path
                            });
                            break;
                        case "delete":
                            {
                                await this._api.deleteServerFile(this._id, e.path);
                                let t = e.path.split("/");
                                t.pop(),
                                t = t.join("/") || "/",
                                this.send({
                                    type: "file",
                                    action: "get",
                                    path: t
                                });
                                break
                            }
                        }
                        break;
                    case "console":
                        this._api.serverCommand(this._id, e.command);
                        break;
                    default:
                        console.error("SOCKET SEND", "got unknown message", e);
                        break
                    }
            }
            close() {
                this._expectClose = !0,
                this._cleanup(),
                this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.OPEN ? (this._socket.addEventListener("close", ()=>this.emit("close")),
                this._socket.close()) : this.emit("close")
            }
        }
        const D = {
            startServerConnection(e) {
                if (!this._sockets[e])
                    return this._sockets[e] = new A(this,e),
                    Promise.resolve()
            },
            serverConnectionNeedsPolling(e) {
                if (!this._sockets[e])
                    throw new Error("connection not opened");
                return this._sockets[e].needsPolling()
            },
            addServerListener(e, t, a) {
                if (!this._sockets[e])
                    throw new Error("connection not opened");
                this._sockets[e].on(t, a)
            },
            removeServerListener(e, t, a) {
                this._sockets[e] && this._sockets[e].off(t, a)
            },
            startServerTask(e, t, a) {
                if (!this._sockets[e])
                    throw new Error("connection not opened");
                this._sockets[e].startTask(t, a)
            },
            stopServerTask(e, t) {
                this._sockets[e] && this._sockets[e].stopTask(t)
            },
            sendToServer(e, t) {
                if (!this._sockets[e])
                    throw new Error("connection not opened");
                this._sockets[e].send(t)
            },
            closeServerConnection(e) {
                this._sockets[e] && (this._sockets[e].on("close", ()=>{
                    delete this._sockets[e]
                }
                ),
                this._sockets[e].close())
            },
            requestServerStats(e) {
                this.sendToServer(e, {
                    type: "stat"
                })
            },
            requestServerStatus(e) {
                this.sendToServer(e, {
                    type: "status"
                })
            },
            requestServerConsoleReplay(e, t=0) {
                this.sendToServer(e, {
                    type: "replay",
                    since: t
                })
            },
            sendServerCommand(e, t) {
                this.sendToServer(e, {
                    type: "console",
                    command: t
                })
            },
            requestServerFile(e, t) {
                this.sendToServer(e, {
                    type: "file",
                    action: "get",
                    path: t
                })
            },
            requestServerFolderCreation(e, t) {
                this.sendToServer(e, {
                    type: "file",
                    action: "create",
                    path: t
                })
            },
            requestServerFileDeletion(e, t) {
                this.sendToServer(e, {
                    type: "file",
                    action: "delete",
                    path: t
                })
            },
            async sendServerAction(e, t) {
                "restart" === t && (await this.serverAction(e, "stop", !0),
                t = "start"),
                this.sendToServer(e, {
                    type: t
                })
            },
            getServers(e, t=10) {
                return this.withErrorHandling(async a=>{
                    const r = (await a.$http.get("/api/servers", {
                        params: {
                            page: e,
                            limit: t
                        }
                    })).data
                      , n = r.servers.map(e=>{
                        let t = "";
                        return t = e.ip && "" !== e.ip && "0.0.0.0" !== e.ip ? e.ip : e.node.publicHost,
                        e.port && (t += ":" + e.port),
                        {
                            id: e.id,
                            name: e.name,
                            node: e.node.name,
                            address: t
                        }
                    }
                    );
                    return {
                        servers: n,
                        pages: Math.ceil(r.paging.total / t)
                    }
                }
                )
            },
            createServer(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.post("/api/servers", e)).data;
                    return a.id
                }
                )
            },
            getServer(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.get(`/api/servers/${e}?perms`)).data;
                    return {
                        ...a.server,
                        permissions: a.permissions
                    }
                }
                )
            },
            getServerDefinition(e) {
                return this.withErrorHandling(async t=>(await t.$http.get("/proxy/daemon/server/" + e)).data)
            },
            getServerData(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/proxy/daemon/server/${e}/data`)).data.data)
            },
            getServerTasks(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/proxy/daemon/server/${e}/tasks`)).data.tasks)
            },
            getServerSocketUrl(e) {
                const t = "http:" === window.location.protocol ? "ws" : "wss";
                return `${t}://${window.location.host}/proxy/daemon/socket/${e}`
            },
            getServerStatus(e, t) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/proxy/daemon/server/${e}/status`)).data.running, t)
            },
            getServerStats(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/proxy/daemon/server/${e}/stats`)).data)
            },
            getServerConsole(e, t=0) {
                return this.withErrorHandling(async a=>(await a.$http.get(`/proxy/daemon/server/${e}/console?time=${t}`)).data)
            },
            getServerUsers(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/api/servers/${e}/user`)).data)
            },
            getServerFileUrl(e, t) {
                return 0 === t.indexOf("/") && (t = t.substring(1)),
                t = encodeURIComponent(t),
                t = t.replace(/%2F/g, "/"),
                `/proxy/daemon/server/${e}/file/${t}`
            },
            downloadServerFile(e, t, a=!1) {
                return this.withErrorHandling(async r=>{
                    const n = (await r.$http.get(this.getServerFileUrl(e, t), a ? {
                        responseType: "arraybuffer"
                    } : void 0)).data;
                    return a ? new TextDecoder("utf-8").decode(new Uint8Array(n)) : n
                }
                )
            },
            uploadServerFile(e, t, a, r) {
                return this.withErrorHandling(async n=>{
                    let i = null;
                    i = a instanceof Blob || a instanceof File ? a : "string" === typeof a ? new Blob([a]) : new Blob([JSON.stringify(a)]);
                    const o = new FormData;
                    return o.append("file", i),
                    await n.$http.put(this.getServerFileUrl(e, t), o, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        onUploadProgress: r
                    }),
                    !0
                }
                )
            },
            createServerFolder(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put(this.getServerFileUrl(e, t), void 0, {
                    params: {
                        folder: !0
                    }
                }),
                !0))
            },
            deleteServerFile(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.delete(this.getServerFileUrl(e, t)),
                !0))
            },
            archiveServerFiles(e, t, a) {
                return t.startsWith("/") && (t = t.substring(1)),
                Array.isArray(a) || (a = [a]),
                a.map(e=>e.startsWith("/") ? e.substring(1) : e),
                this.withErrorHandling(async r=>(await r.$http.post(`/proxy/daemon/server/${e}/archive/${t}`, a),
                !0))
            },
            extractServerFile(e, t, a) {
                return t.startsWith("/") && (t = t.substring(1)),
                this.withErrorHandling(async r=>(await r.$http.get(`/proxy/daemon/server/${e}/extract/${t}`, {
                    params: {
                        destination: a
                    }
                }),
                !0))
            },
            serverAction(e, t, a=!1) {
                return this.withErrorHandling(async r=>{
                    await this._ctx.$http.post(`/proxy/daemon/server/${e}/${t}?wait=${a}`)
                }
                )
            },
            serverCommand(e, t) {
                return this.withErrorHandling(async a=>{
                    await this._ctx.$http.post(`/proxy/daemon/server/${e}/console`, t)
                }
                )
            },
            updateServerName(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put(`/api/servers/${e}/name/${encodeURIComponent(t)}`),
                !0))
            },
            updateServerDefinition(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post("/proxy/daemon/server/" + e, t),
                !0))
            },
            updateServerData(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post(`/proxy/daemon/server/${e}/data`, {
                    data: t
                }),
                !0))
            },
            createServerTask(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post(`/proxy/daemon/server/${e}/tasks`, t)).id)
            },
            runServerTask(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post(`/proxy/daemon/server/${e}/tasks/${t}/run`)).id)
            },
            editServerTask(e, t, a) {
                return this.withErrorHandling(async r=>(await r.$http.put(`/proxy/daemon/server/${e}/tasks/${t}`, a),
                !0))
            },
            deleteServerTask(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.delete(`/proxy/daemon/server/${e}/tasks/${t}`),
                !0))
            },
            updateServerUser(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put(`/api/servers/${e}/user/${t.email}`, t),
                !0))
            },
            reloadServer(e) {
                this.withErrorHandling(async t=>(await t.$http.post(`/proxy/daemon/server/${e}/reload`),
                !0))
            },
            deleteServer(e) {
                return this.withErrorHandling(async t=>(await t.$http.delete("/api/servers/" + e),
                !0))
            },
            deleteServerUser(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.delete(`/api/servers/${e}/user/${t}`),
                !0))
            },
            getServerOAuthClients(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/api/servers/${e}/oauth2`)).data)
            },
            createServerOAuthClient(e, t, a) {
                return this.withErrorHandling(async r=>(await r.$http.post(`/api/servers/${e}/oauth2`, {
                    name: t,
                    description: a
                })).data)
            },
            deleteServerOAuthClient(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.delete(`/api/servers/${e}/oauth2/${t}`)).data)
            }
        }
          , I = {
            getNodes() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/nodes")).data)
            },
            createNode(e) {
                return this.withErrorHandling(async t=>(await t.$http.post("/api/nodes", F(e)),
                !0))
            },
            getNode(e) {
                return this.withErrorHandling(async t=>(await t.$http.get("/api/nodes/" + e)).data)
            },
            getNodeDeployment(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/api/nodes/${e}/deployment`)).data)
            },
            updateNode(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put("/api/nodes/" + e, F(t)),
                !0))
            },
            deleteNode(e) {
                return this.withErrorHandling(async t=>(await t.$http.delete("/api/nodes/" + e),
                !0))
            }
        };
        function F(e) {
            return {
                ...e,
                publicPort: Number(e.publicPort),
                privatePort: Number(e.privatePort),
                sftpPort: Number(e.sftpPort)
            }
        }
        const O = {
            getUsers(e, t=10) {
                return this.withErrorHandling(async a=>{
                    const r = (await a.$http.get("/api/users", {
                        params: {
                            page: e,
                            limit: t
                        }
                    })).data;
                    return {
                        users: r.users,
                        pages: Math.ceil(r.paging.total / t)
                    }
                }
                )
            },
            searchUsers(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.get("/api/users", {
                    params: {
                        username: `*${e}*`
                    },
                    cancelToken: t
                })).data.users)
            },
            createUser(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.post("/api/users", e)).data.id;
                    return await this.updateUserPermissions(a, e),
                    a
                }
                )
            },
            getUser(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.get("/api/users/" + e)).data
                      , r = await this.getUserPermissions(e);
                    return {
                        ...a,
                        ...r
                    }
                }
                )
            },
            getUserPermissions(e) {
                return this.withErrorHandling(async t=>(await t.$http.get(`/api/users/${e}/perms`)).data)
            },
            updateUser(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post("/api/users/" + e, t),
                await this.updateUserPermissions(e, t),
                !0))
            },
            updateUserPermissions(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put(`/api/users/${e}/perms`, t),
                !0))
            },
            deleteUser(e) {
                return this.withErrorHandling(async t=>(await t.$http.delete("/api/users/" + e),
                !0))
            }
        }
          , U = {
            getTemplates() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/templates")).data)
            },
            getImportableTemplates() {
                return this.withErrorHandling(async e=>(await e.$http.post("/api/templates/import")).data)
            },
            getTemplate(e) {
                return this.withErrorHandling(async t=>z((await t.$http.get("/api/templates/" + e)).data))
            },
            saveTemplate(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.put("/api/templates/" + e, x(t)),
                !0), {
                    400: "errors.ErrInvalidJson"
                })
            },
            importTemplate(e) {
                return this.withErrorHandling(async t=>(await t.$http.post("/api/templates/import/" + e),
                !0))
            },
            deleteTemplate(e) {
                return this.withErrorHandling(async t=>(await t.$http.delete("/api/templates/" + e),
                !0))
            },
            templateFromApiJson(e, t=!1) {
                return z("string" === typeof e ? JSON.parse(e) : e, t)
            },
            templateToApiJson(e, t=!0) {
                return t ? JSON.stringify(x(e), void 0, 2) : x(e)
            }
        }
          , z = (e,t=!1)=>{
            const {name: a, display: r, type: n, readme: i} = e
              , o = e=>("download" === e.type && "string" === typeof e.files && (e.files = [e.files]),
            "command" === e.type && "string" === typeof e.commands && (e.commands = [e.commands]),
            e);
            e.run || (e.run = {});
            const s = e.run.command || ""
              , l = e.run.workingDirectory || ""
              , d = e.run.autostart
              , u = e.run.autorestart
              , c = e.run.autorecover
              , m = {};
            e.run.stop ? (m.type = "command",
            m.stop = e.run.stop) : e.run.stopCode ? (m.type = "signal",
            m.stop = e.run.stopCode) : (m.type = "command",
            m.stop = "");
            const p = e.run.environmentVars || {}
              , v = (e.run.pre || []).map(o)
              , h = (e.run.post || []).map(o)
              , g = (e.install || []).map(o);
            e.data || (e.data = {});
            const f = [];
            for (const b in e.data)
                e.data[b].type || (e.data[b].type = "string"),
                f.push({
                    ...e.data[b],
                    name: b
                });
            const S = e.environment
              , k = t ? void 0 : e.supportedEnvironments || []
              , E = t ? e.id : void 0
              , y = e.requirements;
            return {
                id: E,
                name: a,
                display: r,
                type: n,
                command: s,
                workingDirectory: l,
                stop: m,
                pre: v,
                post: h,
                envVars: p,
                vars: f,
                install: g,
                defaultEnv: S,
                supportedEnvs: k,
                readme: i,
                autostart: d,
                autorestart: u,
                autorecover: c,
                requirements: y
            }
        }
          , x = e=>{
            const {id: t, name: a, display: r, type: n, command: i, workingDirectory: o, stop: s, pre: l, post: d, envVars: u, vars: c, install: m, defaultEnv: p, supportedEnvs: v, autostart: h, autorestart: g, autorecover: f, requirements: S} = e
              , k = {};
            "signal" === s.type ? k.stopCode = Number(s.stop) : k.stop = s.stop;
            const E = {};
            return c.forEach(e=>{
                E[e.name] = {
                    ...e
                },
                delete E[e.name].name
            }
            ),
            {
                id: t,
                name: a,
                display: r,
                type: n,
                install: m,
                run: {
                    ...k,
                    command: i,
                    workingDirectory: o,
                    pre: l,
                    post: d,
                    environmentVars: u,
                    autostart: h,
                    autorestart: g,
                    autorecover: f
                },
                data: E,
                environment: p,
                supportedEnvironments: v,
                requirements: S
            }
        }
        ;
        var j = e=>{
            const t = e=>new TextDecoder("utf-8").decode(new Uint8Array(e))
              , a = 512
              , r = 100
              , n = 124
              , i = 11
              , o = 8
              , s = []
              , l = new Uint8Array(e);
            let d = 0
              , u = !0;
            while (u) {
                const e = l.slice(d, d + a)
                  , c = [];
                for (let t = 0; t < r; t++) {
                    if (0 === e[t])
                        break;
                    c.push(e[t])
                }
                const m = t(c)
                  , p = parseInt(t(e.slice(n, n + i)), o) || 0
                  , v = (Math.floor(p / a) + (0 === p ? 0 : 1)) * a
                  , h = l.slice(d + a, d + a + p);
                s.push({
                    name: m,
                    content: t(h),
                    blob: new Blob([h])
                });
                let g = d + a + v;
                while (g < l.length) {
                    if (0 !== l[g]) {
                        d = g;
                        break
                    }
                    g += a
                }
                g >= l.length && (u = !1)
            }
            return s.filter(e=>"/" !== e.name.substr(-1))
        }
        ;
        class R extends y.a {
            constructor(...e) {
                super(...e),
                Object(k["a"])(this, "_ctx", null),
                Object(k["a"])(this, "_sockets", {})
            }
            isLoggedIn() {
                return "" !== this.getToken()
            }
            getToken() {
                return P.a.get("puffer_auth") || ""
            }
            updateCookie(e) {
                P.a.set("puffer_auth", e, {
                    sameSite: "strict",
                    secure: "https:" === window.location.protocol
                })
            }
            saveLoginData(e, t=[], a=!1) {
                this.updateCookie(e),
                localStorage.setItem("scopes", JSON.stringify(t)),
                a || this.emit("login")
            }
            logout(e) {
                P.a.remove("puffer_auth"),
                this.emit("logout", e)
            }
            register(e, t, a) {
                return this.withErrorHandling(async r=>{
                    const n = (await r.$http.post("/auth/register", {
                        username: e,
                        email: t,
                        password: a
                    })).data
                      , i = n.token && "" !== n.token;
                    return i && this.saveLoginData(n.token, n.scopes || []),
                    i
                }
                )
            }
            login(e, t, a={}) {
                return this.withErrorHandling(async r=>{
                    const n = (await r.$http.post("/auth/login", {
                        email: e,
                        password: t
                    })).data;
                    return n.otpNeeded ? (this.emit("requestOtp"),
                    "otp") : (this.saveLoginData(n.session, n.scopes || [], a.silent),
                    !0)
                }
                , {
                    noToast: a.silent || a.noToast
                })
            }
            loginOtp(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.post("/auth/otp", {
                        token: e
                    })).data;
                    return this.saveLoginData(a.session, a.scopes || []),
                    !0
                }
                )
            }
            reauth() {
                return this.withErrorHandling(async e=>{
                    const t = (await e.$http.post("/auth/reauth")).data;
                    return this.updateCookie(t.session),
                    !0
                }
                , {
                    noToast: !0
                })
            }
            getConfig() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/config")).data)
            }
            getTheme(e) {
                return this.withErrorHandling(async t=>{
                    const a = (await t.$http.get(`/theme/${e}.tar`, {
                        responseType: "arraybuffer"
                    })).data;
                    return j(a)
                }
                )
            }
            getSelf() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/self")).data)
            }
            updateSelf(e, t, a, r={}) {
                return this.withErrorHandling(async r=>(await r.$http.put("/api/self", {
                    username: e,
                    email: t,
                    password: a
                }),
                !0), r)
            }
            updatePassword(e, t, a={}) {
                return this.withErrorHandling(async a=>(await a.$http.put("/api/self", {
                    password: e,
                    newPassword: t
                }),
                !0), a)
            }
            getOtp() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/self/otp")).data.otpEnabled)
            }
            startOtpEnroll() {
                return this.withErrorHandling(async e=>(await e.$http.post("/api/self/otp")).data)
            }
            validateOtpEnroll(e) {
                return this.withErrorHandling(async t=>"" === (await t.$http.put("/api/self/otp", {
                    token: e
                })).data)
            }
            disableOtp(e) {
                return this.withErrorHandling(async t=>"" === (await t.$http.delete("/api/self/otp/" + e)).data)
            }
            getUserOAuthClients() {
                return this.withErrorHandling(async e=>(await e.$http.get("/api/self/oauth2")).data)
            }
            createUserOAuthClient(e, t) {
                return this.withErrorHandling(async a=>(await a.$http.post("/api/self/oauth2", {
                    name: e,
                    description: t
                })).data)
            }
            deleteUserOAuthClient(e) {
                return this.withErrorHandling(async t=>204 === (await t.$http.delete("/api/self/oauth2/" + e)).status)
            }
            getSetting(e, t={}) {
                return this.withErrorHandling(async t=>(await t.$http.get("/api/settings/" + e)).data.value, t)
            }
            setSetting(e, t, a={}) {
                return this.withErrorHandling(async a=>(await a.$http.put("/api/settings/" + e, {
                    value: t
                }),
                "panel.settings.companyName" === e && this.emit("panelTitleChanged", t),
                !0), a)
            }
            setSettings(e, t={}) {
                return this.withErrorHandling(async t=>(await t.$http.post("/api/settings", e),
                -1 !== Object.keys(e).indexOf("panel.settings.companyName") && this.emit("panelTitleChanged", e["panel.settings.companyName"]),
                !0), t)
            }
            getUserSettings(e={}) {
                return this.withErrorHandling(async e=>{
                    const t = {};
                    return (await e.$http.get("/api/userSettings")).data.map(e=>{
                        t[e.key] = e.value
                    }
                    ),
                    t
                }
                , e)
            }
            setUserSetting(e, t, a={}) {
                return this.withErrorHandling(async a=>(await a.$http.put("/api/userSettings/" + e, {
                    value: t
                }),
                !0), a)
            }
            async withErrorHandling(e, t) {
                try {
                    return await e(this._ctx)
                } catch (a) {
                    return this.handleError(a, t)
                }
            }
            handleError(e, t) {
                if (t || (t = {}),
                console.error("ERROR", e),
                t.noToast || 401 === e.response.status)
                    return !1;
                let a = "errors.ErrUnknownError"
                  , r = {};
                if (e && e.response && e.response.data.error && (a = e.response.data.error.code ? "errors." + e.response.data.error.code : e.response.data.error.msg,
                e.response.data.error.metadata && (r = e.response.data.error.metadata),
                "ErrGeneric" === e.response.data.error.code && "UNIQUE constraint failed: servers.name" === e.response.data.error.msg && (a = "errors.ErrDuplicateServerName"),
                "ErrGeneric" === e.response.data.error.code && "UNIQUE constraint failed: nodes.name" === e.response.data.error.msg && (a = "errors.ErrDuplicateNodeName")),
                void 0 !== t[e.response.status]) {
                    let r = !0;
                    if ("function" === typeof t[e.response.status] ? r = !0 !== t[e.response.status]() : a = t[e.response.status],
                    !r)
                        return
                }
                const n = {
                    timeout: 6e3,
                    slot: [this._ctx.$createElement("div", {
                        attrs: {
                            class: "flex-grow-1"
                        }
                    }, [this._ctx.$createElement("span", [this._ctx.$t("errors.ErrUnknownError")]), this._ctx.$createElement(T["a"], []), this._ctx.$createElement(w["a"], {
                        props: {
                            text: !0,
                            right: !0
                        },
                        on: {
                            click: ()=>window.pufferpanel.showError(e)
                        }
                    }, [this._ctx.$t("common.Details")])])]
                }
                  , i = "errors.ErrUnknownError" === a;
                return this._ctx.$toast.error(i ? void 0 : this._ctx.$t(a, r), i ? n : void 0),
                !1
            }
        }
        var M = function(e) {
            Object.assign(R.prototype, D, I, O, U),
            e.prototype.$api = new R,
            e.prototype.$http = C.a.create(),
            e.prototype.$http.interceptors.request.use(t=>((t.url.startsWith("/api") || t.url.startsWith("/proxy")) && (t.headers[t.method].Authorization = "Bearer " + e.prototype.$api.getToken()),
            t), e=>Promise.reject(e)),
            e.prototype.$http.interceptors.response.use(e=>e, t=>(401 === ((t || {}).response || {}).status && e.prototype.$api.logout("session_timed_out"),
            Promise.reject(t))),
            e.prototype.hasScope = e=>{
                const t = localStorage.getItem("scopes") || "[]";
                return -1 !== JSON.parse(t).indexOf(e)
            }
            ,
            e.prototype.hasAuth = ()=>"" !== e.prototype.$api.getToken(),
            e.prototype.isAdmin = ()=>e.prototype.hasScope("servers.admin"),
            e.mixin({
                beforeCreate() {
                    null == e.prototype.$api._ctx && (e.prototype.$api._ctx = this)
                }
            })
        };
        let V = null
          , L = null;
        var _ = function(e) {
            e.prototype.$isDark = ()=>V,
            e.prototype.$toggleDark = ()=>e.prototype.$setDark(!V),
            e.prototype.$setDark = async t=>{
                if (!1 !== t && !0 !== t)
                    if ("false" === t)
                        t = !1;
                    else {
                        if ("true" !== t)
                            return;
                        t = !1
                    }
                e.prototype.$api.isLoggedIn() && await e.prototype.$api.setUserSetting("dark", "" + t),
                localStorage.setItem("dark", "" + t),
                V = t,
                L.$vuetify.theme.dark = V
            }
            ,
            e.mixin({
                async created() {
                    if (null == L) {
                        L = this;
                        const t = e.prototype.$api.isLoggedIn() ? (await e.prototype.$api.getUserSettings()).dark : null;
                        V = "true" === t || "false" === t ? "true" === t : "true" === (localStorage.getItem("dark") || ""),
                        L.$vuetify.theme.dark = V
                    }
                }
            })
        };
        function H(e) {
            e.component("Ace", {
                props: {
                    editorId: {
                        type: String,
                        default: ()=>"editor"
                    },
                    value: {
                        type: String,
                        default: ()=>""
                    },
                    lang: {
                        type: String,
                        default: ()=>"text"
                    },
                    theme: {
                        type: String,
                        default: ()=>e.prototype.$isDark() ? "monokai" : "github"
                    },
                    file: {
                        type: String,
                        default: ()=>""
                    },
                    height: {
                        type: String,
                        default: ()=>"100%"
                    }
                },
                data() {
                    return {
                        editor: Object,
                        ready: !1
                    }
                },
                mounted() {
                    if (window.ace)
                        this.initialize();
                    else {
                        const e = this
                          , t = document.createElement("script");
                        t.src = "/ace/ace.js",
                        t.onload = ()=>{
                            const t = document.createElement("script");
                            t.src = "/ace/ext-modelist.js",
                            t.onload = ()=>{
                                e.initialize()
                            }
                            ,
                            document.head.appendChild(t)
                        }
                        ,
                        document.head.appendChild(t)
                    }
                },
                methods: {
                    initialize() {
                        const e = window.ace.require("ace/ext/modelist")
                          , t = this.lang || (this.file ? e.getModeForPath(this.file).mode : "text")
                          , a = this.theme || "monokai";
                        this.editor = window.ace.edit(this.editorId),
                        this.value && this.value.length > 0 && this.editor.getSession().setValue(this.value, 1),
                        this.editor.getSession().setMode(t),
                        this.editor.setTheme("ace/theme/" + a),
                        this.editor.on("change", ()=>{
                            this.$emit("input", this.editor.getValue())
                        }
                        ),
                        this.ready = !0,
                        this.$emit("editorready", !0)
                    },
                    setValue(e) {
                        this.editor.getSession().setValue(e, 1)
                    }
                },
                render(e, t) {
                    const a = this.height ? this.height : "100%";
                    return e("div", {
                        attrs: {
                            id: this.editorId
                        },
                        style: `width:100%;height:${a};`
                    }, [])
                }
            })
        }
        var $ = H
          , J = a("9500");
        function W(e, t, a) {
            Object(J["a"])(e, t),
            e.addEventListener("hotkey-fire", t=>{
                a.child.$listeners.hotkey && (t.preventDefault(),
                (e.offsetWidth || e.offsetHeight || e.getClientRects().length) && a.child.$emit("hotkey", t.detail.path.join(" ")))
            }
            )
        }
        var K = function(e) {
            e.directive("hotkey", {
                bind: function(e, t, a) {
                    "string" === typeof t.value && W(e, t.value, a),
                    Array.isArray(t.value) && t.value.map(t=>{
                        W(e, t, a)
                    }
                    )
                },
                unbind: function(e, t, a) {
                    Object(J["b"])(e)
                }
            })
        }
          , B = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-app", [a("v-app-bar", {
                attrs: {
                    app: "",
                    dark: "",
                    "clipped-left": "",
                    color: "primary"
                }
            }, [e.loggedIn && e.$vuetify.breakpoint.mdAndDown ? a("v-app-bar-nav-icon", {
                on: {
                    click: function(t) {
                        e.drawer = !e.drawer
                    }
                }
            }) : e._e(), a("v-toolbar-title", {
                staticClass: "headline"
            }, [e.appConfig ? a("span", {
                domProps: {
                    textContent: e._s(e.appConfig.branding.name)
                }
            }) : e._e()]), a("div", {
                staticClass: "flex-grow-1"
            }), e.appConfig.themes.available.length > 1 ? a("v-menu", {
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on
                          , n = t.attrs;
                        return [a("v-btn", e._g(e._b({
                            attrs: {
                                icon: ""
                            }
                        }, "v-btn", n, !1), r), [a("v-icon", [e._v("mdi-format-color-fill")])], 1)]
                    }
                }], null, !1, 23250100)
            }, [a("v-list", {
                staticClass: "theme-options",
                attrs: {
                    subheader: ""
                }
            }, [a("v-subheader", {
                domProps: {
                    textContent: e._s(e.$t("common.ThemeOptions"))
                }
            }), a("v-list-item", {
                on: {
                    click: e.$toggleDark
                }
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("common.DarkMode"))
                }
            }), a("span", {
                staticClass: "flex-grow-1"
            }), a("ui-switch", {
                staticClass: "ml-4 mb-4",
                attrs: {
                    value: e.$vuetify.theme.dark
                },
                on: {
                    input: function(t) {
                        return e.$setDark(t)
                    }
                }
            })], 1), a("v-radio-group", {
                attrs: {
                    "hide-details": ""
                },
                model: {
                    value: e.appConfig.themes.active,
                    callback: function(t) {
                        e.$set(e.appConfig.themes, "active", t)
                    },
                    expression: "appConfig.themes.active"
                }
            }, e._l(e.appConfig.themes.available, (function(t) {
                return a("v-list-item", {
                    key: t,
                    on: {
                        click: function(a) {
                            return e.setTheme(t)
                        }
                    }
                }, [e._v(" " + e._s(t) + " "), a("span", {
                    staticClass: "flex-grow-1"
                }), a("v-radio", {
                    attrs: {
                        value: t
                    }
                })], 1)
            }
            )), 1)], 1)], 1) : a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: e.$toggleDark
                }
            }, [a("v-icon", [e._v("mdi-lightbulb")])], 1), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(t) {
                        e.showLanguageSelect = !0
                    }
                }
            }, [a("v-icon", [e._v("mdi-earth")])], 1)], 1), e.loggedIn ? a("v-navigation-drawer", {
                attrs: {
                    "mini-variant": e.minified,
                    app: "",
                    clipped: ""
                },
                scopedSlots: e._u([{
                    key: "append",
                    fn: function() {
                        return [a("v-list", [e.$vuetify.breakpoint.smAndDown ? e._e() : a("v-list-item", {
                            attrs: {
                                link: ""
                            },
                            on: {
                                click: function(t) {
                                    e.minified = !e.minified
                                }
                            }
                        }, [a("v-list-item-icon", [a("v-icon", {
                            domProps: {
                                textContent: e._s(e.minified ? "mdi-chevron-right" : "mdi-chevron-left")
                            }
                        })], 1), a("v-list-item-content", [a("v-list-item-title", {
                            domProps: {
                                textContent: e._s(e.$t("common.Collapse"))
                            }
                        })], 1)], 1), a("v-list-item", {
                            attrs: {
                                link: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.$api.logout()
                                }
                            }
                        }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-logout")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                            domProps: {
                                textContent: e._s(e.$t("users.Logout"))
                            }
                        })], 1)], 1)], 1)]
                    },
                    proxy: !0
                }], null, !1, 3320786180),
                model: {
                    value: e.drawer,
                    callback: function(t) {
                        e.drawer = t
                    },
                    expression: "drawer"
                }
            }, [a("v-list", [a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g a",
                    expression: "'g a'"
                }],
                attrs: {
                    to: {
                        name: "Account"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-account")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("users.Account"))
                }
            })], 1)], 1), e.hasScope("servers.view") || e.isAdmin() ? a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g s",
                    expression: "'g s'"
                }],
                attrs: {
                    to: {
                        name: "Servers"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-server")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("servers.Servers"))
                }
            })], 1)], 1) : e._e(), e.hasScope("nodes.view") || e.isAdmin() ? a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g n",
                    expression: "'g n'"
                }],
                attrs: {
                    to: {
                        name: "Nodes"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-server-network")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("nodes.Nodes"))
                }
            })], 1)], 1) : e._e(), e.hasScope("users.view") || e.isAdmin() ? a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g u",
                    expression: "'g u'"
                }],
                attrs: {
                    to: {
                        name: "Users"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-account-multiple")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("users.Users"))
                }
            })], 1)], 1) : e._e(), e.hasScope("templates.view") || e.isAdmin() ? a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g t",
                    expression: "'g t'"
                }],
                attrs: {
                    to: {
                        name: "Templates"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-file-code")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("templates.Templates"))
                }
            })], 1)], 1) : e._e(), e.isAdmin() ? a("v-list-item", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "g c",
                    expression: "'g c'"
                }],
                attrs: {
                    to: {
                        name: "Settings"
                    },
                    link: ""
                }
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-cog")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("settings.Settings"))
                }
            })], 1)], 1) : e._e()], 1)], 1) : e._e(), a("v-main", [a("v-container", {
                attrs: {
                    fluid: ""
                }
            }, [e.appConfig ? a("router-view", {
                attrs: {
                    config: e.appConfig
                }
            }) : a("div", {
                staticClass: "d-flex flex-column",
                staticStyle: {
                    width: "100%",
                    height: "100%"
                }
            }, [a("div", {
                staticClass: "d-flex align-self-center flex-row",
                staticStyle: {
                    height: "100%"
                }
            }, [a("v-progress-circular", {
                staticClass: "align-self-center",
                attrs: {
                    indeterminate: "",
                    size: "100"
                }
            })], 1)])], 1), a("ui-language", {
                model: {
                    value: e.showLanguageSelect,
                    callback: function(t) {
                        e.showLanguageSelect = t
                    },
                    expression: "showLanguageSelect"
                }
            }), a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: "",
                    title: e.$t("common.ErrorDetails")
                },
                model: {
                    value: e.errorOverlayOpen,
                    callback: function(t) {
                        e.errorOverlayOpen = t
                    },
                    expression: "errorOverlayOpen"
                }
            }, [a("div", {
                domProps: {
                    innerHTML: e._s(e.errorText)
                }
            })]), a("ui-overlay", {
                attrs: {
                    card: "",
                    title: e.$t("users.OtpNeeded")
                },
                model: {
                    value: e.otpRequested,
                    callback: function(t) {
                        e.otpRequested = t
                    },
                    expression: "otpRequested"
                }
            }, [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    autofocus: "",
                    autocomplete: "one-time-code"
                },
                on: {
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirmOtp.apply(null, arguments)
                    }
                },
                model: {
                    value: e.otpToken,
                    callback: function(t) {
                        e.otpToken = t
                    },
                    expression: "otpToken"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("users.Login"))
                },
                on: {
                    click: e.confirmOtp
                }
            })], 1)], 1)], 1)], 1)], 1)
        }
          , q = []
          , G = {
            defaultAppConfig: {
                themes: {
                    active: "PufferPanel",
                    available: ["PufferPanel"]
                },
                branding: {
                    name: "PufferPanel"
                }
            }
        }
          , Z = {
            data() {
                return {
                    appConfig: G.defaultAppConfig,
                    userSettings: [],
                    otpRequested: !1,
                    otpToken: "",
                    loggedIn: !1,
                    drawer: null,
                    minified: !1,
                    reauthTask: null,
                    showLanguageSelect: !1,
                    errorOverlayOpen: !1,
                    errorText: "",
                    css: document.createElement("style"),
                    themeObjects: []
                }
            },
            mounted() {
                this.$api.on("requestOtp", ()=>{
                    this.otpRequested = !0
                }
                ),
                this.$api.on("login", this.didLogIn),
                this.$api.on("logout", this.logout),
                this.$api.on("panelTitleChanged", this.updatePanelTitle),
                this.css.type = "text/css",
                document.head.appendChild(this.css),
                this.loadConfig(),
                this.$api.isLoggedIn() ? this.didLogIn() : this.loggedIn = !1,
                window.pufferpanel.showError = e=>this.showError(e),
                document.documentElement.style.setProperty("--inner-height", window.innerHeight + "px"),
                window.addEventListener("resize", ()=>document.documentElement.style.setProperty("--inner-height", window.innerHeight + "px"))
            },
            methods: {
                async loadTheme() {
                    const e = await this.$api.getTheme(this.appConfig.themes.active);
                    this.themeObjects.map(e=>URL.revokeObjectURL(e)),
                    this.themeObjects = [],
                    this.css.textContent = "";
                    const t = {};
                    e.forEach(e=>{
                        switch (e.name) {
                        case "theme.json":
                            this.$vuetify.theme.themes.light = {
                                ...this.$vuetify.theme.themes.light,
                                ...JSON.parse(e.content).colors.light
                            },
                            this.$vuetify.theme.themes.dark = {
                                ...this.$vuetify.theme.themes.dark,
                                ...JSON.parse(e.content).colors.dark
                            };
                            break;
                        case "theme.css":
                            this.css.textContent = e.content;
                            break;
                        default:
                            t[e.name] = URL.createObjectURL(e.blob)
                        }
                    }
                    ),
                    Object.keys(t).map(e=>{
                        this.css.textContent = this.css.textContent.split(e).join(t[e]),
                        this.themeObjects.push(t[e])
                    }
                    )
                },
                async loadConfig() {
                    this.userSettings = this.$api.isLoggedIn() ? await this.$api.getUserSettings() : {},
                    this.userSettings.dark && "" !== this.userSettings.dark && (this.$vuetify.theme.dark = "true" === this.userSettings.dark);
                    const e = await this.$api.getConfig();
                    if (this.appConfig = {
                        ...this.appConfig,
                        ...e
                    },
                    document.title = this.appConfig.branding.name,
                    this.userSettings.preferredTheme || localStorage.getItem("theme")) {
                        const e = this.userSettings.preferredTheme || localStorage.getItem("theme");
                        -1 !== this.appConfig.themes.available.indexOf(e) && (this.appConfig.themes.active = e)
                    }
                    this.loadTheme()
                },
                updatePanelTitle(e) {
                    this.appConfig.branding.name = e,
                    document.title = this.appConfig.branding.name
                },
                async setTheme(e) {
                    this.loggedIn && this.$api.setUserSetting("preferredTheme", e),
                    localStorage.setItem("theme", e),
                    this.appConfig.themes.active = e,
                    this.loadTheme()
                },
                async confirmOtp() {
                    await this.$api.loginOtp(this.otpToken) && (this.otpRequested = !1,
                    this.hasScope("servers.view") || this.isAdmin() ? this.$router.push({
                        name: "Servers"
                    }) : this.$router.push({
                        name: "Account"
                    })),
                    this.otpToken = ""
                },
                logout(e) {
                    this.loggedIn && (this.reauthTask && clearInterval(this.reauthTask),
                    this.reauthTask = null,
                    this.loggedIn = !1,
                    this.$router.push({
                        name: "Login"
                    }),
                    "session_timed_out" === e && this.$toast.error(this.$t("errors.ErrSessionTimedOut")))
                },
                didLogIn() {
                    this.loggedIn = !0,
                    this.reauthTask = setInterval(async()=>{
                        await this.$api.reauth()
                    }
                    , 6e5),
                    this.loadConfig()
                },
                showError(e) {
                    const t = ()=>{
                        const e = new WeakSet;
                        return (t,a)=>{
                            if ("password" === t)
                                return "[password]";
                            if ("string" === typeof a)
                                try {
                                    const e = JSON.parse(a);
                                    return "object" === typeof e && null !== e ? (-1 !== Object.keys(e).indexOf("password") && (e.password = "[password]"),
                                    JSON.stringify(e)) : a
                                } catch {
                                    return a
                                }
                            if ("object" === typeof a && null !== a) {
                                if (e.has(a))
                                    return;
                                e.add(a)
                            }
                            return a
                        }
                    }
                    ;
                    if (e.config) {
                        const a = e.message.substring(e.message.length - 3, e.message.length);
                        let r = e.message;
                        switch (a) {
                        case "401":
                            r = "Not logged in (401)";
                            break;
                        case "403":
                            r = "Permission denied (403)";
                            break;
                        case "404":
                            r = "Endpoint not found, is something blocking access to the API? (404)";
                            break;
                        case "500":
                            r = "Server error (500)";
                            break;
                        case "502":
                            r = "Bad Gateway, is PufferPanel running? (502)";
                            break
                        }
                        let n = e.config.headers.Authorization;
                        n ? (n = n.substring(0, 16),
                        16 === n.length && (n += "...")) : n = "Not present";
                        let i = e.config.data;
                        i && (i = JSON.stringify(JSON.parse(i), t(), 4));
                        const o = `${r}\n\nEndpoint: ${e.config.method} ${e.config.url}\n\nAuthorization Header: ${n}\n\n${i ? "Request Body: " + i : ""}\n\nStacktrace: ${e.stack}`.replace(/>/g, "$gt;").replace(/</g, "&lt;").replace(/ /g, "&nbsp;").replace(/\n/g, "<br>");
                        this.errorText = o
                    } else
                        this.errorText = JSON.stringify(e, t(), 4).replace(/>/g, "$gt;").replace(/</g, "&lt;").replace(/ /g, "&nbsp;").replace(/\n/g, "<br>");
                    this.errorOverlayOpen = !0
                }
            }
        }
          , Y = Z
          , Q = a("2877")
          , X = a("6544")
          , ee = a.n(X)
          , te = a("7496")
          , ae = a("40dc")
          , re = a("5bc1")
          , ne = a("62ad")
          , ie = a("a523")
          , oe = a("132d")
          , se = a("8860")
          , le = a("da13")
          , de = a("5d23")
          , ue = a("34c3")
          , ce = a("f6c4")
          , me = a("e449")
          , pe = a("f774")
          , ve = a("490a")
          , he = a("67b6")
          , ge = a("43a6")
          , fe = a("0fd9")
          , Se = a("e0c7")
          , ke = a("2a7f")
          , Ee = Object(Q["a"])(Y, B, q, !1, null, null, null)
          , ye = Ee.exports;
        ee()(Ee, {
            VApp: te["a"],
            VAppBar: ae["a"],
            VAppBarNavIcon: re["a"],
            VBtn: w["a"],
            VCol: ne["a"],
            VContainer: ie["a"],
            VIcon: oe["a"],
            VList: se["a"],
            VListItem: le["a"],
            VListItemContent: de["a"],
            VListItemIcon: ue["a"],
            VListItemTitle: de["c"],
            VMain: ce["a"],
            VMenu: me["a"],
            VNavigationDrawer: pe["a"],
            VProgressCircular: ve["a"],
            VRadio: he["a"],
            VRadioGroup: ge["a"],
            VRow: fe["a"],
            VSubheader: Se["a"],
            VToolbarTitle: ke["a"]
        });
        var be = a("a925");
        const Pe = a("4999")
          , Ne = {};
        for (const xe of Pe.keys()) {
            if ("./index.js" === xe)
                continue;
            const e = xe.replace(/(\.\/|\.json$)/g, "").split("/");
            e.reduce((t,a,r)=>(t[a] || (t[a] = r + 1 === e.length ? Pe(xe) : {}),
            t[a]), Ne)
        }
        var Ce = Ne;
        r["a"].use(be["a"]);
        const Te = ()=>{
            const e = localStorage.getItem("locale");
            if (e && Ce[e])
                return e;
            const t = (navigator.language || navigator.userLanguage).replace("-", "_").toLowerCase()
              , a = e=>t=>-1 !== t.toLowerCase().indexOf(e)
              , r = Object.keys(Ce).filter(a(t))[0] || Object.keys(Ce).filter(a(t.split("_")[0]))[0];
            return r || "en_US"
        }
          , we = new be["a"]({
            locale: Te(),
            fallbackLocale: "en_US",
            messages: Ce
        });
        var Ae = we
          , De = a("8c4f")
          , Ie = [{
            path: "/server",
            view: "Servers",
            name: "Servers"
        }, {
            path: "/addserver",
            view: "AddServer",
            name: "AddServer"
        }, {
            path: "/account",
            view: "Account",
            name: "Account"
        }, {
            path: "/server/:id",
            view: "Server",
            name: "Server"
        }, {
            path: "/user/:id",
            view: "User",
            name: "User"
        }, {
            path: "/adduser",
            view: "User",
            name: "AddUser"
        }, {
            path: "/user",
            view: "Users",
            name: "Users"
        }, {
            path: "/template/:id",
            view: "Template",
            name: "Template"
        }, {
            path: "/addtemplate",
            view: "Template",
            name: "AddTemplate"
        }, {
            path: "/template",
            view: "Templates",
            name: "Templates"
        }, {
            path: "/node",
            view: "Nodes",
            name: "Nodes"
        }, {
            path: "/node/:id",
            view: "Node",
            name: "Node"
        }, {
            path: "/addnode",
            view: "AddNode",
            name: "AddNode"
        }, {
            path: "/settings",
            view: "Settings",
            name: "Settings"
        }, {
            path: "/errors/404",
            name: "Errors/404",
            view: "errors/404",
            meta: {
                noAuth: !0,
                noSidebar: !1,
                noFooter: !0,
                noBase: !0
            }
        }, {
            path: "/auth/login",
            name: "Login",
            view: "Login",
            meta: {
                noAuth: !0,
                noSidebar: !0,
                noFooter: !0,
                noBase: !0
            }
        }, {
            path: "/auth/register",
            name: "Register",
            view: "Register",
            meta: {
                noAuth: !0,
                noSidebar: !0,
                noFooter: !0,
                noBase: !0
            }
        }, {
            path: "/auth/invite",
            name: "Invite",
            view: "Invite",
            meta: {
                noAuth: !0,
                noSidebar: !0,
                noFooter: !0,
                noBase: !0
            }
        }];
        function Fe({path: e, view: t, name: r, meta: n}) {
            return {
                name: r || t,
                path: e,
                component: e=>a("1a5d")("./" + t + ".vue"),
                meta: n
            }
        }
        function Oe(e) {
            r["a"].prototype.hasAuth() ? e() : e("/auth/login")
        }
        r["a"].use(De["a"]);
        const Ue = new De["a"]({
            mode: "history",
            routes: Ie.map(e=>Fe(e)).concat([{
                path: "/",
                redirect: "server"
            }, {
                path: "",
                redirect: "server"
            }, {
                path: "*",
                redirect: "errors/404"
            }]),
            scrollBehavior(e, t, a) {
                return a || (e.hash ? {
                    selector: e.hash
                } : {
                    x: 0,
                    y: 0
                })
            }
        });
        Ue.beforeEach((e,t,a)=>{
            e.matched.some(e=>e.meta.noAuth) ? a() : Oe(a)
        }
        );
        var ze = Ue;
        a("2d1c"),
        a("41e6");
        "serviceWorker"in navigator && navigator.serviceWorker.register("/service-worker.js", {
            scope: "/"
        }),
        window.pufferpanel = {},
        r["a"].use(M),
        r["a"].use(_),
        r["a"].use($),
        r["a"].use(K),
        r["a"].config.productionTip = !1,
        new r["a"]({
            i18n: Ae,
            router: ze,
            vuetify: S,
            render: e=>e(ye)
        }).$mount("#app")
    },
    "570c": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [e._l(e.value, (function(t, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [a("ui-input", {
                    attrs: {
                        value: t,
                        "icon-behind": "mdi-close"
                    },
                    on: {
                        "click:append-outer": function(t) {
                            return e.remove(r)
                        },
                        input: function(t) {
                            return e.onInput(r, t)
                        }
                    }
                })], 1)], 1)
            }
            )), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.addLabel ? e.addLabel : e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        return e.add()
                    }
                }
            })], 1)], 1)], 2)
        }
          , n = []
          , i = {
            props: {
                addLabel: {
                    type: String,
                    default: ()=>{}
                },
                value: {
                    type: Array,
                    required: !0
                }
            },
            methods: {
                onInput(e, t) {
                    const a = [...this.value];
                    a[e] = t,
                    this.$emit("input", a)
                },
                remove(e) {
                    const t = [...this.value];
                    t.splice(e, 1),
                    this.$emit("input", t)
                },
                add() {
                    const e = [...this.value];
                    e.push(""),
                    this.$emit("input", e)
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("0fd9")
          , p = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: u["a"],
            VCol: c["a"],
            VRow: m["a"]
        })
    },
    "574d": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"名称","Address":"地址","Online":"在线","Offline":"离线","Loading":"载入中...","General":"通用","Language":"语言","SelectLanguage":"选择语言","Settings":"设置","Update":"更新","Edit":"编辑","Delete":"删除","Create":"新建","Save":"保存","Saved":"已保存","SaveFailed":"保存失败","Cancel":"取消","Confirm":"确认","Actions":"操作","Host":"主机","Port":"端口","Template":"模板","Options":"设置","Collapse":"收起","Copied":"已复制到剪贴板","Unknown":"未知","Search":"搜索","Back":"返回","Next":"下一个","LanguageName":"中文（中国）","Details":"详细信息","ErrorDetails":"错误详情","HelpTranslate":"帮助我们翻译 PufferPanel","DarkMode":"暗色模式","ThemeOptions":"主题选项","Protocol":"协议","Add":"添加","Ignore":"忽略","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六","Sunday":"星期天","Description":"描述"}')
    },
    5753: function(e) {
        e.exports = JSON.parse('{"Settings":"Inställningar","PanelSettings":"Panelinställningar","EmailSettings":"E-postinställningar","MasterUrl":"Huvud-URL","MasterUrlHint":"Bas-URL panelen kan nås under formatet http://localhost:8080","CompanyName":"Företagsnamn","DefaultTheme":"Standardtema","RegistrationEnabled":"Tillåt användare att redigera sig själva","RegistrationEnabledHint1":"Självregistrerade användare kan inte göra någonting förrän de har fått behörigheter","RegistrationEnabledHint2":"Inaktivera detta förhindrar endast direkt registrering, inbjudan till en server och användarsidan påverkas inte","EmailProvider":"E-postleverantör","emailProviders":{"none":"Inget","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Avsändaradress","domain":"Domän","key":"API-nyckel","host":"Värd","username":"Användarnamn","password":"Lösenord"}}')
    },
    5899: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken","ErrInviteLinkInvalid":"Your invite link appears to be invalid","ErrSavingInviteduser":"There was an error creating your account","ErrDuplicateServerName":"A server with this name already exists","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"Cannot upload folders","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "594f": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Ympäristöön ei ole erityisiä vaihtoehtoja","docker":{"name":"Docker","image":"Kuva","networkMode":"Verkon tila","networkName":"Verkon nimi","bindings":"Sidokset","portBindings":"Portin sidokset","OutsidePort":"Lähtevä portti","InsidePort":"Saapuva portti","HostPath":"Palvelimen Polku","ContainerPath":"Kontin Polku"},"standard":{"name":"Tavallinen"},"tty":{"name":"TTY"}}')
    },
    "59e1": function(e) {
        e.exports = JSON.parse('{"ServersView":"查看此服务器","ServersEdit":"编辑此服务器","ServersInstall":"安装服务器","ServersConsole":"查看控制台","ServersConsoleSend":"向控制台发送命令","ServersStop":"停止并强制关闭服务器","ServersStart":"开启服务器","ServersStat":"查看 CPU 及内存数据统计","ServersFiles":"使用 SFTP 访问文件","ServersFilesGet":"使用文件管理器查看和下载文件","ServersFilesPut":"使用文件管理器编辑和上传文件","ServersEditUsers":"编辑此服务器上的用户权限","Admin":"管理员（全部权限）","ViewServers":"查看服务器","CreateServers":"创建新服务器","DeleteServers":"删除服务器","EditServerAdmin":"编辑服务器设置","ViewNodes":"查看节点","EditNodes":"编辑节点","DeployNodes":"部署新节点","ViewTemplates":"查看模板","EditTemplates":"编辑模板","ViewUsers":"查看所有用户","EditUsers":"编辑其他用户","PanelSettings":"更改面板设置"}')
    },
    "59ec": function(e) {
        e.exports = JSON.parse('{"Settings":"Settings","PanelSettings":"Panel Settings","EmailSettings":"Email Settings","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Company Name","DefaultTheme":"Default Theme","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"None","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domain","key":"API Key","host":"Host","username":"Username","password":"Password"}}')
    },
    "5a9e": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Não há opções específicas de ambiente para este ambiente","docker":{"name":"Docker","image":"Imagem","networkMode":"Modo de Rede","networkName":"Nome da Rede","bindings":"Vínculos","portBindings":"Vínculo de Porta","OutsidePort":"Porta Externa","InsidePort":"Porta Interna","HostPath":"Caminho do Host","ContainerPath":"Caminho do Contêiner"},"standard":{"name":"Padrão"},"tty":{"name":"TTY"}}')
    },
    "5ab5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Bilinmeyen bir hata oluştu","ErrUnknownError":"Bilinmeyen bir hata oluştu","ErrInvalidCredentials":"Geçersiz giriş bilgileri","ErrServiceNotAvailable":"Bu hizmet kullanılamıyor","ErrEmailNotConfigured":"E-Posta yapılandırılmamış","ErrTokenInvalid":"Geçersiz Token","ErrClientNotFound":"İstemci bulunamadı","ErrUserNotFound":"Kullanıcı bulunamadı","ErrLoginNotPermitted":"Girişe izin verilmiyor","ErrInvalidTokenState":"Geçersiz token durumu","ErrSettingNotConfigured":"{setting} yapılandırılmamış","ErrNoTemplate":"\'{name}\' adında şablon bulunamadı","ErrServiceInvalidProvider":"{service}, {provider} hizmetini desteklemiyor","ErrFieldRequired":"{field} gerekli","ErrFieldMustBePrintable":"{field} yazdırılabilir ascii karakterleri olmalıdır","ErrFieldHasURICharacters":"{field} URL\'lerde kullanılmayan karakterler içermemelidir","ErrFieldIsInvalidHost":"{field} geçerli bir IP veya FQDN olmalıdır","ErrFieldIsInvalidIP":"{field} geçerli bir IP olmalıdır","ErrFieldTooLarge":"{field} en fazla {max} olabilir","ErrFieldTooSmall":"{field} en fazla {min} olabilir","ErrFieldNotBetween":"{field}, {min} ve {max} arasında olmalıdır","ErrFieldEqual":"{field1}, {field2} ile eşit olamaz","ErrFieldNotEqual":"{field1}, {field2} ile eşit değildir","ErrFieldNotEmail":"{field}, geçerli bir e-posta değil","ErrFieldLength":"{field} en az {length} karakter olmalıdır","ErrNoPermission":"Bu işlemi gerçekleştirecek izinlere sahip değilsiniz","ErrDatabaseNotAvailable":"Veritabanı mevcut değil","ErrNoNodes":"Düğüm mevcut değil","ErrNoTemplates":"Şablon mevcut değil","ErrPasswordRequirements":"Şifre en az 8 karakterden oluşmalıdır","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Şifreler aynı değil","ErrSessionTimedOut":"Oturumunuzun süresi doldu, lütfen tekrar giriş yapın","ErrMissingScope":"Bu işlemi gerçekleştirmek için yetkiniz yok","ErrInvalidJson":"Json verisi geçersiz","ErrSocketFailed":"WebSocket bağlantısı bir hatayla karşılaştı, bazı özellikler yavaş veya bozuk olabilir","ErrInviteLinkInvalid":"Bu bağlantı geçersiz görünüyor","ErrSavingInviteduser":"Hesabınız oluşturulurken bir hata meydana geldi","ErrDuplicateServerName":"Bu isimde bir sunucu zaten var","ErrDuplicateNodeName":"Bu ada sahip bir düğüm zaten var","ErrDirectoryUploadNotSupported":"Klasör yüklenemez","ErrDockerNotSupported":"Bu düğümde Docker desteklenmiyor","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "5ac7": function(e) {
        e.exports = JSON.parse('{"Node":"노드","Nodes":"노드","Edit":"노드 수정","Add":"노드 추가","Update":"노드 수정","Delete":"노드 삭제","PublicHost":"공개 호스트","PublicPort":"공개 포트","PrivateHost":"내부 호스트","PrivatePort":"내부 포트","SftpPort":"SFTP 포트","WithPrivateAddress":"서버간 통신에 다른 호스트나 포트 사용","WithPrivateAddressHint":"이 별도의 주소는 주 노드가 새 노드와 통신해야 할 때 사용됩니다. 예를 들어 노드가 NAT 뒤의 동일한 네트워크에 있는 경우에 유용합니다.","SaveConfig":"설정 저장","SavePublicKey":"공개키 저장","DeploymentInstruction":"이 노드를 추가하기 위해서 새 서버에 PufferPanel을 설치하고 이 설정 파일을 `/etc/pufferpanel`에 넣어주세요.<br/>그 후에 새로운 서버에 설치된 PufferPanel을 재시작 해주세요.","UpdateSuccess":"노드를 수정했습니다.","UpdateError":"노드 수정 중 오류가 발생했습니다.","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "5b90": function(e) {
        e.exports = JSON.parse('{"Templates":"模板","NoTemplates":"此处暂无模板","Deleted":"已删除模板","New":"创建新模板","Edit":"编辑模板","Editor":"编辑器","Json":"JSON","Display":"显示名称","Type":"类型","Variables":"变量","Install":"安装","AddInstallStep":"添加安装步骤","DeleteInstallStep":"删除安装步骤","Description":"描述","DataType":"数据类型","DefaultValue":"默认值","Required":"必填","UserEditable":"用户可编辑","Value":"值","AddOption":"添加选项","AddCommand":"添加命令","Filename":"文件名","Content":"内容","Source":"源","Target":"目标","Version":"版本","ReleaseType":"版本类型","AddFile":"添加文件","AddVariable":"添加变量","Environment":"环境","Environments":"环境","AddEnvironment":"添加环境","DefaultEnvironment":"默认环境","AddEnvVar":"添加环境变量","EnvVars":"环境变量","DockerImage":"Docker 镜像","SaveSuccess":"已保存的模板","VarNameNoSpaces":"变量名称不可为空或包含空格","SupportedEnvironments":"支持环境","RunConfig":"运行配置","PreHook":"运行前 Hook","PostHook":"运行后 Hook","AddPreStep":"添加运行前步骤","AddPostStep":"添加运行后步骤","DeletePreStep":"删除运行前步骤","DeletePostStep":"删除运行后步骤","Shutdown":"关闭","Command":"命令","WorkingDirectory":"工作目录","Arguments":"参数","AddArgument":"添加参数","Convert":"转换","OfferV1Convert":"此模板似乎为 PufferPanel 1.x 格式的模板，您想要将其自动更新为 2.x 版本的模板吗？","import":{"CommunityWarning":"这些模板是由社区制作的，没有任何保证条款","OverrideWarning":"警告：导入模板将覆盖相同 ID 的现有模板","Import":"导入模板","Tooltip":"从官方仓库导入模板","Select":"选择要导入的模板","Started":"正在导入模板，请稍候","Successful":"已成功导入模板 {template}","NoTemplatesTitle":"您想要导入模板吗？","NoTemplatesContent":"您当前没有模板，需要模板才能创建服务器。<br/>您想要从 PufferPanel 官方模板仓库导入一些模板吗？"},"stop":{"Command":"命令","Signal":"信号"},"processors":{"download":{"ProcessorName":"下载","files":"文件"},"command":{"ProcessorName":"运行命令","commands":"命令"},"alterfile":{"ProcessorName":"更改文件","regex":"将搜索视为正则表达式","search":"要搜索的文本","replace":"替换为"},"writefile":{"ProcessorName":"写入至文件","text":"内容"},"move":{"ProcessorName":"移动文件","source":"源","target":"目标"},"mkdir":{"ProcessorName":"创建目录"},"mojangdl":{"ProcessorName":"下载 Minecraft"},"forgedl":{"ProcessorName":"下载 Minecraft Forge"},"spongeforgedl":{"ProcessorName":"下载 Minecraft SpongeForge","releaseType":"版本类型"},"fabricdl":{"ProcessorName":"下载 Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "5bdb": function(e) {
        e.exports = JSON.parse('{"FileManager":"Dateimanager","NewFolder":"Neuer Ordner","NewFile":"Neue Datei","LastModified":"Zuletzt geändert","ConfirmDelete":"Soll diese Datei wirklich gelöscht werden?","Upload":"Hochladen","Download":"Herunterladen","Size":"Größe","NoFiles":"Hier sind noch keine Dateien, erstelle welche, zum Beispiel indem du oben auf der Seite auf \\"Installieren\\" klickst","FileLoadFailed":"Die Datei konnte nicht geladen werden","Refresh":"Aktualisieren","CreateFile":"Datei erstellen","CreateFolder":"Ordner erstellen","ArchiveCurrentFolder":"Aktuellen Ordner archivieren","ArchiveFolder":"Ordner archivieren","ExtractArchive":"Archiv extrahieren","DropToUpload":"Dateien hier ablegen um sie hochzuladen"}')
    },
    "5bdd": function(e) {
        e.exports = JSON.parse('{"Credentials":"Údaje OAuth2 klienta","ClientId":"ID klienta","ClientSecret":"Tajomstvo klienta","NewClientWarning":"Zapíšte si tajomstvo klienta, po zatvorení tohto dialógového okna sa toto dialógové okno už nikdy nezobrazí. Ak ho stratíte alebo zabudnete, tento klient bude úplne nepoužiteľný.","Create":"Vytvoriť nový OAuth2 klient","UnnamedClient":"Nepomenovaný OAuth2 klient","Docs":"Dokumentáciu API nájdete tu","DeleteWarning":"Odstránenie klienta OAuth2 nie je možné vrátiť späť, ani nie je možné vytvoriť nového klienta s rovnakými povereniami. Všetky integrácie, ktoré stále používajú tohto klienta, sa po jeho odstránení prerušia.","ConfirmDelete":"Som si vedomý účinkov, ktoré bude mať odstránenie klienta OAuth2, a chcem pokračovať.","Delete":"Vymazať {clientName}?","Clients":"OAuth2 klienti","AccountDescription":"Tu uvedení klienti OAuth2 zdieľajú všetky oprávnenia vašich účtov","ServerDescription":"Tu uvedení klienti OAuth2 zdieľajú len oprávnenia vašich účtov na tomto serveri"}')
    },
    "5c1b": function(e) {
        e.exports = JSON.parse('{"FileManager":"Gestionnaire de Fichiers","NewFolder":"Nouveau Dossier","NewFile":"Nouveau Fichier","LastModified":"Dernière Modification","ConfirmDelete":"Êtes-vous sûr de vouloir supprimer ce fichier ?","Upload":"Envoyer","Download":"Télécharger","Size":"Taille","NoFiles":"Il n\'y a pas encore de fichiers ici, allez par exemple en créer en cliquant sur le bouton d\'installation en haut de la page","FileLoadFailed":"Échec de chargement du fichier","Refresh":"Rafraîchir","CreateFile":"Créer un fichier","CreateFolder":"Créer un dossier","ArchiveCurrentFolder":"Créer une archive à partir du dossier actuel","ArchiveFolder":"Créer une archive à partir du dossier","ExtractArchive":"Extraire l\'archive","DropToUpload":"Déposez des fichiers ici pour les envoyer"}')
    },
    "5c7b": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users","PanelSettings":"Change panel settings"}')
    },
    "5cce": function(e) {
        e.exports = JSON.parse('{"FileManager":"Bestandsbeheer","NewFolder":"Nieuwe Map","NewFile":"Nieuw Bestand","LastModified":"Laatst Gewijzigd","ConfirmDelete":"Weet je zeker dat je dit bestand wilt verwijderen?","Upload":"Uploaden","Download":"Downloaden","Size":"Grootte","NoFiles":"Er zijn hier nog geen bestanden, maak er een paar aan door bijvoorbeeld op de installeren knop te klikken bovenaan de pagina","FileLoadFailed":"Bestand laden mislukt","Refresh":"Ververs","CreateFile":"Maak bestand","CreateFolder":"Maak folder","ArchiveCurrentFolder":"Maak archief van huidige folder","ArchiveFolder":"Maak archief van folder","ExtractArchive":"Archief uitpakken","DropToUpload":"Sleep bestanden hier om ze te uploaden"}')
    },
    "5cdd": function(e) {
        e.exports = JSON.parse('{"Server":"Szerver","NoServers":"Nincsen szerver, amihez hozzáférhet","Servers":"Szerverek","Add":"Új szerver","Console":"Konzol","Controls":"Irányítás","SFTPInfo":"SFTP információk","Restart":"Újraindítás","Start":"Indítás","Stop":"Leállítás","Kill":"Kilövés","Install":"Telepítés","Send":"Küldés","Pause":"Szüneteltetés","Statistics":"Statisztikák","CPU":"CPU","Memory":"Memória","Files":"Fájlok","Name":"Szerver neve","NameInvalid":"A szerver neve nem lehet üres és nem tartalmazhat speciális karaktereket","SelectNode":"Válasszon csomópontot","SelectTemplate":"Válasszon sablont","SelectThisTemplate":"A sablon használása","SelectUser":"Válasszon felhasználót","Environment":"Környezet","SelectEnvironment":"Válasszon környezetet","TypeUsername":"Adjon meg egy felhasználónevet","Admin":"Admin","AdminControls":"Admin felület","Settings":"Beállítások","NoEditableVars":"A szervernek nincsenek módosítható mezői","ConfirmDelete":"Biztosan törli ezt a szervert? (A művelet nem visszavonható)","Delete":"Szerver törlése","Deleted":"Szerver törölve","NoReadme":"Ehhez a sablonhoz nincsen readme","SftpConnection":"Kapcsolódás az SFTPhez","EditDefinition":"Szerver újradefiniálása","Reload":"Lemezen lévő szerveradatok újratöltése","Reloaded":"Szerveradatok újratöltve","Autostart":"Szerver indítása, amikor a csomópont elindul","Autorestart":"Szerver újraindítása automatikusan leállás esetén","Autorecover":"Szerver újraindítása, ha összeomlik","Rename":"Szerver átnevezése","Tasks":"Feladatok","NoTasks":"Nincsenek feladatok","RunTask":"Feladat futtatása","NewTask":"Új feladat létrehozása","EditTask":"Feladat szerkesztése","TaskDeleted":"Feladat törölve","TaskTriggered":"Feladat elindítva","EnableSchedule":"Feladat automatikus indítása","TaskScheduleInvalid":"Érvénytelen a feladat ütemzése","TaskScheduleManual":"Csak kézi futtatás","CronExpression":"Cron kifejezés","Hourly":"Óránkénti","Daily":"Napi","Weekly":"Heti","Monthly":"Havi","Advanced":"Haladó beállítások","HourlyTab":"Minden{hourInterval} óra percenként {minute}","DailyTab":"Minden {dayInterval} napon ekkor: {hour}:{minute}","WeeklyTab":"Minden {weekdays} ekkor: {hour}:{minute}","MonthlyTab":"Minden {monthInterval} hónapban ezen a napon {day} ekkor: {hour}:{minute}"}')
    },
    "5d8c": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Det er ingen servere du har tilgang til","Servers":"Servere","Add":"Legg til server","Console":"Konsoll","Controls":"Kontroller","SFTPInfo":"SFTP Informasjon","Restart":"Omstart","Start":"Start","Stop":"Stopp","Kill":"Avslutt","Install":"Installer","Send":"Send","Pause":"Pause","Statistics":"Statistikk","CPU":"Prosessor","Memory":"Minne","Files":"Filer","Name":"Server Navn","NameInvalid":"Servernavnet kan ikke være tomt eller inneholde spesialtegn","SelectNode":"Velg node","SelectTemplate":"Velg mal","SelectThisTemplate":"Bruk denne malen","SelectUser":"Vennligst velg bruker","Environment":"Miljø","SelectEnvironment":"Vennligst velg miljø","TypeUsername":"Skriv inn et brukernavn","Admin":"Admin","AdminControls":"Admin kontroller","Settings":"Innstillinger","NoEditableVars":"Denne serveren har ikke variabler du kan redigere","ConfirmDelete":"Er du sikker på at du vil slette denne serveren? (dette kan ikke angres)","Delete":"Slett serveren","Deleted":"Slettet serveren","NoReadme":"Ingen informasjon tilgjengelig for denne malen","SftpConnection":"Koble til SFTP","EditDefinition":"Redigere serverdefinisjon","Reload":"Last serverdata på nytt fra disk","Reloaded":"Lastet serverdata på nytt","Autostart":"Starte serveren når noden starter","Autorestart":"Start serveren på nytt når den stopper normalt","Autorecover":"Start serveren på nytt når den krasjer","Rename":"Endre servernavn","Tasks":"Oppgaver","NoTasks":"Ingen oppgaver","RunTask":"Kjøre oppgave","NewTask":"Ny Oppgave","EditTask":"Endre oppgave","TaskDeleted":"Oppgave slettet","TaskTriggered":"Oppgave trigget","EnableSchedule":"Kjøre oppgaven automatisk","TaskScheduleInvalid":"Oppgaveplan er ugyldig","TaskScheduleManual":"Kun manuell kjøring","CronExpression":"Cron uttrykk","Hourly":"Hver time","Daily":"Daglig","Weekly":"Ukentlig","Monthly":"Månedlig","Advanced":"Avansert","HourlyTab":"Hver {hourInterval} time i Minutt {minute}","DailyTab":"Hver {dayInterval} dag ved {hour}:{minute}","WeeklyTab":"Hver {weekdays} kl. {hour}-:{minute}","MonthlyTab":"Hver {monthInterval} måned på {day} dag klokken {hour}:{minute}"}')
    },
    "5da6": function(e) {
        e.exports = JSON.parse('{"Server":"伺服器","NoServers":"這邊沒有您可以存取的伺服器","Servers":"伺服器","Add":"新增伺服器","Console":"主控台","Controls":"控制","SFTPInfo":"SFTP 資訊","Restart":"重新啟動","Start":"啟動","Stop":"停止","Kill":"強制停止","Install":"安裝","Send":"傳送","Pause":"停止","Statistics":"統計資料","CPU":"CPU","Memory":"記憶體","Files":"檔案","Name":"伺服器名稱","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"請選擇節點","SelectTemplate":"請選擇範本","SelectThisTemplate":"使用這個範本","SelectUser":"請選擇使用者","Environment":"環境","SelectEnvironment":"請選擇環境","TypeUsername":"輸入使用者名稱","Admin":"管理員","AdminControls":"管理員控制","Settings":"設定","NoEditableVars":"這個伺服器沒有可編輯參數","ConfirmDelete":"您確定要刪除伺服器嗎？（這個操作無法取消）","Delete":"刪除伺服器","Deleted":"伺服器已刪除","NoReadme":"這個範本沒有可用的 readme","SftpConnection":"連接 SFTP","EditDefinition":"編輯伺服器定義","Reload":"從硬碟重新讀取伺服器資料","Reloaded":"已重新讀取伺服器資料","Autostart":"當節點啟動時自動啟動伺服器","Autorestart":"停止伺服器時自動重新啟動伺服器","Autorecover":"當崩潰時自動重新啟動伺服器","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "5dd9": function(e) {
        e.exports = JSON.parse('{"FileManager":"Gestore File","NewFolder":"Nuova Cartella","NewFile":"Nuovo File","LastModified":"Ultima Modifica","ConfirmDelete":"Sei sicuro di voler eliminare questo file?","Upload":"Carica","Download":"Scarica","Size":"Dimensioni","NoFiles":"Non ci sono ancora dei file qui, vai a crearne alcuni per esempio cliccando il pulsante installa nella parte superiore della pagina","FileLoadFailed":"Caricamento del file fallito","Refresh":"Aggiorna","CreateFile":"Crea file","CreateFolder":"Crea cartella","ArchiveCurrentFolder":"Crea un archivio dalla cartella corrente","ArchiveFolder":"Crea un archivio dalla cartella","ExtractArchive":"Estrai archivio","DropToUpload":"Trascina qui i file per caricarli"}')
    },
    6075: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Er zijn geen omgeving specifieke opties voor deze omgeving","docker":{"name":"Docker","image":"Image","networkMode":"Netwerkmodus","networkName":"Netwerknaam","bindings":"Binding","portBindings":"Poort Binding ","OutsidePort":"Externe Poort","InsidePort":"Interne Poort","HostPath":"hostpad","ContainerPath":"Container Pad"},"standard":{"name":"Standaard"},"tty":{"name":"TTY"}}')
    },
    6176: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"名前","Address":"IPアドレス","Online":"オンライン","Offline":"オフライン","Loading":"読み込み中...","General":"一般","Language":"言語","SelectLanguage":"言語選択\\n","Settings":"設定","Update":"更新","Edit":"編集","Delete":"削除","Create":"作成","Save":"保存","Saved":"保存しました","SaveFailed":"保存失敗","Cancel":"取り消し","Confirm":"承認","Actions":"アクション","Host":"ホスト","Port":"ポート","Template":"テンプレート","Options":"オプション","Collapse":"折りたたむ","Copied":"クリップボードにコピーしました","Unknown":"不明なエラー","Search":"検索","Back":"戻る","Next":"次","LanguageName":"日本語","Details":"結果","ErrorDetails":"エラー結果","HelpTranslate":"PufferPanelの翻訳にご協力ください","DarkMode":"ダークモード","ThemeOptions":"テーマ設定","Protocol":"プロトコル","Add":"追加","Ignore":"無視","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日","Sunday":"日曜日","Description":"概要"}')
    },
    "624b": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 클라이언트 자격증명","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"이 창을 닫은 뒤에는 클라이언트 암호가 다시 표시되지 않습니다. 분실하거나 잊어버리면 이 클라이언트를 완전히 사용할 수 없게 됩니다.","Create":"새로운 OAuth2 Client 생성","UnnamedClient":"Unnamed OAuth2 Client","Docs":"API문서 보기","DeleteWarning":"OAuth2 클라이언트 삭제는 취소할 수 없으며 동일한 자격 증명으로 새 클라이언트를 생성할수 없습니다. 이 클라이언트를 계속 사용하는 모든 통합은 삭제 후에 중단됩니다.","ConfirmDelete":"이 OAuth2 클라이언트를 지우는걸 원하며 계속 진행하기를 원합니다.","Delete":"{clientName} 를 삭제하시겠습니까?","Clients":"OAuth2 클라이언트","AccountDescription":"여기에 나열된 OAuth2 클라이언트는 모든 계정 권한을 상속합니다.","ServerDescription":"여기에 나열된 OAuth2 클라이언트는 이 서버에 대한 계정 권한만 상속합니다."}')
    },
    6328: function(e) {
        e.exports = JSON.parse('{"Settings":"Настройки","PanelSettings":"Настройки панели","EmailSettings":"Настройки электронной почты","MasterUrl":"Главный URL","MasterUrlHint":"Базовый URL-адрес, по которому можно получить доступ к панели, в формате http://localhost:8080","CompanyName":"название компании","DefaultTheme":"Тема по умолчанию","RegistrationEnabled":"Разрешить пользователям регистрироваться","RegistrationEnabledHint1":"Зарегистрированные пользователи не могут делать ничего до тех пор, пока не будут предоставлены разрешения","RegistrationEnabledHint2":"Отключение этого только предотвращает прямую регистрацию, приглашение на сервер и страница Пользователей не затрагиваются","EmailProvider":"Провайдер электронной почты","emailProviders":{"none":"Никто","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Адрес отправителя","domain":"домен","key":"API ключ","host":"Хост","username":"Имя пользователя","password":"Пароль"}}')
    },
    6425: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Siin pole servereid, millele on sul ligipääs","Servers":"Serverid","Add":"Lisa Server","Console":"Konsool","Controls":"Juhtimine","SFTPInfo":"SFTP Informatsioon","Restart":"Taaskäivita","Start":"Käivita","Stop":"Peata","Kill":"Hävita","Install":"Paigalda","Send":"Saada","Pause":"Paus","Statistics":"Statistika","CPU":"CPU","Memory":"Mälu","Files":"Failid","Name":"Serveri Nimi","NameInvalid":"Serveri nimi ei tohi olla tühi ega sisaldada erimärke","SelectNode":"Palun vali sõlm","SelectTemplate":"Palun vali mall","SelectThisTemplate":"Kasuta seda malli","SelectUser":"Palun vali kasutaja","Environment":"Keskkond","SelectEnvironment":"Palun vali keskkond","TypeUsername":"Kirjuta kasutajanimi","Admin":"Admin","AdminControls":"Admin Juhtimine","Settings":"Sätted","NoEditableVars":"Sellel serveril ei ole muutujaid mida sa saad muuta","ConfirmDelete":"Kas soovid kindlasti kustutada seda serverit? (seda ei saa tagasi võtta)","Delete":"Kustuta Server","Deleted":"Kustutatud Server","NoReadme":"Pole readme saadav sellele mallile","SftpConnection":"Ühenda SFTP-ga","EditDefinition":"Muuda serveri definitsiooni","Reload":"Laadi kettalt serveri andmed","Reloaded":"Serveri andmed taaslaetud","Autostart":"Käivita server kui sõlm käivitub","Autorestart":"Taaskäivita server, kui see peatub normaalselt","Autorecover":"Taaskäivita server kui see jookseb kokku","Rename":"Nimeta server ümber","Tasks":"Ülesanded","NoTasks":"Pole Ülesandeid","RunTask":"Käivita ülesanne","NewTask":"Uus ülesanne","EditTask":"Muuda ülesannet","TaskDeleted":"Ülesanne on kustutatud","TaskTriggered":"Ülesanne käivitatud","EnableSchedule":"Käivita Ülessane automaatselt","TaskScheduleInvalid":"Ülesande ajakava kehtetu","TaskScheduleManual":"Ainult käsitsi käitamine","CronExpression":"Kroni väljend","Hourly":"Tunnine","Daily":"Päevane","Weekly":"Nädalane","Monthly":"Kuine","Advanced":"Täpsemad","HourlyTab":"Iga {hourInterval} tunni järel minutis {minute}","DailyTab":"Iga {dayInterval} päeva järel {hour}:{minute}","WeeklyTab":"Iga {weekdays} järel {hour}:{minute}","MonthlyTab":"Iga {monthInterval} kuu {day} päeval kell {hour}:{minute}"}')
    },
    6459: function(e) {
        e.exports = JSON.parse('{"Settings":"إعدادات","PanelSettings":"إعدادات اللوحة","EmailSettings":"إعدادات البريد الإلكتروني","MasterUrl":"الرابط الرئيسي","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"اسم الشركة","DefaultTheme":"السمة الافتراضية","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Provider","emailProviders":{"none":"لا يوجد","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"عنوان المرسل","domain":"Domain","key":"مفتاح API","host":"المضيف","username":"اسم المستخدم","password":"كلمة المرور"}}')
    },
    6485: function(e) {
        e.exports = JSON.parse('{"Node":"Вузол","Nodes":"Вузли","Edit":"Змінити вузол","Add":"Додати вузол","Update":"Оновити вузол","Delete":"Видалити вузол","PublicHost":"Відкритий хост","PublicPort":"Відкритий порт","PrivateHost":"Приватний хост","PrivatePort":"Приватний порт","SftpPort":"Порт SFTP","WithPrivateAddress":"Використовувати інший хост/порт для з\'єднання з сервером","WithPrivateAddressHint":"Ця окрема адреса використовується, коли головний вузол повинен говорити з новим вузлом. Корисно, наприклад, коли вузли знаходяться в одній мережі за НАТО.","SaveConfig":"Зберегти налаштування","SavePublicKey":"Зберегти відкритий ключ","DeploymentInstruction":"Щоб розгорнути вузол, встановіть PufferPanel на новий сервер і помістіть файл конфігурації в меню `/etc/pufferpanel/`<br/>Перезапустіть PufferPanel на новий сервер після цього.","UpdateSuccess":"Успішно оновлено вузол","UpdateError":"Помилка оновлення вузла","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "64a0": function(e) {
        e.exports = JSON.parse('{"ServersView":"Láthatja ezt a szervert","ServersEdit":"Szerkeztheti a szervert","ServersInstall":"Telepítheti a szervert","ServersConsole":"Láthatja a konzolt","ServersConsoleSend":"Küldhet parancsokat a konzolnak","ServersStop":"Leállíthatja és kilőheti a szervert","ServersStart":"Elindíthatja a szervert","ServersStat":"Láthatja a CPU és memória statisztikáit","ServersFiles":"Az adatok hozzáférése SFTPn keresztül megengedélyezése","ServersFilesGet":"Megtekinthet és letölthet fájlokat a fájlkezelőn keresztül","ServersFilesPut":"Szerkeszthet és feltölthet fájlokat a fájlkezelön keresztül","ServersEditUsers":"Szerkesztheti a felhasználók szerverhez való engededélyeit","Admin":"Admin (megkap minden jogot)","ViewServers":"Szerverek megtekintése","CreateServers":"Létrehozhat új szervereket","DeleteServers":"Törölhet szervereket","EditServerAdmin":"Módosíthat szerverbeállításokat","ViewNodes":"Megtekinthet csomópontokat","EditNodes":"Szerkeszthet csomópontokat","DeployNodes":"Beállíthat új csomópontokat","ViewTemplates":"Megtekinthet sablonokat","EditTemplates":"Szerkeszthet sablonokat","ViewUsers":"Láthatja az összes felhasználót","EditUsers":"Szerkesztheti más felhasználók adatait","PanelSettings":"A panel beállításainak módosítása"}')
    },
    6539: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-slide-group", {
                staticClass: "pl-12 max-width-100"
            }, [e.server.permissions.startServer || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [e.running ? a("v-btn", {
                            staticClass: "mr-4",
                            attrs: {
                                color: "success",
                                loading: e.restarting
                            },
                            on: {
                                click: function(t) {
                                    return e.restart()
                                }
                            }
                        }, [a("v-icon", {
                            attrs: {
                                left: ""
                            }
                        }, [e._v(" mdi-reload ")]), e._v(" " + e._s(e.$t("servers.Restart")) + " ")], 1) : a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "r r",
                                expression: "'r r'"
                            }],
                            staticClass: "mr-4",
                            attrs: {
                                color: "success",
                                loading: e.restarting
                            },
                            on: {
                                click: function(t) {
                                    return e.action("start")
                                }
                            }
                        }, [a("v-icon", {
                            attrs: {
                                left: ""
                            }
                        }, [e._v(" mdi-play ")]), e._v(" " + e._s(e.$t("servers.Start")) + " ")], 1)]
                    }
                }], null, !1, 1003906884)
            }) : e._e(), e.server.permissions.stopServer || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "r s",
                                expression: "'r s'"
                            }],
                            staticClass: "mr-4",
                            attrs: {
                                color: "warning"
                            },
                            on: {
                                click: function(t) {
                                    return e.action("stop")
                                }
                            }
                        }, [a("v-icon", {
                            attrs: {
                                left: ""
                            }
                        }, [e._v(" mdi-stop ")]), e._v(" " + e._s(e.$t("servers.Stop")) + " ")], 1)]
                    }
                }], null, !1, 3671974633)
            }) : e._e(), e.server.permissions.stopServer || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "r k",
                                expression: "'r k'"
                            }],
                            staticClass: "mr-4",
                            attrs: {
                                color: "error"
                            },
                            on: {
                                click: function(t) {
                                    return e.action("kill")
                                }
                            }
                        }, [a("v-icon", {
                            attrs: {
                                left: ""
                            }
                        }, [e._v(" mdi-skull ")]), e._v(" " + e._s(e.$t("servers.Kill")) + " ")], 1)]
                    }
                }], null, !1, 2074428654)
            }) : e._e(), e.server.permissions.installServer || e.isAdmin() ? a("v-slide-item", {
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("v-btn", {
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "r i",
                                expression: "'r i'"
                            }],
                            attrs: {
                                color: "error"
                            },
                            on: {
                                click: function(t) {
                                    return e.action("install")
                                }
                            }
                        }, [a("v-icon", {
                            attrs: {
                                left: ""
                            }
                        }, [e._v(" mdi-package-down ")]), e._v(" " + e._s(e.$t("servers.Install")) + " ")], 1)]
                    }
                }], null, !1, 2308583616)
            }) : e._e()], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data() {
                return {
                    running: !1,
                    restarting: !1
                }
            },
            mounted() {
                this.$api.addServerListener(this.server.id, "status", e=>{
                    this.running = e.running,
                    !this.restarting || e.running ? this.restarting && e.running && (this.restarting = !1) : setTimeout(()=>{
                        this.action("start")
                    }
                    , 1e3)
                }
                ),
                this.$api.requestServerStatus(this.server.id)
            },
            methods: {
                restart() {
                    this.restarting = !0,
                    this.action("stop")
                },
                action(e) {
                    this.$api.sendServerAction(this.server.id, e)
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("132d")
          , m = a("7efd")
          , p = a("9dbe")
          , v = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: u["a"],
            VIcon: c["a"],
            VSlideGroup: m["b"],
            VSlideItem: p["a"]
        })
    },
    6660: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-combobox", e._g({
                attrs: {
                    id: e.id,
                    value: e.value,
                    outlined: "outlined" === e.lookValue,
                    solo: "solo" === e.lookValue,
                    filled: "filled" === e.lookValue,
                    flat: e.flat,
                    autofocus: e.autofocus,
                    dense: e.dense,
                    disabled: e.disabled,
                    label: e.label,
                    items: e.items,
                    "hide-details": e.hideDetails && !e.showHint,
                    "persistent-hint": e.showHint,
                    hint: e.hintValue,
                    "error-messages": e.errorMessages,
                    "prepend-inner-icon": e.icon,
                    "append-icon": e.endIcon,
                    "append-outer-icon": e.iconBehind,
                    placeholder: e.placeholder,
                    required: e.required,
                    name: e.name,
                    type: e.type
                },
                on: {
                    "update:search-input": function(t) {
                        return e.$emit("input", t)
                    },
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            }, e.listeners), [e._l(e.$slots, (function(t, a) {
                return e._t(a, null, {
                    slot: a
                })
            }
            ))], 2)
        }
          , n = [];
        const i = ["outlined", "solo", "solo-flat", "filled", "material"];
        var o = {
            props: {
                autofocus: {
                    type: Boolean,
                    default: ()=>!1
                },
                dense: {
                    type: Boolean,
                    default: ()=>!1
                },
                disabled: {
                    type: Boolean,
                    default: ()=>!1
                },
                endIcon: {
                    type: String,
                    default: ()=>{}
                },
                errorMessages: {
                    type: String,
                    default: ()=>{}
                },
                hint: {
                    type: String,
                    default: ()=>{}
                },
                icon: {
                    type: String,
                    default: ()=>{}
                },
                iconBehind: {
                    type: String,
                    default: ()=>{}
                },
                id: {
                    type: String,
                    default: ()=>{}
                },
                items: {
                    type: Array,
                    default: ()=>{}
                },
                label: {
                    type: String,
                    default: ()=>{}
                },
                name: {
                    type: String,
                    default: ()=>{}
                },
                placeholder: {
                    type: String,
                    default: ()=>{}
                },
                required: {
                    type: Boolean,
                    default: ()=>!1
                },
                look: {
                    type: String,
                    validator: e=>-1 !== i.indexOf(e),
                    default: ()=>{}
                },
                type: {
                    type: String,
                    default: ()=>"text"
                },
                value: {
                    type: void 0,
                    default: ()=>"",
                    required: !0
                }
            },
            computed: {
                listeners() {
                    const e = {
                        ...this.$listeners
                    };
                    return delete e.input,
                    delete e["update:search-input"],
                    e
                },
                hideDetails() {
                    const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                    return !e
                },
                showHint() {
                    const e = void 0 !== this.hint && "" !== this.hint
                      , t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                    return e || t
                },
                lookValue() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return e.split("-")[0]
                },
                flat() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return -1 !== e.split("-").indexOf("flat")
                },
                hintValue() {
                    return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("2b5d")
          , m = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = m.exports;
        u()(m, {
            VCombobox: c["a"]
        })
    },
    "675d": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file","Refresh":"Refresh","CreateFile":"Create file","CreateFolder":"Create folder","ArchiveCurrentFolder":"Create archive from current folder","ArchiveFolder":"Create archive from folder","ExtractArchive":"Extract archive","DropToUpload":"Drop files here to upload them"}')
    },
    6794: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Neexistujú žiadne servery, ku ktorým by ste mali prístup","Servers":"Servery","Add":"Pridať server","Console":"Konzola","Controls":"Ovládacie prvky","SFTPInfo":"Informácie SFTP","Restart":"Reštartovať","Start":"Štart","Stop":"Stop","Kill":"Vynútené zastavenie","Install":"Inštalovať","Send":"Odoslať","Pause":"Pozastaviť","Statistics":"Štatistiky","CPU":"CPU","Memory":"Pamäť RAM","Files":"Súbory","Name":"Meno servera","NameInvalid":"Názov servera nemôže byť prázdny alebo obsahovať špeciálne znaky","SelectNode":"Prosím vyberte uzol","SelectTemplate":"Prosím vyberte šablónu","SelectThisTemplate":"Použiť túto šablónu","SelectUser":"Prosím vyberte používateľa","Environment":"Prostredie","SelectEnvironment":"Prosím vyberte prostredie","TypeUsername":"Zadajte používateľské meno","Admin":"Admin","AdminControls":"Ovládanie administrátora","Settings":"Nastavenia","NoEditableVars":"Tento server nemá premenné, ktoré môžete upravovať","ConfirmDelete":"Naozaj chcete tento server odstrániť? (toto sa nedá vrátiť späť)","Delete":"Vymazať server","Deleted":"Server vymazaný","NoReadme":"Pre túto šablónu nie je k dispozícii žiadne readme","SftpConnection":"Pripojenie k SFTP","EditDefinition":"Upraviť definíciu servera","Reload":"Opätovné načítanie údajov servera z disku","Reloaded":"Načítané údaje servera","Autostart":"Spustenie servera pri spustení uzla","Autorestart":"Reštartujte server, keď sa normálne zastaví","Autorecover":"Reštartovať server pri jeho zlyhaní","Rename":"Premenovať server","Tasks":"Úlohy","NoTasks":"Žiadne úlohy","RunTask":"Spustiť úlohu","NewTask":"Nová úloha","EditTask":"Upraviť úlohu","TaskDeleted":"Úloha vymazaná","TaskTriggered":"Úloha spustená","EnableSchedule":"Spustiť úlohu automaticky","TaskScheduleInvalid":"Plán úlohy je neplatný","TaskScheduleManual":"Iba manuálne spustenie","CronExpression":"Cron výraz","Hourly":"Každú hodinu","Daily":"Denne","Weekly":"Týždenne","Monthly":"Mesačne","Advanced":"Rozšírené","HourlyTab":"Každú {hourInterval} hodinu a {minute} minútu","DailyTab":"Každý {dayInterval} deň/dni o {hour}:{minute}","WeeklyTab":"Každý {weekdays} o {hour}:{minute}","MonthlyTab":"Každý {monthInterval} mesiac v {day} deň o {hour}:{minute}"}')
    },
    "67b8": function(e) {
        e.exports = JSON.parse('{"FileManager":"Tiedostonhallinta","NewFolder":"Uusi kansio","NewFile":"Uusi tiedosto","LastModified":"Viimeksi muokattu","ConfirmDelete":"Haluatko varmasti poistaa tämän tiedoston?","Upload":"Lataa","Download":"Lataa","Size":"Koko","NoFiles":"Täällä ei ole vielä tiedostoja, mene ja luo tiedostoja esimerkiksi klikkaamalla asennuspainiketta sivun yläreunassa","FileLoadFailed":"Tiedoston lataaminen epäonnistui","Refresh":"Päivitä","CreateFile":"Luo tiedosto","CreateFolder":"Luo kansio","ArchiveCurrentFolder":"Luo arkisto nykyisestä kansiosta","ArchiveFolder":"Luo arkisto kansiosta","ExtractArchive":"Pura arkisto","DropToUpload":"Pudota tiedostot tähän lisätäksesi ne"}')
    },
    6917: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    6932: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error desconocido","ErrUnknownError":"Error desconocido","ErrInvalidCredentials":"Credenciales inválidas","ErrServiceNotAvailable":"Servicio no disponible","ErrEmailNotConfigured":"Email no configurado","ErrTokenInvalid":"Token invalido","ErrClientNotFound":"Cliente no encontrado","ErrUserNotFound":"Usuario no encontrado","ErrLoginNotPermitted":"Inicio de sesión no permitido","ErrInvalidTokenState":"Estado del token inválido","ErrSettingNotConfigured":"{setting} no está configurado","ErrNoTemplate":"No se ha encontrado ninguna plantilla con el nombre \'{name}\'","ErrServiceInvalidProvider":"{service} no soporta {provider}","ErrFieldRequired":"{field} es obligatorio","ErrFieldMustBePrintable":"{field} debe estar formado por caracteres ascii imprimibles","ErrFieldHasURICharacters":"{field} no debe contener caracteres que no pueden ser usados en URIs","ErrFieldIsInvalidHost":"{field} debe ser una IP válida o FQDN","ErrFieldIsInvalidIP":"{field} debe ser una IP válida","ErrFieldTooLarge":"{field} no puede ser mayor que {max}","ErrFieldTooSmall":"{field} no puede ser menor que {min}","ErrFieldNotBetween":"{field} debe estar entre {min} y {max}","ErrFieldEqual":"{field1} no puede ser igual a {field2}","ErrFieldNotEqual":"{field1} no es igual a {field2}","ErrFieldNotEmail":"{field} no es un email válido","ErrFieldLength":"{field} debe tener al menos {length} caracteres","ErrNoPermission":"No tienes permisos para realizar esta acción","ErrDatabaseNotAvailable":"La base de datos no esta disponible","ErrNoNodes":"No hay nodos disponibles","ErrNoTemplates":"No hay plantillas disponibles","ErrPasswordRequirements":"La contraseña debe tener al menos {min} caracteres","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Las contraseñas no coinciden","ErrSessionTimedOut":"Tu sesión ha expirado. Por favor, ingresa nuevamente","ErrMissingScope":"No tienes permiso para realizar esta acción","ErrInvalidJson":"Los datos del json son inválidos","ErrSocketFailed":"La conexión WebSocket ha encontrado un error, algunas características pueden ser lentas o estar rotas","ErrInviteLinkInvalid":"Tu enlace de invitación parece ser inválido","ErrSavingInviteduser":"Ocurrió un error al intentar crear tu cuenta","ErrDuplicateServerName":"Ya existe un servidor con este nombre","ErrDuplicateNodeName":"Ya existe un nodo con este nombre","ErrDirectoryUploadNotSupported":"No es posible subir carpetas","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "696b": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Noder","Edit":"Rediger node","Add":"Legg til Node","Update":"Oppdater Node","Delete":"Slett Node","PublicHost":"Offentlig vert","PublicPort":"Offentlig port","PrivateHost":"Privat vert","PrivatePort":"Privat port","SftpPort":"SFTP port","WithPrivateAddress":"Bruk en annen vert/port for serverkommunikasjon","WithPrivateAddressHint":"Denne separate adressen brukes når hovednoden skal snakke med den nye noden. Nyttig når nodene ligger i det samme nettverket bak NAT.","SaveConfig":"Lagre konfig","SavePublicKey":"Lagre offentlig nøkkel","DeploymentInstruction":"For å starte noden, installer PufferPanel på den nye serveren og plasser konfigurasjonsfilen i `/etc/pufferpanel/`<br/>Start PufferPanel på nytt på den nye serveren etterpå.","UpdateSuccess":"Noden er oppdatert","UpdateError":"Feil ved oppdatering av node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "6a6f": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [0 !== e.fields.length ? a("v-row", e._l(e.fields, (function(t) {
                return a("v-col", {
                    key: t.name,
                    attrs: {
                        cols: "12"
                    }
                }, ["map" === t.type || "list" === t.type || t.headline ? a("h4", {
                    domProps: {
                        textContent: e._s(e.getLabel(t))
                    }
                }) : e._e(), "custom" === t.type ? a(t.component, {
                    tag: "component",
                    attrs: {
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "map" === t.type ? a("ui-map-input", {
                    attrs: {
                        value: e.value[t.name] || t.default,
                        "key-label": t.keyLabel ? e.$t(t.keyLabel) : void 0,
                        "value-label": t.valueLabel ? e.$t(t.valueLabel) : void 0
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "list" === t.type ? a("ui-list-input", {
                    attrs: {
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : void 0 !== t.options ? a("ui-input-suggestions", {
                    attrs: {
                        type: t.type,
                        label: e.getLabel(t),
                        items: t.options,
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : a("ui-input", {
                    attrs: {
                        type: t.type,
                        label: e.getLabel(t),
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                })], 1)
            }
            )), 1) : e._e(), 0 === e.fields.length && e.noFieldsText ? a("v-row", [a("v-col", {
                staticClass: "d-flex justify-center",
                attrs: {
                    cols: "12"
                }
            }, [e._v(" " + e._s(e.noFieldsText) + " ")])], 1) : e._e()], 1)
        }
          , n = [];
        const i = {
            standard: [],
            tty: [],
            docker: [{
                name: "image",
                type: "text",
                label: "templates.DockerImage",
                default: "pufferpanel/generic"
            }, {
                name: "networkMode",
                type: "text",
                options: ["bridge", "host", "overlay", "macvlan", "none"],
                label: "env.docker.networkMode",
                default: "host"
            }, {
                name: "networkName",
                type: "text",
                default: ""
            }, {
                name: "bindings",
                type: "map",
                keyLabel: "env.docker.HostPath",
                valueLabel: "env.docker.ContainerPath",
                default: {}
            }, {
                name: "portBindings",
                type: "custom",
                component: "ui-docker-port-bindings",
                headline: !0,
                default: []
            }]
        };
        var o = {
            props: {
                noFieldsText: {
                    type: String,
                    default: ()=>{}
                },
                value: {
                    type: Object,
                    validator: e=>void 0 !== i[e.type],
                    required: !0
                }
            },
            computed: {
                fields() {
                    return i[this.value.type]
                }
            },
            mounted() {
                const e = {};
                this.fields.map(t=>{
                    this.value[t.name] || (e[t.name] = t.default)
                }
                ),
                this.$emit("input", {
                    ...this.value,
                    ...e
                })
            },
            methods: {
                onInput(e, t) {
                    this.$emit("input", {
                        ...this.value,
                        [e]: t
                    })
                },
                getLabel(e) {
                    return e.label ? this.$t(e.label) : this.$t(`env.${this.value.type}.${e.name}`)
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("62ad")
          , m = a("0fd9")
          , p = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = p.exports;
        u()(p, {
            VCol: c["a"],
            VRow: m["a"]
        })
    },
    "6b00": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nombre","Address":"Dirección","Online":"Encendido","Offline":"Apagado","Loading":"Cargando...","General":"General","Language":"Idioma","SelectLanguage":"Seleccionar Idioma","Settings":"Configuración","Update":"Actualizar","Edit":"Editar","Delete":"Eliminar","Create":"Crear","Save":"Guardar","Saved":"Guardado","SaveFailed":"Error al guardar","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Acciones","Host":"Servidor","Port":"Puerto","Template":"Plantilla","Options":"Opciones","Collapse":"Colapsar","Copied":"Copiado al portapapeles","Unknown":"Desconocido","Search":"Buscar","Back":"Atrás","Next":"Siguiente","LanguageName":"Español","Details":"Detalles","ErrorDetails":"Detalles del error","HelpTranslate":"Ayúdanos a traducir PufferPanel","DarkMode":"Modo Oscuro","ThemeOptions":"Opciones del tema","Protocol":"Protocolo","Add":"Agregar","Ignore":"Ignorar","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado","Sunday":"Domingo","Description":"Descripción"}')
    },
    "6b6c": function(e) {
        e.exports = JSON.parse('{"Settings":"Configuración","PanelSettings":"Configuración del Panel","EmailSettings":"Configuración del Correo Electronico","MasterUrl":"URL Principal","MasterUrlHint":"La URL base en la cual se puede acceder al panel en formato http://localhost:8080","CompanyName":"Nombre de la Empresa","DefaultTheme":"Tema por defecto","RegistrationEnabled":"Permitir que los usuarios se puedan registrar","RegistrationEnabledHint1":"Los usuarios autorregistrados no pueden hacer nada hasta que se den los permisos","RegistrationEnabledHint2":"Desactivar esto sólo previene el registro directo, la invitación a un servidor y la página de usuarios no se ven afectados","EmailProvider":"Proveedor de Correo Electronico","emailProviders":{"none":"Ninguno","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Dirección del Emisor","domain":"Dominio","key":"Clave de la API","host":"Host","username":"Nombre de Usuario","password":"Contraseña"}}')
    },
    "6bbc": function(e) {
        e.exports = JSON.parse('{"Credentials":"Credenziali client API","ClientId":"ID Cliente","ClientSecret":"Codice segreto del cliente","NewClientWarning":"Prendi nota del segreto del client, dopo aver chiuso questa finestra di dialogo non verrà più mostrato. Perdere o dimenticarlo renderà questo client completamente inutilizzabile.","Create":"Crea un nuovo Client OAuth2","UnnamedClient":"Client OAuth2 Senza Nome","Docs":"Visualizza la documentazione API","DeleteWarning":"L\'eliminazione di un client OAuth2 non può essere annullata né può essere creato un nuovo client con le stesse credenziali. Tutte le integrazioni che ancora utilizzano questo client si romperanno dopo la sua eliminazione.","ConfirmDelete":"Sono consapevole degli effetti che l\'eliminazione di questo client OAuth2 avrà e desidera procedere.","Delete":"Eliminare {clientName}?","Clients":"Client OAuth2","AccountDescription":"I client OAuth2 elencati qui ereditano tutti i permessi dei tuoi account","ServerDescription":"I client OAuth2 elencati qui ereditano solo i permessi dei tuoi account su questo server"}')
    },
    "6bc6": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"İsim","Address":"Adres","Online":"Çevrimiçi","Offline":"Çevrımdışı","Loading":"Yükleniyor...","General":"Genel","Language":"Dil","SelectLanguage":"Dil seç","Settings":"Ayarlar","Update":"Güncelle","Edit":"Düzenle","Delete":"Sil","Create":"Oluştur","Save":"Kaydet","Saved":"Kaydedildi","SaveFailed":"Kaydedilemedi!","Cancel":"İptal","Confirm":"Onayla","Actions":"Eylemler","Host":"Sunucu","Port":"Port","Template":"Şablon","Options":"Seçenekler","Collapse":"Daralt","Copied":"Panoya kopyalandı","Unknown":"Bilinmeyen","Search":"Ara","Back":"Geri","Next":"İleri","LanguageName":"Türkçe","Details":"Detaylar","ErrorDetails":"Hata Detayları","HelpTranslate":"PufferPanel\'i çevirmemize yardım edin","DarkMode":"Karanlık mod","ThemeOptions":"Tema ayarları","Protocol":"Protokol","Add":"Ekle","Ignore":"Yoksay","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi","Sunday":"Pazar","Description":"Açıklama"}')
    },
    "6d8f": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Nu există opțiuni specifice pentru acest environment","docker":{"name":"Docker","image":"Imagine","networkMode":"Mod reţea","networkName":"Nume Rețea","bindings":"Legături","portBindings":"Port Bindings","OutsidePort":"În afara portului","InsidePort":"În interiorul portului","HostPath":"Path","ContainerPath":"Path Container"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "6e7e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Ukjent feil","ErrUnknownError":"Ukjent feil","ErrInvalidCredentials":"Ugyldig brukeropplysninger","ErrServiceNotAvailable":"Tjeneste ikke tilgjengelig","ErrEmailNotConfigured":"Epost ikke konfigurert","ErrTokenInvalid":"Token er ugyldig","ErrClientNotFound":"Fant ikke klienten","ErrUserNotFound":"Finner ikke brukeren","ErrLoginNotPermitted":"Innlogging ikke tillatt","ErrInvalidTokenState":"Ugyldig token status","ErrSettingNotConfigured":"{setting} er ikke konfigurert","ErrNoTemplate":"Ingen mal med navn \'{name}\' ble funnet","ErrServiceInvalidProvider":"{service} støtter ikke {provider}","ErrFieldRequired":"{field} er påkrevd","ErrFieldMustBePrintable":"{field} må kunne skrives ut ascii-tegn","ErrFieldHasURICharacters":"{field} må ikke inneholde tegn som ikke kan brukes i URI-er","ErrFieldIsInvalidHost":"{field} må være gyldig IP eller FQDN","ErrFieldIsInvalidIP":"{field} må være en gyldig IP","ErrFieldTooLarge":"{field} kan ikke være større enn {max}","ErrFieldTooSmall":"{field} kan ikke være større enn {min}","ErrFieldNotBetween":"{field} må være mellom {min} og {max}","ErrFieldEqual":"{field1} kan ikke være lik {field2}","ErrFieldNotEqual":"{field1} er ikke lik {field2}","ErrFieldNotEmail":"{field} er ikke en gyldig e-postadresse","ErrFieldLength":"{field} må være minst {length} tegn","ErrNoPermission":"Du har ikke rettighet til å utføre denne handlingen","ErrDatabaseNotAvailable":"Databasen er ikke tilgjengelig","ErrNoNodes":"Ingen noder tilgjengelig","ErrNoTemplates":"Ingen maler tilgjengelig","ErrPasswordRequirements":"Passordet må inneholde minst 8 tegn","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passord er ikke det samme","ErrSessionTimedOut":"Økten ble tidsavbrutt, vennligst logg inn igjen","ErrMissingScope":"Du har ikke tilgang til å utføre denne handlingen","ErrInvalidJson":"Json data er ugyldig","ErrSocketFailed":"WebSocket forbindelsen opplevde en feil, noen funksjoner kan være trege eller ødelagt","ErrInviteLinkInvalid":"Invitasjonslenken din ser ut til å være ugyldig","ErrSavingInviteduser":"Det oppstod en feil under oppretting av kontoen","ErrDuplicateServerName":"En server med dette navnet finnes allerede","ErrDuplicateNodeName":"En node med dette navnet finnes allerede","ErrDirectoryUploadNotSupported":"Kan ikke laste opp mapper","ErrDockerNotSupported":"Docker støttes ikke på denne noden","ErrMissingBinary":"Mangler binær fil: {expected}","ErrUnsupportedOS":"OS ({actual}) støttes ikke. Støttet OS: {expected}","ErrUnsupportedArch":"Arkitektur {actual} er ikke støttet. Støttede arkitekturer: {expected}"}')
    },
    "6fbc": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unbekannter Fehler","ErrUnknownError":"Unbekannter Fehler","ErrInvalidCredentials":"Ungültige Zugangsdaten","ErrServiceNotAvailable":"Dienst nicht verfügbar","ErrEmailNotConfigured":"E-Mail nicht konfiguriert","ErrTokenInvalid":"Sicherheitsschlüssel ungültig","ErrClientNotFound":"Client nicht gefunden","ErrUserNotFound":"Benutzer nicht gefunden","ErrLoginNotPermitted":"Login nicht erlaubt","ErrInvalidTokenState":"Ungültiger Sicherheitsschlüssel-Status","ErrSettingNotConfigured":"{setting} ist nicht konfiguriert","ErrNoTemplate":"Es wurde keine Vorlage mit dem Namen \'{name}\' gefunden","ErrServiceInvalidProvider":"{service} unterstützt {provider} nicht","ErrFieldRequired":"{field} ist erforderlich","ErrFieldMustBePrintable":"{field} muss aus darstellbaren ASCII Zeichen bestehen","ErrFieldHasURICharacters":"{field} darf keine Zeichen enthalten, die nicht in URIs verwendet werden können","ErrFieldIsInvalidHost":"{field} muss eine gültige IP oder FQDN sein","ErrFieldIsInvalidIP":"{field} muss eine gültige IP sein","ErrFieldTooLarge":"{field} darf nicht größer als {max} sein","ErrFieldTooSmall":"{field} darf nicht kleiner als {min} sein","ErrFieldNotBetween":"{field} muss zwischen {min} und {max} liegen","ErrFieldEqual":"{field1} darf nicht das Gleiche wie {field2} sein","ErrFieldNotEqual":"{field1} ist nicht das Gleiche wie {field2}","ErrFieldNotEmail":"{field} ist keine gültige E-Mail","ErrFieldLength":"{field} muss mindestens {length} Zeichen lang sein","ErrNoPermission":"Sie haben keine Berechtigung, um diese Aktion auszuführen","ErrDatabaseNotAvailable":"Datenbank ist nicht verfügbar","ErrNoNodes":"Keine Knoten verfügbar","ErrNoTemplates":"Keine Vorlagen verfügbar","ErrPasswordRequirements":"Passwort muss mindestens 8 Zeichen lang sein","ErrUsernameRequirements":"Benutzername muss mindestens 5 Zeichen lang sein und darf nur alphanumerische Zeichen, _, oder - enthalten","ErrPasswordsNotIdentical":"Die Passwörter stimmen nicht überein","ErrSessionTimedOut":"Ihre Sitzung ist abgelaufen, bitte melden Sie sich erneut an","ErrMissingScope":"Sie sind nicht berechtigt, diese Aktion auszuführen","ErrInvalidJson":"Die json-Daten sind ungültig","ErrSocketFailed":"Bei der WebSocket-Verbindung ist ein Fehler aufgetreten. Einige Funktionen sind möglicherweise langsam oder fehlerhaft","ErrInviteLinkInvalid":"Der Einladungslink scheint ungültig zu sein","ErrSavingInviteduser":"Bei der Erstellung des Kontos ist ein Fehler aufgetreten","ErrDuplicateServerName":"Ein Server mit diesem Namen existiert bereits","ErrDuplicateNodeName":"Ein Knoten mit diesem Namen existiert bereits","ErrDirectoryUploadNotSupported":"Dateien können nicht hochgeladen werden","ErrDockerNotSupported":"Docker wird auf diesem Knoten nicht unterstützt","ErrMissingBinary":"Fehlende Binärdatei: {expected}","ErrUnsupportedOS":"OS ({actual}) nicht unterstützt. Unterstützt OS: {expected}","ErrUnsupportedArch":"Architektur {actual} wird nicht unterstützt. Unterstützte Architekturen: {expected}"}')
    },
    "705a": function(e) {
        e.exports = JSON.parse('{"Node":"節點","Nodes":"節點","Edit":"編輯節點","Add":"新增節點","Update":"更新節點","Delete":"刪除節點","PublicHost":"公用主機","PublicPort":"公用連接埠","PrivateHost":"私用主機","PrivatePort":"私用連接埠","SftpPort":"SFTP連接埠","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"儲存設定","SavePublicKey":"儲存公鑰","DeploymentInstruction":"要部署該節點，請在新伺服器上安裝PufferPanel，然後將配置文件放在`/ etc / pufferpanel /`目錄中<br/>然後在新伺服器上重新啟動PufferPanel。","UpdateSuccess":"已成功更新節點","UpdateError":"發生錯誤，無法更新節點","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    7074: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Namn","Address":"Adress","Online":"Online","Offline":"Offline","Loading":"Laddar...","General":"Allmänt","Language":"Språk","SelectLanguage":"Välj språk","Settings":"Inställningar","Update":"Uppdatera","Edit":"Redigera","Delete":"Ta bort","Create":"Skapa","Save":"Spara","Saved":"Sparat","SaveFailed":"Kunde inte spara","Cancel":"Avbryt","Confirm":"Bekräfta","Actions":"Åtgärder","Host":"Värd","Port":"Port","Template":"Mall","Options":"Alternativ","Collapse":"Förminska","Copied":"Kopierat till urklipp","Unknown":"Okänt","Search":"Sök","Back":"Föregående","Next":"Nästa","LanguageName":"Svenska","Details":"Detaljer","ErrorDetails":"Felinformation","HelpTranslate":"Hjälp oss översätta PufferPanel","DarkMode":"Mörkt tema","ThemeOptions":"Inställningar för teman","Protocol":"Protokoll","Add":"Lägg till","Ignore":"Ignorera","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag","Sunday":"Söndag","Description":"Beskrivning"}')
    },
    "70b6": function(e) {
        e.exports = JSON.parse('{"FileManager":"סייר הקבצים","NewFolder":"תיקייה חדשה","NewFile":"קובץ חדש","LastModified":"שונה לאחרונה","ConfirmDelete":"האם אתה בטוח שברצונך למחוק את הקובץ?","Upload":"העלאה","Download":"הורדה","Size":"גודל","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file","Refresh":"רענן","CreateFile":"צור קובץ","CreateFolder":"צור תיקייה","ArchiveCurrentFolder":"Create archive from current folder","ArchiveFolder":"Create archive from folder","ExtractArchive":"Extract archive","DropToUpload":"Drop files here to upload them"}')
    },
    "71d94": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("users.Users"))
                }
            }), a("v-card-text", [a("v-row", e._l(e.users, (function(t, r) {
                return a("v-col", {
                    key: r,
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("v-card", {
                    staticClass: "mb-4",
                    attrs: {
                        outlined: ""
                    }
                }, [a("v-card-title", [t.new ? a("ui-input", {
                    attrs: {
                        "hide-details": "",
                        type: "email",
                        label: e.$t("users.Email"),
                        icon: "mdi-email"
                    },
                    on: {
                        keyup: function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : e.updateUser(t)
                        }
                    },
                    model: {
                        value: t.email,
                        callback: function(a) {
                            e.$set(t, "email", a)
                        },
                        expression: "user.email"
                    }
                }) : e._e(), t.new ? e._e() : a("span", {
                    domProps: {
                        textContent: e._s(t.username || t.email)
                    }
                }), t.new ? e._e() : a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(a) {
                            return e.toggleEdit(t.username)
                        }
                    }
                }, [a("v-icon", {
                    domProps: {
                        textContent: e._s(e.editUsers.indexOf(t.username) > -1 ? "mdi-close" : "mdi-pencil")
                    }
                })], 1)], 1), t.new || e.editUsers.indexOf(t.username) > -1 ? a("v-card-text", [a("v-row", e._l(e.options, (function(r) {
                    return a("v-col", {
                        key: r.value,
                        staticClass: "pt-1 pb-0",
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [a("ui-switch", {
                        attrs: {
                            label: r.text,
                            color: "primary"
                        },
                        model: {
                            value: t[r.value],
                            callback: function(a) {
                                e.$set(t, r.value, a)
                            },
                            expression: "user[option.value]"
                        }
                    })], 1)
                }
                )), 1), a("v-row", {
                    staticClass: "mt-2"
                }, [a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(t.new ? e.$t("common.Save") : e.$t("common.Update"))
                    },
                    on: {
                        click: function(a) {
                            return e.updateUser(t)
                        }
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(t.new ? e.$t("common.Cancel") : e.$t("common.Delete"))
                    },
                    on: {
                        click: function(a) {
                            return e.deleteUser(t)
                        }
                    }
                })], 1)], 1)], 1) : e._e()], 1)], 1)
            }
            )), 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("users.Add"))
                },
                on: {
                    click: function(t) {
                        return e.addUser()
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    users: [],
                    editUsers: [],
                    options: [{
                        text: this.$t("scopes.ServersEdit"),
                        value: "editServerData"
                    }, {
                        text: this.$t("scopes.ServersInstall"),
                        value: "installServer"
                    }, {
                        text: this.$t("scopes.ServersConsole"),
                        value: "viewServerConsole"
                    }, {
                        text: this.$t("scopes.ServersConsoleSend"),
                        value: "sendServerConsole"
                    }, {
                        text: this.$t("scopes.ServersStop"),
                        value: "stopServer"
                    }, {
                        text: this.$t("scopes.ServersStart"),
                        value: "startServer"
                    }, {
                        text: this.$t("scopes.ServersStat"),
                        value: "viewServerStats"
                    }, {
                        text: this.$t("scopes.ServersFiles"),
                        value: "sftpServer"
                    }, {
                        text: this.$t("scopes.ServersFilesGet"),
                        value: "viewServerFiles"
                    }, {
                        text: this.$t("scopes.ServersFilesPut"),
                        value: "putServerFiles"
                    }, {
                        text: this.$t("scopes.ServersEditUsers"),
                        value: "editServerUsers"
                    }]
                }
            },
            mounted() {
                this.loadUsers()
            },
            methods: {
                async loadUsers() {
                    this.users = await this.$api.getServerUsers(this.server.id)
                },
                addUser() {
                    const e = {
                        new: !0,
                        email: ""
                    };
                    for (const t in this.options)
                        e[this.options[t].value] = !1;
                    this.users.push(e)
                },
                async updateUser(e) {
                    if (!e.new || e.email && "" !== e.email) {
                        for (const t of Object.keys(e))
                            e[t] = "true" === e[t] || "false" !== e[t] && e[t];
                        await this.$api.updateServerUser(this.server.id, e),
                        this.$toast.success(this.$t("common.Saved")),
                        this.loadUsers()
                    } else
                        this.$toast.error(this.$t("users.NoEmailGiven"))
                },
                toggleEdit(e) {
                    this.editUsers.indexOf(e) > -1 ? this.editUsers.splice(this.editUsers.indexOf(e), 1) : this.editUsers.push(e)
                },
                async deleteUser(e) {
                    e.new ? this.$delete(this.users, this.users.indexOf(e)) : (await this.$api.deleteServerUser(this.server.id, e.email),
                    this.loadUsers())
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("b0af")
          , m = a("99d9")
          , p = a("62ad")
          , v = a("132d")
          , h = a("0fd9")
          , g = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = g.exports;
        d()(g, {
            VBtn: u["a"],
            VCard: c["a"],
            VCardText: m["c"],
            VCardTitle: m["d"],
            VCol: p["a"],
            VIcon: v["a"],
            VRow: h["a"]
        })
    },
    7295: function(e) {
        e.exports = JSON.parse('{"FileManager":"Менеджер файлов","NewFolder":"Новая папка","NewFile":"Новый файл","LastModified":"Последнее изменение","ConfirmDelete":"Вы уверены, что хотите удалить этот файл?","Upload":"Загрузить","Download":"Скачать","Size":"Размер","NoFiles":"Здесь пока нет файлов, для появления файлов, к примеру, вы можете выполнить установку в верхней части страницы","FileLoadFailed":"Ошибка загрузки файла","Refresh":"Обновить","CreateFile":"Создать файл","CreateFolder":"Создать папку","ArchiveCurrentFolder":"Создать архив из текущей папки","ArchiveFolder":"Создать архив из папки","ExtractArchive":"Распаковать архив","DropToUpload":"Перетащите файлы сюда, чтобы загрузить их"}')
    },
    7306: function(e) {
        e.exports = JSON.parse('{"Templates":"Modelli","NoTemplates":"Non ci sono ancora modelli qui","Deleted":"Modello eliminato","New":"Crea nuovo modello","Edit":"Modifica modello","Editor":"Editor","Json":"JSON","Display":"Mostra Nome","Type":"Tipo","Variables":"Variabili","Install":"Installa","AddInstallStep":"Aggiungi Fase di Installazione","DeleteInstallStep":"Elimina Fase di Installazione","Description":"Descrizione","DataType":"Tipo di Dati","DefaultValue":"Valore Predefinito","Required":"Obbligatorio","UserEditable":"Gli utenti possono modificare","Value":"Valore","AddOption":"Aggiungi un\'opzione","AddCommand":"Aggiungi comando","Filename":"Nome del file","Content":"Contenuto","Source":"Fonte","Target":"Obiettivo","Version":"Versione","ReleaseType":"Tipo di Versione","AddFile":"Aggiungi file","AddVariable":"Aggiungi variabile","Environment":"Ambiente","Environments":"Ambienti","AddEnvironment":"Aggiungi ambiente","DefaultEnvironment":"Ambiente predefinito","AddEnvVar":"Aggiungi variabile d\'ambiente","EnvVars":"Variabili ambientali","DockerImage":"Immagine Docker","SaveSuccess":"Modello Salvato","VarNameNoSpaces":"Un nome della variabile non può essere vuoto o contenere spazi","SupportedEnvironments":"Ambienti Supportati","RunConfig":"Esegui Configurazione","PreHook":"Hook Pre Esecuzione","PostHook":"Hook Post Esecuzione","AddPreStep":"Aggiungi Fase Pre-Esecuzione","AddPostStep":"Aggiungi Fase Post-Esecuzione","DeletePreStep":"Elimina Fase Pre-Esecuzione","DeletePostStep":"Elimina Fase Post-Esecuzione","Shutdown":"Spegnimento","Command":"Comando","WorkingDirectory":"Directory Di Lavoro","Arguments":"Argomenti","AddArgument":"Aggiungi un argomento","Convert":"Converti","OfferV1Convert":"Questo modello json sembra un modello per PufferPanel 1.x, vuoi convertirlo automaticamente in un modello per PufferPanel 2.x?","import":{"CommunityWarning":"Questi modelli sono stati realizzati dalla community e sono disponibili senza alcuna garanzia","OverrideWarning":"AVVISO: I modelli importati SOVRASCRIVERANNO i modelli esistenti con lo stesso ID","Import":"Importa modelli","Tooltip":"Importa modelli dalla repository ufficiale","Select":"Seleziona modelli da importare","Started":"Impostazione modelli, si prega di attendere un momento","Successful":"Modello {template} importato correttamente","NoTemplatesTitle":"Vuoi importare i modelli?","NoTemplatesContent":"Attualmente non hai alcun modello. I modelli sono necessari per creare i server.<br/>Vuoi importare alcuni modelli dalla repository dei modelli ufficiale di PufferPanel adesso?"},"stop":{"Command":"Comando","Signal":"Segnale"},"processors":{"download":{"ProcessorName":"Scarica","files":"File"},"command":{"ProcessorName":"Esegui un comando","commands":"Comandi"},"alterfile":{"ProcessorName":"Cambia file","regex":"Considera la ricerca come RegEx","search":"Testo da cercare","replace":"Sostituisci con"},"writefile":{"ProcessorName":"Scrivi su file","text":"Contenuto"},"move":{"ProcessorName":"Sposta il file","source":"Fonte","target":"Destinazione"},"mkdir":{"ProcessorName":"Crea una cartella"},"mojangdl":{"ProcessorName":"Scarica Minecraft"},"forgedl":{"ProcessorName":"Scarica Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Scarica Minecraft SpongeForge","releaseType":"Tipo di Versione"},"fabricdl":{"ProcessorName":"Scarica Minecraft Fabric"},"javadl":{"ProcessorName":"Scarica Java","version":"Versione di Java da installare (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Scarica il gioco da Steam","appId":"App Id"}}}')
    },
    "735e": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Nu există servere la care să ai acces","Servers":"Servere","Add":"Adaugă server","Console":"Consolă","Controls":"Controale","SFTPInfo":"Informații SFTP","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Termina","Install":"Instalează","Send":"Trimite","Pause":"Pauză","Statistics":"Statistici","CPU":"Procesor","Memory":"Memorie","Files":"Fişiere","Name":"Nume server","NameInvalid":"Numele serverului nu poate să fie gol sau să conțină caractere speciale","SelectNode":"Vă rugăm să selectaţi node-ul","SelectTemplate":"Selectează un template","SelectThisTemplate":"Utilizați acest model","SelectUser":"Vă rugăm să selectați un utilizator","Environment":"Environment","SelectEnvironment":"Vă rugăm selectați environment-ul","TypeUsername":"Introduceți numele de utilizator","Admin":"Admin","AdminControls":"Controale Admin","Settings":"Setari","NoEditableVars":"Acest server nu are variabile pe care le puteți edita","ConfirmDelete":"Ești sigur ca vrei sa ștergi comentariul acesta? Acțiunea aceasta nu poate fi anulată","Delete":"Șterge Server","Deleted":"Server șters","NoReadme":"Nici o citire disponibilă pentru acest șablon","SftpConnection":"Conectare la SFTP","EditDefinition":"Editează Definiția Serverului","Reload":"Reîncarcă datele serverului de pe disc","Reloaded":"Date server reîncărcate","Autostart":"Pornește serverul când porneste modulul","Autorestart":"Repornește serverul când se oprește normal","Autorecover":"Repornește serverul atunci când se blochează","Rename":"Redenumește serverul","Tasks":"Sarcini","NoTasks":"Nicio sarcină","RunTask":"Execută sarcina","NewTask":"Sarcină nouă","EditTask":"Modifică sarcina","TaskDeleted":"Sarcină ștearsă","TaskTriggered":"Sarcină declanșată","EnableSchedule":"Execută sarcina automat","TaskScheduleInvalid":"Programarea sarcinii este invalidă","TaskScheduleManual":"Doar rulare manuală","CronExpression":"Expresie Cron","Hourly":"În fiecare oră","Daily":"Zlinic","Weekly":"Săptămânal","Monthly":"Lunar","Advanced":"Avansat","HourlyTab":"O dată la {hourInterval} ore la minutul {minute}","DailyTab":"O dată la {dayInterval} zile la ora {hour}:{minute}","WeeklyTab":"O dată la {weekdays} zile lucrătoare la ora {hour}:{minute}","MonthlyTab":"O dată la {monthInterval} luni, în ziua de {day} la ora {hour}:{minute}"}')
    },
    7380: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"알 수 없는 오류","ErrUnknownError":"알 수 없는 오류","ErrInvalidCredentials":"로그인 정보가 틀립니다","ErrServiceNotAvailable":"서비스를 이용할 수 없습니다","ErrEmailNotConfigured":"이메일이 설정되지 않았습니다","ErrTokenInvalid":"토큰이 잘못되었습니다","ErrClientNotFound":"클라이언트를 찾을 수 없습니다","ErrUserNotFound":"유저를 찾을 수 없습니다","ErrLoginNotPermitted":"로그인이 허용되지 않았습니다","ErrInvalidTokenState":"토큰 상태가 잘못되었습니다","ErrSettingNotConfigured":"{setting} 이(가) 설정되지 않았습니다","ErrNoTemplate":"\'{name}\' 라는 이름의 템플릿을 찾을 수 없습니다","ErrServiceInvalidProvider":"{service} 이(가) {provider} 을(를) 지원하지 않습니다.","ErrFieldRequired":"{field} 가 필요합니다.","ErrFieldMustBePrintable":"{field} 는 ascii 문자로 출력 가능해야 합니다.","ErrFieldHasURICharacters":"{field} 는 URI로 사용될 수 없는 문자열이 있으면 안됩니다.","ErrFieldIsInvalidHost":"{field} 는 IP나 FQDN이어야 합니다.","ErrFieldIsInvalidIP":"{field} 는 유효한 IP여야 합니다","ErrFieldTooLarge":"{field} 는 {max} 보다 클 수 없습니다","ErrFieldTooSmall":"{field} 는 {min} 보다 작을 수 없습니다","ErrFieldNotBetween":"{field} 는 {min} 과 {max} 사이어야 합니다.","ErrFieldEqual":"{field1} 은(는) {field2} 와 같을 수 없습니다.","ErrFieldNotEqual":"{field1} 이 {field2} 와 같지 않습니다.","ErrFieldNotEmail":"{field} 은(는) 유효한 이메일이 아닙니다.","ErrFieldLength":"{field} 는 최소 {length} 글자여야 합니다.","ErrNoPermission":"당신은 이 작업을 수행할 권한이 없습니다.","ErrDatabaseNotAvailable":"데이터베이스를 사용할수 없습니다.","ErrNoNodes":"사용 가능한 노드가 없습니다.","ErrNoTemplates":"사용 가능한 템플릿이 없습니다.","ErrPasswordRequirements":"비밀번호는 8글자 이상이어야 합니다.","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"암호가 일치하지 않습니다.","ErrSessionTimedOut":"세션이 닫혔습니다. 다시 로그인 해주세요.","ErrMissingScope":"이 작업을 수행할 권한이 없습니다.","ErrInvalidJson":"Json 데이터가 유효하지 않습니다.","ErrSocketFailed":"웹소켓 연결에서 오류가 발생했습니다, 일부 기능들이 느리거나 작동하지 않을 수 있습니다.","ErrInviteLinkInvalid":"초대 링크가 잘못됨","ErrSavingInviteduser":"계정 생성중 오류 발생","ErrDuplicateServerName":"이미 같은 이름을 가진 서버가 있습니다","ErrDuplicateNodeName":"이미 같은 이름의 노드가 있습니다","ErrDirectoryUploadNotSupported":"폴더를 업로드할수 없음","ErrDockerNotSupported":"이 노드에서는 Docker를 지원하지 않습니다","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "73e3": function(e) {
        e.exports = JSON.parse('{"Templates":"テンプレート一覧","NoTemplates":"テンプレートがありません．","Deleted":"テンプレートを削除しました","New":"新規テンプレート","Edit":"テンプレートを編集","Editor":"編集者","Json":"JSON","Display":"表示名","Type":"種類","Variables":"変数","Install":"インストール","AddInstallStep":"インストール手順を追加","DeleteInstallStep":"インストールステップを削除","Description":"説明","DataType":"データ型","DefaultValue":"初期値","Required":"入力必要項目","UserEditable":"ユーザーが編集できる","Value":"値","AddOption":"オプションを追加","AddCommand":"コマンドを追加","Filename":"ファイル名","Content":"内容","Source":"ソース","Target":"ターゲット","Version":"バージョン","ReleaseType":"リリースの種類","AddFile":"ファイルを追加","AddVariable":"変数を追加","Environment":"環境","Environments":"環境","AddEnvironment":"使用環境の追加","DefaultEnvironment":"デフォルト環境","AddEnvVar":"新規変数を追加","EnvVars":"環境変数","DockerImage":"Docker イメージ","SaveSuccess":"保存されたテンプレート","VarNameNoSpaces":"変数名に空白またはスペースを含めることはできません","SupportedEnvironments":"サポートされている環境","RunConfig":"設定を実行","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"事前実行ステップを追加","AddPostStep":"ポストランステップを追加","DeletePreStep":"前の実行ステップを削除","DeletePostStep":"ポストランステップを削除","Shutdown":"シャットダウン","Command":"コマンド","WorkingDirectory":"作業ディレクトリ","Arguments":"引数","AddArgument":"引数を追加","Convert":"変換","OfferV1Convert":"このテンプレートjsonはPufferPanel 1.x用のテンプレートのようですが、これをPufferPanel 2.x用のテンプレートに自動変換しますか？","import":{"CommunityWarning":"これらのテンプレートはコミュニティによって作られ、いかなる保証もなく提供されます","OverrideWarning":"警告: インポートされたテンプレートは、同じIDの既存のテンプレートに上書きされます","Import":"テンプレートをインポートします","Tooltip":"公式リポジトリからテンプレートをインポートします","Select":"インポートするテンプレートを選択してください","Started":"テンプレートをインポートしています。しばらくお待ちください。","Successful":"テンプレート {template} を正常にインポートしました","NoTemplatesTitle":"テンプレートをインポートしますか？","NoTemplatesContent":"現在テンプレートがありません。テンプレートはサーバーを作成するために必要です。<br/>PufferPanel公式テンプレートリポジトリからテンプレートをインポートしますか？"},"stop":{"Command":"コマンド","Signal":"シグナル"},"processors":{"download":{"ProcessorName":"ダウンロード","files":"ファイル"},"command":{"ProcessorName":"コマンドを実行","commands":"コマンド"},"alterfile":{"ProcessorName":"ファイルを変更","regex":"検索を正規表現として処理","search":"検索するテキスト","replace":"置換テキスト"},"writefile":{"ProcessorName":"ファイルに書き込み","text":"内容"},"move":{"ProcessorName":"ファイルを移動","source":"ソース","target":"ターゲット"},"mkdir":{"ProcessorName":"ディレクトリを作成"},"mojangdl":{"ProcessorName":"Minecraftをダウンロード"},"forgedl":{"ProcessorName":"Minecraft Forgeをダウンロード"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForgeをダウンロード","releaseType":"リリースの種類"},"fabricdl":{"ProcessorName":"Minecraft Fabricをダウンロード"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "753a": function(e, t, a) {
        "use strict";
        a("257d")
    },
    "753c": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", {
                ref: "title"
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("servers.Console"))
                }
            }), a("div", {
                staticClass: "flex-grow-1"
            }), a("v-btn", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "c p",
                    expression: "'c p'"
                }],
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(t) {
                        return e.togglePaused()
                    }
                }
            }, [a("v-badge", {
                attrs: {
                    color: "error",
                    value: e.paused && e.hasNewLines,
                    overlap: "",
                    dot: ""
                }
            }, [a("v-icon", [e._v(" " + e._s(e.paused ? "mdi-play" : "mdi-pause") + " ")])], 1)], 1)], 1), a("v-card-text", [a("span", {
                staticStyle: {
                    display: "none"
                }
            }, [a("v-chip", {
                ref: "daemonChip",
                attrs: {
                    color: e.$vuetify.theme.options.console.daemonChip,
                    "x-small": "",
                    label: ""
                }
            }, [e._v(" DAEMON ")])], 1), a("div", {
                ref: "consoleEl",
                staticClass: "console",
                style: "min-height: 25em; max-height: 36em;"
            }), e.server.permissions.sendServerConsole || e.isAdmin() ? a("ui-input", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "c i",
                    expression: "'c i'"
                }],
                ref: "cmdInput",
                staticClass: "pt-2",
                attrs: {
                    placeholder: "Command...",
                    "end-icon": "mdi-send"
                },
                on: {
                    "click:append": e.sendCommand,
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.sendCommand.apply(null, arguments)
                    }
                },
                model: {
                    value: e.consoleCommand,
                    callback: function(t) {
                        e.consoleCommand = t
                    },
                    expression: "consoleCommand"
                }
            }) : e._e()], 1)], 1)
        }
          , n = []
          , i = a("1386")
          , o = a.n(i);
        const s = /^(&nbsp;|&gt;|\s)*\[DAEMON]/
          , l = 500
          , d = 4194304
          , u = d / 2
          , c = new o.a;
        let m = [];
        var p = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    console: [],
                    consoleCommand: "",
                    lastConsoleTime: 0,
                    paused: !1,
                    hasNewLines: !1,
                    interval: null,
                    listener: null
                }
            },
            mounted() {
                c.ansi_to_html("[m"),
                this.interval = setInterval(()=>{
                    if (this.paused)
                        return;
                    this.hasNewLines && this.$refs.consoleEl.replaceChildren(...m.map(e=>e.el));
                    const e = this.$refs.consoleEl;
                    this.$nextTick(()=>{
                        this.paused || this.hasNewLines && (e.scrollTop = e.scrollHeight,
                        this.hasNewLines = !1)
                    }
                    )
                }
                , l),
                this.listener = e=>{
                    this.lastConsoleTime = "epoch"in e ? e.epoch : Math.floor(Date.now() / 1e3),
                    this.parseConsole(e)
                }
                ,
                this.$api.addServerListener(this.server.id, "console", this.listener),
                this.$api.startServerTask(this.server.id, ()=>{
                    this.$api.serverConnectionNeedsPolling(this.server.id) && this.$api.requestServerConsoleReplay(this.server.id, this.lastConsoleTime)
                }
                , 5e3),
                this.$api.requestServerConsoleReplay(this.server.id)
            },
            beforeDestroy() {
                this.$api.removeServerListener(this.server.id, "console", this.listener),
                this.interval && clearInterval(this.interval),
                this.interval = null,
                m = []
            },
            methods: {
                parseConsole(e) {
                    let t = (Array.isArray(e.logs) ? e.logs.join("") : e.logs).replaceAll("\r\n", "\n");
                    const a = t.endsWith("\n");
                    if (t = t.split("\n").map(e=>c.ansi_to_html(e) + "\n"),
                    !a && t.length > 0) {
                        const e = t[t.length - 1];
                        t[t.length - 1] = e.substring(0, e.length - 1)
                    } else
                        t.length > 0 && t.pop();
                    0 === m.length || m[m.length - 1].textEl.innerHTML.endsWith("\n") || (m[m.length - 1].textEl.innerHTML += t.shift(),
                    m[m.length - 1].crHandled = !1),
                    t = t.map(t=>{
                        const a = s.test(t)
                          , r = document.createElement("span");
                        a && r.append(this.$refs.daemonChip.$el.cloneNode(!0));
                        const n = document.createElement("span");
                        return n.className = "consoleLine",
                        n.innerHTML = a ? t.replace(s, "") : t,
                        r.append(n),
                        {
                            el: r,
                            textEl: n,
                            crHandled: !1,
                            size: 2 * e.length
                        }
                    }
                    ),
                    m = m.concat(t);
                    const r = m.reduce((e,t)=>e + t.size, 0);
                    let n = 0
                      , i = 0;
                    while (r - n > u)
                        n += m[i].size,
                        i += 1;
                    m = m.slice(i),
                    m = m.map(e=>{
                        if (e.crHandled)
                            return e;
                        const t = e.textEl.innerHTML.endsWith("\n")
                          , a = (t ? e.textEl.innerHTML.substring(0, e.textEl.innerHTML.length - 1) : e.textEl.innerHTML).split("\r");
                        let r = a.shift();
                        return a.map(e=>{
                            r = e + r.substring(e.length)
                        }
                        ),
                        e.textEl.innerHTML = t ? r + "\n" : r,
                        {
                            ...e,
                            crHandled: !0
                        }
                    }
                    ),
                    this.hasNewLines = !0
                },
                togglePaused() {
                    this.paused = !this.paused
                },
                sendCommand() {
                    this.$api.sendServerCommand(this.server.id, this.consoleCommand),
                    this.consoleCommand = ""
                }
            }
        }
          , v = p
          , h = (a("753a"),
        a("2877"))
          , g = a("6544")
          , f = a.n(g)
          , S = a("4ca6")
          , k = a("8336")
          , E = a("b0af")
          , y = a("99d9")
          , b = a("cc20")
          , P = a("132d")
          , N = Object(h["a"])(v, r, n, !1, null, null, null);
        t["default"] = N.exports;
        f()(N, {
            VBadge: S["a"],
            VBtn: k["a"],
            VCard: E["a"],
            VCardText: y["c"],
            VCardTitle: y["d"],
            VChip: b["a"],
            VIcon: P["a"]
        })
    },
    7575: function(e) {
        e.exports = JSON.parse('{"Node":"Csomópont","Nodes":"Csomópontok","Edit":"Csomópont szerkesztése","Add":"Új csomópont","Update":"Csomópont frissítése","Delete":"Csomópont törlése","PublicHost":"Nyilvános kiszolgáló","PublicPort":"Nyilvános port","PrivateHost":"Privát kiszolgáló","PrivatePort":"Privát port","SftpPort":"SFTP port","WithPrivateAddress":"Használj másik ip/portot a két szerver közötti kommunikációhoz","WithPrivateAddressHint":"Ez a külön cím akkor használatos, amikor a főcsomópont kommunikál az új csomóponttal. Olyan esetekben hasznos, mint pl.: a csomópontok azonos hálózaton vannak NAT mögött.","SaveConfig":"Konfiguráció mentése","SavePublicKey":"Nyílvános kulcs mentése","DeploymentInstruction":"A csomópont berendezéséhez telepítse a PufferPanelt az új szerveren és helyezze a konfigurációs fájlt a következő helyre: `/etc/pufferpanel/`<br/>Majd indítsa újra a PufferPanelt az új szerveren.","UpdateSuccess":"Csomópont sikeresen frissítve","UpdateError":"Hiba történt a csomópont frissítése közben","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "75de": function(e) {
        e.exports = JSON.parse('{"Credentials":"Date acces Client OAuth2","ClientId":"ID Client","ClientSecret":"Cod Secret Client","NewClientWarning":"Salvează codul secret al clientului, după ce închizi acest dialog nu va mai putea fi văzut niciodată. Dacă îl uiți sau îl pierzi, acesta va deveni inutilizabil.","Create":"Creează un nou Client OAuth2","UnnamedClient":"Client OAuth2 nedenumit","Docs":"Găsește documentația API aici","DeleteWarning":"Ștergerea unui client OAuth2 nu poate să fie dată înapoi și nici nu se poate crea un nou client cu aceleași detalii de acces. Toate integrațiile care folosesc acest client nu vor mai funcționa după ștergere.","ConfirmDelete":"Am luat la cunoștință efectele ștergerii acestui client OAuth2 și vreau să continui.","Delete":"Vrei să ștergi {clientName}?","Clients":"Clienți OAuth2","AccountDescription":"Clienții OAuth2 listați aici preiau toate permisiunile contului tău","ServerDescription":"Clienții OAuth2 listați aici preiau permisiunile contului tău doar de pe acest server"}')
    },
    7677: function(e) {
        e.exports = JSON.parse('{"Settings":"Ustawienia","PanelSettings":"Ustawienia Panelu","EmailSettings":"Ustawienia Email","MasterUrl":"Główny URL","MasterUrlHint":"Podstawowy adres URL panelu można uzyskać w formacie http://localhost:8080","CompanyName":"Nazwa firmy","DefaultTheme":"Domyślny Motyw","RegistrationEnabled":"Pozwól użytkownikom rejestrować się","RegistrationEnabledHint1":"Samodzielnie zarejestrowani użytkownicy nie mogą nic robić dopóki nie zostaną przyznane uprawnienia","RegistrationEnabledHint2":"Wyłączenie tego tylko zapobiega bezpośredniej rejestracji, zapraszanie do serwera i strona Użytkowników nie są dotknięte","EmailProvider":"Dostawca Poczty Email","emailProviders":{"none":"Brak","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Adres Wysyłającego","domain":"Domena","key":"Klucz API","host":"Host","username":"Użytkownik","password":"Hasło"}}')
    },
    "76ca": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Имя","Address":"Адрес","Online":"Онлайн","Offline":"Офлайн","Loading":"Загрузка...","General":"Общее","Language":"Язык","SelectLanguage":"Выбрать язык","Settings":"Настройки","Update":"Обновление","Edit":"Изменить","Delete":"Удалить","Create":"Создать","Save":"Сохранить","Saved":"Сохранено","SaveFailed":"Не удалось сохранить","Cancel":"Отменить","Confirm":"Подтвердить","Actions":"Действия","Host":"Хост","Port":"Порт","Template":"Шаблон","Options":"Опции","Collapse":"Свернуть","Copied":"Скопировано в буфер обмена","Unknown":"Неизвестно","Search":"Поиск","Back":"Назад","Next":"Дальше","LanguageName":"Русский","Details":"Подробности","ErrorDetails":"Сведения об ошибке","HelpTranslate":"Помогите нам перевести PufferPanel","DarkMode":"Тёмная тема","ThemeOptions":"Настройки темы","Protocol":"Протокол","Add":"Добавить","Ignore":"Игнорировать","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота","Sunday":"Воскресенье","Description":"Описание"}')
    },
    7743: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"Disini belum ada template","Deleted":"Template dihapus","New":"Buat Templat Baru","Edit":"Edit Template","Editor":"Editor","Json":"JSON","Display":"Nama Tampilan","Type":"Jenis","Variables":"Variabel","Install":"Instal","AddInstallStep":"Tambahkan Langkah Instal","DeleteInstallStep":"Hapus Langkah Instal","Description":"Deskripsi","DataType":"Tipe Data","DefaultValue":"Nilai standar","Required":"Diperlukan","UserEditable":"Pengguna bisa mengedit","Value":"Nilai","AddOption":"Tambahkan pilihan","AddCommand":"Tambah command","Filename":"Nama File","Content":"Konten","Source":"Sumber","Target":"Target","Version":"Versi","ReleaseType":"Jenis Rilis","AddFile":"Tambah file","AddVariable":"Tambah variabel","Environment":"Environment","Environments":"Environment","AddEnvironment":"Tambah environment","DefaultEnvironment":"Environment standar","AddEnvVar":"Tambah env variabel","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Template yang disimpan","VarNameNoSpaces":"Nama variabel tidak dapat kosong atau berisi spasi","SupportedEnvironments":"Env didukung","RunConfig":"Jalankan Konfigurasi","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Tambahkan langkah pra aktif","AddPostStep":"Tambahkan Post Run Step","DeletePreStep":"Hapus Pre Run Step","DeletePostStep":"Hapus Post Run Step","Shutdown":"Matikan","Command":"Perintah","WorkingDirectory":"Direktory Kerja","Arguments":"Arguments","AddArgument":"Tambahkan Arguments","Convert":"Konversi","OfferV1Convert":"Template Json ini terlihat seperti templat untuk pufferpanel 1.x, apakah kamu ingin secara otomatis mengonversi ini menjadi templat untuk pufferpanel 2.x?","import":{"CommunityWarning":"Templat ini dibuat oleh komunitas dan disediakan tanpa jaminan apa pun","OverrideWarning":"PERINGATAN: Templat yang diimpor akan menimpa templat yang ada dengan ID yang sama","Import":"Impor templat","Tooltip":"Impor templat dari repositori resmi","Select":"Pilih Templat untuk Mengimpor","Started":"Mengimpor template, harap tunggu sebentar","Successful":"Template yang berhasil diimpor {template}","NoTemplatesTitle":"Apakah kamu ingin mengimpor template?","NoTemplatesContent":"Kamu saat ini tidak memiliki templat. Templat diperlukan untuk membuat server. <br/> Apakah Anda ingin mengimpor beberapa templat dari repositori templat pufferpanel resmi sekarang?"},"stop":{"Command":"Perintah","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Unduh","files":"Berkas"},"command":{"ProcessorName":"Jalankan Perintah","commands":"Perintah"},"alterfile":{"ProcessorName":"Mengubah berkas","regex":"Perlakukan pencarian sebagai RegEx","search":"Pencarian Teks","replace":"Ganti dengan"},"writefile":{"ProcessorName":"Write ke berkas","text":"Daftar isi"},"move":{"ProcessorName":"Pindahkan berkas","source":"Sumber","target":"Target"},"mkdir":{"ProcessorName":"Buat Direktori"},"mojangdl":{"ProcessorName":"Mengunduh Minecraft"},"forgedl":{"ProcessorName":"Mengunduh Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Mengunduh Minecraft SpongeForge","releaseType":"Jenis Rilis"},"fabricdl":{"ProcessorName":"Mengunduh Minecraft Fabric"},"javadl":{"ProcessorName":"Unduh Java","version":"Veri java yg diinstall (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Unduh Game dari Steam","appId":"App-Id"}}}')
    },
    7765: function(e) {
        e.exports = JSON.parse('{"Node":"Knotenpunkt","Nodes":"Knotenpunkte","Edit":"Knotenpunkt bearbeiten","Add":"Knotenpunkt hinzufügen","Update":"Knotenpunkt aktualisieren","Delete":"Knotenpunkt entfernen","PublicHost":"Öffentlicher Host","PublicPort":"Öffentlicher Port","PrivateHost":"Privater Host","PrivatePort":"Privater Port","SftpPort":"SFTP-Port","WithPrivateAddress":"Benutzen Sie einen anderen Host/Port für die Server zu Server Verbindung","WithPrivateAddressHint":"Diese Addresse wird für die Verbindung zwischen dem Hauptserver und den Knotenpunkten genutzt. Nützlich falls sich beide in dem selben Netzwerk befinden.","SaveConfig":"Konfiguration speichern","SavePublicKey":"Öffentlichen Schlüssel speichern","DeploymentInstruction":"Um den Knoten bereitzustellen, installieren Sie PufferPanel auf dem neuen Server und platzieren Sie die Konfigurationsdatei in `/etc/pufferpanel/`<br/>Starten Sie PufferPanel anschließend auf dem neuen Server neu.","UpdateSuccess":"Knoten wurde erfolgreich aktualisiert","UpdateError":"Fehler beim Aktualisieren des Knotens","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "77aa": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Πιστοποιητικά Πελάτη","ClientId":"Ταυτότητα Πελάτη","ClientSecret":"Μυστικό Πελάτη","NewClientWarning":"Σημειώστε το μυστικό του πελάτη, διότι μετά το κλείσιμο αυτού του διαλόγου δεν θα εμφανιστεί ποτέ ξανά. Η απώλεια αυτού θα καταστήσει αυτόν τον πελάτη εντελώς άχρηστο.","Create":"Δημιουργία νέου πελάτη OAuth2","UnnamedClient":"Πελάτης OAuth2 Χωρίς Όνομα","Docs":"Βρείτε το API documentation εδώ","DeleteWarning":"Η διαγραφή ενός πελάτη OAuth2 δεν μπορεί να αναιρεθεί, ούτε μπορεί να δημιουργηθεί ένας νέος πελάτης με τα ίδια στοιχεία. Όλες οι ενσωματώσεις που εξακολουθούν να χρησιμοποιούν αυτόν τον πελάτη θα σπάσουν μετά τη διαγραφή του.","ConfirmDelete":"Γνωρίζω τις επιπτώσεις που θα έχει και επιθυμώ την διαγραφή αυτού του πελάτη OAuth2.","Delete":"Διαγραφή {clientName}?","Clients":"OAuth2 Πελάτες","AccountDescription":"Οι πελάτες OAuth2 που αναφέρονται εδώ, κληρονομούν όλα τα δικαιώματα των λογαριασμών σας","ServerDescription":"Οι πελάτες OAuth2 που αναφέρονται εδώ κληρονομούν μόνο τα δικαιώματα των λογαριασμών σας σε αυτόν τον διακομιστή"}')
    },
    7912: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Es gibt keine umgebungsspezifischen Optionen für diese Umgebung","docker":{"name":"Docker","image":"Image","networkMode":"Netzwerkmodus","networkName":"Netzwerkname","bindings":"Bindungen","portBindings":"Port Bindungen","OutsidePort":"Externer Port","InsidePort":"Interner Port","HostPath":"Hostpfad","ContainerPath":"Container-Pfad"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    7952: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken","ErrInviteLinkInvalid":"Your invite link appears to be invalid","ErrSavingInviteduser":"There was an error creating your account","ErrDuplicateServerName":"A server with this name already exists","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"Cannot upload folders","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "79f8": function(e) {
        e.exports = JSON.parse('{"Node":"Sõlm","Nodes":"Sõlmed","Edit":"Muuda Sõlme","Add":"Lisa Sõlm","Update":"Uuenda Sõlme","Delete":"Kustuta Sõlm","PublicHost":"Avalik Host","PublicPort":"Avalik Port","PrivateHost":"Privaatne Host","PrivatePort":"Privaatne Port","SftpPort":"SFTP Port","WithPrivateAddress":"Kasutage serveritevahelise suhtluse jaoks teist hosti/porti","WithPrivateAddressHint":"Seda eraldi aadressi kasutatakse siis, kui põhisõlm peab uue sõlmega rääkima. Kasulik näiteks siis, kui sõlmed asuvad NAT-i taga samas võrgus.","SaveConfig":"Salvesta Konfiguratsioon","SavePublicKey":"Salvesta Avalik Võti","DeploymentInstruction":"Et juurutada sõlme, paigalda PufferPanel uuele serverile ja pane konfiguratsioon asukohta `/etc/pufferpanel/`<br/>Taaskäivita PufferPanel uuel serveril pärast.","UpdateSuccess":"Sõlm edukalt muudetud","UpdateError":"Sõlme uuendamise viga","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "7b7d": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("v-tabs", {
                attrs: {
                    grow: ""
                },
                model: {
                    value: e.currentMode,
                    callback: function(t) {
                        e.currentMode = t
                    },
                    expression: "currentMode"
                }
            }, [a("v-tab", [e._v(e._s(e.$t("servers.Hourly")))]), a("v-tab", [e._v(e._s(e.$t("servers.Daily")))]), a("v-tab", [e._v(e._s(e.$t("servers.Weekly")))]), a("v-tab", [e._v(e._s(e.$t("servers.Monthly")))]), a("v-tab", [e._v(e._s(e.$t("servers.Advanced")))])], 1), a("v-tabs-items", {
                staticClass: "pt-2",
                model: {
                    value: e.currentMode,
                    callback: function(t) {
                        e.currentMode = t
                    },
                    expression: "currentMode"
                }
            }, [a("v-tab-item", [a("span", {
                staticClass: "tab"
            }, [a("i18n", {
                attrs: {
                    path: "servers.HourlyTab"
                },
                scopedSlots: e._u([{
                    key: "hourInterval",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateHour(t)
                                }
                            },
                            model: {
                                value: e.hour,
                                callback: function(t) {
                                    e.hour = t
                                },
                                expression: "hour"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "minute",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateMinute(t)
                                }
                            },
                            model: {
                                value: e.minute,
                                callback: function(t) {
                                    e.minute = t
                                },
                                expression: "minute"
                            }
                        })]
                    },
                    proxy: !0
                }])
            })], 1)]), a("v-tab-item", [a("span", {
                staticClass: "tab"
            }, [a("i18n", {
                attrs: {
                    path: "servers.DailyTab"
                },
                scopedSlots: e._u([{
                    key: "dayInterval",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateDayOfMonth(t)
                                }
                            },
                            model: {
                                value: e.dayOfMonth,
                                callback: function(t) {
                                    e.dayOfMonth = t
                                },
                                expression: "dayOfMonth"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "hour",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateHour(t)
                                }
                            },
                            model: {
                                value: e.hour,
                                callback: function(t) {
                                    e.hour = t
                                },
                                expression: "hour"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "minute",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateMinute(t)
                                }
                            },
                            model: {
                                value: e.minute,
                                callback: function(t) {
                                    e.minute = t
                                },
                                expression: "minute"
                            }
                        })]
                    },
                    proxy: !0
                }])
            })], 1)]), a("v-tab-item", [a("span", {
                staticClass: "tab"
            }, [a("i18n", {
                staticClass: "tab",
                attrs: {
                    path: "servers.WeeklyTab"
                },
                scopedSlots: e._u([{
                    key: "weekdays",
                    fn: function() {
                        return [a("span", {
                            staticClass: "px-2 py-0",
                            staticStyle: {
                                display: "inline-block"
                            }
                        }, [a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Monday"),
                                value: "1"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Tuesday"),
                                value: "2"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Wednesday"),
                                value: "3"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Thursday"),
                                value: "4"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Friday"),
                                value: "5"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Saturday"),
                                value: "6"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        }), a("v-checkbox", {
                            attrs: {
                                dense: "",
                                "hide-details": "",
                                label: e.$t("common.Sunday"),
                                value: "0"
                            },
                            model: {
                                value: e.dayOfWeek,
                                callback: function(t) {
                                    e.dayOfWeek = t
                                },
                                expression: "dayOfWeek"
                            }
                        })], 1)]
                    },
                    proxy: !0
                }, {
                    key: "hour",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateHour(t)
                                }
                            },
                            model: {
                                value: e.hour,
                                callback: function(t) {
                                    e.hour = t
                                },
                                expression: "hour"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "minute",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateMinute(t)
                                }
                            },
                            model: {
                                value: e.minute,
                                callback: function(t) {
                                    e.minute = t
                                },
                                expression: "minute"
                            }
                        })]
                    },
                    proxy: !0
                }])
            })], 1)]), a("v-tab-item", [a("span", {
                staticClass: "tab"
            }, [a("i18n", {
                attrs: {
                    path: "servers.MonthlyTab"
                },
                scopedSlots: e._u([{
                    key: "monthInterval",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateMonth(t)
                                }
                            },
                            model: {
                                value: e.month,
                                callback: function(t) {
                                    e.month = t
                                },
                                expression: "month"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "day",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateDayOfMonth(t)
                                }
                            },
                            model: {
                                value: e.dayOfMonth,
                                callback: function(t) {
                                    e.dayOfMonth = t
                                },
                                expression: "dayOfMonth"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "hour",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateHour(t)
                                }
                            },
                            model: {
                                value: e.hour,
                                callback: function(t) {
                                    e.hour = t
                                },
                                expression: "hour"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "minute",
                    fn: function() {
                        return [a("ui-input", {
                            staticClass: "cronDigit",
                            attrs: {
                                dense: ""
                            },
                            on: {
                                input: function(t) {
                                    return e.updateMinute(t)
                                }
                            },
                            model: {
                                value: e.minute,
                                callback: function(t) {
                                    e.minute = t
                                },
                                expression: "minute"
                            }
                        })]
                    },
                    proxy: !0
                }])
            })], 1)]), a("v-tab-item", [a("ui-input", {
                staticClass: "px-2",
                attrs: {
                    label: e.$t("servers.CronExpression")
                },
                on: {
                    input: function(t) {
                        return e.updateExpression(t)
                    }
                },
                model: {
                    value: e.expression,
                    callback: function(t) {
                        e.expression = t
                    },
                    expression: "expression"
                }
            })], 1)], 1)], 1)
        }
          , n = []
          , i = a("f8d8")
          , o = a.n(i);
        const s = 0
          , l = 1
          , d = 2
          , u = 3
          , c = 4;
        var m = {
            props: {
                value: {
                    type: void 0,
                    default: ()=>"",
                    required: !0
                }
            },
            data() {
                return {
                    currentMode: 1,
                    minute: "0",
                    hour: "0",
                    dayOfMonth: "*/1",
                    month: "*",
                    dayOfWeek: [0, 1, 2, 3, 4, 5, 6],
                    expression: ""
                }
            },
            watch: {
                dayOfWeek(e) {
                    this.updateDayOfWeek(e)
                },
                currentMode(e) {
                    e !== s || "0" !== this.hour && "*" !== this.hour ? e !== l || "0" !== this.dayOfMonth && "*" !== this.dayOfMonth ? e === d && 0 === this.dayOfWeek.length ? this.dayOfWeek = [0] : e !== u || "0" !== this.month && "*" !== this.month || (this.month = "1") : this.dayOfMonth = "1" : this.hour = "1",
                    this.$emit("input", this.buildExpression())
                }
            },
            mounted() {
                if (this.value && "" !== this.value.trim()) {
                    this.expression = this.value;
                    const e = o.a.parseExpression(this.value).fields
                      , t = "?" === this.value.split(" ")[2]
                      , a = "?" === this.value.split(" ")[4];
                    if (a && 1 === e.minute.length && 1 === e.hour.length && 1 === e.dayOfMonth.length && 8 === e.dayOfWeek.length ? this.currentMode = u : t && 1 === e.minute.length && 1 === e.hour.length && 31 === e.dayOfMonth.length && 12 === e.month.length ? this.currentMode = d : 1 === e.minute.length && 1 === e.hour.length && 12 === e.month.length && 8 === e.dayOfWeek.length ? this.currentMode = l : 1 === e.minute.length && 31 === e.dayOfMonth.length && 12 === e.month.length && 8 === e.dayOfWeek.length ? this.currentMode = s : this.currentMode = c,
                    4 !== this.mode) {
                        const t = this.value.split(" ").map(e=>e.replace(/^\*\//, "").replace(/^\*$/, "1"));
                        this.minute = t[0],
                        this.hour = t[1],
                        this.dayOfMonth = t[2],
                        this.month = t[3],
                        this.dayOfWeek = e.dayOfWeek.map(e=>e.toString()).filter(e=>"7" !== e)
                    }
                } else
                    this.currentMode = 1,
                    this.minute = "0",
                    this.hour = "0",
                    this.dayOfMonth = "*/1",
                    this.month = "*",
                    this.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]
            },
            methods: {
                buildExpression() {
                    return this.currentMode === s ? this.expression = `${this.minute} */${this.hour} * * ?` : this.currentMode === l ? this.expression = `${this.minute} ${this.hour} */${this.dayOfMonth} * ?` : this.currentMode === d ? this.expression = `${this.minute} ${this.hour} ? * ${this.dayOfWeek.join(",")}` : this.currentMode === u && (this.expression = `${this.minute} ${this.hour} ${this.dayOfMonth} */${this.month} ?`),
                    this.expression
                },
                updateMinute(e) {
                    this.minute = e,
                    this.$emit("input", this.buildExpression())
                },
                updateHour(e) {
                    this.hour = e,
                    this.$emit("input", this.buildExpression())
                },
                updateDayOfMonth(e) {
                    this.dayOfMonth = e,
                    this.$emit("input", this.buildExpression())
                },
                updateMonth(e) {
                    this.month = e,
                    this.$emit("input", this.buildExpression())
                },
                updateDayOfWeek(e) {
                    this.dayOfWeek = e,
                    this.$emit("input", this.buildExpression())
                },
                updateExpression(e) {
                    this.expression = e,
                    this.$emit("input", e)
                }
            }
        }
          , p = m
          , v = (a("9067"),
        a("2877"))
          , h = a("6544")
          , g = a.n(h)
          , f = a("ac7c")
          , S = a("71a3")
          , k = a("c671")
          , E = a("fe57")
          , y = a("aac8")
          , b = Object(v["a"])(p, r, n, !1, null, "731cf92c", null);
        t["default"] = b.exports;
        g()(b, {
            VCheckbox: f["a"],
            VTab: S["a"],
            VTabItem: k["a"],
            VTabs: E["a"],
            VTabsItems: y["a"]
        })
    },
    "7c0e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Nieznany błąd","ErrUnknownError":"Nieznany błąd","ErrInvalidCredentials":"Nieprawidłowe dane logowania","ErrServiceNotAvailable":"Usługa niedostępna","ErrEmailNotConfigured":"Email nie skonfigurowany","ErrTokenInvalid":"Token jest nieprawidłowy","ErrClientNotFound":"Nie znaleziono klienta","ErrUserNotFound":"Nie znaleziono użytkownika","ErrLoginNotPermitted":"Logowanie niedozwolone","ErrInvalidTokenState":"Nieprawidłowy stan tokenu","ErrSettingNotConfigured":"{setting} nie jest skonfigurowany","ErrNoTemplate":"Nie znaleziono szablonu o nazwie \'{name}\'","ErrServiceInvalidProvider":"{service} nie obsługuje {provider}","ErrFieldRequired":"Pole {field} jest wymagane","ErrFieldMustBePrintable":"{field} musi być drukowanymi znakami ascii","ErrFieldHasURICharacters":"{field} nie może zawierać znaków, które nie mogą być użyte w URI","ErrFieldIsInvalidHost":"{field} musi być prawidłowym adresem IP lub FQDN","ErrFieldIsInvalidIP":"{field} musi być prawidłowym adresem IP","ErrFieldTooLarge":"{field} nie może być większy niż {max}","ErrFieldTooSmall":"{field} nie może być mniejszy niż {min}","ErrFieldNotBetween":"{field} musi być pomiędzy {min} a {max}","ErrFieldEqual":"{field1} nie może być równe {field2}","ErrFieldNotEqual":"{field1} nie jest równe {field2}","ErrFieldNotEmail":"{field} nie jest prawidłowym adresem e-mail","ErrFieldLength":"{field} musi mieć co najmniej {length} znaków","ErrNoPermission":"Nie masz uprawnień do wykonania tej akcji","ErrDatabaseNotAvailable":"Baza danych nie jest dostępna","ErrNoNodes":"Węzły nie są dostępne","ErrNoTemplates":"Brak dostępnych szablonów","ErrPasswordRequirements":"Hasło musi zawierać co najmniej {min} znaków","ErrUsernameRequirements":"Nazwa użytkownika musi mieć co najmniej 5 znaków długości i zawierać tylko znaki alfanumeryczne, _ lub -","ErrPasswordsNotIdentical":"Hasła nie są takie same","ErrSessionTimedOut":"Twoja sesja wygasła, proszę zalogować się jeszcze raz","ErrMissingScope":"Nie masz uprawnień do wykonywania tej czynności","ErrInvalidJson":"Dane json są nieprawidłowe","ErrSocketFailed":"WebSocket napotkał błąd, niektóre funkcje mogą być powolne lub uszkodzone","ErrInviteLinkInvalid":"Twój link zaproszenia wydaje się być nieprawidłowy","ErrSavingInviteduser":"Wystąpił błąd podczas tworzenia twojego konta","ErrDuplicateServerName":"Serwer o tej nazwie już istnieje","ErrDuplicateNodeName":"Maszyna o tej nazwie już istnieje","ErrDirectoryUploadNotSupported":"Nie można przesłać folderów","ErrDockerNotSupported":"Docker nie jest obsługiwany przez ten węzeł","ErrMissingBinary":"Brakujące wartości binarne: {expected}","ErrUnsupportedOS":"System operacyjny ({actual}) nie jest wspierany. Wspierane systemy operacyjne: {expected}","ErrUnsupportedArch":"Architektura {actual} nie jest wspierana. Wspierane Architektury: {expected}"}')
    },
    "7c5d": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Không có cài đặt cụ thể cho môi trường này","docker":{"name":"Docker","image":"Hình ảnh","networkMode":"Chế độ mạng","networkName":"Tên mạng","bindings":"Ràng buộc","portBindings":"Gắn cổng","OutsidePort":"Cổng bên ngoài","InsidePort":"Cổng nội bộ","HostPath":"Đường dẫn máy chủ","ContainerPath":"Đường dẫn Container"},"standard":{"name":"Tiêu chuẩn"},"tty":{"name":"TTY"}}')
    },
    "7d77": function(e) {
        e.exports = JSON.parse('{"Users":"用户","Add":"添加用户","AccountSettings":"账户设置","OldPassword":"旧密码","NewPassword":"新密码","ConfirmPassword":"确认密码","ChangePassword":"更改密码","ChangeInfo":"更改账户信息","InfoChanged":"您的信息已更改","PasswordChanged":"您的密码已更改","AccountPassword":"账户密码","Account":"账户","Login":"登录","LoginLink":"或在此登录","Logout":"登出","Register":"注册","RegisterLink":"或在此注册","RegisterSuccess":"您已成功注册","NoEmailGiven":"您必须提供要添加用户的电子邮件地址","Username":"用户名","Password":"密码","Email":"电子邮件地址","Edit":"编辑用户","Update":"更新用户","Delete":"删除用户","CreateSuccess":"用户创建成功！","CreateError":"创建用户时出错","UpdateSuccess":"已更新用户","UpdateError":"更新用户时出错","PermsUpdateError":"更新用户权限时出错","Otp":"两步认证","OtpEnable":"启用两步认证","OtpDisable":"禁用两步认证","OtpHint":"两步认证在密码的基础上添加了额外的安全防护。","OtpSetup":"两步认证设置","OtpSetupHint":"使用您的验证器应用扫描二维码或复制下方的的密钥","OtpSecret":"秘密代码","OtpConfirm":"使用两步认证码确认","OtpNeeded":"需要进行两步验证"}')
    },
    8051: function(e) {
        e.exports = JSON.parse('{"ServersView":"Pode ver esse servidor","ServersEdit":"Editar o servidor","ServersInstall":"Instalar o servidor","ServersConsole":"Ver o console","ServersConsoleSend":"Enviar comandos ao console","ServersStop":"Parar e matar o servidor","ServersStart":"Iniciar o servidor","ServersStat":"Visualizar estatísticas da CPU e da memória","ServersFiles":"Permitir acesso aos arquivos usando SFTP","ServersFilesGet":"Visualizar e fazer download de arquivos usando o gerenciador de arquivos","ServersFilesPut":"Editar e enviar arquivos usando o gerenciador de arquivos","ServersEditUsers":"Editar acesso do usuário a este servidor","Admin":"Administrador (concede todas as permissões possíveis)","ViewServers":"Ver servidores","CreateServers":"Criar novos servidores","DeleteServers":"Excluir Servidores","EditServerAdmin":"Editar configurações do servidor","ViewNodes":"Ver nodes","EditNodes":"Editar nodes","DeployNodes":"Implantar novos nodes","ViewTemplates":"Ver modelos","EditTemplates":"Editar modelos","ViewUsers":"Ver todos os usuários","EditUsers":"Editar outros usuários","PanelSettings":"Alterar configurações do painel"}')
    },
    8127: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("servers.SFTPInfo"))
                }
            }), a("v-card-text", {
                staticClass: "body-1 text--primary"
            }, [a("v-row", [a("v-col", {
                staticClass: "d-flex align-center",
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "2"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Host") + ":" + e.$t("common.Port"))
                }
            }), a("v-col", {
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "10"
                }
            }, [a("input", {
                ref: "host",
                staticClass: "copyContent",
                attrs: {
                    readonly: ""
                },
                domProps: {
                    value: e.host
                }
            }), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: e.copyHost
                }
            }, [a("v-icon", [e._v("mdi-content-copy")])], 1), e.copiedHost ? a("v-chip", {
                staticClass: "mx-2",
                attrs: {
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Copied"))
                }
            }) : e._e(), e._v(" " + e._s(e.host) + " ")], 1)], 1), a("v-divider"), a("v-row", [a("v-col", {
                staticClass: "d-flex align-center",
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "2"
                },
                domProps: {
                    textContent: e._s(e.$t("users.Username"))
                }
            }), a("v-col", {
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "10"
                }
            }, [a("input", {
                ref: "username",
                staticClass: "copyContent",
                attrs: {
                    readonly: ""
                },
                domProps: {
                    value: e.username
                }
            }), a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: e.copyUsername
                }
            }, [a("v-icon", [e._v("mdi-content-copy")])], 1), e.copiedUsername ? a("v-chip", {
                staticClass: "mx-2",
                attrs: {
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Copied"))
                }
            }) : e._e(), e._v(" " + e._s(e.username) + " ")], 1)], 1), a("v-divider"), a("v-row", [a("v-col", {
                staticClass: "d-flex align-center",
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "2"
                },
                domProps: {
                    textContent: e._s(e.$t("users.Password"))
                }
            }), a("v-col", {
                attrs: {
                    cols: "12",
                    sm: "6",
                    md: "10"
                }
            }, [a("v-btn", {
                attrs: {
                    icon: "",
                    disabled: ""
                }
            }), e._v(" " + e._s(e.$t("users.AccountPassword").replace(" ", " ")) + " ")], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    block: "",
                    href: "sftp://" + e.username + "@" + e.host
                },
                domProps: {
                    textContent: e._s(e.$t("servers.SftpConnection"))
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    host: "",
                    username: "",
                    copiedHost: !1,
                    copiedUsername: !1
                }
            },
            async mounted() {
                const e = "127.0.0.1" !== this.server.node.publicHost ? this.server.node.publicHost : window.location.hostname;
                this.host = e + ":" + this.server.node.sftpPort;
                const t = await this.$api.getSelf();
                this.username = t.email + "|" + this.server.id
            },
            methods: {
                copyHost() {
                    this.$refs.host.select(),
                    document.execCommand("copy"),
                    this.copiedUsername = !1,
                    this.copiedHost = !0,
                    setTimeout(()=>{
                        this.copiedHost = !1
                    }
                    , 6e3)
                },
                copyUsername() {
                    this.$refs.username.select(),
                    document.execCommand("copy"),
                    this.copiedHost = !1,
                    this.copiedUsername = !0,
                    setTimeout(()=>{
                        this.copiedUsername = !1
                    }
                    , 6e3)
                }
            }
        }
          , o = i
          , s = (a("87a3"),
        a("2877"))
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("b0af")
          , m = a("99d9")
          , p = a("cc20")
          , v = a("62ad")
          , h = a("ce7e")
          , g = a("132d")
          , f = a("0fd9")
          , S = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = S.exports;
        d()(S, {
            VBtn: u["a"],
            VCard: c["a"],
            VCardText: m["c"],
            VCardTitle: m["d"],
            VChip: p["a"],
            VCol: v["a"],
            VDivider: h["a"],
            VIcon: g["a"],
            VRow: f["a"]
        })
    },
    8136: function(e) {
        e.exports = JSON.parse('{"FileManager":"파일 관리자","NewFolder":"새 폴더","NewFile":"새 파일","LastModified":"최근 수정","ConfirmDelete":"이 파일을 삭제할까요?","Upload":"업로드","Download":"다운로드","Size":"크기","NoFiles":"파일이 없습니다, 위의 설치 버튼을 클릭해 예시 파일을 생성해주세요.","FileLoadFailed":"파일 로딩에 실패했습니다","Refresh":"새로고침","CreateFile":"파일 생성","CreateFolder":"폴더 생성","ArchiveCurrentFolder":"이 폴더를 압축하기","ArchiveFolder":"이 폴더를 압축하기","ExtractArchive":"압축풀기","DropToUpload":"업로드하려면 여기 파일을 끌어서 놓으세요"}')
    },
    "81fb": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 客户端凭证","ClientId":"客戶端 ID","ClientSecret":"客户端 Secret","NewClientWarning":"请注意！关闭当前对话框后，客户端 Secret将不会再显示，忘记后将无法使用此客户端。","Create":"创建新的 OAuth2 客户端","UnnamedClient":"未命名的 OAuth2 客户端","Docs":"在这里将找到该API的文档","DeleteWarning":"删除OAuth2 客户端后不能撤消，也不能创建相同凭据的新客户端。 所有正在在使用此客户端的程序将在删除后不可用。","ConfirmDelete":"我知道删除此 OAuth2 客户端将会产生的后果，并希望继续进行删除。","Delete":"确定删除 {clientName} 吗？","Clients":"OAuth2 客户端","AccountDescription":"在此列出的 OAuth2 客户端可使用您帐户的所有权限","ServerDescription":"在此列出的 OAuth2 客户端仅可使用您在此服务器上的帐户权限"}')
    },
    8245: function(e) {
        e.exports = JSON.parse('{"Id":"識別名稱","Name":"名稱","Address":"地址","Online":"在線","Offline":"離線","Loading":"載入中...","General":"一般","Language":"語言","SelectLanguage":"選擇語言","Settings":"設定","Update":"更新","Edit":"編輯","Delete":"刪除","Create":"創建","Save":"儲存","Saved":"已儲存","SaveFailed":"無法儲存","Cancel":"取消","Confirm":"確認","Actions":"操作","Host":"主機","Port":"通訊埠","Template":"範本","Options":"選項","Collapse":"摺疊","Copied":"已複製到剪貼簿","Unknown":"未知","Search":"搜尋","Back":"返回","Next":"下一步","LanguageName":"中文（香港）","Details":"詳情","ErrorDetails":"錯誤詳情","HelpTranslate":"幫助我們翻譯PufferPanel","DarkMode":"暗黑模式","ThemeOptions":"主題選項","Protocol":"協議","Add":"新增","Ignore":"Ignore","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday","Sunday":"Sunday","Description":"Description"}')
    },
    "833a": function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-row", [a("v-col", [a("ui-select", {
                attrs: {
                    items: e.processorTypes,
                    label: e.$t("templates.Type")
                },
                on: {
                    change: function(t) {
                        return e.changeType()
                    }
                },
                model: {
                    value: e.value.type,
                    callback: function(t) {
                        e.$set(e.value, "type", t)
                    },
                    expression: "value.type"
                }
            })], 1), e._l(e.fields, (function(t) {
                return a("v-col", {
                    key: e.value.type + t.name,
                    attrs: {
                        cols: "12"
                    }
                }, ["map" === t.type || "list" === t.type || t.headline ? a("h4", {
                    domProps: {
                        textContent: e._s(e.getLabel(t))
                    }
                }) : e._e(), "custom" === t.type ? a(t.component, {
                    tag: "component",
                    attrs: {
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "map" === t.type ? a("ui-map-input", {
                    attrs: {
                        value: e.value[t.name] || t.default,
                        "key-label": t.keyLabel ? e.$t(t.keyLabel) : void 0,
                        "value-label": t.valueLabel ? e.$t(t.valueLabel) : void 0
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "list" === t.type ? a("ui-list-input", {
                    attrs: {
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "boolean" === t.type ? a("ui-switch", {
                    attrs: {
                        label: e.getLabel(t),
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : void 0 !== t.options ? a("ui-input-suggestions", {
                    attrs: {
                        type: t.type,
                        label: e.getLabel(t),
                        items: t.options,
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : "textarea" === t.type ? a("v-textarea", {
                    attrs: {
                        value: e.value[t.name] || t.default,
                        label: e.getLabel(t),
                        outlined: "",
                        "hide-details": ""
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                }) : a("ui-input", {
                    attrs: {
                        type: t.type,
                        label: e.getLabel(t),
                        value: e.value[t.name] || t.default
                    },
                    on: {
                        input: function(a) {
                            return e.onInput(t.name, a)
                        }
                    }
                })], 1)
            }
            ))], 2)
        }
          , n = [];
        const i = {
            download: [{
                name: "files",
                type: "list",
                default: []
            }],
            command: [{
                name: "commands",
                type: "list",
                default: []
            }],
            alterfile: [{
                name: "file",
                type: "text",
                label: "templates.Filename",
                default: ""
            }, {
                name: "regex",
                type: "boolean",
                default: !0
            }, {
                name: "search",
                type: "text",
                default: ""
            }, {
                name: "replace",
                type: "text",
                default: ""
            }],
            writefile: [{
                name: "target",
                type: "text",
                label: "templates.Filename",
                default: ""
            }, {
                name: "text",
                type: "textarea",
                default: ""
            }],
            move: [{
                name: "source",
                type: "text",
                default: ""
            }, {
                name: "target",
                type: "text",
                default: ""
            }],
            mkdir: [{
                name: "target",
                type: "text",
                label: "common.Name",
                default: ""
            }],
            mojangdl: [{
                name: "version",
                type: "text",
                label: "templates.Version",
                default: ""
            }, {
                name: "target",
                type: "text",
                label: "templates.Filename",
                default: ""
            }],
            forgedl: [{
                name: "version",
                type: "text",
                label: "templates.Version",
                default: ""
            }, {
                name: "filename",
                type: "text",
                label: "templates.Filename",
                default: ""
            }],
            spongeforgedl: [{
                name: "releaseType",
                type: "text",
                default: ""
            }],
            fabricdl: [{
                name: "targetFile",
                type: "text",
                label: "templates.Filename",
                default: ""
            }],
            steamgamedl: [{
                name: "appId",
                type: "text"
            }],
            javadl: [{
                name: "version",
                type: "int"
            }]
        };
        var o = {
            props: {
                value: {
                    type: Object,
                    default: ()=>{}
                }
            },
            computed: {
                fields() {
                    return i[this.value.type]
                },
                processorTypes() {
                    return Object.keys(i).map(e=>({
                        value: e,
                        text: this.$t(`templates.processors.${e}.ProcessorName`)
                    }))
                }
            },
            mounted() {
                const e = {};
                this.fields.map(t=>{
                    this.value[t.name] || (e[t.name] = t.default)
                }
                ),
                this.$emit("input", {
                    ...this.value,
                    ...e
                })
            },
            methods: {
                changeType() {
                    const e = {
                        ...this.value
                    };
                    Object.keys(e).map(t=>{
                        "type" !== t && (e[t] = void 0)
                    }
                    ),
                    this.$emit("input", e)
                },
                onInput(e, t) {
                    this.$emit("input", {
                        ...this.value,
                        [e]: t
                    })
                },
                getLabel(e) {
                    return e.label ? this.$t(e.label) : this.$t(`templates.processors.${this.value.type}.${e.name}`)
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("62ad")
          , m = a("0fd9")
          , p = a("a844")
          , v = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = v.exports;
        u()(v, {
            VCol: c["a"],
            VRow: m["a"],
            VTextarea: p["a"]
        })
    },
    "83a2": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Các Node","Edit":"Sửa Node","Add":"Thêm Node","Update":"Cập nhật Node","Delete":"Xóa Node","PublicHost":"Địa chỉ công cộng","PublicPort":"Cổng công cộng","PrivateHost":"Địa chỉ cục bộ","PrivatePort":"Cổng cục bộ","SftpPort":"Cổng SFTP","WithPrivateAddress":"Sử dụng địa chỉ/cổng khác để kết nối giữa các máy chủ","WithPrivateAddressHint":"Địa chỉ riệng này được sử dụng khi Node chính cần giao tiếp với Node mới. Hữu dụng khi các Node chung kết nối mạng sau NAT.","SaveConfig":"Lưu cấu hình","SavePublicKey":"Lưu Khoá công cộng","DeploymentInstruction":"Để triển khai Node, hãy cài đặt PufferPanel ở máy chủ mới và đặt file cấu hình tại `/etc/pufferpanel/`<br/>Sau đó khởi động lại PufferPanel ở máy chủ mới.","UpdateSuccess":"Cập nhật Node thành công","UpdateError":"Có lỗi khi cập nhật Node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "84f0": function(e) {
        e.exports = JSON.parse('{"ServersView":"可以檢視此伺服器","ServersEdit":"編輯伺服器","ServersInstall":"安裝伺服器","ServersConsole":"檢視主控台","ServersConsoleSend":"發送指令到主控台","ServersStop":"暫定及終止伺服器","ServersStart":"運行伺服器","ServersStat":"檢視CPU及記憶體統計數據","ServersFiles":"允許透過SFTP存取檔案","ServersFilesGet":"透過檔案管理員檢視及下載檔案","ServersFilesPut":"透過檔案管理員編輯及上傳檔案","ServersEditUsers":"編輯用戶在此伺服器的存取權限","Admin":"管理員 (將賦予所有權限)","ViewServers":"See Servers","CreateServers":"創建新的伺服器","DeleteServers":"刪除伺服器","EditServerAdmin":"編輯伺服器設定","ViewNodes":"檢視節點","EditNodes":"編輯節點","DeployNodes":"部署新節點","ViewTemplates":"檢視範本","EditTemplates":"編輯範本","ViewUsers":"檢視所有用戶","EditUsers":"編輯其他用戶","PanelSettings":"Change panel settings"}')
    },
    "853d": function(e) {
        e.exports = JSON.parse('{"ServersView":"Kann diesen Server ansehen","ServersEdit":"Server bearbeiten","ServersInstall":"Server installieren","ServersConsole":"Konsole anzeigen","ServersConsoleSend":"Befehle an die Konsole senden","ServersStop":"Server stoppen und beenden","ServersStart":"Server starten","ServersStat":"CPU- und Arbeitsspeicherstatistik anzeigen","ServersFiles":"Zugriff auf Dateien über SFTP erlauben","ServersFilesGet":"Dateien im Dateimanager anzeigen und herunterladen","ServersFilesPut":"Dateien mit dem Dateimanager bearbeiten und hochladen","ServersEditUsers":"Benutzerzugriff zu diesem Server bearbeiten","Admin":"Admin (dies gewährt alle Berechtigungen)","ViewServers":"Server anzeigen","CreateServers":"Neue Server erstellen","DeleteServers":"Server löschen","EditServerAdmin":"Servereinstellungen bearbeiten","ViewNodes":"Knoten anzeigen","EditNodes":"Knoten bearbeiten","DeployNodes":"Neue Knoten aufsetzen","ViewTemplates":"Vorlagen anzeigen","EditTemplates":"Vorlagen bearbeiten","ViewUsers":"Alle Benutzer anzeigen","EditUsers":"Andere Benutzer bearbeiten","PanelSettings":"Bedienfeldeinstellungen ändern"}')
    },
    8678: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuthi 2 kliendi tunnistus","ClientId":"Kliendi ID","ClientSecret":"Kliendi Saladus","NewClientWarning":"Märkige üles kliendi saladus, pärast selle dialoogi sulgemist seda enam kunagi ei kuvata. Selle kaotamine või unustamine muudab selle kliendi täiesti kasutuskõlbmatuks.","Create":"Tee uus OAuth2 Klient","UnnamedClient":"Nimeta OAuth2 Klient","Docs":"Leia API dokumentatsioon siin","DeleteWarning":"OAuth2 kliendi kustutamist ei saa tagasi võtta ega luua uut klienti samade mandaatidega. Kõik seda klienti veel kasutavad integratsioonid katkevad pärast selle kustutamist.","ConfirmDelete":"Olen teadlik selle OAuth2 kliendi kustutamise tagajärgedest ja soovin jätkata.","Delete":"Kustuta {clientName}?","Clients":"OAuth2 Kliendid","AccountDescription":"Siin loetletud OAuth2 kliendid pärivad kõik teie konto load","ServerDescription":"Siin loetletud OAuth2 kliendid pärivad ainult teie kontode õigused selles serveris"}')
    },
    "87a3": function(e, t, a) {
        "use strict";
        a("4a65")
    },
    "87a5": function(e) {
        e.exports = JSON.parse('{"ServersView":"Có thể xem máy chủ này","ServersEdit":"Sửa đổi máy chủ","ServersInstall":"Cài đặt máy chủ","ServersConsole":"Xem giao diện điều khiển","ServersConsoleSend":"Gửi lệnh đến giao diện điều khiển","ServersStop":"Dừng máy chủ","ServersStart":"Khởi động máy chủ","ServersStat":"Xem thống kê CPU và bộ nhớ","ServersFiles":"Cho phép truy cập dữ liệu qua SFTP","ServersFilesGet":"Xem và tải tập tin về bằng Trình quản lý dữ liệu","ServersFilesPut":"Chỉnh sửa và tải tập tin lên bằng Trình quản lý dữ liệu","ServersEditUsers":"Chỉnh sửa quyền truy cập máy chủ này của người dùng","Admin":"Quản trị viên (trao tất cả các quyền hiện có)","ViewServers":"Xem máy chủ","CreateServers":"Tạo máy chủ","DeleteServers":"Xóa máy chủ","EditServerAdmin":"Sửa đổi thông số máy chủ","ViewNodes":"Xem các Node","EditNodes":"Sửa đổi Node","DeployNodes":"Triển khai Node mới","ViewTemplates":"Xem các mẫu","EditTemplates":"Sửa mẫu","ViewUsers":"Xem tất cả người dùng","EditUsers":"Chỉnh sửa thông tin người dùng khác","PanelSettings":"Thay đổi cài đặt bảng điều khiển"}')
    },
    8822: function(e) {
        e.exports = JSON.parse('{"Node":"Nod","Nodes":"Noder","Edit":"Redigera nod","Add":"Lägg till nod","Update":"Uppdatera nod","Delete":"Ta bort nod","PublicHost":"Offentlig värd","PublicPort":"Offentlig port","PrivateHost":"Privat värd","PrivatePort":"Privat port","SftpPort":"SFTP-port","WithPrivateAddress":"Använd en annan värd/port för server-till-server-kommunikation","WithPrivateAddressHint":"Denna separata adress används när huvudnoden behöver prata med den nya noden. Användbart till exempel när noderna är i samma nätverk bakom NAT.","SaveConfig":"Spara konfiguration","SavePublicKey":"Spara publik nyckel","DeploymentInstruction":"För att distribuera noden, installera PufferPanel på den nya servern och placera konfigurationsfilen i `/etc/pufferpanel/`<br/>Starta om PufferPanel på den nya servern efteråt.","UpdateSuccess":"Uppdatering av nod lyckades","UpdateError":"Fel vid uppdatering av nod","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    8824: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", {
                attrs: {
                    loading: e.loading,
                    disabled: e.loading
                },
                on: {
                    drop: function(t) {
                        return t.preventDefault(),
                        e.handleDrop.apply(null, arguments)
                    },
                    dragenter: function(t) {
                        return t.preventDefault(),
                        e.handleDragenter.apply(null, arguments)
                    },
                    dragover: function(e) {
                        e.preventDefault()
                    },
                    dragleave: function(t) {
                        return t.preventDefault(),
                        e.handleDragleave.apply(null, arguments)
                    }
                }
            }, [a("v-card-title", [a("span", {
                staticClass: "flex-grow-1",
                domProps: {
                    textContent: e._s(e.$t("files.FileManager"))
                }
            }), e.server.permissions.putServerFiles || e.isAdmin() ? a("v-tooltip", {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on;
                        return [a("v-btn", e._g({
                            attrs: {
                                icon: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.archive("current")
                                }
                            }
                        }, r), [a("v-icon", [e._v("mdi-archive-arrow-down")])], 1)]
                    }
                }], null, !1, 2803996422)
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("files.ArchiveCurrentFolder"))
                }
            })]) : e._e(), e.server.permissions.putServerFiles || e.isAdmin() ? a("v-tooltip", {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on;
                        return [a("v-btn", e._g({
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "n f",
                                expression: "'n f'"
                            }],
                            attrs: {
                                icon: ""
                            },
                            on: {
                                click: function(t) {
                                    e.createFile = !0
                                }
                            }
                        }, r), [a("v-icon", [e._v("mdi-file-plus")])], 1)]
                    }
                }], null, !1, 2065025710)
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("files.CreateFile"))
                }
            })]) : e._e(), e.server.permissions.putServerFiles || e.isAdmin() ? a("v-tooltip", {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on;
                        return [a("v-btn", e._g({
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "n d",
                                expression: "'n d'"
                            }],
                            attrs: {
                                icon: ""
                            },
                            on: {
                                click: function(t) {
                                    e.createFolder = !0
                                }
                            }
                        }, r), [a("v-icon", [e._v("mdi-folder-plus")])], 1)]
                    }
                }], null, !1, 3672134638)
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("files.CreateFolder"))
                }
            })]) : e._e(), a("v-tooltip", {
                attrs: {
                    bottom: ""
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(t) {
                        var r = t.on;
                        return [a("v-btn", e._g({
                            directives: [{
                                name: "hotkey",
                                rawName: "v-hotkey",
                                value: "r",
                                expression: "'r'"
                            }],
                            attrs: {
                                icon: ""
                            },
                            on: {
                                click: function(t) {
                                    return e.fetchItems(e.currentPath)
                                }
                            }
                        }, r), [a("v-icon", [e._v("mdi-refresh")])], 1)]
                    }
                }])
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$t("files.Refresh"))
                }
            })])], 1), a("v-card-subtitle", {
                domProps: {
                    textContent: e._s(e.currentPath)
                }
            }), a("v-card-text", [a("v-list", e._l(e.files, (function(t) {
                return a("v-list-item", {
                    key: t.name,
                    on: {
                        click: function(a) {
                            return e.itemClicked(t)
                        }
                    }
                }, [a("v-list-item-avatar", [a("v-icon", [e._v(e._s(e.getIconNameForFile(t)))])], 1), a("v-list-item-content", [a("v-list-item-title", {
                    domProps: {
                        textContent: e._s(t.name)
                    }
                }), t.isFile ? a("v-list-item-subtitle", {
                    domProps: {
                        textContent: e._s(e.toFileSize(t.size || 0))
                    }
                }) : e._e(), t.modifyTime ? a("v-list-item-subtitle", {
                    domProps: {
                        textContent: e._s(e.$t("files.LastModified") + ": " + e.toDate(t.modifyTime))
                    }
                }) : e._e()], 1), a("v-list-item-action", {
                    staticClass: "flex-row"
                }, [!t.isFile || e.isArchive(t) || t.size > e.maxEditSize ? e._e() : a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.itemClicked(t)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-pencil")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Edit"))
                    }
                })]), t.isFile && e.isArchive(t) ? a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.extract(t)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-archive-arrow-up")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("files.ExtractArchive"))
                    }
                })]) : e._e(), t.isFile ? a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: "",
                                    href: e.createDownloadLink(t),
                                    target: "_blank"
                                },
                                on: {
                                    click: function(e) {
                                        e.stopPropagation()
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-download")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("files.Download"))
                    }
                })]) : e._e(), ".." === t.name || t.isFile ? e._e() : a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.archive(t)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-archive-arrow-down")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("files.ArchiveFolder"))
                    }
                })]), ".." !== t.name ? a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.deleteRequest(t)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-trash-can")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Delete"))
                    }
                })]) : e._e()], 1)], 1)
            }
            )), 1), e.server.permissions.putServerFiles || e.isAdmin() ? a("div", [a("v-file-input", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "u",
                    expression: "'u'"
                }],
                ref: "fileInput",
                staticClass: "mb-4",
                attrs: {
                    multiple: "",
                    chips: "",
                    "show-size": "",
                    counter: "",
                    placeholder: e.$t("files.Upload")
                },
                on: {
                    hotkey: function(t) {
                        return e.$refs.fileInput.$refs.input.click()
                    },
                    change: function(t) {
                        return e.$refs.fileInput.blur()
                    }
                },
                model: {
                    value: e.uploadFiles,
                    callback: function(t) {
                        e.uploadFiles = t
                    },
                    expression: "uploadFiles"
                }
            }), e.uploading ? a("div", [a("v-progress-linear", {
                staticClass: "mb-4",
                attrs: {
                    value: e.uploadCurrent / e.uploadSize * 100,
                    "buffer-value": "0",
                    stream: ""
                }
            })], 1) : e._e(), a("v-btn", {
                directives: [{
                    name: "hotkey",
                    rawName: "v-hotkey",
                    value: "Enter",
                    expression: "'Enter'"
                }],
                attrs: {
                    block: "",
                    color: "primary",
                    disabled: !(e.uploadFiles.length > 0) || e.uploading
                },
                domProps: {
                    textContent: e._s(e.$t("files.Upload"))
                },
                on: {
                    click: e.transmitFiles
                }
            })], 1) : e._e(), a("ui-overlay", {
                attrs: {
                    title: e.$t("files.NewFile"),
                    card: "",
                    closable: "",
                    "on-close": e.cancelFileCreate
                },
                model: {
                    value: e.createFile,
                    callback: function(t) {
                        e.createFile = t
                    },
                    expression: "createFile"
                }
            }, [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    "hide-details": "",
                    autofocus: "",
                    label: e.$t("common.Name")
                },
                on: {
                    keyup: [function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.cancelFileCreate()
                    }
                    , function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirmFileCreate()
                    }
                    ]
                },
                model: {
                    value: e.newFileName,
                    callback: function(t) {
                        e.newFileName = t
                    },
                    expression: "newFileName"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.cancelFileCreate()
                    }
                }
            })], 1), a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success",
                    disabled: "" === e.newFileName
                },
                domProps: {
                    textContent: e._s(e.$t("common.Create"))
                },
                on: {
                    click: function(t) {
                        return e.confirmFileCreate()
                    }
                }
            })], 1)], 1)], 1), a("ui-overlay", {
                attrs: {
                    title: e.$t("files.NewFolder"),
                    card: "",
                    closable: "",
                    "on-close": e.cancelFolderCreate
                },
                model: {
                    value: e.createFolder,
                    callback: function(t) {
                        e.createFolder = t
                    },
                    expression: "createFolder"
                }
            }, [a("v-row", [a("v-col", [a("ui-input", {
                attrs: {
                    "hide-details": "",
                    autofocus: "",
                    label: e.$t("common.Name")
                },
                on: {
                    keyup: [function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.cancelFolderCreate()
                    }
                    , function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirmFolderCreate()
                    }
                    ]
                },
                model: {
                    value: e.newFolderName,
                    callback: function(t) {
                        e.newFolderName = t
                    },
                    expression: "newFolderName"
                }
            })], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.cancelFolderCreate()
                    }
                }
            })], 1), a("v-col", [a("v-btn", {
                attrs: {
                    block: "",
                    color: "success",
                    disabled: "" === e.newFolderName
                },
                domProps: {
                    textContent: e._s(e.$t("common.Create"))
                },
                on: {
                    click: function(t) {
                        return e.confirmFolderCreate()
                    }
                }
            })], 1)], 1)], 1), a("ui-overlay", {
                attrs: {
                    title: e.currentFile,
                    card: "",
                    closable: "",
                    "on-close": e.cancelEdit
                },
                scopedSlots: e._u([{
                    key: "actions",
                    fn: function() {
                        return [a("div", {
                            staticClass: "flex-grow-1"
                        }), a("v-btn", {
                            attrs: {
                                color: "error"
                            },
                            domProps: {
                                textContent: e._s(e.$t("common.Cancel"))
                            },
                            on: {
                                click: function(t) {
                                    return e.cancelEdit()
                                }
                            }
                        }), a("v-btn", {
                            attrs: {
                                color: "success"
                            },
                            domProps: {
                                textContent: e._s(e.$t("common.Save"))
                            },
                            on: {
                                click: function(t) {
                                    return e.saveEdit()
                                }
                            }
                        })]
                    },
                    proxy: !0
                }]),
                model: {
                    value: e.editOpen,
                    callback: function(t) {
                        e.editOpen = t
                    },
                    expression: "editOpen"
                }
            }, [a("ace", {
                attrs: {
                    "editor-id": "fileEditor",
                    height: "75vh",
                    theme: e.$isDark() ? "monokai" : "github",
                    file: e.currentFile
                },
                model: {
                    value: e.fileContents,
                    callback: function(t) {
                        e.fileContents = t
                    },
                    expression: "fileContents"
                }
            })], 1), a("ui-overlay", {
                attrs: {
                    title: e.$t("files.ConfirmDelete"),
                    card: "",
                    closable: "",
                    "on-close": e.deleteCancelled
                },
                model: {
                    value: e.confirmDeleteOpen,
                    callback: function(t) {
                        e.confirmDeleteOpen = t
                    },
                    expression: "confirmDeleteOpen"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "error",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.deleteCancelled()
                    }
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "success",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Confirm"))
                },
                on: {
                    click: function(t) {
                        return e.deleteConfirmed()
                    }
                }
            })], 1)], 1)], 1)], 1), a("v-fade-transition", [e.dragover ? a("v-overlay", {
                attrs: {
                    absolute: "",
                    color: "primary"
                }
            }, [a("h2", {
                domProps: {
                    textContent: e._s(e.$t("files.DropToUpload"))
                }
            })]) : e._e()], 1)], 1)
        }
          , n = []
          , i = a("cee5")
          , o = a.n(i);
        const s = [".7z", ".bz2", ".gz", ".jar", ".lz", ".lzma", ".rar", ".tar", ".tgz", ".xz", ".zip", ".zipx"]
          , l = [".jpeg", ".png", ".jpg", ".gif", ".webp", ".bmp", ".tiff", ".svg"];
        var d = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    files: [],
                    currentPath: "/",
                    loading: !0,
                    currentFile: "",
                    fileContents: "",
                    editOpen: !1,
                    maxEditSize: 20971520,
                    createFolder: !1,
                    newFolderName: "",
                    createFile: !1,
                    newFileName: "",
                    uploadFiles: [],
                    uploading: !1,
                    uploadCurrent: 0,
                    uploadSize: 0,
                    toDelete: null,
                    confirmDeleteOpen: !1,
                    dragover: 0
                }
            },
            mounted() {
                this.$api.addServerListener(this.server.id, "file", e=>{
                    e.error ? this.isLoading = !1 : (this.files = (e.files || []).sort((e,t)=>e.isFile && !t.isFile ? 1 : !e.isFile && t.isFile ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 0),
                    "" !== e.path && (this.currentPath = e.path),
                    this.loading = !1)
                }
                ),
                this.fetchItems(this.currentPath)
            },
            methods: {
                handleDragleave(e) {
                    this.dragover--
                },
                handleDragenter(e) {
                    this.dragover++
                },
                async handleDrop(e) {
                    setTimeout(()=>{
                        this.dragover = 0
                    }
                    , 100),
                    this.uploadFiles = [];
                    let t = !1;
                    if (e.dataTransfer.items) {
                        const a = e.dataTransfer.items;
                        if (!a)
                            return;
                        await Promise.all([...a].map(async e=>{
                            if ("file" === e.kind) {
                                const a = e.getAsFile();
                                if (await this.isFile(a)) {
                                    const e = this.uploadFiles.filter(e=>e.name === a.name).length;
                                    0 === e && this.uploadFiles.push(a)
                                } else
                                    t || (this.$toast.error(this.$t("errors.ErrDirectoryUploadNotSupported")),
                                    t = !0)
                            }
                        }
                        ))
                    } else {
                        const a = e.dataTransfer.files;
                        if (!a)
                            return;
                        await Promise.all([...a].map(async e=>{
                            if (await this.isFile(e)) {
                                const t = this.uploadFiles.filter(t=>t.name === e.name).length;
                                0 === t && this.uploadFiles.push(e)
                            } else
                                t || (this.$toast.error(this.$t("errors.ErrDirectoryUploadNotSupported")),
                                t = !0)
                        }
                        ))
                    }
                    this.uploadFiles.length > 0 && this.transmitFiles()
                },
                async isFile(e) {
                    const t = new Promise((function(t, a) {
                        if ("" !== e.type)
                            return t();
                        const r = new FileReader;
                        r.onloadend = ()=>{
                            if (r.error)
                                return a(r.error);
                            t()
                        }
                        ,
                        r.readAsBinaryString(e)
                    }
                    ));
                    try {
                        return await t,
                        !0
                    } catch {
                        return !1
                    }
                },
                fetchItems(e) {
                    this.loading = !0,
                    this.$api.requestServerFile(this.server.id, e)
                },
                fetchRoot() {
                    this.fetchNoUpdateRoot = !0,
                    this.fetchItems("/")
                },
                async itemClicked(e) {
                    if (e.isFile) {
                        if (e.size > this.maxEditSize)
                            return;
                        let t = this.currentPath;
                        t += "/" === t ? e.name : "/" + e.name,
                        this.fileContents = await this.$api.downloadServerFile(this.server.id, t, !0),
                        this.currentFile = e.name,
                        this.editOpen = !0
                    } else {
                        if (this.loading = !0,
                        ".." === e.name) {
                            const e = this.currentPath.split("/");
                            e.pop(),
                            this.currentPath = e.join("/"),
                            "" === this.currentPath && (this.currentPath = "/")
                        } else {
                            let t = this.currentPath;
                            t += "/" === t ? e.name : "/" + e.name,
                            this.currentPath = t
                        }
                        this.fetchItems(this.currentPath)
                    }
                },
                cancelEdit() {
                    this.editOpen = !1,
                    this.currentFile = "",
                    this.fileContents = ""
                },
                async saveEdit() {
                    let e = this.currentPath;
                    e += "/" === e ? this.currentFile : "/" + this.currentFile,
                    await this.$api.uploadServerFile(this.server.id, e, this.fileContents),
                    this.editOpen = !1,
                    this.currentFile = "",
                    this.fileContents = "",
                    this.$toast.success(this.$t("common.Saved"))
                },
                deleteRequest(e) {
                    this.toDelete = e,
                    this.confirmDeleteOpen = !0
                },
                deleteConfirmed() {
                    let e = "";
                    e = "/" === this.currentPath ? "/" + this.toDelete.name : this.currentPath + "/" + this.toDelete.name,
                    this.loading = !0,
                    this.$api.requestServerFileDeletion(this.server.id, e),
                    this.toDelete = null,
                    this.confirmDeleteOpen = !1
                },
                deleteCancelled() {
                    this.toDelete = null,
                    this.confirmDeleteOpen = null
                },
                async archive(e) {
                    const t = "current" === e;
                    if (t) {
                        const t = this.currentPath.split("/").pop();
                        e = {
                            name: "" === t ? "server" : t
                        }
                    }
                    let a = this.currentPath;
                    a.endsWith("/") || (a += "/");
                    const r = t ? a : a + e.name;
                    let n = e.name + ".zip";
                    for (let i = 2; this.doesFileExist(n); i++)
                        n = `${e.name} (${i}).zip`;
                    n = a + n,
                    this.loading = !0;
                    try {
                        await this.$api.archiveServerFiles(this.server.id, n, r),
                        this.fetchItems(this.currentPath)
                    } finally {
                        this.loading = !1
                    }
                },
                async extract(e) {
                    let t = this.currentPath;
                    t.endsWith("/") || (t += "/"),
                    t += e.name,
                    this.loading = !0;
                    try {
                        await this.$api.extractServerFile(this.server.id, t, this.currentPath),
                        this.fetchItems(this.currentPath)
                    } finally {
                        this.loading = !1
                    }
                },
                toFileSize(e) {
                    return o()(e)
                },
                toDate(e) {
                    return new Date(1e3 * e).toLocaleString()
                },
                createDownloadLink(e) {
                    let t = this.currentPath;
                    return t += "/" === t ? e.name : "/" + e.name,
                    this.$api.getServerFileUrl(this.server.id, t)
                },
                isArchive(e) {
                    const t = e.name.toLowerCase();
                    for (let a = 0; a < s.length; a++)
                        if (t.endsWith(s[a]))
                            return !0;
                    return !1
                },
                isImage(e) {
                    const t = e.name.toLowerCase();
                    for (let a = 0; a < l.length; a++)
                        if (t.endsWith(l[a]))
                            return !0;
                    return !1
                },
                doesFileExist(e) {
                    return !!this.files.find(t=>t.name === e)
                },
                cancelFileCreate() {
                    this.createFile = !1,
                    this.newFileName = ""
                },
                confirmFileCreate() {
                    if ("" === this.newFileName)
                        return;
                    const e = this;
                    e.uploadSingleFile(new File([],this.newFileName)).then(()=>{
                        e.fetchItems(e.currentPath)
                    }
                    ),
                    e.createFile = !1,
                    e.newFileName = ""
                },
                cancelFolderCreate() {
                    this.createFolder = !1,
                    this.newFolderName = ""
                },
                confirmFolderCreate() {
                    if ("" === this.newFolderName)
                        return;
                    let e = this.currentPath;
                    "/" === e ? e += this.newFolderName : e = e + "/" + this.newFolderName,
                    this.$api.requestServerFolderCreation(this.server.id, e),
                    this.createFolder = !1,
                    this.newFolderName = ""
                },
                transmitFiles(e) {
                    this.uploading = !0,
                    this.uploadNextItem(this)
                },
                uploadNextItem(e) {
                    this.uploadSingleFile(e.uploadFiles[0]).then(()=>{
                        if (e.uploadFiles.shift(),
                        0 === e.uploadFiles.length)
                            return e.uploading = !1,
                            void e.fetchItems(e.currentPath);
                        e.uploadNextItem(e)
                    }
                    )
                },
                async uploadSingleFile(e) {
                    let t = this.currentPath;
                    return t += "/" === t ? e.name : "/" + e.name,
                    this.uploadCurrent = 0,
                    this.uploadSize = e.size,
                    this.$api.uploadServerFile(this.server.id, t, e, e=>{
                        this.uploadCurrent = e.loaded,
                        this.uploadSize = e.total
                    }
                    )
                },
                getIconNameForFile(e) {
                    const t = e.name.toLowerCase();
                    return e.isFile ? t.endsWith(".json") ? "mdi-code-json" : t.endsWith(".txt") ? "mdi-file-document" : t.endsWith(".properties") || t.endsWith(".conf") || t.endsWith(".yml") || t.endsWith(".yaml") ? "mdi-file-cog" : t.endsWith(".jar") ? "mdi-language-java" : t.endsWith(".js") ? "mdi-language-javascript" : t.endsWith(".lock") ? "mdi-file-lock" : t.endsWith(".log") ? "mdi-math-log" : t.endsWith(".sh") ? "mdi-console" : t.endsWith(".pdf") ? "mdi-file-pdf" : t.endsWith(".html") ? "mdi-language-html5" : t.endsWith(".xml") ? "mdi-xml" : t.endsWith(".lua") ? "mdi-language-lua" : t.endsWith(".md") ? "mdi-language-markdown" : t.endsWith(".css") ? "mdi-language-css3" : this.isImage(e) ? "mdi-file-image" : this.isArchive(e) ? "mdi-zip-box" : t.startsWith(".") ? "mdi-file-hidden" : "mdi-file" : "mdi-folder"
                }
            }
        }
          , u = d
          , c = (a("8fe7"),
        a("2877"))
          , m = a("6544")
          , p = a.n(m)
          , v = a("8336")
          , h = a("b0af")
          , g = a("99d9")
          , f = a("62ad")
          , S = a("0789")
          , k = a("23a7")
          , E = a("132d")
          , y = a("8860")
          , b = a("da13")
          , P = a("1800")
          , N = a("8270")
          , C = a("5d23")
          , T = a("a797")
          , w = a("8e363")
          , A = a("0fd9")
          , D = a("3a2f")
          , I = Object(c["a"])(u, r, n, !1, null, null, null);
        t["default"] = I.exports;
        p()(I, {
            VBtn: v["a"],
            VCard: h["a"],
            VCardSubtitle: g["b"],
            VCardText: g["c"],
            VCardTitle: g["d"],
            VCol: f["a"],
            VFadeTransition: S["d"],
            VFileInput: k["a"],
            VIcon: E["a"],
            VList: y["a"],
            VListItem: b["a"],
            VListItemAction: P["a"],
            VListItemAvatar: N["a"],
            VListItemContent: C["a"],
            VListItemSubtitle: C["b"],
            VListItemTitle: C["c"],
            VOverlay: T["a"],
            VProgressLinear: w["a"],
            VRow: A["a"],
            VTooltip: D["a"]
        })
    },
    "88c8": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Node Bewerken","Add":"Node Toevoegen","Update":"Node Bijwerken","Delete":"Node Verwijderen","PublicHost":"Openbare Host","PublicPort":"Openbare poort","PrivateHost":"Privé host","PrivatePort":"Privé poort","SftpPort":"SFTP Poort","WithPrivateAddress":"Gebruik een andere host/poort voor server communicatie","WithPrivateAddressHint":"Dit aparte adres wordt gebruikt wanneer het hoofdknooppunt met het nieuwe knooppunt moet praten. Nuttig als bijvoorbeeld de knooppunten in hetzelfde netwerk achter de NAVO zitten.","SaveConfig":"Configuratie Opslaan","SavePublicKey":"Publieke Sleutel Opslaan","DeploymentInstruction":"Op deze node te deployen, installeer PufferPanel op de nieuwe server en plaats het config bestand in `/etc/pufferpanel`<br/>Herstart PufferPanel op de nieuwe server daarna.","UpdateSuccess":"Node succesvol geüpdatet","UpdateError":"Fout bij het updaten van de node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "89c5": function(e) {
        e.exports = JSON.parse('{"Settings":"Nastavení","PanelSettings":"Nastavení panelu","EmailSettings":"Nastavení e-mailu","MasterUrl":"Hlavní URL","MasterUrlHint":"Základní URL adresa, na které může být dostupný panel ve formátu http://localhost:8080","CompanyName":"Název společnosti","DefaultTheme":"Výchozí vzhled","RegistrationEnabled":"Povolit uživatelům registraci","RegistrationEnabledHint1":"Registrovaní uživatelé nemohou nic dokud nemají povolení","RegistrationEnabledHint2":"Vypnutí zabraňuje pouze přímé registraci, pozvání na server a uživetelská stránka není ovlivněna","EmailProvider":"Poskytovatel e-mailu","emailProviders":{"none":"Není","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Adresa odesílatele","domain":"Doména","key":"API klíč","host":"Hostitel","username":"Uživatelské jméno","password":"Heslo"}}')
    },
    "8b75": function(e) {
        e.exports = JSON.parse('{"Users":"Brukere","Add":"Legg til bruker","AccountSettings":"Kontoinnstillinger","OldPassword":"Gammelt passord","NewPassword":"Nytt passord","ConfirmPassword":"Bekreft passord","ChangePassword":"Endre passord","ChangeInfo":"Endre kontoinformasjon","InfoChanged":"Din informasjon er endret","PasswordChanged":"Passordet ditt har blitt endret","AccountPassword":"Konto passord","Account":"Konto","Login":"Logg Inn","LoginLink":"Eller logg inn her","Logout":"Logg ut","Register":"Registrer","RegisterLink":"Eller registrer deg her","RegisterSuccess":"Du har blitt registrert","NoEmailGiven":"Du må oppgi e-posten til brukeren du vil legge til","Username":"Brukernavn","Password":"Passord","Email":"E-post","Edit":"Rediger bruker","Update":"Oppdater bruker","Delete":"Slett bruker","CreateSuccess":"Bruker ble opprettet","CreateError":"Kunne ikke opprette bruker","UpdateSuccess":"Oppdatert bruker","UpdateError":"Kunne ikke oppdatere bruker","PermsUpdateError":"Kunne ikke oppdatere brukertillatelser","Otp":"Tofaktorautentisering","OtpEnable":"Aktiver 2FA","OtpDisable":"Deaktiver 2FA","OtpHint":"To-faktor autentisering legger til et ekstra lag sikkerhet på kontoen din ved å kreve mer enn bare et passord for å logge inn.","OtpSetup":"2FA oppsett","OtpSetupHint":"Skann QR-koden ved å bruke autentiseringsappen din eller kopier den hemmelige koden nedenfor inn i den.","OtpSecret":"Hemmelig kode","OtpConfirm":"Bekreft bruk av en 2FA-kode","OtpNeeded":"2FA kreves"}')
    },
    "8b82": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken","ErrInviteLinkInvalid":"Your invite link appears to be invalid","ErrSavingInviteduser":"There was an error creating your account","ErrDuplicateServerName":"A server with this name already exists","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"Cannot upload folders","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "8cb8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"No hay opciones específicas de entorno para este entorno","docker":{"name":"Docker","image":"Imagen","networkMode":"Modo de red","networkName":"Nombre de red","bindings":"Enlaces","portBindings":"Enlaces de puertos","OutsidePort":"Puerto exterior","InsidePort":"Puerto interior","HostPath":"Ruta del host","ContainerPath":"Ruta del contenedor"},"standard":{"name":"Estándar"},"tty":{"name":"TTY"}}')
    },
    "8e36": function(e, t, a) {
        "use strict";
        var r = a("e0c1")
          , n = a.n(r)
          , i = a("c0c4")
          , o = a.n(i);
        t["a"] = function(e="", t) {
            return o.a.sanitize(n()(e), t)
        }
    },
    "8e54": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Editar node","Add":"Adicionar node","Update":"Atualizar node","Delete":"Remover node","PublicHost":"Host público","PublicPort":"Porta pública","PrivateHost":"Host privada","PrivatePort":"Porta privada","SftpPort":"Porta SFTP","WithPrivateAddress":"Use um host/porta diferente para comunicação de servidor para servidor","WithPrivateAddressHint":"Este endereço separado é usado quando o nó principal precisa se comunicar com o novo nó. Útil, por exemplo, quando os nós estão na mesma rede atrás do NAT.","SaveConfig":"Salvar configuração","SavePublicKey":"Salvar chave pública","DeploymentInstruction":"Para instalar o node, instale o PufferPanel no novo servidor e coloque o arquivo de configuração em `/etc/pufferpanel/`<br/>Reinicie o PufferPanel no novo servidor.","UpdateSuccess":"Node atualizado com sucesso","UpdateError":"Erro ao atualizar o node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "8e6a": function(e) {
        e.exports = JSON.parse('{"FileManager":"Quản lý tập tin","NewFolder":"Thư mục mới","NewFile":"Tập tin mới","LastModified":"Lần chỉnh sửa cuối","ConfirmDelete":"Bạn có chắc bạn muốn xóa tệp này không?","Upload":"Tải lên","Download":"Tải xuống","Size":"Kích cỡ","NoFiles":"Chưa có tập tin nào ở đây, hãy tạo thêm bằng cách nhấn nút Cài đặt ở đầu trang","FileLoadFailed":"Lỗi khi tải tập tin","Refresh":"Làm mới","CreateFile":"Tạo tập tin","CreateFolder":"Tạo thư mục","ArchiveCurrentFolder":"Tạo tập tin nén tại thư mục hiện hành","ArchiveFolder":"Tạo tập tin nén tại thư mục","ExtractArchive":"Giải nén","DropToUpload":"Kéo các tệp vào đây để tải lên"}')
    },
    "8fe7": function(e, t, a) {
        "use strict";
        a("96b1")
    },
    9047: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Der er ingen miljøspecifikke indstillinger for dette miljø","docker":{"name":"Docker","image":"Billede","networkMode":"Netværks tilstand","networkName":"Netværksnavn","bindings":"Bindinger","portBindings":"Port Bindinger","OutsidePort":"Extern Port","InsidePort":"Intern Port","HostPath":"Vært Sti","ContainerPath":"Container Sti"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    9067: function(e, t, a) {
        "use strict";
        a("d0b0")
    },
    "91b3": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "920f": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    9288: function(e) {
        e.exports = JSON.parse('{"Templates":"Šablony","NoTemplates":"Zatím zde nejsou žádné šablony","Deleted":"Šablona odstraněna","New":"Vytvořit novou šablonu","Edit":"Upravit šablonu","Editor":"Editor","Json":"JSON","Display":"Zobrazované jméno","Type":"Typ","Variables":"Proměnné","Install":"Instalovat","AddInstallStep":"Přidat instalační krok","DeleteInstallStep":"Odstranit instalační krok","Description":"Popis","DataType":"Datový typ","DefaultValue":"Výchozí hodnota","Required":"Povinné","UserEditable":"Uživatelé mohou upravovat","Value":"Hodnota","AddOption":"Přidat volbu","AddCommand":"Přidat příkaz","Filename":"Název souboru","Content":"Obsah","Source":"Zdroj","Target":"Cíl","Version":"Verze","ReleaseType":"Typ vydání","AddFile":"Přidat soubor","AddVariable":"Přidat proměnnou","Environment":"Prostředí","Environments":"Prostředí","AddEnvironment":"Přidat prostředí","DefaultEnvironment":"Výchozí prostředí","AddEnvVar":"Přidat proměnnou prostředí","EnvVars":"Proměnné prostředí","DockerImage":"Docker obrazy","SaveSuccess":"Uložené šablony","VarNameNoSpaces":"Název proměnné nemůže být prázdný nebo obsahovat mezery","SupportedEnvironments":"Podporované prostředí","RunConfig":"Spustit konfiguraci","PreHook":"Pre Run Hook","PostHook":"Pre Run Hook","AddPreStep":"Přidat krok před spuštěním","AddPostStep":"Přidat krok po spuštění","DeletePreStep":"Odstranit krok před spuštěním","DeletePostStep":"Přidat krok po spuštění","Shutdown":"Vypnout","Command":"Příkaz","WorkingDirectory":"Pracovní adresář","Arguments":"Parametry","AddArgument":"Přidat parametr","Convert":"Převést","OfferV1Convert":"Tato šablona json vypadá jako šablona pro PufferPanel 1.x, chcete automaticky převést tuto šablonu na šablonu pro PufferPanel 2.x?","import":{"CommunityWarning":"Tyto šablony jsou vytvořeny komunitou a poskytnuty bez jakýchkoliv záruk","OverrideWarning":"VAROVÁNÍ: Importované šablony přepisují existující šablony se stejným ID","Import":"Importovat šablonu","Tooltip":"Importovat šablony z oficiálního úložiště","Select":"Vyberte položky k importování","Started":"Importuji šablony, počkejte prosím chvíli","Successful":"Šablona {template} byla úspěšně importována","NoTemplatesTitle":"Chcete importovat šablony?","NoTemplatesContent":"Momentálně nemáte žádné šablony. Šablony jsou nutné pro vytvoření serverů.<br/>Chcete nyní importovat některé šablony z oficiálního úložiště šablon Pufferpanelu?"},"stop":{"Command":"Příkaz","Signal":"Signál"},"processors":{"download":{"ProcessorName":"Stáhnout","files":"Soubory"},"command":{"ProcessorName":"Spustit příkaz","commands":"Příkazy"},"alterfile":{"ProcessorName":"Změnit soubor","regex":"Hledat jako RegEx","search":"Text na vyhledávání","replace":"Nahradit za"},"writefile":{"ProcessorName":"Zapsat do souboru","text":"Obsah"},"move":{"ProcessorName":"Přesunout soubor","source":"Zdroj","target":"Cíl"},"mkdir":{"ProcessorName":"Vytvořit složku"},"mojangdl":{"ProcessorName":"Stáhnout Minecraft"},"forgedl":{"ProcessorName":"Stáhnout Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Stáhnout Minecraft SpongeForge","releaseType":"Typ vydání"},"fabricdl":{"ProcessorName":"Stáhnout Minecraft Fabric"},"javadl":{"ProcessorName":"Stáhnout Javu","version":"Verze Javy pro instalaci (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Stáhnout hru z platformy Steam","appId":"ID Aplikace"}}}')
    },
    "92a3": function(e) {
        e.exports = JSON.parse('{"ServersView":"可以檢視本台伺服器","ServersEdit":"編輯伺服器","ServersInstall":"安裝伺服器","ServersConsole":"檢視主控台","ServersConsoleSend":"傳送命令至主控台","ServersStop":"停止和強制關閉伺服器","ServersStart":"啟動伺服器","ServersStat":"查看 CPU 與記憶體狀態","ServersFiles":"允許使用 SFTP 存取檔案","ServersFilesGet":"使用檔案管理器檢視與下載檔案","ServersFilesPut":"使用檔案管理器編輯和上傳檔案","ServersEditUsers":"編輯使用者存取這個伺服器","Admin":"管理員 (將會給予所有權限)","ViewServers":"檢視伺服器","CreateServers":"建立新伺服器","DeleteServers":"刪除伺服器","EditServerAdmin":"編輯伺服器設定","ViewNodes":"查看節點","EditNodes":"編輯節點","DeployNodes":"部署新節點","ViewTemplates":"查看範本","EditTemplates":"編輯範本","ViewUsers":"查看所有使用者","EditUsers":"編輯其他使用者","PanelSettings":"Change panel settings"}')
    },
    "92a6": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Onbekende fout","ErrUnknownError":"Onbekende fout","ErrInvalidCredentials":"Ongeldige inloggegevens","ErrServiceNotAvailable":"Service niet beschikbaar","ErrEmailNotConfigured":"Email niet geconfigureerd","ErrTokenInvalid":"Token is ongeldig","ErrClientNotFound":"Cliënt niet gevonden","ErrUserNotFound":"Gebruiker niet gevonden","ErrLoginNotPermitted":"Inloggen niet toegestaan","ErrInvalidTokenState":"Ongeldige tokenstatus","ErrSettingNotConfigured":"{setting} is niet geconfigureerd","ErrNoTemplate":"Geen sjabloon met de naam \'{name}\' is gevonden","ErrServiceInvalidProvider":"{service} ondersteunt {provider} niet","ErrFieldRequired":"{field} is vereist","ErrFieldMustBePrintable":"{field} moet afdrukbare ASCII tekens bevatten","ErrFieldHasURICharacters":"{field} mag geen tekens bevatten die niet gebruikt kunnen worden in URI\'s","ErrFieldIsInvalidHost":"{field} moet een geldig IP of FQDN zijn","ErrFieldIsInvalidIP":"{field} moet een geldig IP zijn","ErrFieldTooLarge":"{field} kan niet groter zijn dan {max}","ErrFieldTooSmall":"{field} kan niet kleiner zijn dan {min}","ErrFieldNotBetween":"{field} moet tussen {min} en {max} liggen","ErrFieldEqual":"{field1} kan niet gelijk zijn aan {field2}","ErrFieldNotEqual":"{field1} is niet gelijk aan {field2}","ErrFieldNotEmail":"{field} is geen geldig e-mailadres","ErrFieldLength":"{field} moet ten minste {length} tekens bevatten","ErrNoPermission":"Je hebt geen toestemming om deze actie uit te voeren","ErrDatabaseNotAvailable":"Database is niet beschikbaar","ErrNoNodes":"Geen nodes beschikbaar","ErrNoTemplates":"Geen sjablonen beschikbaar","ErrPasswordRequirements":"Wachtwoord moet ten minste 8 tekens bevatten","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Wachtwoorden komen niet overeen","ErrSessionTimedOut":"Je sessie is verlopen, log opnieuw in","ErrMissingScope":"Je bent niet bevoegd om deze actie uit te voeren","ErrInvalidJson":"De json gegevens zijn ongeldig","ErrSocketFailed":"De WebSocket verbinding heeft een error aangetroffen! Sommige functies zijn misschien sloom of werken niet","ErrInviteLinkInvalid":"Uw uitnodigings-link is ongeldig","ErrSavingInviteduser":"Er is een fout opgetreden tijdens het maken van uw account","ErrDuplicateServerName":"Een server met deze naam bestaat al","ErrDuplicateNodeName":"Er is al een bestand met deze naam","ErrDirectoryUploadNotSupported":"Kan geen folders uploaden","ErrDockerNotSupported":"Docker wordt niet ondersteund op deze node","ErrMissingBinary":"Missend binair: {expected}","ErrUnsupportedOS":"OS ({actual}) wordt niet ondersteund. Ondersteund OS: {expected}","ErrUnsupportedArch":"Architectuur {actual} wordt niet ondersteund. Ondersteunde Architecturen: {expected}"}')
    },
    9445: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Det finns inga miljöspecifika alternativ för denna miljö","docker":{"name":"Docker","image":"Bild","networkMode":"Nätverksläge","networkName":"Nätverksnamn","bindings":"Bindningar","portBindings":"Portbindningar","OutsidePort":"Port ut","InsidePort":"Port in","HostPath":"Sökväg för värd","ContainerPath":"Sökväg för behållare"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    9459: function(e) {
        e.exports = JSON.parse('{"Node":"Хост","Nodes":"Хосты","Edit":"Редактировать хост","Add":"Добавить хост","Update":"Обновить хост","Delete":"Удалить хост","PublicHost":"Публичный хост","PublicPort":"Публичный порт","PrivateHost":"Приватный хост","PrivatePort":"Приватный порт","SftpPort":"SFTP-порт","WithPrivateAddress":"Используйте другой хост / порт для связи между сервером","WithPrivateAddressHint":"Этот отдельный адрес используется, когда главному узлу необходимо связаться с новым узлом. Полезно, например, когда узлы находятся в одной сети за NAT.","SaveConfig":"Сохранить настройки","SavePublicKey":"Сохранить публичный ключ","DeploymentInstruction":"Чтобы развернуть хост, установите PufferPanel на новый сервер и поместите конфигурационный файл в `/etc/pufferpanel/`<br/>После, перезагрузите PufferPanel на сервере.","UpdateSuccess":"Хост успешно обновлен","UpdateError":"Ошибка при обновлении хоста","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "94f6": function(e) {
        e.exports = JSON.parse('{"Credentials":"Identifiants du client OAuth 2.0","ClientId":"ID du client","ClientSecret":"nom du client secret","NewClientWarning":"Notez la clé du client, après avoir fermé cette boîte de dialogue, elle ne sera plus jamais affichée. La perdre ou l\'oublier rendra ce client complètement inutilisable.","Create":"Créer un nouveau client OAuth2","UnnamedClient":"Client non nommé","Docs":"Trouvez la documentation de l\'API ici","DeleteWarning":"La suppression d\'un client OAuth2 ne peut pas être annulée et un nouveau client ne peut pas être créé avec les mêmes informations d\'identification. Toutes les intégrations utilisant encore ce client seront interrompues après sa suppression.","ConfirmDelete":"Je suis conscient des effets que la suppression de ce client.","Delete":"Supprimer {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"Les clients OAuth2 listés ici héritent de toutes les autorisations de vos comptes","ServerDescription":"Les clients OAuth2 répertoriés ici héritent uniquement des autorisations de vos comptes sur ce serveur"}')
    },
    "954f": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client gegevens","ClientId":"Client ID","ClientSecret":"Client geheim","NewClientWarning":"Noteer de client secret, na het sluiten van dit dialoogvenster wordt het nooit meer getoond. Als u deze verliest of vergeet, wordt deze client volledig onbruikbaar.","Create":"Creeer nieuwe OAuth2 Client","UnnamedClient":"Naamloze OAuth2 Client","Docs":"API Documentaties","DeleteWarning":"Het verwijderen van een OAuth2 client kan niet ongedaan worden gemaakt en een nieuwe client kan ook niet worden gemaakt met dezelfde referenties. Alle integraties die deze client nog gebruikt, breken na de verwijdering.","ConfirmDelete":"Ik ben me bewust van de effecten die het verwijderen van deze OAuth2 cliënt zal hebben en verder wil gaan.","Delete":"{clientName} verwijderen?","Clients":"OAuth2 Clients","AccountDescription":"De vermelde OAuth2 Clients erven al uw account-machtigingen","ServerDescription":"De OAuth2 klanten die hier worden vermeld, erven alleen uw account-machtigingen op deze server"}')
    },
    9560: function(e) {
        e.exports = JSON.parse('{"Templates":"Modele","NoTemplates":"Nu există încă modele aici","Deleted":"Modelul a fost șters","New":"Creaza un model nou","Edit":"Editare model","Editor":"Editor","Json":"JSON","Display":"Nume afișat","Type":"Tip","Variables":"Variabile","Install":"Instalare","AddInstallStep":"Adaugă Pas de Instalare","DeleteInstallStep":"Șterge pasul de instalare","Description":"Descriere","DataType":"Tip date","DefaultValue":"Valoare implicită","Required":"Obligatoriu","UserEditable":"Utilizatorii pot edita","Value":"Valoare","AddOption":"Adaugă o opțiune","AddCommand":"Adăugare comandă","Filename":"Nume fișier","Content":"Conţinut","Source":"Sursă","Target":"Destinație","Version":"Versiune","ReleaseType":"Tip lansare","AddFile":"Adauga fisier","AddVariable":"Adaugă variabilă","Environment":"Environment","Environments":"Environment","AddEnvironment":"Adaugă environment","DefaultEnvironment":"Mediu implicit","AddEnvVar":"Adaugă variabilă","EnvVars":"Variabile de mediu","DockerImage":"Imagine Docker","SaveSuccess":"Vezi template-uri","VarNameNoSpaces":"Un nume de variabilă nu poate fi gol sau conține spații","SupportedEnvironments":"Medii suportate","RunConfig":"Rulează configurația","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Adaugă Pre Rulează Pasul","AddPostStep":"Adaugă Post Run Pas","DeletePreStep":"Șterge Pre Rulează Pasul","DeletePostStep":"Ştergeţi pasul de instalare","Shutdown":"Oprește","Command":"Comandă","WorkingDirectory":"Directorul de lucru","Arguments":"Argumente","AddArgument":"Adaugă un argument","Convert":"Transformă","OfferV1Convert":"Acest template json arată ca un template pentru PufferPanel 1.x, doriţi să convertiţi automat acest template într-un template pentru PufferPanel 2.x?","import":{"CommunityWarning":"Aceste modele sunt făcute de comunitate și sunt furnizate fără garanția că funcționează așa cum crezi","OverrideWarning":"AVERTISMENT: Template-urile importate vor suprascrie template-urile existente cu același ID","Import":"Importă template-uri","Tooltip":"Importați template-uri din repository","Select":"Selectați template-uri de importat","Started":"Se importa template-urile, va rugam asteptati un moment","Successful":"Template importat cu succes {template}","NoTemplatesTitle":"Doriți să importați template-uri?","NoTemplatesContent":"În prezent nu aveți nici un template. Template-urile sunt necesare pentru a crea servere.<br/>Doriţi să importaţi câteva template-uri din PufferPanel acum?"},"stop":{"Command":"Comandă","Signal":"Semnal"},"processors":{"download":{"ProcessorName":"Descarcă","files":"Fişiere"},"command":{"ProcessorName":"Rulează comanda","commands":"Comenzi"},"alterfile":{"ProcessorName":"Schimbă fişierul","regex":"Tratează căutarea ca RegEx","search":"Text căutare","replace":"Înlocuiește cu"},"writefile":{"ProcessorName":"Scrie în fișier","text":"Conţinut"},"move":{"ProcessorName":"Muta fisier","source":"Sursă","target":"Destinație"},"mkdir":{"ProcessorName":"Crează director"},"mojangdl":{"ProcessorName":"Descarcă Minecraft"},"forgedl":{"ProcessorName":"Descarcă Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Descarcă Minecraft SpongeForge","releaseType":"Tip versiune"},"fabricdl":{"ProcessorName":"Descarcă Tesatura Minecraft"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    "96b1": function(e, t, a) {},
    "96fa": function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    9716: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-select", e._g({
                attrs: {
                    id: e.id,
                    value: e.value,
                    outlined: "outlined" === e.lookValue,
                    solo: "solo" === e.lookValue,
                    filled: "filled" === e.lookValue,
                    flat: e.flat,
                    autofocus: e.autofocus,
                    dense: e.dense,
                    disabled: e.disabled,
                    "item-text": e.itemText,
                    "item-value": e.itemValue,
                    items: e.items,
                    label: e.label,
                    "hide-details": e.hideDetails && !e.showHint,
                    "persistent-hint": e.showHint,
                    hint: e.hintValue,
                    "error-messages": e.errorMessages,
                    "prepend-inner-icon": e.icon,
                    "append-icon": e.endIcon,
                    "append-outer-icon": e.iconBehind,
                    placeholder: e.placeholder,
                    required: e.required,
                    name: e.name,
                    "no-data-text": e.noDataText
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            }, e.listeners), [e._l(e.$slots, (function(t, a) {
                return e._t(a, null, {
                    slot: a
                })
            }
            ))], 2)
        }
          , n = [];
        const i = ["outlined", "solo", "solo-flat", "filled", "material"];
        var o = {
            props: {
                autofocus: {
                    type: Boolean,
                    default: ()=>!1
                },
                dense: {
                    type: Boolean,
                    default: ()=>!1
                },
                disabled: {
                    type: Boolean,
                    default: ()=>!1
                },
                endIcon: {
                    type: String,
                    default: ()=>{}
                },
                errorMessages: {
                    type: String,
                    default: ()=>{}
                },
                hint: {
                    type: String,
                    default: ()=>{}
                },
                icon: {
                    type: String,
                    default: ()=>{}
                },
                iconBehind: {
                    type: String,
                    default: ()=>{}
                },
                id: {
                    type: String,
                    default: ()=>{}
                },
                itemText: {
                    type: String,
                    default: ()=>{}
                },
                itemValue: {
                    type: String,
                    default: ()=>{}
                },
                items: {
                    type: Array,
                    required: !0
                },
                label: {
                    type: String,
                    default: ()=>{}
                },
                name: {
                    type: String,
                    default: ()=>{}
                },
                noDataText: {
                    type: String,
                    default: ()=>{}
                },
                placeholder: {
                    type: String,
                    default: ()=>{}
                },
                required: {
                    type: Boolean,
                    default: ()=>!1
                },
                look: {
                    type: String,
                    validator: e=>-1 !== i.indexOf(e),
                    default: ()=>{}
                },
                value: {
                    type: void 0,
                    required: !0
                }
            },
            computed: {
                listeners() {
                    const {input: e, ...t} = this.$listeners;
                    return t
                },
                hideDetails() {
                    const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                    return !e
                },
                showHint() {
                    const e = void 0 !== this.hint && "" !== this.hint
                      , t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                    return e || t
                },
                lookValue() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return e.split("-")[0]
                },
                flat() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return -1 !== e.split("-").indexOf("flat")
                },
                hintValue() {
                    return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("b974")
          , m = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = m.exports;
        u()(m, {
            VSelect: c["a"]
        })
    },
    "9a18": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"No hay opciones específicas de entorno para este entorno","docker":{"name":"Docker","image":"Imagen","networkMode":"Modo de red","networkName":"Nombre de red","bindings":"Enlaces","portBindings":"Enlaces de puertos","OutsidePort":"Puerto exterior","InsidePort":"Puerto interior","HostPath":"Ruta del host","ContainerPath":"Ruta del contenedor"},"standard":{"name":"Estandar"},"tty":{"name":"TTY"}}')
    },
    "9a68": function(e) {
        e.exports = JSON.parse('{"Users":"Benutzer","Add":"Neuer Benutzer","AccountSettings":"Kontoeinstellungen","OldPassword":"Altes Passwort","NewPassword":"Neues Passwort","ConfirmPassword":"Passwort bestätigen","ChangePassword":"Passwort ändern","ChangeInfo":"Kontodaten ändern","InfoChanged":"Deine Kontoinformationen wurden geändert","PasswordChanged":"Dein Passwort wurde geändert","AccountPassword":"Konto-Passwort","Account":"Benutzerkonto","Login":"Anmelden","LoginLink":"Oder melde dich hier an","Logout":"Abmelden","Register":"Registrieren","RegisterLink":"Oder registriere dich hier","RegisterSuccess":"Du hast dich erfolgreich registriert","NoEmailGiven":"Sie müssen die E-Mail des Benutzers angeben, den Sie hinzufügen möchten","Username":"Nutzername","Password":"Passwort","Email":"Email","Edit":"Benutzer bearbeiten","Update":"Benutzer aktualisieren","Delete":"Benutzer löschen","CreateSuccess":"Benutzer erfolgreich erstellt","CreateError":"Fehler beim Erstellen des Benutzers","UpdateSuccess":"Benutzer aktualisiert","UpdateError":"Fehler beim Aktualisieren des Benutzers","PermsUpdateError":"Fehler beim Aktualisieren der Benutzerberechtigungen","Otp":"Zwei-Faktor-Authentifizierung","OtpEnable":"2FA aktivieren","OtpDisable":"2FA deaktivieren","OtpHint":"Zwei-Faktor-Authentifizierung fügt Ihrem Konto eine zusätzliche Sicherheitsstufe hinzu, da mehr als nur ein Passwort benötigt wird, um sich anzumelden.","OtpSetup":"2FA Einrichten","OtpSetupHint":"Scannen Sie den QR-Code mit Ihrer Authenticator-Anwendung oder kopieren Sie den untenstehenden Geheimcode hinein.","OtpSecret":"Geheimcode","OtpConfirm":"Bestätigung für die Nutzung der 2FA","OtpNeeded":"2FA erforderlich"}')
    },
    "9a8d": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nimi","Address":"Osoite","Online":"Päällä","Offline":"Poissa päältä","Loading":"Ladataan...","General":"Yleinen","Language":"Kieli","SelectLanguage":"Valitse Kieli","Settings":"Asetukset","Update":"Päivitä","Edit":"Muokkaa","Delete":"Poista","Create":"Luo","Save":"Tallenna","Saved":"Tallennettu","SaveFailed":"Tallennus epäonnistui","Cancel":"Peruuta","Confirm":"Vahvista","Actions":"Toiminnot","Host":"Isäntä","Port":"Portti","Template":"Sivupohja","Options":"Asetukset","Collapse":"Piilota","Copied":"Kopioitu leikepöydälle","Unknown":"Tuntematon","Search":"Hae","Back":"Takaisin","Next":"Seuraava","LanguageName":"Suomi","Details":"Lisätiedot","ErrorDetails":"Virheen Tiedot","HelpTranslate":"Auta meitä kääntämään PufferPanelia","DarkMode":"Tumma Tila","ThemeOptions":"Teema-asetukset","Protocol":"Protokolla","Add":"Lisää","Ignore":"Ohita","Monday":"Maanantai","Tuesday":"Tiistai","Wednesday":"Keskiviikko","Thursday":"Torstai","Friday":"Perjantai","Saturday":"Lauantai","Sunday":"Sunnuntai","Description":"Kuvaus"}')
    },
    "9acc": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users","PanelSettings":"Change panel settings"}')
    },
    "9ba7": function(e) {
        e.exports = JSON.parse('{"Node":"שרת","Nodes":"שרתים","Edit":"ערוך שרת","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "9c61": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"تعديل ال Nodes","Add":"إضافة Node","Update":"تحديث ال Node","Delete":"حذف ال Node","PublicHost":"مضيف عام","PublicPort":"منفذ عام","PrivateHost":"مضيف خاص","PrivatePort":"منفذ خاص","SftpPort":"منفذ SFTP","WithPrivateAddress":"استخدم host/port آخر للخادم للإتصال به","WithPrivateAddressHint":"هذا العنوان المنفصل يستخدم عندما النود الرئيسي يحتاج للتحدث (مخاطبة) النود الجديد. مفيدة على سبيل المثال عندما النود يوجد في نفس الشبكة خلف NAT.","SaveConfig":"حفظ الاعدادات","SavePublicKey":"حفظ المفتاح العام","DeploymentInstruction":"لنشر ال Node ، قم بتثبيت لوحة تحكم بافر بانل على الخادم الجديد و ضع ملف الإعدادات في\\n`/etc/pufferpanel/` <br/> قم بإعادة تشغيل لوحة تحكم بافر بنل على الخادم الجديد بعد ذلك.","UpdateSuccess":"تم تحديث ال Node بنجاح","UpdateError":"حدث خطأ أثناء تحديث ال Node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    "9da9": function(e) {
        e.exports = JSON.parse('{"Server":"伺服器","NoServers":"你沒有權限存取這些伺服器","Servers":"伺服器","Add":"添加伺服器","Console":"主控台","Controls":"控制項","SFTPInfo":"SFTP資訊","Restart":"重新啟動","Start":"啟動","Stop":"停止","Kill":"終止","Install":"安裝","Send":"傳送","Pause":"暫停","Statistics":"Statistics","CPU":"CPU","Memory":"記憶體","Files":"Files","Name":"伺服器名稱","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"請選擇節點","SelectTemplate":"請選擇範本","SelectThisTemplate":"使用此範本","SelectUser":"請選擇用戶","Environment":"環境","SelectEnvironment":"請選擇環境","TypeUsername":"輸入用戶名稱","Admin":"Admin","AdminControls":"管理員控制項","Settings":"設定","NoEditableVars":"這伺服器沒有任何變數可編輯","ConfirmDelete":"你確認要刪除此伺服器? (此動作無法撤消)","Delete":"刪除伺服器","Deleted":"刪除伺服器","NoReadme":"此範本沒有可用的自述文件","SftpConnection":"連接至SFTP","EditDefinition":"Edit Server Definition","Reload":"從磁碟重新加載數據","Reloaded":"重新加載伺服器數據","Autostart":"節點啟動時啟動伺服器","Autorestart":"正常停止時重新啟動伺服器","Autorecover":"崩潰時重新啟動伺服器","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    "9dd4": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"此环境暂无附加选项","docker":{"name":"Docker","image":"镜像","networkMode":"网络模式","networkName":"网络名称","bindings":"绑定","portBindings":"端口绑定","OutsidePort":"外部端口","InsidePort":"内部端口","HostPath":"主机路径","ContainerPath":"容器路径"},"standard":{"name":"标准"},"tty":{"name":"TTY"}}')
    },
    "9de9": function(e) {
        e.exports = JSON.parse('{"Server":"Сервера","NoServers":"Немає серверів, до яких ви маєте доступ","Servers":"Сервери","Add":"Додати сервер","Console":"Термінал","Controls":"Управління","SFTPInfo":"Відомості про SFTP","Restart":"Перезавантажити","Start":"Запустити","Stop":"Остановити","Kill":"Вбити","Install":"Встановити","Send":"Надіслати","Pause":"Пауза","Statistics":"Статистика","CPU":"ЦП","Memory":"Пам\'ять","Files":"Файли","Name":"Ім\'я сервера","NameInvalid":"Ім\'я сервера не може бути пустим або містити спеціальні символи","SelectNode":"Будь ласка, виберіть вузол","SelectTemplate":"Будь ласка, оберіть шаблон","SelectThisTemplate":"Використовувати цей шаблон","SelectUser":"Будь ласка, виберіть користувача","Environment":"Середовище","SelectEnvironment":"Будь ласка, оберіть середовище","TypeUsername":"Введіть ім\'я користувача","Admin":"Адміністратор","AdminControls":"Керування адміністраторами","Settings":"Налаштування","NoEditableVars":"Цей сервер не має змінних, ви можете редагувати","ConfirmDelete":"Ви дійсно бажаєте видалити цей сервер? (це не можна скасувати)","Delete":"Видалити сервер","Deleted":"Сервер був видален","NoReadme":"Шаблон не доступний для читання","SftpConnection":"Підключення до SFTP","EditDefinition":"Редагувати визначення сервера","Reload":"Перезавантажити дані з диска","Reloaded":"Перезавантаження даних сервера","Autostart":"Запустити сервер при запуску вузла","Autorestart":"Перезапустити сервер, коли він завершується нормально","Autorecover":"Перезапустити сервер, коли він аварійно завершується","Rename":"Перейменувати сервер","Tasks":"Задачі","NoTasks":"Немає задач","RunTask":"Запустити завдання","NewTask":"Нове завдання","EditTask":"Редагувати завдання","TaskDeleted":"Завдання видалено","TaskTriggered":"Завдання завершене","EnableSchedule":"Запускати завдання автоматично","TaskScheduleInvalid":"Розклад завдання недійсний","TaskScheduleManual":"Тільки ручний запуск","CronExpression":"Команда планувальника завдань","Hourly":"Погодинно","Daily":"Щоденно","Weekly":"Щотижня","Monthly":"Щомісячно","Advanced":"Додатково","HourlyTab":"Кожні {hourInterval} годин за хвилину {minute}","DailyTab":"Кожні {dayInterval} днів о {hour}:{minute}","WeeklyTab":"Кожні {weekdays} в {hour}:{minute}","MonthlyTab":"Кожні {monthInterval} місяців {day} день о {hour}.:{minute}"}')
    },
    "9e7c": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Eroare necunoscută","ErrUnknownError":"Eroare necunoscută","ErrInvalidCredentials":"Datele de autentificare sunt invalide","ErrServiceNotAvailable":"Serviciul nu este disponibil","ErrEmailNotConfigured":"E-mail-ul nu este configurat","ErrTokenInvalid":"Token-ul nu este valid","ErrClientNotFound":"Clientul nu a fost găsit","ErrUserNotFound":"Utilizatorul nu a fost găsit","ErrLoginNotPermitted":"Autentificarea nu este permisă","ErrInvalidTokenState":"Coduri de autorizare nevalide","ErrSettingNotConfigured":"{setting} nu este configurat","ErrNoTemplate":"Nu a fost gasit un template cu numele \'{name}\'","ErrServiceInvalidProvider":"{service} nu acceptă {provider}","ErrFieldRequired":"{field} este necesar","ErrFieldMustBePrintable":"{field} trebuie să poată imprima caractere ascii","ErrFieldHasURICharacters":"{field} nu trebuie să conțină caractere care nu pot fi utilizate în URI-uri","ErrFieldIsInvalidHost":"{field} trebuie să fie un IP valid sau FQDN","ErrFieldIsInvalidIP":"{field} trebuie să fie un IP valid","ErrFieldTooLarge":"{field} nu poate fi mai mare decât {max}","ErrFieldTooSmall":"{field} nu poate fi mai mic de {min}","ErrFieldNotBetween":"{field} trebuie să fie între {min} și {max}","ErrFieldEqual":"{field1} nu poate fi egal cu {field2}","ErrFieldNotEqual":"{field1} nu poate fi egal cu {field2}","ErrFieldNotEmail":"{field} nu este un e-mail valid","ErrFieldLength":"{field} trebuie să aibă cel puțin {length} caractere","ErrNoPermission":"Nu ai permisiunea să faci această acțiune","ErrDatabaseNotAvailable":"Baza de date nu este disponibilă","ErrNoNodes":"Niciun node disponibil","ErrNoTemplates":"Niciun template disponibil","ErrPasswordRequirements":"Parola trebuie să aibă cel puțin 8 caractere","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Parolele nu sunt identice","ErrSessionTimedOut":"Sesiunea ta a expirat, te rugăm să te autentifici din nou","ErrMissingScope":"Nu sunteți autorizat să efectuați această acțiune","ErrInvalidJson":"Datele json nu sunt valide","ErrSocketFailed":"Conexiunea WebSocket a întâmpinat o eroare, unele caracteristici pot fi lente sau defecte","ErrInviteLinkInvalid":"Link-ul tău de invitație pare a fi invalid","ErrSavingInviteduser":"A apărut o eroare la crearea contului tău","ErrDuplicateServerName":"Un server cu acest nume există deja","ErrDuplicateNodeName":"Un node cu acest nume există deja","ErrDirectoryUploadNotSupported":"Nu se pot încărca fişierele","ErrDockerNotSupported":"Docker nu este suportat pe acest node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    "9e9f": function(e) {
        e.exports = JSON.parse('{"Templates":"Modèles","NoTemplates":"Il n\'y a pas encore de modèle ici","Deleted":"Modèle supprimé","New":"Créer un nouveau modèle","Edit":"Éditer le modèle","Editor":"Éditeur","Json":"JSON","Display":"Nom","Type":"Type","Variables":"Variables","Install":"Installer","AddInstallStep":"Ajouter une étape d\'Installation","DeleteInstallStep":"Supprimer l\'étape d\'Installation","Description":"Description","DataType":"Type de données","DefaultValue":"Valeur par défaut","Required":"Obligatoire","UserEditable":"Les utilisateurs peuvent modifier","Value":"Valeur","AddOption":"Ajouter une option","AddCommand":"Ajouter une commande","Filename":"Nom du fichier","Content":"Contenu","Source":"Source","Target":"Destination","Version":"Version","ReleaseType":"Type de version","AddFile":"Ajouter un fichier","AddVariable":"Ajouter une variable","Environment":"Environnement","Environments":"Environnements","AddEnvironment":"Ajouter un environnement","DefaultEnvironment":"Environnement par défaut","AddEnvVar":"Ajouter une nouvelle variable d\'environnement","EnvVars":"Variables d\'environnement","DockerImage":"Image Docker","SaveSuccess":"Modèles enregistrés","VarNameNoSpaces":"Un nom de variable ne peut pas être vide ou contenir des espaces","SupportedEnvironments":"Environnements supportés","RunConfig":"Configuration d\'Exécution","PreHook":"Avant-exécution","PostHook":"Après-exécution","AddPreStep":"Ajouter une étape de pré-exécution","AddPostStep":"Ajouter une étape d\'après-exécution","DeletePreStep":"Supprimer l\'étape d\'avant-exécution","DeletePostStep":"Supprimer l\'étape d\'après-exécution","Shutdown":"Arrêter","Command":"Commande","WorkingDirectory":"Dossier de travail","Arguments":"Arguments","AddArgument":"Ajouter un argument","Convert":"Convertir","OfferV1Convert":"Ce modèle json ressemble à un modèle pour PufferPanel 1.x, voulez-vous le convertir automatiquement en un modèle pour PufferPanel 2.x ?","import":{"CommunityWarning":"Ces modèles sont réalisés par la communauté et sont fournis sans garantie","OverrideWarning":"AVERTISSEMENT : Les modèles importés VONT remplacer les modèles existants avec le même identifiant","Import":"Importer des modèles","Tooltip":"Importer des modèles depuis le dépôt officiel","Select":"Sélectionner les modèles à importer","Started":"Importation des modèles, merci de patienter un moment","Successful":"Modèle importé avec succès {template}","NoTemplatesTitle":"Souhaitez-vous importer des modèles ?","NoTemplatesContent":"Vous n\'avez actuellement aucun modèle. Les modèles sont nécessaires pour créer des serveurs.<br/>Souhaitez-vous importer des modèles depuis le dépôt officiel des modèles de PufferPanel maintenant ?"},"stop":{"Command":"Commande","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Télécharger","files":"Fichiers"},"command":{"ProcessorName":"Commande d’exécution","commands":"Commandes"},"alterfile":{"ProcessorName":"Changer le fichier","regex":"Traiter la recherche comme RegEx","search":"Texte à rechercher","replace":"Remplacer par"},"writefile":{"ProcessorName":"Écrire dans un fichier","text":"Contenus"},"move":{"ProcessorName":"Déplacer un fichier","source":"Source","target":"Cible"},"mkdir":{"ProcessorName":"Créer un répertoire"},"mojangdl":{"ProcessorName":"Télécharger Minecraft"},"forgedl":{"ProcessorName":"Télécharger Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Télécharger Minecraft SpongeForge","releaseType":"Type de version"},"fabricdl":{"ProcessorName":"Télécharger Minecraft Fabric"},"javadl":{"ProcessorName":"Télécharger Java","version":"Version de Java à installer (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Télécharger un jeu Steam","appId":"Identifiant de l\'application"}}}')
    },
    "9f41": function(e) {
        e.exports = JSON.parse('{"FileManager":"Файловий менеджер","NewFolder":"Нова папка","NewFile":"Новий файл","LastModified":"Востаннє змінено","ConfirmDelete":"Ви дійсно бажаєте видалити цей файл?","Upload":"Вивантажити","Download":"Завантажити","Size":"Розмір","NoFiles":"Тут ще немає жодного файлу, будь ласка, створіть декілька для прикладу, натиснувши кнопку встановлення у верхній частині сторінки","FileLoadFailed":"Помилка завантаження файлу","Refresh":"Оновити","CreateFile":"Створити файл","CreateFolder":"Створити папку","ArchiveCurrentFolder":"Створити архів із поточної папки","ArchiveFolder":"Створити архів із папки","ExtractArchive":"Розпакувати архів","DropToUpload":"Киньте файли сюди, щоб завантажити їх"}')
    },
    a243: function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"Não há nenhum servidor que você tenha acesso","Servers":"Servidores","Add":"Adicionar servidor","Console":"Console","Controls":"Controles","SFTPInfo":"Informações do SFTP","Restart":"Reiniciar","Start":"Iniciar","Stop":"Parar","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","Statistics":"Estatísticas","CPU":"CPU","Memory":"Memória","Files":"Arquivos","Name":"Nome do Servidor","NameInvalid":"O nome do servidor não pode estar em branco ou conter caracteres especiais","SelectNode":"Por favor, selecione um node","SelectTemplate":"Por favor, selecione um modelo","SelectThisTemplate":"Use este modelo","SelectUser":"Por favor, selecione um usuário","Environment":"Ambiente","SelectEnvironment":"Por favor, selecione um ambiente","TypeUsername":"Digite um nome de usuário","Admin":"Administração","AdminControls":"Controles da Administração","Settings":"Configurações","NoEditableVars":"Esse servidor não tem variáveis que você possa editar","ConfirmDelete":"Você quer mesmo excluir esse servidor? (isso não pode ser desfeito)","Delete":"Excluir servidor","Deleted":"Servidor deletado","NoReadme":"Não existe um readme disponível para esse modelo","SftpConnection":"Conectar ao SFTP","EditDefinition":"Editar configurações do servidor","Reload":"Recarregar dados do servidor do disco","Reloaded":"Dados do servidor recarregados","Autostart":"Iniciar o servidor junto com o node","Autorestart":"Reiniciar o servidor ao desligar","Autorecover":"Reiniciar o servidor ao crashar","Rename":"Renomear o servidor","Tasks":"Tarefas","NoTasks":"Não há tarefas","RunTask":"Executar tarefa","NewTask":"Nova tarefa","EditTask":"Editar tarefa","TaskDeleted":"Tarefa excluída","TaskTriggered":"Tarefa acionada","EnableSchedule":"Executar tarefa automaticamente","TaskScheduleInvalid":"Agendamento de tarefa inválido","TaskScheduleManual":"Somente execução manual","CronExpression":"Expressão Cron","Hourly":"Por hora","Daily":"Diário","Weekly":"Semanal","Monthly":"Mensal","Advanced":"Avançado","HourlyTab":"A cada {hourInterval} horas no minuto {minute}","DailyTab":"A cada {dayInterval} dias às {hour}:{minute}","WeeklyTab":"A cada {weekdays} às {hour}:{minute}","MonthlyTab":"A cada {monthInterval} meses no dia {day} às {hour}:{minute}"}')
    },
    a43f: function(e) {
        e.exports = JSON.parse('{"Node":"ノード","Nodes":"ノード","Edit":"ノードを編集","Add":"ノードを追加する","Update":"ノードを更新","Delete":"ノードを削除","PublicHost":"公開ホスト","PublicPort":"公開ポート","PrivateHost":"プライベートホスト","PrivatePort":"プライベートポート","SftpPort":"SFTP ポート","WithPrivateAddress":"サーバーとの通信に別のホスト/ポートを使用する","WithPrivateAddressHint":"この別のアドレスは、メインノードが新しいノードと通信する必要がある場合使用されます。例えば、NATの後ろでノードが同じネットワークにある場合便利です。","SaveConfig":"設定を保存","SavePublicKey":"公開鍵を保存","DeploymentInstruction":"ノードをデプロイするには、新しいサーバに PufferPanel をインストールし、`/etc/pufferpanel/` にconfig ファイルを配置します。<br/>その後、新しいサーバで PufferPanel を再起動します。","UpdateSuccess":"ノードは正常に更新されました","UpdateError":"ノードの更新中にエラーが発生しました","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    a45f: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nom","Address":"Adresse","Online":"En ligne","Offline":"Hors-ligne","Loading":"Chargement ...","General":"Général","Language":"Langue","SelectLanguage":"Sélectionner une langue","Settings":"Paramètres","Update":"Mise à jour","Edit":"Éditer","Delete":"Supprimer","Create":"Créer","Save":"Sauvegarder","Saved":"Sauvegardé","SaveFailed":"Échec de la sauvegarde","Cancel":"Annuler","Confirm":"Confirmer","Actions":"Actions","Host":"Hôte","Port":"Port","Template":"Modèle","Options":"Options","Collapse":"Réduire","Copied":"Copié dans le presse-papier","Unknown":"Inconnu","Search":"Rechercher","Back":"Précédent","Next":"Suivant","LanguageName":"Français","Details":"Détails","ErrorDetails":"Détails de l\'erreur","HelpTranslate":"Aidez-nous à traduire PufferPanel","DarkMode":"Mode sombre","ThemeOptions":"Options du thème","Protocol":"Protocole","Add":"Ajouter","Ignore":"Ignorer","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi","Sunday":"Dimanche","Description":"Description"}')
    },
    a566: function(e) {
        e.exports = JSON.parse('{"FileManager":"ファイル管理","NewFolder":"新しいフォルダー","NewFile":"新しいファイル","LastModified":"最終更新日時","ConfirmDelete":"このファイルを削除してもよろしいですか？","Upload":"アップロード","Download":"ダウンロード","Size":"サイズ","NoFiles":"ファイルがありません。ページ上部のインストールボタンをクリックするなどしてファイルを作成してください","FileLoadFailed":"ファイルの読み込みに失敗しました","Refresh":"更新","CreateFile":"ファイルを作成","CreateFolder":"フォルダを作成","ArchiveCurrentFolder":"現在のフォルダからアーカイブを作成","ArchiveFolder":"フォルダからアーカイブを作成","ExtractArchive":"アーカイブを展開","DropToUpload":"ここへファイルをドラッグしてアップロード"}')
    },
    a630: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Lỗi không xác định","ErrUnknownError":"Lỗi không xác định","ErrInvalidCredentials":"Thông tin đăng nhập không hợp lệ","ErrServiceNotAvailable":"Dịch vụ không khả dụng","ErrEmailNotConfigured":"Email chưa được đặt","ErrTokenInvalid":"Token không hợp lệ","ErrClientNotFound":"Không tìm thấy máy khách","ErrUserNotFound":"Không tìm thấy người dùng","ErrLoginNotPermitted":"Đăng nhập bị hạn chế","ErrInvalidTokenState":"Trạng thái Token không hợp lệ","ErrSettingNotConfigured":"{setting} chưa được hiệu chỉnh","ErrNoTemplate":"Không tìm thấy mẫu với tên \'{name}\'","ErrServiceInvalidProvider":"{service} không hỗ trợ {provider}","ErrFieldRequired":"Bắt buộc phải có {field}","ErrFieldMustBePrintable":"{field} cần chứa ký tự ascii hiển thị được","ErrFieldHasURICharacters":"{field} không được chứa kí tự không thể sử dụng trong URI","ErrFieldIsInvalidHost":"{field} phải là IP hoặc Tên Miền Đầy Đủ (FQDN) hợp lệ","ErrFieldIsInvalidIP":"{field} phải là IP hợp lệ","ErrFieldTooLarge":"{field} không thể dài hơn {max}","ErrFieldTooSmall":"{field} không thể ngắn hơn {min}","ErrFieldNotBetween":"{field} phải chứa từ {min} đến {max} kí tự","ErrFieldEqual":"{field1} không thể bằng {field2}","ErrFieldNotEqual":"{field1} không bằng {field2}","ErrFieldNotEmail":"{field} không phải email hợp lệ","ErrFieldLength":"{field} phải dài ít nhất {length} ký tự","ErrNoPermission":"Bạn không có quyền thực hiện hành động này","ErrDatabaseNotAvailable":"Cơ sở dữ liệu không khả dụng","ErrNoNodes":"Không có Node sẵn có","ErrNoTemplates":"Không tìm thấy mẫu nào","ErrPasswordRequirements":"Mật khẩu phải có ít nhất 8 ký tự","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Mật khẩu không khớp","ErrSessionTimedOut":"Phiên làm việc hết hạn. Xin vui lòng đăng nhập lại","ErrMissingScope":"Bạn không có quyền để thực hiện hành động này","ErrInvalidJson":"Dữ liệu JSON không hợp lệ","ErrSocketFailed":"Lỗi kết nối WebSocket, một số tính năng sẽ chậm hoặc không hoạt động","ErrInviteLinkInvalid":"Link mời của bạn không hợp lệ","ErrSavingInviteduser":"Đã có lỗi khi tạo tài khoản của bạn","ErrDuplicateServerName":"Máy chủ với tên này đã tồn tại","ErrDuplicateNodeName":"Node với tên này đã tồn tại","ErrDirectoryUploadNotSupported":"Không thể tải thư mục lên","ErrDockerNotSupported":"Node này không hỗ trợ Docker","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    a654: function(e) {
        e.exports = JSON.parse('{"Users":"Pengguna","Add":"Tambah Pengguna","AccountSettings":"Pengaturan akun","OldPassword":"Sandi Lama","NewPassword":"Password Baru","ConfirmPassword":"Konfirmasi Sandi","ChangePassword":"Ubah Kata Sandi","ChangeInfo":"Ubah Detail Akun","InfoChanged":"Informasi Anda telah diubah","PasswordChanged":"Kata sandi Anda telah diubah","AccountPassword":"Sandi akun","Account":"Akun","Login":"Masuk","LoginLink":"Atau login di sini","Logout":"Keluar","Register":"Daftar","RegisterLink":"Atau daftar di sini","RegisterSuccess":"Berhasil terdaftar","NoEmailGiven":"Anda harus memberikan email pengguna yang ingin Anda tambahkan","Username":"Nama Pengguna","Password":"Kata Sandi","Email":"Email","Edit":"Edit pengguna","Update":"Perbarui Pengguna","Delete":"Hapus pengguna","CreateSuccess":"Pengguna sukses di buat","CreateError":"Gagal membuat pengguna","UpdateSuccess":"Perbarui Pengguna","UpdateError":"Gagal memperbarui pengguna","PermsUpdateError":"Gagal memperbarui ijin pengguna","Otp":"Autentikasi dua langkah","OtpEnable":"Aktifkan 2FA","OtpDisable":"Nonaktifkan 2FA","OtpHint":"Otentikasi dua faktor menambahkan lapisan keamanan tambahan ke akun mu dengan membutuhkan lebih dari sekadar kata sandi untuk masuk.","OtpSetup":"Konfigurasi 2FA","OtpSetupHint":"Pindai kode QR menggunakan aplikasi authenticator Anda atau salin kode rahasia di bawah ini.","OtpSecret":"Kode Rahasia","OtpConfirm":"Konfirmasi menggunakan kode 2FA","OtpNeeded":"Diperlukan 2FA"}')
    },
    a6c2: function(e) {
        e.exports = JSON.parse('{"Templates":"Các mẫu","NoTemplates":"Chưa có mẫu nào ở đây","Deleted":"Mẫu đã xoá","New":"Tạo mẫu mới","Edit":"Chỉnh sửa mẫu","Editor":"Trình chỉnh sửa","Json":"JSON","Display":"Tên hiển thị","Type":"Loại","Variables":"Các tham số","Install":"Cài đặt","AddInstallStep":"Thêm bước cài đặt","DeleteInstallStep":"Xoá bước cài đặt","Description":"Mô tả","DataType":"Kiểu dữ liệu","DefaultValue":"Giá trị mặc định","Required":"Bắt buộc","UserEditable":"Người dùng có thể chỉnh sửa","Value":"Giá trị","AddOption":"Thêm tùy chọn","AddCommand":"Thêm lệnh","Filename":"Tên tập tin","Content":"Nội dung","Source":"Nguồn","Target":"Đích","Version":"Phiên bản","ReleaseType":"Loại phiên bản","AddFile":"Thêm tập tin","AddVariable":"Thêm Tham số","Environment":"Môi trường","Environments":"Các môi trường","AddEnvironment":"Thêm môi trường","DefaultEnvironment":"Môi trường mặc định","AddEnvVar":"Thêm một biến môi trường mới","EnvVars":"Các biến môi trường","DockerImage":"Ảnh Docker","SaveSuccess":"Mẫu đã lưu","VarNameNoSpaces":"Tên biến không thể để trống hoặc chứa khoảng trắng","SupportedEnvironments":"Các môi trường được hỗ trợ","RunConfig":"Chạy cấu hình","PreHook":"Hook trước khởi chạy","PostHook":"Hook sau khởi chạy","AddPreStep":"Thêm bước trước khởi chạy","AddPostStep":"Thêm bước sau khởi chạy","DeletePreStep":"Xoá bước trước khởi chạy","DeletePostStep":"Xoá bước sau khởi chạy","Shutdown":"Tắt","Command":"Lệnh","WorkingDirectory":"Thư mục làm việc","Arguments":"Tham số","AddArgument":"Thêm tham số","Convert":"Chuyển đổi","OfferV1Convert":"Mẫu json này giống như mẫu dành cho PufferPanel 1.x, bạn có muốn tự động chuyển đổi thành mẫu dành cho PufferPanel 2.x?","import":{"CommunityWarning":"Các mẫu này được tạo bởi cộng đồng và được cung cấp với không có bảo đảm nào","OverrideWarning":"CẢNH BÁO: Các mẫu được nhập SẼ ghi đè mẫu có sẵn mà trùng với ID ban đầu","Import":"Nhập mẫu","Tooltip":"Nhập mẫu từ kho lưu trữ chính thức","Select":"Chọn mẫu để nhập vào","Started":"Đang nhập mẫu, xin hãy chờ đợi","Successful":"Đã nhập mẫu {template} thành công","NoTemplatesTitle":"Bạn có muốn nhập các mẫu này không?","NoTemplatesContent":"Hiện giờ bạn chưa có mẫu nào. Cần có các mẫu để tạo máy chủ.<br/>Bạn có muốn nhập mẫu từ kho lưu trữ PufferPanel chính thức không?"},"stop":{"Command":"Lệnh","Signal":"Tín hiệu"},"processors":{"download":{"ProcessorName":"Tải xuống","files":"Tập tin"},"command":{"ProcessorName":"Chạy lệnh","commands":"Các lệnh"},"alterfile":{"ProcessorName":"Thay đổi tập tin","regex":"Coi văn bản tìm kiếm là Biểu thức Chính quy (RegEx)","search":"Tìm kiếm văn bản","replace":"Thay thế bởi"},"writefile":{"ProcessorName":"Ghi dữ liệu vào tệp tin","text":"Nội dung"},"move":{"ProcessorName":"Di chuyển tập tin","source":"Nguồn","target":"Đích"},"mkdir":{"ProcessorName":"Tạo thư mục mới"},"mojangdl":{"ProcessorName":"Tải Minecraft"},"forgedl":{"ProcessorName":"Tải Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Tải Minecraft SpongeForge","releaseType":"Loại phiên bản"},"fabricdl":{"ProcessorName":"Tải Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    a6e0: function(e) {
        e.exports = JSON.parse('{"Credentials":"Credenciales de cliente de OAuth2","ClientId":"ID de cliente","ClientSecret":"Clave secreta","NewClientWarning":"Tenga en cuenta que la clave secreta del cliente, después de cerrar este diálogo nunca se mostrará de nuevo. Perderlo, y olvidarlo hará que este cliente esté completamente inutilizable.","Create":"Crear nuevo cliente OAuth2","UnnamedClient":"Cliente OAuth2 sin nombre","Docs":"Encuentra la documentación de la API aquí","DeleteWarning":"La eliminación de un cliente OAuth2 no se puede deshacer, ni se puede crear un nuevo cliente con las mismas credenciales. Todas las integraciones que todavía utilizan este cliente se romperán después de su eliminación.","ConfirmDelete":"Soy consciente de los efectos que la eliminación de este cliente OAuth2 tendrá y deseo continuar.","Delete":"¿Quieres eliminar {clientName}?","Clients":"Clientes de OAuth2","AccountDescription":"Los clientes de OAuth2 listados aquí heredan todos los permisos de sus cuentas","ServerDescription":"Los clientes de OAuth2 listados aquí solo heredan los permisos de sus cuentas en este servidor"}')
    },
    a785: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", ["boolean" === e.value.type ? a("ui-switch", {
                attrs: {
                    value: e.value.value,
                    required: e.value.required,
                    label: e.value.display
                },
                on: {
                    input: function(t) {
                        return e.onInput(t)
                    }
                }
            }, [a("template", {
                slot: "message"
            }, [a("div", {
                domProps: {
                    innerHTML: e._s(e.markdown(e.value.desc))
                }
            })])], 2) : "option" === e.value.type ? a("ui-select", {
                attrs: {
                    value: e.value.value,
                    "item-text": "display",
                    "item-value": "value",
                    items: e.value.options,
                    label: e.value.display
                },
                on: {
                    input: function(t) {
                        return e.onInput(t)
                    }
                }
            }, [a("template", {
                slot: "message"
            }, [a("div", {
                domProps: {
                    innerHTML: e._s(e.markdown(e.value.desc))
                }
            })])], 2) : a("ui-input", {
                attrs: {
                    type: "integer" === e.value.type ? "number" : "text",
                    required: e.value.required,
                    label: e.value.display,
                    value: e.value.value
                },
                on: {
                    input: function(t) {
                        return e.onInput(t)
                    }
                }
            }, [a("template", {
                slot: "message"
            }, [a("div", {
                domProps: {
                    innerHTML: e._s(e.markdown(e.value.desc))
                }
            })])], 2)], 1)
        }
          , n = []
          , i = a("8e36")
          , o = {
            props: {
                value: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                look() {
                    return this.$vuetify.theme.options.inputStyle.split("-")[0]
                },
                flat() {
                    return -1 !== this.$vuetify.theme.options.inputStyle.split("-").indexOf("flat")
                }
            },
            methods: {
                onInput(e) {
                    this.$emit("input", {
                        ...this.value,
                        value: e
                    })
                },
                markdown: i["a"]
            }
        }
          , s = o
          , l = a("2877")
          , d = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = d.exports
    },
    a78c: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-text-field", e._g({
                ref: "underlying",
                attrs: {
                    id: e.id,
                    value: e.value,
                    outlined: "outlined" === e.lookValue,
                    solo: "solo" === e.lookValue,
                    filled: "filled" === e.lookValue,
                    flat: e.flat,
                    autofocus: e.autofocus,
                    autocomplete: e.autocomplete,
                    dense: e.dense,
                    disabled: e.disabled,
                    label: e.label,
                    "hide-details": e.hideDetails && !e.showHint,
                    "persistent-hint": e.showHint,
                    hint: e.hintValue,
                    "error-messages": e.errorMessages,
                    "prepend-inner-icon": e.icon,
                    "append-icon": e.endIcon,
                    "append-outer-icon": e.iconBehind,
                    placeholder: e.placeholder,
                    required: e.required,
                    name: e.name,
                    type: e.type
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            }, e.listeners), [e._l(e.$slots, (function(t, a) {
                return e._t(a, null, {
                    slot: a
                })
            }
            ))], 2)
        }
          , n = [];
        const i = ["outlined", "solo", "solo-flat", "filled", "material"];
        var o = {
            props: {
                autofocus: {
                    type: Boolean,
                    default: ()=>!1
                },
                autocomplete: {
                    type: String,
                    default: ()=>{}
                },
                dense: {
                    type: Boolean,
                    default: ()=>!1
                },
                disabled: {
                    type: Boolean,
                    default: ()=>!1
                },
                endIcon: {
                    type: String,
                    default: ()=>{}
                },
                errorMessages: {
                    type: String,
                    default: ()=>{}
                },
                hint: {
                    type: String,
                    default: ()=>{}
                },
                icon: {
                    type: String,
                    default: ()=>{}
                },
                iconBehind: {
                    type: String,
                    default: ()=>{}
                },
                id: {
                    type: String,
                    default: ()=>{}
                },
                label: {
                    type: String,
                    default: ()=>{}
                },
                name: {
                    type: String,
                    default: ()=>{}
                },
                placeholder: {
                    type: String,
                    default: ()=>{}
                },
                required: {
                    type: Boolean,
                    default: ()=>!1
                },
                look: {
                    type: String,
                    validator: e=>-1 !== i.indexOf(e),
                    default: ()=>{}
                },
                type: {
                    type: String,
                    default: ()=>"text"
                },
                value: {
                    type: void 0,
                    default: ()=>"",
                    required: !0
                }
            },
            computed: {
                listeners() {
                    const {input: e, ...t} = this.$listeners;
                    return t
                },
                hideDetails() {
                    const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                    return !e
                },
                showHint() {
                    const e = void 0 !== this.hint && "" !== this.hint
                      , t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                    return e || t
                },
                lookValue() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return e.split("-")[0]
                },
                flat() {
                    const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                    return -1 !== e.split("-").indexOf("flat")
                },
                hintValue() {
                    return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                }
            },
            methods: {
                focus() {
                    this.$refs.underlying.focus()
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("8654")
          , m = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = m.exports;
        u()(m, {
            VTextField: c["a"]
        })
    },
    a7cd: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"-> Edit","Add":"Tambah Node","Update":"Perbarui node","Delete":"Hapus node","PublicHost":"Host publik","PublicPort":"Port Publik","PrivateHost":"Host pribadi","PrivatePort":"Port pribadi","SftpPort":"Port SFTP","WithPrivateAddress":"Gunakan host/port yang berbeda untuk komunikasi server ke server","WithPrivateAddressHint":"Alamat terpisah ini digunakan ketika simpul utama perlu berbicara dengan simpul baru. Berguna misalnya ketika node berada di jaringan yang sama di belakang NAT.","SaveConfig":"Simpan Config","SavePublicKey":"Simpan kunci publik","DeploymentInstruction":"Untuk menjalankan node, install PufferPanel di server baru dan taruh file configurasi di `/etc/pufferpanel/`<br/> Lalu restart server baru di PufferPanel","UpdateSuccess":"Node berhasil diupdate.","UpdateError":"Kesalahan saat memperbarui node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    a888: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Navn","Address":"Adresse","Online":"Tilkoblet","Offline":"Frakoblet","Loading":"Laster...","General":"Generelt","Language":"Språk","SelectLanguage":"Velg språk","Settings":"Innstillinger","Update":"Oppdater","Edit":"Rediger","Delete":"Slett","Create":"Legg til","Save":"Lagre","Saved":"Lagret","SaveFailed":"Kunne ikke lagre","Cancel":"Avbryt","Confirm":"Bekreft","Actions":"Handlinger","Host":"Vert","Port":"Port","Template":"Mal","Options":"Alternativer","Collapse":"Skjul","Copied":"Kopiert til utklippstavle","Unknown":"Ukjent","Search":"Søk","Back":"Tilbake","Next":"Neste","LanguageName":"Norsk","Details":"Detaljer","ErrorDetails":"Feildetaljer","HelpTranslate":"Hjelp oss med å oversette PufferPanel","DarkMode":"Mørk Modus","ThemeOptions":"Valg for tema","Protocol":"Protokoll","Add":"Legg til","Ignore":"Ignorer","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag","Sunday":"Søndag","Description":"Beskrivelse"}')
    },
    aa9e: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Άγνωστο σφάλμα","ErrUnknownError":"Άγνωστο σφάλμα","ErrInvalidCredentials":"Μη έγκυρα στοιχεία","ErrServiceNotAvailable":"Η υπηρεσία δεν είναι διαθέσιμη","ErrEmailNotConfigured":"Δεν έχει ρυθμιστεί διεύθυνση ηλεκτρονικού ταχυδρομείου","ErrTokenInvalid":"Το διακριτικό δεν είναι έγκυρο","ErrClientNotFound":"Ο πελάτης δεν βρέθηκε","ErrUserNotFound":"Ο χρήστης δεν βρέθηκε","ErrLoginNotPermitted":"Δεν επιτρέπεται η σύνδεση","ErrInvalidTokenState":"Μη έγκυρο διακριτικό","ErrSettingNotConfigured":"Το {setting} δεν έχει ρυθμιστεί","ErrNoTemplate":"Δεν βρέθηκε πρότυπο με όνομα \'{name}\'","ErrServiceInvalidProvider":"{service} δεν υποστηρίζει {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} πρέπει να είναι εκτυπώσιμος χαρακτήρας ascii","ErrFieldHasURICharacters":"{field} δεν πρέπει να περιέχει χαρακτήρες που δεν μπορούν να χρησιμοποιηθούν στα URIs","ErrFieldIsInvalidHost":"{field} πρέπει να είναι μια έγκυρη IP ή FQDN","ErrFieldIsInvalidIP":"{field} πρέπει να είναι μια έγκυρη IP","ErrFieldTooLarge":"{field} δεν μπορεί να είναι μεγαλύτερο από {max}","ErrFieldTooSmall":"{field} δεν μπορεί να είναι μικρότερο από {min}","ErrFieldNotBetween":"{field} πρέπει να είναι μεταξύ {min} και {max}","ErrFieldEqual":"{field1} δεν μπορεί να είναι ίδιο με {field2}","ErrFieldNotEqual":"{field1} δεν μπορεί να είναι ίδιο με {field2}","ErrFieldNotEmail":"{field} δεν είναι έγκυρο email","ErrFieldLength":"{field} πρέπει να είναι τουλάχιστον {length} χαρακτήρες","ErrNoPermission":"Δεν έχετε τα απαραίτητα δικαιώματα για την εκτέλεση αυτής της ενέργειας","ErrDatabaseNotAvailable":"Η βάση δεδομένων δεν είναι διαθέσιμη","ErrNoNodes":"Δεν υπάρχουν διαθέσιμοι κόμβοι","ErrNoTemplates":"Δεν υπάρχουν διαθέσιμα πρότυπα","ErrPasswordRequirements":"Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Οι κωδικοί πρόσβασης δεν ταιριάζουν","ErrSessionTimedOut":"Έχει λήξει η συνεδρία σας. Παρακαλούμε συνδεθείτε ξανά","ErrMissingScope":"Δεν είστε εξουσιοδοτημένοι να εκτελέσετε αυτή την ενέργεια","ErrInvalidJson":"Τα δεδομένα json δεν είναι έγκυρα","ErrSocketFailed":"Η σύνδεση WebSocket αντιμετώπισε ένα σφάλμα, ορισμένες λειτουργίες μπορεί να είναι αργές ή χαλασμένες","ErrInviteLinkInvalid":"Ο σύνδεσμος πρόσκλησής σας φαίνεται να μην είναι έγκυρος","ErrSavingInviteduser":"Παρουσιάστηκε σφάλμα κατά τη δημιουργία του λογαριασμού σας","ErrDuplicateServerName":"Υπάρχει ήδη ένας διακομιστής με αυτό το όνομα","ErrDuplicateNodeName":"Υπάρχει ήδη ένας κόμβος με αυτό το όνομα","ErrDirectoryUploadNotSupported":"Αδυναμία μεταφόρτωσης φακέλων","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    abcb: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Não existem opções de environment especificas para este ambiente","docker":{"name":"Docker","image":"Imagem","networkMode":"Modo de rede","networkName":"Nome da rede","bindings":"Atalhos","portBindings":"Ligações de ports","OutsidePort":"Port externo","InsidePort":"Port interno","HostPath":"Path do host","ContainerPath":"Path do contentor"},"standard":{"name":"Padrão"},"tty":{"name":"TTY"}}')
    },
    ac0b: function(e) {
        e.exports = JSON.parse('{"ServersView":"このサーバーの表示","ServersEdit":"サーバー編集","ServersInstall":"サーバーインストール","ServersConsole":"コンソール閲覧","ServersConsoleSend":"コンソールへコマンド送信","ServersStop":"サーバーの停止とキル","ServersStart":"サーバーを起動","ServersStat":"CPU とメモリの統計情報を表示","ServersFiles":"SFTP を使用してファイルへのアクセス","ServersFilesGet":"ファイル管理でファイルを表示およびダウンロードする","ServersFilesPut":"ファイル管理でファイルを表示およびダウンロード","ServersEditUsers":"このサーバーへのユーザーアクセス権を編集","Admin":"管理者 (すべての権限が付与されます)","ViewServers":"サーバーの表示","CreateServers":"新しいサーバーを作成","DeleteServers":"サーバーを削除","EditServerAdmin":"サーバー設定","ViewNodes":"ノード参照","EditNodes":"ノードを編集","DeployNodes":"新しいノードをデプロイ","ViewTemplates":"テンプレートを見る","EditTemplates":"テンプレートの編集","ViewUsers":"すべてのユーザーを表示","EditUsers":"他のユーザーを編集","PanelSettings":"パネル設定を変更"}')
    },
    ac0e: function(e, t, a) {},
    acf5: function(e) {
        e.exports = JSON.parse('{"FileManager":"Správca súborov","NewFolder":"Nový priečinok","NewFile":"Nový súbor","LastModified":"Naposledy zmenené","ConfirmDelete":"Naozaj chcete odstrániť tento súbor?","Upload":"Nahrať","Download":"Stiahnuť","Size":"Veľkosť","NoFiles":"Zatiaľ tu nie sú žiadne súbory, vytvorte ich napríklad kliknutím na tlačidlo inštalácie v hornej časti stránky","FileLoadFailed":"Zlyhalo načítavanie súboru","Refresh":"Obnoviť","CreateFile":"Vytvoriť súbor","CreateFolder":"Vytvoriť zložku","ArchiveCurrentFolder":"Vytvoriť archív z aktuálneho priečinka","ArchiveFolder":"Vytvoriť archív z priečinka","ExtractArchive":"Rozbaliť archív","DropToUpload":"Ak chcete nahrať súbory, vložte ich sem"}')
    },
    b053: function(e) {
        e.exports = JSON.parse('{"Users":"Usuários","Add":"Adicionar usuário","AccountSettings":"Configurações da Conta","OldPassword":"Senha antiga","NewPassword":"Senha nova","ConfirmPassword":"Confirmar senha","ChangePassword":"Alterar senha","ChangeInfo":"Alterar detalhes da conta","InfoChanged":"As informações da conta foram atualizadas","PasswordChanged":"Sua senha foi alterada","AccountPassword":"Senha da conta","Account":"Conta","Login":"Login","LoginLink":"Ou faça login aqui","Logout":"Encerrar sessão","Register":"Registrar","RegisterLink":"Ou registre-se aqui","RegisterSuccess":"Você se registrou com sucesso","NoEmailGiven":"Você deve informar o e-mail do usuário que deseja adicionar","Username":"Nome do usuário","Password":"Senha","Email":"Email","Edit":"Editar Usuário","Update":"Atualizar Usuário","Delete":"Excluir Usuário","CreateSuccess":"Usuário criado com sucesso","CreateError":"Falha ao criar o usuário","UpdateSuccess":"Usuário Atualizado","UpdateError":"Falha ao atualizar o usuário","PermsUpdateError":"Falha ao atualizar as permissões do usuário","Otp":"Autenticação de duas fatores","OtpEnable":"Ativar/desativar Autenticação por dois fatores","OtpDisable":"Ativar Desativar Autenticação por dois fatores","OtpHint":"A autenticação de dois fatores adiciona uma camada adicional de segurança à sua conta, exigindo mais do que apenas uma senha para entrar.","OtpSetup":"Configuração da autenticação por dois fatores","OtpSetupHint":"Escaneie o código QR usando o seu aplicativo de autenticação ou copie o código secreto abaixo nele.","OtpSecret":"Código secreto","OtpConfirm":"Confirme utilizando um código 2FA","OtpNeeded":"Autenticação de dois fatores é necessária"}')
    },
    b0ce: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan se denne server","ServersEdit":"Rediger server","ServersInstall":"Installér server","ServersConsole":"Se konsollen","ServersConsoleSend":"Send kommandoer til konsollen","ServersStop":"Tving serveren til at stoppe","ServersStart":"Start serveren","ServersStat":"Se CPU og hukommelsesstatistik","ServersFiles":"Tillad adgang til filer ved hjælp af SFTP","ServersFilesGet":"Se og download filer ved hjælp af filhåndteringen","ServersFilesPut":"Rediger og upload filer ved hjælp af filhåndteringen","ServersEditUsers":"Rediger brugerens adgang til denne server","Admin":"Admin (dette giver alle tilladelser)","ViewServers":"Se Servere","CreateServers":"Opret nye servere","DeleteServers":"Slet Servere","EditServerAdmin":"Rediger Serverindstillinger","ViewNodes":"Se Nodes","EditNodes":"Rediger Nodes","DeployNodes":"Installer nye nodes","ViewTemplates":"Se Skabeloner","EditTemplates":"Redigerer skabeloner","ViewUsers":"Se alle brugere","EditUsers":"Rediger andre brugere","PanelSettings":"Change panel settings"}')
    },
    b1ba: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Okänt fel","ErrUnknownError":"Okänt fel","ErrInvalidCredentials":"Ogiltiga inloggningsuppgifter","ErrServiceNotAvailable":"Tjänsten är inte tillgänglig","ErrEmailNotConfigured":"E-postadressen är inte konfigurerad","ErrTokenInvalid":"Nyckeln är ogiltig","ErrClientNotFound":"Klienten hittades inte","ErrUserNotFound":"Användaren kunde inte hittas","ErrLoginNotPermitted":"Inloggning är inte tillåtet","ErrInvalidTokenState":"Ogiltig nyckel-status","ErrSettingNotConfigured":"{setting} är inte konfigurerad","ErrNoTemplate":"Ingen mall med namnet \'{name}\' hittades","ErrServiceInvalidProvider":"{service} stöder inte {provider}","ErrFieldRequired":"{field} är obligatoriskt","ErrFieldMustBePrintable":"{field} måste vara utskrivbara ascii-tecken","ErrFieldHasURICharacters":"{field} får inte innehålla tecken som inte kan användas i URI:er","ErrFieldIsInvalidHost":"{field} måste vara en giltig IP eller FQDN","ErrFieldIsInvalidIP":"{field} måste vara en giltig IP","ErrFieldTooLarge":"{field} kan in vara större än {max}","ErrFieldTooSmall":"{field} kan inte vara mindre än {min}","ErrFieldNotBetween":"{field} måste vara mellan {min} och {max}","ErrFieldEqual":"{field1} kan inte vara lika med {field2}","ErrFieldNotEqual":"{field1} är inte lika med {field2}","ErrFieldNotEmail":"{field} är inte en godkänd email","ErrFieldLength":"{field} måste vara minst {length} tecken","ErrNoPermission":"Du har inte behörighet att utföra detta kommando","ErrDatabaseNotAvailable":"Databasen är inte tillgänglig","ErrNoNodes":"Inga noder tillgängliga","ErrNoTemplates":"Ingen mall tillgänglig","ErrPasswordRequirements":"Lösenord måste vara minst 8 tecken","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Lösenorden är inte likadana","ErrSessionTimedOut":"Din session har gått ut, vänligen logga in igen","ErrMissingScope":"Du har inte behörighet att utföra denna åtgärd","ErrInvalidJson":"Json-datan är ogiltig","ErrSocketFailed":"WebSocket-anslutningen stötte på ett fel, vissa funktioner kan fungera långsamt eller inte alls","ErrInviteLinkInvalid":"Din inbjudningslänk verkar vara ogiltig","ErrSavingInviteduser":"Ett fel har uppstod vid registrering av ditt konto","ErrDuplicateServerName":"En server med detta namn finns redan","ErrDuplicateNodeName":"En nod med detta namn finns redan","ErrDirectoryUploadNotSupported":"Kan inte ladda upp mappar","ErrDockerNotSupported":"Docker stöds inte på denna nod","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    b246: function(e) {
        e.exports = JSON.parse('{"Settings":"Ayarlar","PanelSettings":"Panel ayarları","EmailSettings":"E-posta ayarları","MasterUrl":"Ana URL","MasterUrlHint":"Panelin altında ulaşılabilen temel URL, http://localhost:8080 biçimindedir","CompanyName":"Şirket adı","DefaultTheme":"Varsayılan tema","RegistrationEnabled":"Kullanıcıların kayıt olmasına izin ver","RegistrationEnabledHint1":"Kendi kayıt olan kullanıcılar izin verilene kadar hiçbir şey yapamazlar","RegistrationEnabledHint2":"Bunu devre dışı bırakmak yalnızca doğrudan kaydı engeller, bir sunucuya davet edilir ve kullanıcılar sayfası etkilenmez","EmailProvider":"E-Posta sağlayıcısı","emailProviders":{"none":"Hiçbiri","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Gönderen adresi","domain":"Alan adı","key":"API Anahtarı","host":"Sunucu","username":"Kullanıcı adı","password":"Parola"}}')
    },
    b3a1: function(e) {
        e.exports = JSON.parse('{"Users":"Käyttäjät","Add":"Lisää käyttäjä","AccountSettings":"Käyttäjäasetukset","OldPassword":"Vanha salasana","NewPassword":"Uusi Salasana","ConfirmPassword":"Vahvista salasana","ChangePassword":"Vaihda salasana","ChangeInfo":"Muuta Tilin Tietoja","InfoChanged":"Sinun tietosi on muutettu","PasswordChanged":"Sinun salasanasi on muutettu","AccountPassword":"Tilin salasana","Account":"Käyttäjä","Login":"Kirjaudu","LoginLink":"Tai kirjaudu tässä","Logout":"Kirjaudu ulos","Register":"Rekisteröidy","RegisterLink":"Tai rekisteröidy tässä","RegisterSuccess":"Olet rekisteröitynyt onnistuneesti","NoEmailGiven":"Sinun täytyy antaa sähköpostiosoite käyttäjälle, jonka haluat lisätä","Username":"Käyttäjänimi","Password":"Salasana","Email":"Sähköpostiosoite","Edit":"Muokkaa käyttäjää","Update":"Päivitä käyttäjä","Delete":"Poista käyttäjä","CreateSuccess":"Käyttäjä luotu onnistuneesti","CreateError":"Käyttäjän luonti epäonnistui","UpdateSuccess":"Päivitetty Käyttäjä","UpdateError":"Käyttäjän päivittäminen epäonnistui","PermsUpdateError":"Käyttöoikeuksien päivittäminen epäonnistui","Otp":"Kaksivaiheinen tunnistautuminen","OtpEnable":"Ota kaksivaiheinen tunnistautuminen käyttöön","OtpDisable":"Poista käyttöstä kaksivaiheinen tunnistus","OtpHint":"Kaksivaiheinen tunnistautuminen lisää tilisi tietoturvaa vaatimalla enemmän kuin vain salasanan kirjautumiseen.","OtpSetup":"Kaksivaiheisen tunnistautumisen käyttöönotto","OtpSetupHint":"Skannaa QR-koodi todennussovelluksellasi tai kopioi alla oleva salainen koodi siihen.","OtpSecret":"Salainen koodi","OtpConfirm":"Vahvista käyttäen kaksivaiheisen tunnistautumisen koodia","OtpNeeded":"Kaksivaiheinen tunnistautuminen vaaditaan"}')
    },
    b3d7: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"User successfully created","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions","Otp":"Two factor authentication","OtpEnable":"Enable 2FA","OtpDisable":"Disable 2FA","OtpHint":"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"Secret Code","OtpConfirm":"Confirm using a 2FA code","OtpNeeded":"2FA required"}')
    },
    b414: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Δεν υπάρχουν συγκεκριμένες επιλογές περιβάλλοντος για αυτό το περιβάλλον","docker":{"name":"Docker","image":"Image","networkMode":"Λειτουργία Δικτύου","networkName":"Όνομα Δικτύου","bindings":"Διασυνδέσεις","portBindings":"Διασυνδέσεις Θυρών","OutsidePort":"Εξωτερική θύρα","InsidePort":"Εσωτερική Θύρα","HostPath":"Διαδρομή Εξυπηρετητή","ContainerPath":"Διαδρομή Περιέκτη"},"standard":{"name":"Κανονικό"},"tty":{"name":"TTY"}}')
    },
    b4a8: function(e) {
        e.exports = JSON.parse('{"FileManager":"Fájlkezelő","NewFolder":"Új mappa","NewFile":"Új fájl","LastModified":"Utoljára módosítva","ConfirmDelete":"Biztosan törli ezt a fájlt?","Upload":"Feltöltés","Download":"Letöltés","Size":"Méret","NoFiles":"Ez a hely még nem tartalmaz fájlokat. A lap tetején található telepítés gombbra kattintva létre tudja hozni a legfontosabbakat","FileLoadFailed":"Fájlok betöltése sikertelen","Refresh":"Újratöltés","CreateFile":"Fájl létrehozása","CreateFolder":"Mappa létrehozása","ArchiveCurrentFolder":"Archívum létrehozása a jelenlegi mappából","ArchiveFolder":"Archívum létrehozása mappából","ExtractArchive":"Archívum kicsomagolása","DropToUpload":"Húzd ide a fileokat a feltöltéshez"}')
    },
    b617: function(e) {
        e.exports = JSON.parse('{"ServersView":"Può visualizzare questo server","ServersEdit":"Modifica il server","ServersInstall":"Installa il server","ServersConsole":"Visualizza la console","ServersConsoleSend":"Invia i comandi alla console","ServersStop":"Interrompi e termina il server","ServersStart":"Avvia il server","ServersStat":"Visualizza statistiche CPU e memoria","ServersFiles":"Consenti l\'accesso ai file usando SFTP","ServersFilesGet":"Visualizza e scarica i file usando il gestore dei file","ServersFilesPut":"Modifica e carica i file usando il gestore dei file","ServersEditUsers":"Modifica l\'accesso dell\'utente a questo server","Admin":"Amministratore (ciò garantisce ogni permesso possibile)","ViewServers":"Vedi server","CreateServers":"Crea nuovi Server","DeleteServers":"Elimina i Server","EditServerAdmin":"Modifica Impostazioni del Server","ViewNodes":"Vedi Nodi","EditNodes":"Modifica Nodi","DeployNodes":"Sviluppa nuovi Nodi","ViewTemplates":"Vedi Modelli","EditTemplates":"Modifica Modelli","ViewUsers":"Vedi tutti gli Utenti","EditUsers":"Modifica altri Utenti","PanelSettings":"Cambia le impostazioni del pannello"}')
    },
    b689: function(e) {
        e.exports = JSON.parse('{"FileManager":"Manajer File","NewFolder":"Folder baru","NewFile":"Berkas baru","LastModified":"Terakhir Diubah","ConfirmDelete":"Anda yakin Anda ingin menghapus file ini?","Upload":"Unggah","Download":"Unduh","Size":"Ukuran","NoFiles":"Belum ada file di sini, buka dan buat beberapa misalnya dengan mengklik tombol Install di bagian atas halaman","FileLoadFailed":"Gagal memuat file","Refresh":"Segarkan","CreateFile":"Buat berkas","CreateFolder":"Buat direktori","ArchiveCurrentFolder":"Buat arsip dari folder saat ini","ArchiveFolder":"Buat arsip dari direktori saat ini","ExtractArchive":"Ekstrak Arsip","DropToUpload":"Tempatkan berkas di sini untuk mengunggah"}')
    },
    b6ae: function(e) {
        e.exports = JSON.parse('{"Server":"سرور ها","NoServers":"لا توجد خوادم لديك حق الوصول إليها","Servers":"سرور ها","Add":"إضافة خادم","Console":"وحدة التحكم","Controls":"عناصر التحكم","SFTPInfo":"معلومات SFTP","Restart":"اعادة تشغيل","Start":"بدء","Stop":"إيقاف","Kill":"فرض الإيقاف","Install":"تثبيت","Send":"إرسال","Pause":"إيقاف مؤقت","Statistics":"الإحصائيات","CPU":"وحدة المعالجة المركزية","Memory":"ذاكرة الوصول العشوائي","Files":"الملفات","Name":"اسم الخادم","NameInvalid":"اسم الخادم لا يمكن أن يكون فارغاً أو يحتوي على أحرف خاصة (رموز)","SelectNode":"الرجاء تحديد Node","SelectTemplate":"يرجى تحديد قالب","SelectThisTemplate":"استخدام هذا القالب","SelectUser":"يرجى إختيار مستخدم","Environment":"بيئة النظام","SelectEnvironment":"الرجاء تحديد البيئة","TypeUsername":"أدخل اسم مستخدم","Admin":"المشرف","AdminControls":"ضوابط المشرف","Settings":"الإعدادات","NoEditableVars":"هذا الخادم لا يحتوي على متغيرات يمكنك تعديلها","ConfirmDelete":"هل تريد حذف هذا الخادم حقاً؟ (لا يمكن التراجع عن هذا)","Delete":"حذف الخادم","Deleted":"الخادم المحذوف","NoReadme":"لا يوجد تعليمات متاحة لهذا القالب","SftpConnection":"الاتصال بـ SFTP","EditDefinition":"Edit Server Definition","Reload":"إعادة تحميل بيانات الخادم من القرص","Reloaded":"إعادة تحميل بيانات الخادم","Autostart":"بدء تشغيل الخادم عندما يشتغل ال Node","Autorestart":"إعادة تشغيل الخادم عندما يتوقف بشكل طبيعي","Autorecover":"إعادة تشغيل الخادم عند توقفة","Rename":"Rename Server","Tasks":"المهام","NoTasks":"لا توجد مهام","RunTask":"Run Task","NewTask":"مهمة جديدة","EditTask":"تعديل المهمة","TaskDeleted":"حذفت المهمة","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"يومي","Weekly":"اسبوعي","Monthly":"شهري","Advanced":"متقدم","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    b8d7: function(e) {
        e.exports = JSON.parse('{"Users":"Utilizadores","Add":"Adicionar utilizador","AccountSettings":"Definições da Conta","OldPassword":"Senha antiga","NewPassword":"Nova Senha","ConfirmPassword":"Confirmar Senha","ChangePassword":"Alterar senha","ChangeInfo":"Alterar Detalhes da Conta","InfoChanged":"A sua informação foi alterada","PasswordChanged":"A sua senha foi alterada","AccountPassword":"Senha da conta","Account":"Conta","Login":"Iniciar sessão","LoginLink":"Ou iniciar sessão aqui","Logout":"Sair","Register":"Registrar","RegisterLink":"Ou registrar aqui","RegisterSuccess":"Registrado com sucesso","NoEmailGiven":"Deve fornecer o e-mail do utilizador que pretende adicionar","Username":"Nome do utilizador","Password":"Senha","Email":"E-mail","Edit":"Editar utilizador","Update":"Atualizar utilizador","Delete":"Apagar utilizador","CreateSuccess":"Utilizador criado com sucesso","CreateError":"Erro criando o utilizador","UpdateSuccess":"Utilizador atualizado","UpdateError":"Falha ao atualizar utilizador","PermsUpdateError":"Falha atualizando as permissões do utilizador","Otp":"Autenticação de dois fatores","OtpEnable":"Ativar 2FA","OtpDisable":"Desativar 2FA","OtpHint":"A autenticação de dois fatores adiciona uma camada adicional de segurança à sua conta, exigindo mais do que apenas uma senha para entrar.","OtpSetup":"Configuração de 2FA","OtpSetupHint":"Dê scan ao código QR usando o seu aplicativo de autenticação ou copie o código secreto abaixo.","OtpSecret":"Código Secreto","OtpConfirm":"Confirme, usando um código 2FA","OtpNeeded":"2FA necessário"}')
    },
    b974c: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-overlay", {
                attrs: {
                    dark: e.$isDark(),
                    color: "#434343"
                },
                model: {
                    value: e.value,
                    callback: function(t) {
                        e.value = t
                    },
                    expression: "value"
                }
            }, [a("v-container", {
                staticClass: "overlayContainer",
                attrs: {
                    fluid: ""
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12",
                    "offset-md": "1",
                    md: "10"
                }
            }, [e.card ? a("v-card", [a("v-card-title", [e.title && "" !== e.title ? a("span", {
                domProps: {
                    textContent: e._s(e.title)
                }
            }) : e._t("title"), a("v-spacer"), e.closable ? a("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: function(t) {
                        e.$emit("close"),
                        e.$emit("input", !1)
                    }
                }
            }, [a("v-icon", [e._v("mdi-close")])], 1) : e._e()], 2), a("v-card-text", {
                staticClass: "overlayContent"
            }, [e._t("default")], 2), a("v-card-actions", [e._t("actions")], 2)], 1) : a("v-sheet", {
                staticClass: "overlayContent"
            }, [e._t("default")], 2)], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                card: {
                    type: Boolean,
                    default: ()=>!1
                },
                closable: {
                    type: Boolean,
                    default: ()=>!1
                },
                title: {
                    type: String,
                    default: ()=>""
                },
                value: {
                    type: Boolean,
                    default: ()=>!1
                }
            },
            data() {
                return {
                    currentScrollPosition: null
                }
            },
            watch: {
                value(e) {
                    e ? this.disableScroll() : this.enableScroll()
                }
            },
            mounted() {
                this.value && this.disableScroll()
            },
            beforeDestroy() {
                this.currentScrollPosition && this.enableScroll()
            },
            methods: {
                disableScroll() {
                    null == this.currentScrollPosition && "fixed" !== document.body.style.position && (this.currentScrollPosition = window.scrollY,
                    document.body.style.position = "fixed",
                    document.body.style.top = `-${this.currentScrollPosition}px`)
                },
                enableScroll() {
                    null != this.currentScrollPosition && (document.body.style.position = "",
                    document.body.style.top = "",
                    window.scrollTo(0, this.currentScrollPosition),
                    this.currentScrollPosition = null)
                }
            }
        }
          , o = i
          , s = (a("4b15"),
        a("2877"))
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("b0af")
          , m = a("99d9")
          , p = a("62ad")
          , v = a("a523")
          , h = a("132d")
          , g = a("a797")
          , f = a("0fd9")
          , S = a("8dd9")
          , k = a("2fa4")
          , E = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = E.exports;
        d()(E, {
            VBtn: u["a"],
            VCard: c["a"],
            VCardActions: m["a"],
            VCardText: m["c"],
            VCardTitle: m["d"],
            VCol: p["a"],
            VContainer: v["a"],
            VIcon: h["a"],
            VOverlay: g["a"],
            VRow: f["a"],
            VSheet: S["a"],
            VSpacer: k["a"]
        })
    },
    bb3a: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nume","Address":"Adresă","Online":"Pornit","Offline":"Oprit","Loading":"Se încarcă...","General":"General","Language":"Limbă","SelectLanguage":"Selectaţi limba","Settings":"Setari","Update":"Actualizează","Edit":"Editaţi","Delete":"Ştergeţi","Create":"Creează","Save":"Salvează","Saved":"Salvat","SaveFailed":"Salvare eșuată","Cancel":"Anulează","Confirm":"Confirmă","Actions":"Acțiuni","Host":"Gazdă","Port":"Port","Template":"Model","Options":"Opţiuni","Collapse":"Restrânge","Copied":"Copiaţi în clipboard","Unknown":"Necunoscută","Search":"Căutare","Back":"Înapoi","Next":"Inainte","LanguageName":"Română","Details":"Detalii","ErrorDetails":"Detalii eroare","HelpTranslate":"Ajută-ne să traducem PufferPanel","DarkMode":"Mod întunecat","ThemeOptions":"Opţiuni temă","Protocol":"Protocol","Add":"Adaugă","Ignore":"Ignoră","Monday":"Luni","Tuesday":"Marți","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă","Sunday":"Duminică","Description":"Descriere"}')
    },
    bb68: function(e) {
        e.exports = JSON.parse('{"Server":"Máy chủ","NoServers":"Bạn không có máy chủ nào có thể truy cập được","Servers":"Các Máy Chủ","Add":"Thêm máy chủ","Console":"Bảng điều khiển","Controls":"Điều khiển","SFTPInfo":"Thông tin SFTP","Restart":"Khởi động lại","Start":"Khởi động","Stop":"Dừng lại","Kill":"Buộc dừng","Install":"Cài đặt","Send":"Gửi","Pause":"Tạm dừng","Statistics":"Số liệu thống kê","CPU":"CPU","Memory":"Bộ nhớ","Files":"Tập tin","Name":"Tên máy chủ","NameInvalid":"Tên máy chủ không thể trống hoặc chứa các ký tự đặc biệt","SelectNode":"Hãy chọn một Node","SelectTemplate":"Hãy chọn một mẫu","SelectThisTemplate":"Sử dụng mẫu này","SelectUser":"Vui lòng chọn người dùng","Environment":"Môi trường","SelectEnvironment":"Hãy chọn Môi trường","TypeUsername":"Gõ tên người dùng","Admin":"Quản trị viên","AdminControls":"Điều khiển Quản trị viên","Settings":"Cài đặt","NoEditableVars":"Máy chủ này không có thông số chỉnh sửa được","ConfirmDelete":"Bạn thật sự muốn xóa máy chủ này? (việc này không thể hủy bỏ được)","Delete":"Xóa máy chủ","Deleted":"Máy chủ đã bị xoá","NoReadme":"Không có Readme cho mẫu này","SftpConnection":"Kết nối bằng SFTP","EditDefinition":"Chỉnh sửa khai báo máy chủ","Reload":"Làm mới dữ liệu máy chủ từ ổ đĩa","Reloaded":"Đã làm mới dữ liệu máy chủ","Autostart":"Khởi động máy chủ khi Node khởi động","Autorestart":"Khởi động lại máy chủ khi nó dừng 1 cách bình thương","Autorecover":"Khởi động lại máy chủ khi nó bị lỗi","Rename":"Đặt lại tên máy chủ","Tasks":"Các tác vụ","NoTasks":"Không có tác vụ","RunTask":"Chạy tác vụ","NewTask":"Tác vụ mới","EditTask":"Chỉnh sửa tác vụ","TaskDeleted":"Tác vụ đã bị xoá","TaskTriggered":"Tác vụ đã chạy","EnableSchedule":"Tự động chạy tác vụ","TaskScheduleInvalid":"Lịch tác vụ không hợp lệ","TaskScheduleManual":"Chỉ chạy bằng tay","CronExpression":"Biểu thức Cron","Hourly":"Hàng giờ","Daily":"Hàng ngày","Weekly":"Hàng tuần","Monthly":"Hàng tháng","Advanced":"Nâng cao","HourlyTab":"Mỗi {hourInterval} tiếng tại phút thứ {minute}","DailyTab":"Mỗi {dayInterval} ngày lúc {hour}:{minute}","WeeklyTab":"Mỗi {weekdays} lúc {hour}:{minute}","MonthlyTab":"Mỗi {monthInterval} tháng vào ngày thứ {day} lúc {hour}:{minute}"}')
    },
    bb78: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Editare modul","Add":"Adaugă modul","Update":"Actualizare modul","Delete":"Șterge modul","PublicHost":"Host Public","PublicPort":"Port Public","PrivateHost":"Host Privat","PrivatePort":"Port privat","SftpPort":"Port SFTP","WithPrivateAddress":"Folosește un ip/port diferit pentru comunicarea dintre servere","WithPrivateAddressHint":"Acestă adresă separată este folosită atunci când node-ul principal comunică cu node-ul nou. Folositor, de exemplu, pentru node-uri care se află în aceeași rețea în spatele unui NAT.","SaveConfig":"Salvează configurația","SavePublicKey":"Salvează cheia publică","DeploymentInstruction":"Pentru a implementa acest modul, instalati PufferPanel pe noul server si plasati fisierul de configurare in `/etc/pufferpanel/`<br/>Reporniţi PufferPanel pe noul server dupa.","UpdateSuccess":"Actualizare reusita","UpdateError":"Eroare la actualizarea nodeului","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    bc12: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Pro toto prostředí neexistují žádné specifické možnosti prostředí","docker":{"name":"Docker","image":"Obraz","networkMode":"Síťový režim","networkName":"Název sítě","bindings":"Vazby","portBindings":"Vázání portů","OutsidePort":"Mimo port","InsidePort":"Uvnitř portu","HostPath":"Cesta hostitele","ContainerPath":"Cesta kontejneru"},"standard":{"name":"Standartní"},"tty":{"name":"TTY"}}')
    },
    bc7a: function(e) {
        e.exports = JSON.parse('{"Server":"Sunucu","NoServers":"Erişiminiz olan sunucu yok","Servers":"Sunucular","Add":"Sunucu ekle","Console":"Konsol","Controls":"Kontroller","SFTPInfo":"SFTP Bilgisi","Restart":"Yeniden başlat","Start":"Başlat","Stop":"Durdur","Kill":"Sonlandır","Install":"Kur","Send":"Gönder","Pause":"Durdur","Statistics":"İstatistikler","CPU":"CPU","Memory":"Ram","Files":"Dosyalar","Name":"Sunucu adı","NameInvalid":"Sunucu adı boş olamaz veya özel karakter içeremez","SelectNode":"Lütfen düğüm seçiniz","SelectTemplate":"Lütfen şablon seçiniz","SelectThisTemplate":"Bu şablonu kullan","SelectUser":"Lütfen bir kullanıcı seçin","Environment":"Ortam","SelectEnvironment":"Lütfen ortam seçin","TypeUsername":"Kullanıcı adınızı girin","Admin":"Yönetici","AdminControls":"Yönetici Ayarları","Settings":"Ayarlar","NoEditableVars":"Bu sunucuda düzenleyebileceğiniz değişkenler yok","ConfirmDelete":"Sunucuyu cidden silmek istiyor musun? (geri getiremezsin)","Delete":"Sunucuyu Sil","Deleted":"Silinmiş Sunucu","NoReadme":"Bu şablon için \\"beni oku\\" dosyası yok","SftpConnection":"SFTP Bağlan","EditDefinition":"Sunucu tanımını düzenle","Reload":"Sunucu verisini yeniden yükle","Reloaded":"Sunucu verisi yeniden yüklendi","Autostart":"Düğüm başladığında sunucuyu başlat","Autorestart":"Sunucu normal bir şekilde kapatıldığında yeniden başlat","Autorecover":"Sunucu çöktüğünde otomatik yeniden başlat","Rename":"Sunucuyu yeniden adlandır","Tasks":"Görevler","NoTasks":"Görev yok","RunTask":"Görevi çalıştır","NewTask":"Yeni görev","EditTask":"Görevi düzenle","TaskDeleted":"Görev silindi","TaskTriggered":"Görev tetiklendi","EnableSchedule":"Görevi otomatik olarak çalıştır","TaskScheduleInvalid":"Görev zamanı geçersiz","TaskScheduleManual":"El ile çalıştır","CronExpression":"Cron Expression","Hourly":"Saatlik","Daily":"Günlük","Weekly":"Haftalık","Monthly":"Aylık","Advanced":"Gelişmiş","HourlyTab":"Her {hourInterval} saatte bir {minute}. dakika\'da","DailyTab":"Her {dayInterval} günde bir {hour}:{minute}\'te","WeeklyTab":"Her {weekdays} gününde bir {hour}:{minute}\'te","MonthlyTab":"Her {monthInterval} ayının {day}. günü {hour}:{minute}\'te"}')
    },
    bcbc: function(e) {
        e.exports = JSON.parse('{"Id":"Azonosító","Name":"Név","Address":"Cím","Online":"Elérhető","Offline":"Nem elérhető","Loading":"Betöltés...","General":"Általános","Language":"Nyelv","SelectLanguage":"Nyelv kiválasztása","Settings":"Beállítások","Update":"Frissítés","Edit":"Szerkesztés","Delete":"Törlés","Create":"Létrehozás","Save":"Mentés","Saved":"Elmentve","SaveFailed":"Sikertelen mentés","Cancel":"Visszavonás","Confirm":"Jóváhagyás","Actions":"Műveletek","Host":"Kiszolgáló","Port":"Port","Template":"Sablon","Options":"Opciók","Collapse":"Összecsukás","Copied":"Vágólapra másolva","Unknown":"Ismeretlen","Search":"Keresés","Back":"Vissza","Next":"Tovább","LanguageName":"Magyar","Details":"Részletek","ErrorDetails":"Hiba részletei","HelpTranslate":"Segíts a PufferPanel fordításában","DarkMode":"Sötét mód","ThemeOptions":"Téma beállítások","Protocol":"Protokol","Add":"Hozzáadás","Ignore":"Mellőzés","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat","Sunday":"Vasárnap","Description":"Leírás"}')
    },
    bcbf: function(e) {
        e.exports = JSON.parse('{"Credentials":"Облікові дані клієнта OAuth2","ClientId":"ID клієнта","ClientSecret":"Секретний ключ","NewClientWarning":"Зверніть увагу на секрет клієнта, після закриття цього діалогу він ніколи не буде показаний знову. Поразка чи забуття цього клієнта буде абсолютно непридатним для використання.","Create":"Створити нового клієнта OAuth2","UnnamedClient":"Клієнт OAuth2 імені","Docs":"Знайти там документацію API","DeleteWarning":"Видалення OAuth2 клієнта не може бути скасовано, ні новий клієнт не може бути створений з тими ж обліковими даними. Всі інтеграції, які все ще використовують цей клієнт, будуть ламати після його видалення.","ConfirmDelete":"Я усвідомлюю ефекти, які буде видалено цей клієнт OAuth2 і хотів би продовжити.","Delete":"Видалити {clientName}?","Clients":"Клієнти OAuth2","AccountDescription":"Клієнти OAuth2 перераховані тут успадковують всі ваші права доступу на рахунки","ServerDescription":"Клієнти OAuth2 перераховані тут лише успадковуйте права доступу до ваших рахунків на цьому сервері"}')
    },
    be06: function(e) {
        e.exports = JSON.parse('{"Node":"節點","Nodes":"節點","Edit":"編輯節點","Add":"新增節點","Update":"更新節點","Delete":"刪除節點","PublicHost":"公用主機名稱","PublicPort":"公用連線埠","PrivateHost":"私人主機名稱","PrivatePort":"私人連線埠","SftpPort":"SFTP 連線埠","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"儲存設定","SavePublicKey":"儲存公開金鑰","DeploymentInstruction":"要部署該節點，請在新伺服器上安裝 PufferPanel 後將設定檔案放在 `/etc/pufferpanel/`中。<br/>然後在新伺服器上重新啟動 PufferPanel 。","UpdateSuccess":"成功更新節點","UpdateError":"節點更新錯誤","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    be1e: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Neznámá chyba","ErrUnknownError":"Neznámá chyba","ErrInvalidCredentials":"Neplatné údaje","ErrServiceNotAvailable":"Služba není k dispozici","ErrEmailNotConfigured":"E-mail není nakonfigurován","ErrTokenInvalid":"Token je neplatný","ErrClientNotFound":"Klient nebyl nalezen","ErrUserNotFound":"Uživatel nenalezen","ErrLoginNotPermitted":"Přihlášení není povoleno","ErrInvalidTokenState":"Neplatný stav token","ErrSettingNotConfigured":"{setting} není nakonfigurován","ErrNoTemplate":"Nebyla nalezena žádná šablona s názvem \'{name}\'","ErrServiceInvalidProvider":"{service} nepodporuje {provider}","ErrFieldRequired":"{field} je povinné","ErrFieldMustBePrintable":"{field} musí být tisknutelné znaky ascii","ErrFieldHasURICharacters":"{field} nesmí obsahovat znaky, které nelze použít v URI","ErrFieldIsInvalidHost":"{field} musí být platné IP nebo FQDN","ErrFieldIsInvalidIP":"{field} musí být platná IP adresa","ErrFieldTooLarge":"{field} nemůže být větší než {max}","ErrFieldTooSmall":"{field} nemůže být menší než {min}","ErrFieldNotBetween":"{field} musí být mezi {min} a {max}","ErrFieldEqual":"{field1} nemůže být roven {field2}","ErrFieldNotEqual":"{field1} není rovno {field2}","ErrFieldNotEmail":"{field} není platný e-mail","ErrFieldLength":"{field} musí mít alespoň {length} znaků","ErrNoPermission":"Nemáte oprávnění k provedení této akce","ErrDatabaseNotAvailable":"Databáze není k dispozici","ErrNoNodes":"Žádné uzly nejsou k dispozici","ErrNoTemplates":"Žádné šablony nejsou k dispozici","ErrPasswordRequirements":"Heslo musí být nejméně 8 znaků dlouhé","ErrUsernameRequirements":"Uživatelské jméno musí mít alespoň 5 znaků, a obsahovat pouze alfanumerické znaky, _ a -","ErrPasswordsNotIdentical":"Hesla nejsou stejná","ErrSessionTimedOut":"Vypršel časový limit relace, přihlaste se prosím znovu","ErrMissingScope":"Nemáte oprávnění k provedení této akce","ErrInvalidJson":"Data json jsou neplatná","ErrSocketFailed":"Při připojení k WebSocketu došlo k chybě, některé funkce mohou být pomalé nebo poškozené","ErrInviteLinkInvalid":"Vaše pozvánka se zdá být neplatná","ErrSavingInviteduser":"Při vytváření účtu došlo k chybě","ErrDuplicateServerName":"Server s tímto názvem již existuje","ErrDuplicateNodeName":"Uzel s tímto názvem již existuje","ErrDirectoryUploadNotSupported":"Nelze nahrát složky","ErrDockerNotSupported":"Docker není v tomto uzlu podporován","ErrMissingBinary":"Chybějící binární soubor {expected}","ErrUnsupportedOS":"Operační Systém ({actual}) není podporován. Podporovaný operační systém: {expected}","ErrUnsupportedArch":"Architektura {actual} není podporována. Podporované architektury: {expected}"}')
    },
    bf01: function(e) {
        e.exports = JSON.parse('{"Templates":"Mallar","NoTemplates":"Det finns inga mallar här än","Deleted":"Mall borttagen","New":"Skapa ny mall","Edit":"Redigera mall","Editor":"Redigerare","Json":"JSON","Display":"Visningsnamn","Type":"Typ","Variables":"Variabler","Install":"Installera","AddInstallStep":"Lägg till installationssteg","DeleteInstallStep":"Ta bort installationssteg","Description":"Beskrivning","DataType":"Typ av data","DefaultValue":"Förvalt värde","Required":"Krävs","UserEditable":"Användare kan redigera","Value":"Värde","AddOption":"Lägg till ett alternativ","AddCommand":"Lägg till kommando","Filename":"Filnamn","Content":"Innehåll","Source":"Källa","Target":"Mål","Version":"Version","ReleaseType":"Utgivningstyp","AddFile":"Lägg till fil","AddVariable":"Lägg till variabel","Environment":"Miljö","Environments":"Miljöer","AddEnvironment":"Lägg till miljö","DefaultEnvironment":"Förvald miljö","AddEnvVar":"Lägg till miljövariabel","EnvVars":"Miljövariabler","DockerImage":"Docker bild","SaveSuccess":"Sparade mallar","VarNameNoSpaces":"Ett variabelnamn kan inte vara tomt eller innehålla mellanslag","SupportedEnvironments":"Stödda miljöer","RunConfig":"Kör konfiguration","PreHook":"Innan körning hook","PostHook":"Efter körning hook","AddPreStep":"Lägg till steg innan körning","AddPostStep":"Lägg till steg efter körning","DeletePreStep":"Ta bort steg innan körning","DeletePostStep":"Ta bort steg efter körning","Shutdown":"Stäng av","Command":"Kommando","WorkingDirectory":"Arbetskatalog","Arguments":"Argument","AddArgument":"Lägg till ett argument","Convert":"Konvertera","OfferV1Convert":"Denna mall json ser ut som en mall för PufferPanel 1.x, vill du automatiskt konvertera detta till en mall för PufferPanel 2.x?","import":{"CommunityWarning":"Dessa mallar skapas av gemenskapen och tillhandahålls utan några garantier","OverrideWarning":"VARNING: Importerade mallar skriver över befintliga mallar med samma ID","Import":"Importera mallar","Tooltip":"Importera mallar från det officiella arkivet","Select":"Välj mallar att importera","Started":"Importerar mallar, vänligen vänta en stund","Successful":"Mallen {template} har importerats","NoTemplatesTitle":"Vill du importera mallar?","NoTemplatesContent":"Du har för närvarande inga mallar. Mallar är nödvändiga för att skapa servrar.<br/>Vill du importera några mallar från den officiella PufferPanelens utvecklingskatalog nu?"},"stop":{"Command":"Kommando","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Ladda ned","files":"Filer"},"command":{"ProcessorName":"Kör kommando","commands":"Kommandon"},"alterfile":{"ProcessorName":"Ändra fil","regex":"Behandla sökning som RegEx","search":"Text att söka efter","replace":"Ersätt med"},"writefile":{"ProcessorName":"Skriv till fil","text":"Innehåll"},"move":{"ProcessorName":"Flytta fil","source":"Källa","target":"Mål"},"mkdir":{"ProcessorName":"Skapa katalog"},"mojangdl":{"ProcessorName":"Ladda ner Minecraft"},"forgedl":{"ProcessorName":"Ladda ner Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Ladda ner Minecraft Forge","releaseType":"Utgivningstyp"},"fabricdl":{"ProcessorName":"Ladda ner Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    bf70: function(e) {
        e.exports = JSON.parse('{"Templates":"Skabeloner","NoTemplates":"Der er ingen skabeloner endnu","Deleted":"Skabelon slettet","New":"Opret ny skabelon","Edit":"Redigér skabelon","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variabler","Install":"Installér","AddInstallStep":"Tilføj Installationstrin","DeleteInstallStep":"Slet Installationstrin","Description":"Beskrivelse","DataType":"Datatype","DefaultValue":"Standardværdi","Required":"Påkrævet","UserEditable":"Brugere kan redigere","Value":"Værdi","AddOption":"Tilføje en mulighed","AddCommand":"Tilføj kommando","Filename":"Filnavn","Content":"Indhold","Source":"Kilde","Target":"Mål","Version":"Version","ReleaseType":"Udgivelsestype","AddFile":"Tilføj fil","AddVariable":"Tilføj variabel","Environment":"Miljø","Environments":"Miljøer","AddEnvironment":"Tilføj miljø","DefaultEnvironment":"Standard miljø","AddEnvVar":"Tilføj env variabel","EnvVars":"Miljøvariabler","DockerImage":"Docker Billede","SaveSuccess":"Gem skabelon","VarNameNoSpaces":"Et variabelnavn må ikke være tomt eller indeholde mellemrum","SupportedEnvironments":"Understøttede Miljøer","RunConfig":"Kør Opsætning","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Tilføj Pre Run Step","AddPostStep":"Tilføj Post Run Step","DeletePreStep":"Slet Pre Run Step","DeletePostStep":"Slet Post Run Step","Shutdown":"Luk ned","Command":"Kommando","WorkingDirectory":"Working Directory","Arguments":"Argumenter","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    c04ed: function(e) {
        e.exports = JSON.parse('{"Templates":"Šablóny","NoTemplates":"Zatiaľ tu nie sú k dispozícii žiadne šablóny","Deleted":"Šablóna bola odstránená","New":"Vytvoriť novú šablónu","Edit":"Upraviť šablónu","Editor":"Editor","Json":"JSON","Display":"Zobrazované meno","Type":"Typ","Variables":"Premenné","Install":"Inštalovať","AddInstallStep":"Pridať krok inštalácie","DeleteInstallStep":"Odstrániť krok inštalácie","Description":"Popis","DataType":"Dátový typ","DefaultValue":"Predvolená hodnota","Required":"Povinné","UserEditable":"Používatelia môžu upravovať","Value":"Hodnota","AddOption":"Pridať možnosť","AddCommand":"Pridať príkaz","Filename":"Názov súboru","Content":"Obsah","Source":"Zdroj","Target":"Cieľ","Version":"Verzia","ReleaseType":"Typ vydania","AddFile":"Pridať súbor","AddVariable":"Pridať premennú","Environment":"Prostredie","Environments":"Prostredia","AddEnvironment":"Pridať prostredie","DefaultEnvironment":"Predvolené prostredie","AddEnvVar":"Pridať premennú prostredia","EnvVars":"Premenné prostredia","DockerImage":"Docker obraz","SaveSuccess":"Šablóna uložená","VarNameNoSpaces":"Názov premennej nemôže byť prázdny alebo obsahovať medzery","SupportedEnvironments":"Podporované prostredia","RunConfig":"Spustiť konfiguráciu","PreHook":"Hook pred spustením","PostHook":"Hook po spustení","AddPreStep":"Pridanie kroku pred spustením","AddPostStep":"Pridanie kroku po spustení","DeletePreStep":"Vymazať krok pred spustením","DeletePostStep":"Odstrániť krok po spustení","Shutdown":"Vypnúť","Command":"Príkaz","WorkingDirectory":"Pracovný priečinok","Arguments":"Parametre","AddArgument":"Pridať argument","Convert":"Konvertovať","OfferV1Convert":"Táto šablóna JSON vyzerá ako šablóna pre PufferPanel 1.x, chcete ju automaticky konvertovať na šablónu pre PufferPanel 2.x?","import":{"CommunityWarning":"Tieto šablóny sú vytvorené komunitou a sú poskytované bez akýchkoľvek záruk","OverrideWarning":"VAROVANIE: Importované šablóny prepíšu existujúce šablóny s rovnakým ID","Import":"Importovať šablóny","Tooltip":"Importovať šablóny z oficiálneho repozitáru","Select":"Výber šablón na import","Started":"Importovanie šablón, chvíľu počkajte","Successful":"Úspešne importovaná šablóna {template}","NoTemplatesTitle":"Chcete importovať šablóny?","NoTemplatesContent":"Nemáte žiadne šablóny. Šablóny sú potrebné na vytvorenie serverov.<br/>Chcete teraz importovať nejaké šablóny z oficiálneho repozitára šablón PufferPanel?"},"stop":{"Command":"Príkaz","Signal":"Signál"},"processors":{"download":{"ProcessorName":"Stiahnuť","files":"Súbory"},"command":{"ProcessorName":"Spustiť príkaz","commands":"Príkazy"},"alterfile":{"ProcessorName":"Zmeniť súbor","regex":"Vyhľadávať ako RegEx","search":"Text na vyhľadávanie","replace":"Nahradiť s"},"writefile":{"ProcessorName":"Zapísať do súboru","text":"Obsah"},"move":{"ProcessorName":"Presunúť súbor","source":"Zdroj","target":"Cieľ"},"mkdir":{"ProcessorName":"Vytvoriť adresár"},"mojangdl":{"ProcessorName":"Stiahnuť Minecraft"},"forgedl":{"ProcessorName":"Stiahnuť Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Stiahnuť Minecraft SpongeForge","releaseType":"Typ vydania"},"fabricdl":{"ProcessorName":"Stiahnuť Minecraft Fabric"},"javadl":{"ProcessorName":"Stiahnuť Javu","version":"Verzia Javy na inštaláciu (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Stiahnuť hru zo služby Steam","appId":"App Id"}}}')
    },
    c0ae: function(e) {
        e.exports = JSON.parse('{"Id":"Číslo [ID]","Name":"Jméno","Address":"Adresa","Online":"Zapnut","Offline":"Vypnut","Loading":"Načítám..","General":"Obecné","Language":"Jazyk","SelectLanguage":"Zvolte jazyk","Settings":"Nastavení","Update":"Aktualizovat","Edit":"Upravit","Delete":"Smazat","Create":"Vytvořit","Save":"Uložit","Saved":"Uloženo","SaveFailed":"Nepodařilo se uložit","Cancel":"Zrušit","Confirm":"Potvrdit","Actions":"Akce","Host":"Hostitel","Port":"Port","Template":"Šablona","Options":"Možnosti","Collapse":"Sbalit","Copied":"Zkopírováno","Unknown":"Neznámý","Search":"Vyhledat","Back":"Zpět","Next":"Další","LanguageName":"Čeština","Details":"Podrobnosti","ErrorDetails":"Podrobnosti o chybě","HelpTranslate":"Pomozte nám přeložit PufferPanel","DarkMode":"Tmavý režim","ThemeOptions":"Možnosti vzhledu","Protocol":"Protokol","Add":"Přidat","Ignore":"Ignorovat","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota","Sunday":"Neděle","Description":"Popis"}')
    },
    c22b: function(e) {
        e.exports = JSON.parse('{"Credentials":"Credenciais do Cliente OAuth2","ClientId":"ID de Cliente","ClientSecret":"Client Secret","NewClientWarning":"Anota o client secret, após fechares esta caixa de diálogo, nunca mais será exibido. Perdendo-o ou esquecendo-o tornará este cliente completamente inutilizável.","Create":"Criar novo Cliente OAuth2","UnnamedClient":"Cliente OAuth2 sem nome","Docs":"Encontre a documentação da API aqui","DeleteWarning":"Apagar um Cliente OAuth2 não pode ser desfeito, nem pode ser criado um novo cliente com as mesmas cridenciais. Todas as integrações ainda usando este cliente irão parar de funcionar após ser apagado.","ConfirmDelete":"Compreendo os efeitos que apagar este cliente OAuth2 terá e desejo prosseguir.","Delete":"Apagar {clientName}?","Clients":"Clientes OAuth2","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    c2a0: function(e) {
        e.exports = JSON.parse('{"Templates":"Sablonok","NoTemplates":"Még nincsenek itt sablonok","Deleted":"Sablon törölve","New":"Új sablon","Edit":"Sablon szerkesztése","Editor":"Szerkesztő","Json":"JSON","Display":"Megjelenítendő név","Type":"Típus","Variables":"Mezők","Install":"Telepítés","AddInstallStep":"Telepítési lépés hozzáadása","DeleteInstallStep":"Telepítési lépés törlése","Description":"Leírás","DataType":"Adattípus","DefaultValue":"Alapérték","Required":"Kötelező","UserEditable":"Felhasználók változtathatják","Value":"Érték","AddOption":"Opció hozzáadása","AddCommand":"Parancs hozzáadása","Filename":"Fájlnév","Content":"Tartalom","Source":"Forrás","Target":"Célpont","Version":"Verzió","ReleaseType":"A kiadás típusa","AddFile":"Fájl hozzáadása","AddVariable":"Mező hozzáadása","Environment":"Környezet","Environments":"Környezetek","AddEnvironment":"Környezet hozzáadása","DefaultEnvironment":"Alapértelmezett Környezet","AddEnvVar":"Új környezeti változó hozzáadása","EnvVars":"Környezeti változók","DockerImage":"Docker kép","SaveSuccess":"Sablon elmentve","VarNameNoSpaces":"A mező neve nem lehet üres és nem tartalmazhat szóközöket","SupportedEnvironments":"Támogatott környezetek","RunConfig":"Konfiguráció futtatása","PreHook":"Elődleges beavatkozási rutinok","PostHook":"Utólagos beavatkozási rutinok","AddPreStep":"Elődleges beavatkozási rutin hozzáadása","AddPostStep":"Utólagos beavatkozási rutin hozzáadása","DeletePreStep":"Elődleges beavatkozási rutin törlése","DeletePostStep":"Utólagos beavatkozási rutin törlése","Shutdown":"Leállítás","Command":"Parancs","WorkingDirectory":"Munkafelület","Arguments":"Argumentumok","AddArgument":"Argumentum hozzáadása","Convert":"Konvertálás","OfferV1Convert":"Ez a json sablon úgy néz ki, hogy a PufferPanel 1.x-es verziójához készült. Szeretnéd, hogy átkonvertáljuk ezt PufferPanel 2.x-es verzióra?","import":{"CommunityWarning":"Ezeket a sablonokat a közösség készítette, és mindenféle garancia nélkül bocsátja rendelkezésre","OverrideWarning":"FIGYELEM: Az importált sablonok ÁTÍRNAK minden létező sablont, aminek egyező IDje van","Import":"Sablonok importálása","Tooltip":"Sablonok importálása a hivatalos adattárból","Select":"Válassza ki az importálandó sablonokat","Started":"Sablonok importálása, egy pillanat...","Successful":"A(z) {template} sablon sikeresen importálva","NoTemplatesTitle":"Szeretne sablonokat importálni?","NoTemplatesContent":"Jelenleg nincsen egy sablonja se. A szerverek felállításához viszont szükségesek.<br/>Szeretne a PufferPanel officiális adattárából egy pár sablont importálni?"},"stop":{"Command":"Parancs","Signal":"Jel"},"processors":{"download":{"ProcessorName":"Letöltés","files":"Fájlok"},"command":{"ProcessorName":"Parancs Futtatása","commands":"Parancsok"},"alterfile":{"ProcessorName":"Fájl megváltoztatása","regex":"Keresés alkalmazása, mint RegEx","search":"Keresendő szöveg","replace":"Csere erre"},"writefile":{"ProcessorName":"Fájlba írás","text":"Tartalom"},"move":{"ProcessorName":"Fájl áthelyezése","source":"Forrás","target":"Cél"},"mkdir":{"ProcessorName":"Mappa létrehozása"},"mojangdl":{"ProcessorName":"Minecraft Letöltése"},"forgedl":{"ProcessorName":"Minecraft Forge Letöltése"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForge Letöltése","releaseType":"Kiadás Típusa"},"fabricdl":{"ProcessorName":"Minecraft Fabric Letöltése"},"javadl":{"ProcessorName":"Java letöltése","version":"Java verzió telepítése (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Játék letöltése Steam-ről","appId":"Alkalmazásazonosító"}}}')
    },
    c370: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"未知錯誤","ErrUnknownError":"未知錯誤","ErrInvalidCredentials":"無效憑證","ErrServiceNotAvailable":"服務不可用","ErrEmailNotConfigured":"電郵未完成配置","ErrTokenInvalid":"金鑰無效","ErrClientNotFound":"找不到此客戶","ErrUserNotFound":"找不到此用戶","ErrLoginNotPermitted":"登入被拒","ErrInvalidTokenState":"金鑰狀態無效","ErrSettingNotConfigured":"{setting} 未完成配置","ErrNoTemplate":"找不到{name}範本","ErrServiceInvalidProvider":"{service}不支援{provider}","ErrFieldRequired":"{field}為必填","ErrFieldMustBePrintable":"{field}必需為可顯示的ASCII字符","ErrFieldHasURICharacters":"{field}只可包含可用在URI的字符","ErrFieldIsInvalidHost":"{field}必需為一個有效IP地址或完全資格域名","ErrFieldIsInvalidIP":"{field}必需為一個有效IP地址","ErrFieldTooLarge":"{field}不可大於{max}","ErrFieldTooSmall":"{field}不可小於{min}","ErrFieldNotBetween":"{field}需在{min}和{max}之間","ErrFieldEqual":"{field1}不可與{field2}相同","ErrFieldNotEqual":"{field1}與{field2}不相同","ErrFieldNotEmail":"{field}不是一個有效的電郵","ErrFieldLength":"{field}不可少於{length}字","ErrNoPermission":"你沒有操作權限","ErrDatabaseNotAvailable":"資料庫不可用","ErrNoNodes":"沒有可用主機","ErrNoTemplates":"沒有可用範本","ErrPasswordRequirements":"密碼不能少於8個字符","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"密碼不相同","ErrSessionTimedOut":"你的登入時效已過，請重新登入","ErrMissingScope":"您沒權限執行此操作","ErrInvalidJson":"json數據無效","ErrSocketFailed":"WebSocket連接出現錯誤，某些功能可能會變得緩慢或無法使用","ErrInviteLinkInvalid":"Your invite link appears to be invalid","ErrSavingInviteduser":"There was an error creating your account","ErrDuplicateServerName":"A server with this name already exists","ErrDuplicateNodeName":"A node with this name already exists","ErrDirectoryUploadNotSupported":"Cannot upload folders","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    c383: function(e) {
        e.exports = JSON.parse('{"ServersView":"Môže zobraziť tento server","ServersEdit":"Upraviť tento server","ServersInstall":"Nainštalovať server","ServersConsole":"Zobraziť konzolu","ServersConsoleSend":"Odoslať príkazy do konzoly","ServersStop":"Zastavenie a ukončenie servera","ServersStart":"Spustenie servera","ServersStat":"Zobrazenie štatistík CPU a pamäte RAM","ServersFiles":"Povolenie prístupu k súborom pomocou SFTP","ServersFilesGet":"Zobrazenie a prevzatie súborov pomocou správcu súborov","ServersFilesPut":"Úprava a odosielanie súborov pomocou správcu súborov","ServersEditUsers":"Upraviť prístup používateľa k tomuto serveru","Admin":"Admin (udeľuje všetky možné oprávnenia)","ViewServers":"Zobraziť servery","CreateServers":"Vytvoriť nové servery","DeleteServers":"Vymazať servery","EditServerAdmin":"Upraviť nastavenia servera","ViewNodes":"Zobraziť uzly","EditNodes":"Upraviť uzly","DeployNodes":"Vytvorenie (Deploy) nových uzlov","ViewTemplates":"Zobraziť šablóny","EditTemplates":"Upraviť šablóny","ViewUsers":"Zobraziť všetkých používateľov","EditUsers":"Upraviť ostatných používateľov","PanelSettings":"Zmena nastavení panela"}')
    },
    c398: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Selle keskkonna jaoks pole keskkonnaspetsiifilisi valikuid","docker":{"name":"Docker","image":"Image","networkMode":"Võrgu režiim","networkName":"Võrgu nimi","bindings":"Seosed","portBindings":"Portide seosed","OutsidePort":"Väline port","InsidePort":"Sisemine port","HostPath":"Hosti tee","ContainerPath":"Konteineri tee"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    c652: function(e) {
        e.exports = JSON.parse('{"Templates":"Plantillas","NoTemplates":"Aún no se ha creado ninguna plantilla","Deleted":"Plantilla borrada","New":"Crear nueva plantilla","Edit":"Modificar plantilla","Editor":"Editor","Json":"JSON","Display":"Nombre a mostrar","Type":"Tipo","Variables":"Variables","Install":"Instalar","AddInstallStep":"Añadir paso de instalación","DeleteInstallStep":"Eliminar paso de instalación","Description":"Descripción","DataType":"Tipo de datos","DefaultValue":"Valor por defecto","Required":"Requerido","UserEditable":"Usuarios pueden editar","Value":"Valor","AddOption":"Agregar una opción","AddCommand":"Agregar comando","Filename":"Nombre del archivo","Content":"Contenido","Source":"Fuente","Target":"Objetivo","Version":"Versión","ReleaseType":"Tipo de Lanzamiento","AddFile":"Añadir archivo","AddVariable":"Añadir variable","Environment":"Entorno","Environments":"Entornos","AddEnvironment":"Añadir entorno","DefaultEnvironment":"Entorno predeterminado","AddEnvVar":"Añadir variable de entorno","EnvVars":"Variables de entorno","DockerImage":"Imagen de Docker","SaveSuccess":"Plantilla guardada","VarNameNoSpaces":"Un nombre de variable no puede estar vacío o contener espacios","SupportedEnvironments":"Entornos soportados","RunConfig":"Opciones de ejecución","PreHook":"Hook antes de ejecución","PostHook":"Hook después de ejecución","AddPreStep":"Añadir paso antes de ejecución","AddPostStep":"Añadir paso después de ejecución","DeletePreStep":"Eliminar paso antes de ejecución","DeletePostStep":"Eliminar paso después de ejecución","Shutdown":"Apagar","Command":"Comando","WorkingDirectory":"Directorio actual","Arguments":"Argumentos","AddArgument":"Añadir argumento","Convert":"Convertir","OfferV1Convert":"Parece que ésta plantilla es de PufferPanel 1.x. ¿Te gustaría que convirtamos ésta plantilla al formato actual de PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"ADVERTENCIA: Las plantillas importadas sobrescribirán las plantillas existentes con el mismo ID","Import":"Importar plantillas","Tooltip":"Importar plantillas del repositorio oficial","Select":"Seleccionar plantillas a importar","Started":"Importando plantillas, por favor espere un momento","Successful":"Plantilla {template} importada correctamente","NoTemplatesTitle":"¿Quieres importar plantillas?","NoTemplatesContent":"Actualmente no tienes ninguna plantilla. Las plantillas son necesarias para crear servidores.<br/>¿Desea importar algunas plantillas desde el repositorio oficial de plantillas de PufferPanel?"},"stop":{"Command":"Comando","Signal":"Señal"},"processors":{"download":{"ProcessorName":"Descargar","files":"Archivos"},"command":{"ProcessorName":"Ejecutar comando","commands":"Comandos"},"alterfile":{"ProcessorName":"Cambiar archivo","regex":"Tratar búsqueda como RegEx","search":"Búsqueda de texto","replace":"Reemplazar con"},"writefile":{"ProcessorName":"Escribir al archivo","text":"Contenido"},"move":{"ProcessorName":"Mover Archivo","source":"Fuente","target":"Objetivo"},"mkdir":{"ProcessorName":"Crear directorio"},"mojangdl":{"ProcessorName":"Descargar Minecraft"},"forgedl":{"ProcessorName":"Descargar Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Descargar Minecraft SpongeForge","releaseType":"Tipo de Lanzamiento"},"fabricdl":{"ProcessorName":"Descargar Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    c6b0: function(e) {
        e.exports = JSON.parse('{"FileManager":"Administrador de Archivos","NewFolder":"Nueva carpeta","NewFile":"Nuevo Archivo","LastModified":"Última modificación","ConfirmDelete":"¿Estas seguro que deseas eliminar este archivo?","Upload":"Subir","Download":"Descargar","Size":"Tamaño","NoFiles":"Todavía no hay archivos, vaya y cree algunos, por ejemplo haciendo clic en el botón de instalar en la parte superior de la página","FileLoadFailed":"Error al cargar el archivo","Refresh":"Refrescar","CreateFile":"Crear archivo","CreateFolder":"Crear carpeta","ArchiveCurrentFolder":"Crear un archivo comprimido de la carpeta actual","ArchiveFolder":"Crear un archivo comprimido desde esta carpeta","ExtractArchive":"Extraer archivo comprimido","DropToUpload":"Arrastra archivos aquí para subirlos"}')
    },
    c82e: function(e) {
        e.exports = JSON.parse('{"Settings":"Pengaturan","PanelSettings":"Pengaturan Panel","EmailSettings":"Setelan email","MasterUrl":"URL Utama","MasterUrlHint":"URL Panel utama dapat ditemukan di bawah dalam format http://localhost:8080","CompanyName":"Nama Perusahaan","DefaultTheme":"Tema Utama","RegistrationEnabled":"Izinkan pengguna untuk mendaftar sendiri","RegistrationEnabledHint1":"Pengguna yang terdaftar sendiri tidak dapat melakukan apa pun sampai izin yang diberikan","RegistrationEnabledHint2":"Menonaktifkan ini hanya mencegah pendaftaran langsung, undangan ke server dan halaman pengguna tidak lah terpengaruh","EmailProvider":"Provider Email","emailProviders":{"none":"Tidak ada","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domain","key":"API Key","host":"Host","username":"Nama Pengguna","password":"Kata Sandi"}}')
    },
    c879: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Nem létezik környezet-specifikus opció ehhez a környezethez","docker":{"name":"Docker","image":"Kép","networkMode":"Hálózati Mód","networkName":"Hálózat Neve","bindings":"Hozzárendelések","portBindings":"Port Hozzárendelések","OutsidePort":"Külső Port","InsidePort":"Belső Port","HostPath":"Futtatás Helye","ContainerPath":"Tároló Helye"},"standard":{"name":"Alapértelmezett"},"tty":{"name":"TTY"}}')
    },
    c87d: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nome","Address":"Endereço","Online":"Online","Offline":"Offline","Loading":"A carregar...","General":"Geral","Language":"Idiomas","SelectLanguage":"Selecionar Idioma","Settings":"Definições","Update":"Atualizar","Edit":"Editar","Delete":"Apagar","Create":"Criar","Save":"Salvar","Saved":"Salvo","SaveFailed":"Falha ao salvar","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Ações","Host":"Host","Port":"Port","Template":"Template","Options":"Opções","Collapse":"Colapsar","Copied":"Copiado","Unknown":"Desconhecido","Search":"Pesquisar","Back":"Voltar","Next":"Próximo","LanguageName":"Português","Details":"Detalhes","ErrorDetails":"Detalhes do erro","HelpTranslate":"Ajuda-nos a traduzir o PufferPanel","DarkMode":"Modo Escuro","ThemeOptions":"Opções do Tema","Protocol":"Protocolo","Add":"Adicionar","Ignore":"Ignorar","Monday":"Segunda","Tuesday":"Terça","Wednesday":"Quarta","Thursday":"Quinta","Friday":"Sexta-Feira","Saturday":"Sábado","Sunday":"Domingo","Description":"Descrição"}')
    },
    ca66: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"這環境沒有特定的選項可設定","docker":{"name":"Docker","image":"映像檔","networkMode":"網絡模式","networkName":"網絡名稱","bindings":"繫結","portBindings":"連接埠繫結","OutsidePort":"向外連接埠","InsidePort":"向內連接埠","HostPath":"主機連接埠","ContainerPath":"容器路徑"},"standard":{"name":"標準"},"tty":{"name":"TTY"}}')
    },
    cb95: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Du har ikke adgang til nogle servere","Servers":"Servere","Add":"Tilføj Server","Console":"Konsol","Controls":"Styring","SFTPInfo":"SFTP Information","Restart":"Genstart","Start":"Start","Stop":"Stop","Kill":"Dræb","Install":"Installér","Send":"Send","Pause":"Pause","Statistics":"Statistik","CPU":"CPU","Memory":"Hukommelse","Files":"Filer","Name":"Servernavn","NameInvalid":"The server name cannot be empty or contain special characters","SelectNode":"Vælg node","SelectTemplate":"Vælg venligst en skabelon","SelectThisTemplate":"Brug denne skabelon","SelectUser":"Vælg venligst en bruger","Environment":"Miljø","SelectEnvironment":"Vælg miljø","TypeUsername":"Vælg et brugernavn","Admin":"Admin","AdminControls":"Admin-kontrol","Settings":"Indstillinger","NoEditableVars":"Denne server har ikke variabler, du kan redigere","ConfirmDelete":"Sikker på, at du vil slette denne server? (Dette kan ikke fortrydes)","Delete":"Slet Server","Deleted":"Slettede Server","NoReadme":"Ingen \\"readme\\" tilgængelig for denne skabelon","SftpConnection":"Opret forbindelse til SFTP","EditDefinition":"Rediger Server Definition","Reload":"Genindlæs serverdata fra disk","Reloaded":"Genindlæste serverdata","Autostart":"Start serveren når noden starter","Autorestart":"Genstart serveren, når den stopper normalt","Autorecover":"Genstart serveren, når den går ned","Rename":"Rename Server","Tasks":"Tasks","NoTasks":"No Tasks","RunTask":"Run Task","NewTask":"New Task","EditTask":"Edit Task","TaskDeleted":"Task Deleted","TaskTriggered":"Task Triggered","EnableSchedule":"Run Task automatically","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Manual run only","CronExpression":"Cron Expression","Hourly":"Hourly","Daily":"Daily","Weekly":"Weekly","Monthly":"Monthly","Advanced":"Advanced","HourlyTab":"Every {hourInterval} Hours at Minute {minute}","DailyTab":"Every {dayInterval} days at {hour}:{minute}","WeeklyTab":"Every {weekdays} at {hour}:{minute}","MonthlyTab":"Every {monthInterval} months on the {day} day at {hour}:{minute}"}')
    },
    cce6: function(e) {
        e.exports = JSON.parse('{"FileManager":"Διαχειριστής Αρχείων","NewFolder":"Νέος Φάκελος","NewFile":"Νέο Αρχείο","LastModified":"Τελευταία Τροποποίηση","ConfirmDelete":"Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτό το αρχείο?","Upload":"Μεταφόρτωση","Download":"Λήψη","Size":"Μέγεθος","NoFiles":"Δεν υπάρχουν ακόμα αρχεία. Δδημιουργήστε μερικά για παράδειγμα κάνοντας κλικ στο κουμπί εγκατάστασης στο πάνω μέρος της σελίδας","FileLoadFailed":"Αποτυχία φόρτωσης αρχείου","Refresh":"Ανανέωση","CreateFile":"Δημιουργία αρχείου","CreateFolder":"Δημιουργία φακέλου","ArchiveCurrentFolder":"Δημιουργία αρχείου από τον τρέχοντα φάκελο","ArchiveFolder":"Δημιουργία αρχειοθήκης από φάκελο","ExtractArchive":"Εξαγωγή αρχειοθήκης","DropToUpload":"Σύρετε αρχεία εδώ για μεταφόρτωση"}')
    },
    cd69: function(e) {
        e.exports = JSON.parse('{"Users":"Các người dùng","Add":"Thêm người dùng","AccountSettings":"Cài đặt tài khoản","OldPassword":"Mật khẩu cũ","NewPassword":"Mật khẩu mới","ConfirmPassword":"Xác nhận mật khẩu","ChangePassword":"Đổi mật khẩu","ChangeInfo":"Thay đổi thông tin tài khoản","InfoChanged":"Thông tin của bạn đã được thay đổi","PasswordChanged":"Mật khẩu của bạn đã được thay đổi","AccountPassword":"Mật khẩu Tài khoản","Account":"Tài khoản","Login":"Đăng nhập","LoginLink":"Hoặc đăng nhập ở đây","Logout":"Đăng xuất","Register":"Đăng ký","RegisterLink":"Hoặc đăng ký ở đây","RegisterSuccess":"Bạn đã đăng ký thành công","NoEmailGiven":"Bạn cần cung cấp email của người dùng bạn muốn thêm","Username":"Tên đăng nhập","Password":"Mật khẩu","Email":"Email","Edit":"Chỉnh sửa người dùng","Update":"Cập nhật người dùng","Delete":"Xóa người dùng","CreateSuccess":"Tạo người dùng thành công","CreateError":"Lỗi khi tạo người dùng","UpdateSuccess":"Đã cập nhật người dùng","UpdateError":"Lỗi khi cập nhật người dùng","PermsUpdateError":"Lỗi khi cập nhật quyền của người dùng","Otp":"Xác thực hai yếu tố","OtpEnable":"Bật xác minh 2 yếu tố","OtpDisable":"Tắt xác minh 2 yếu tố","OtpHint":"Xác thực hai yếu tố thêm một lớp bảo mật vào tài khoản của bạn bằng cách yêu cầu thêm thông tin ngoài mật khẩu để đăng nhập.","OtpSetup":"Thiết lập xác nhận hai yếu tố","OtpSetupHint":"Quét mã QR bằng ứng dụng xác thực hoặc sao chép mã bí mật bên dưới.","OtpSecret":"Mã bí mật","OtpConfirm":"Xác nhận bằng mã xác thực hai yếu tố","OtpNeeded":"Cần xác thực hai yếu tố"}')
    },
    ce16: function(e) {
        e.exports = JSON.parse('{"Users":"Користувачі","Add":"Додати користувача","AccountSettings":"Налаштування запису","OldPassword":"Старий пароль","NewPassword":"Новий пароль","ConfirmPassword":"Підтвердіть пароль","ChangePassword":"Змінити пароль","ChangeInfo":"Змінити дані запису","InfoChanged":"Вашу інформацію було змінено","PasswordChanged":"Ваш пароль змінен","AccountPassword":"Пароль облікового запису","Account":"Обліковий запис","Login":"Вхід","LoginLink":"Або увійдіть до системи тут","Logout":"Вихід з системи","Register":"Зареєструватись","RegisterLink":"Або зареєструйтесь тут","RegisterSuccess":"Ви успішно зареєструвалися","NoEmailGiven":"Ви повинні вказати електронну пошту користувача, якого ви бажаєте додати","Username":"Ім\'я","Password":"Пароль","Email":"Пошта","Edit":"Редагувати користувача","Update":"Оновлення користувача","Delete":"Видалити користувача","CreateSuccess":"Користувач успішно створен","CreateError":"Не вдалося створити користувача","UpdateSuccess":"Користувач оновлен","UpdateError":"Не вдалося оновити користувача","PermsUpdateError":"Не вдалося оновити дозволи користувача","Otp":"Двофакторна авторизація","OtpEnable":"Увімкнути 2FA","OtpDisable":"Вимкнути 2FA","OtpHint":"Двофакторна автентифікація додає додатковий рівень безпеки вашого облікового запису, вимагаючи для входу в систему не лише пароль.","OtpSetup":"Встановлення 2FA","OtpSetupHint":"Відскануйте QR-код за допомогою програми автентифікатора або скопіюйте в нього секретний код, наведений нижче.","OtpSecret":"Секретний код","OtpConfirm":"Підтвердьте використання коду 2FA","OtpNeeded":"Необхідна 2FA"}')
    },
    cf13: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","WithPrivateAddress":"Use a different host/port for server to server communication","WithPrivateAddressHint":"This separate address is used when the main node needs to talk to the new node. Useful for example when the nodes are in the same network behind NAT.","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    cf15: function(e) {
        e.exports = JSON.parse('{"FileManager":"Filhåndtering","NewFolder":"Ny mappe","NewFile":"Ny fil","LastModified":"Sidst Ændrede","ConfirmDelete":"Er du sikker på du vil slette denne fil?","Upload":"Upload","Download":"Hent","Size":"Størrelse","NoFiles":"Der er ingen filer her endnu, opret nogle ved for eksempel at klikke på installations knappen øverst på siden","FileLoadFailed":"Kunne ikke indlæse filen","Refresh":"Genindlæs","CreateFile":"Opret fil","CreateFolder":"Opret mappe","ArchiveCurrentFolder":"Opret arkiv fra den aktuelle mappe","ArchiveFolder":"Opret arkiv fra mappe","ExtractArchive":"Udpak arkiv","DropToUpload":"Træk filer her for at uploade dem"}')
    },
    cf44: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Er zijn geen servers waar je toegang tot hebt","Servers":"Servers","Add":"Server Toevoegen","Console":"Console","Controls":"Bediening","SFTPInfo":"SFTP Informatie","Restart":"Herstarten","Start":"Start","Stop":"Stop","Kill":"Beëindigen","Install":"Installeren","Send":"Verzenden","Pause":"Pauseren","Statistics":"Statistieken","CPU":"CPU","Memory":"Geheugen","Files":"Bestanden","Name":"Server Naam","NameInvalid":"De servernaam mag niet leeg zijn of speciale tekens bevatten","SelectNode":"Selecteer een node","SelectTemplate":"Selecteer een sjabloon","SelectThisTemplate":"Dit sjabloon gebruiken","SelectUser":"Selecteer een gebruiker","Environment":"Omgeving","SelectEnvironment":"Selecteer een omgeving","TypeUsername":"Voer een gebruikersnaam in","Admin":"Beheerder","AdminControls":"Administrator beheer","Settings":"Instellingen","NoEditableVars":"Deze server heeft geen variabelen die je kunt bewerken","ConfirmDelete":"Weet je zeker dat je deze server wilt verwijderen? (dit kan niet ongedaan worden gemaakt)","Delete":"Server Verwijderen","Deleted":"Server Verwijderd","NoReadme":"Geen readme beschikbaar voor dit sjabloon","SftpConnection":"Verbinden met SFTP","EditDefinition":"Serverdefinitie bewerken","Reload":"Herlaad server gegevens vanaf schijf","Reloaded":"Server data herladen","Autostart":"Start de server wanneer de node start","Autorestart":"Herstart de server wanneer deze normaal stopt","Autorecover":"Herstart de server wanneer deze crasht","Rename":"Server hernoemen","Tasks":"Taken","NoTasks":"Geen taken","RunTask":"Taak uitvoeren","NewTask":"Nieuwe Taak","EditTask":"Wijzig taak","TaskDeleted":"Taak verwijderd","TaskTriggered":"Taak geactiveerd","EnableSchedule":"Taak automatisch uitvoeren","TaskScheduleInvalid":"Taakschema ongeldig","TaskScheduleManual":"Alleen handmatige uitvoering","CronExpression":"Cron Expression","Hourly":"Uurlijks","Daily":"Dagelijks","Weekly":"Wekelijks","Monthly":"Maandelijks","Advanced":"Geavanceerd","HourlyTab":"Elke {hourInterval} Uur bij Minute {minute}","DailyTab":"Elke {dayInterval} dagen om {hour}:{minute}","WeeklyTab":"Elke {weekdays} om {hour}:{minute}","MonthlyTab":"Elke {monthInterval} maanden op de {day} dag om {hour}:{minute}"}')
    },
    cf46: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("oauth.Clients"))
                }
            }), a("v-card-subtitle", [a("div", [e._v(e._s(e.$t("oauth." + (e.isServer ? "ServerDescription" : "AccountDescription"))))]), a("a", {
                attrs: {
                    target: "_blank",
                    href: e.apiDocsUrl
                }
            }, [e._v(" " + e._s(e.$t("oauth.Docs")) + " "), a("v-icon", {
                staticClass: "caption"
            }, [e._v("mdi-launch")])], 1)]), a("v-card-text", [a("v-list", [e._l(e.clients, (function(t) {
                return a("v-list-item", {
                    key: t.client_id
                }, [a("v-list-item-content", [a("v-list-item-title", {
                    domProps: {
                        textContent: e._s(t.name || e.$t("oauth.UnnamedClient"))
                    }
                }), a("v-list-item-subtitle", {
                    domProps: {
                        textContent: e._s(t.client_id)
                    }
                }), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(r) {
                            var n = r.on;
                            return [a("v-list-item-subtitle", e._g({
                                domProps: {
                                    textContent: e._s(t.description)
                                }
                            }, n))]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(t.description)
                    }
                })])], 1), a("v-list-item-icon", [a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(a) {
                            return e.deleteClient(t)
                        }
                    }
                }, [a("v-icon", [e._v("mdi-delete")])], 1)], 1)], 1)
            }
            )), a("v-list-item", {
                on: {
                    click: function(t) {
                        return e.newClient()
                    }
                }
            }, [a("v-list-item-avatar", [a("v-icon", [e._v("mdi-plus")])], 1), a("v-list-item-content", [a("v-list-item-title", {
                domProps: {
                    textContent: e._s(e.$t("common.Create"))
                }
            })], 1)], 1)], 2), a("ui-overlay", {
                attrs: {
                    title: e.$t("oauth.Create"),
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.resetCreate()
                    }
                },
                model: {
                    value: e.creating,
                    callback: function(t) {
                        e.creating = t
                    },
                    expression: "creating"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-input", {
                attrs: {
                    autofocus: "",
                    label: e.$t("common.Name")
                },
                model: {
                    value: e.newName,
                    callback: function(t) {
                        e.newName = t
                    },
                    expression: "newName"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("common.Description")
                },
                on: {
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.createClient()
                    }
                },
                model: {
                    value: e.newDescription,
                    callback: function(t) {
                        e.newDescription = t
                    },
                    expression: "newDescription"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    large: "",
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.resetCreate()
                    }
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    large: "",
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Create"))
                },
                on: {
                    click: function(t) {
                        return e.createClient()
                    }
                }
            })], 1)], 1)], 1), a("ui-overlay", {
                attrs: {
                    title: e.$t("oauth.Credentials"),
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        e.newClientData = !1
                    }
                },
                model: {
                    value: e.newClientDataOpen,
                    callback: function(t) {
                        e.newClientDataOpen = t
                    },
                    expression: "newClientDataOpen"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-alert", {
                attrs: {
                    border: "bottom",
                    text: "",
                    type: "warning",
                    dense: ""
                }
            }, [e._v(" " + e._s(e.$t("oauth.NewClientWarning")) + " ")])], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("p", {
                staticClass: "title",
                domProps: {
                    textContent: e._s(e.$t("oauth.ClientId"))
                }
            }), a("p", {
                staticClass: "body",
                domProps: {
                    textContent: e._s(e.newClientData.id)
                }
            })]), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("p", {
                staticClass: "title",
                domProps: {
                    textContent: e._s(e.$t("oauth.ClientSecret"))
                }
            }), a("p", {
                staticClass: "body",
                domProps: {
                    textContent: e._s(e.newClientData.secret)
                }
            })])], 1)], 1), a("ui-overlay", {
                attrs: {
                    title: e.$t("oauth.Delete", {
                        clientName: e.deleteName
                    }),
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.resetDelete()
                    }
                },
                model: {
                    value: e.deleteOpen,
                    callback: function(t) {
                        e.deleteOpen = t
                    },
                    expression: "deleteOpen"
                }
            }, [a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-alert", {
                attrs: {
                    border: "bottom",
                    text: "",
                    type: "error",
                    dense: ""
                }
            }, [e._v(" " + e._s(e.$t("oauth.DeleteWarning")) + " ")])], 1), a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-switch", {
                attrs: {
                    label: e.$t("oauth.ConfirmDelete")
                },
                model: {
                    value: e.deleteConfirm,
                    callback: function(t) {
                        e.deleteConfirm = t
                    },
                    expression: "deleteConfirm"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    large: "",
                    block: "",
                    color: "error"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Cancel"))
                },
                on: {
                    click: function(t) {
                        return e.resetDelete()
                    }
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("v-btn", {
                attrs: {
                    disabled: !e.deleteConfirm,
                    large: "",
                    block: "",
                    color: "success"
                },
                domProps: {
                    textContent: e._s(e.$t("common.Delete"))
                },
                on: {
                    click: function(t) {
                        return e.deleteConfirmed()
                    }
                }
            })], 1)], 1)], 1)], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    apiDocsUrl: location.origin + "/swagger/index.html",
                    isServer: !1,
                    clients: [],
                    creating: !1,
                    newName: "",
                    newDescription: "",
                    newClientDataOpen: !1,
                    newClientData: !1,
                    deleteOpen: !1,
                    deleteConfirm: !1,
                    deleteName: "",
                    toDelete: !1
                }
            },
            mounted() {
                this.isServer = !!this.server,
                this.getClients()
            },
            methods: {
                async getClients(e) {
                    this.isServer ? this.clients = await this.$api.getServerOAuthClients(this.server.id) : this.clients = await this.$api.getUserOAuthClients()
                },
                newClient() {
                    this.creating = !0
                },
                async createClient() {
                    let e = !1;
                    e = this.isServer ? await this.$api.createServerOAuthClient(this.server.id, this.newName, this.newDescription) : await this.$api.createUserOAuthClient(this.newName, this.newDescription),
                    this.resetCreate(),
                    this.newClientData = e,
                    this.newClientDataOpen = !!e,
                    this.getClients()
                },
                resetCreate() {
                    this.creating = !1,
                    this.newName = "",
                    this.newDescription = ""
                },
                resetDelete() {
                    this.deleteOpen = !1,
                    this.toDelete = !1,
                    this.deleteName = !1,
                    this.deleteConfirm = !1
                },
                deleteClient(e) {
                    this.deleteOpen = !0,
                    this.toDelete = e.client_id,
                    this.deleteName = e.name || this.$t("oauth.UnnamedClient"),
                    this.deleteConfirm = !1
                },
                async deleteConfirmed() {
                    this.isServer ? await this.$api.deleteServerOAuthClient(this.server.id, this.toDelete) : await this.$api.deleteUserOAuthClient(this.toDelete),
                    this.resetDelete(),
                    this.getClients()
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("0798")
          , c = a("8336")
          , m = a("b0af")
          , p = a("99d9")
          , v = a("62ad")
          , h = a("132d")
          , g = a("8860")
          , f = a("da13")
          , S = a("8270")
          , k = a("5d23")
          , E = a("34c3")
          , y = a("0fd9")
          , b = a("3a2f")
          , P = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = P.exports;
        d()(P, {
            VAlert: u["a"],
            VBtn: c["a"],
            VCard: m["a"],
            VCardSubtitle: p["b"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VCol: v["a"],
            VIcon: h["a"],
            VList: g["a"],
            VListItem: f["a"],
            VListItemAvatar: S["a"],
            VListItemContent: k["a"],
            VListItemIcon: E["a"],
            VListItemSubtitle: k["b"],
            VListItemTitle: k["c"],
            VRow: y["a"],
            VTooltip: b["a"]
        })
    },
    cf91: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"אין אפשרויות ספציפיות לסביבה בעבור סביבה זו","docker":{"name":"Docker","image":"תמונה","networkMode":"מצב רשת","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    cfa3: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    d0b0: function(e, t, a) {},
    d0c9: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2-asiakasohjelman käyttäjätiedot","ClientId":"Käyttäjän ID","ClientSecret":"Asiakasohjelman salainen tunnus","NewClientWarning":"Kirjoita muistiin asiakkaan salaisuus, tämän ikkunan sulkemisen jälkeen sitä ei enää koskaan näytetä uudestaan. Sen kadottaminen tai unohtaminen tekee tästä asiakkaasta täysin käyttökelvottoman.","Create":"Luo uusi OAuth2-asiakasohjelma","UnnamedClient":"Nimetön OAuth2-asiakasohjelma","Docs":"Löydä API-dokumentaatio täältä","DeleteWarning":"OAuth2-asiakkaan poistoa ei voida kumota, eikä samoilla tiedoilla voida luoda uutta asiakasta. Kaikki tätä asiakasta yhä käyttävät integraatiot rikkoutuvat sen poiston jälkeen.","ConfirmDelete":"Olen tietoinen tämän OAuth2-asiakkaan poistamisen vaikutuksista ja haluan jatkaa.","Delete":"Poista {clientName}?","Clients":"OAuth2-asiakasohjelmat","AccountDescription":"Täällä listatut OAuth2-asiakkaat perivät kaikki käyttäjätilisi käyttöoikeudet","ServerDescription":"Täällä listatut OAuth2-asiakkaat perivät käyttäjätilisi käyttöoikeudet vain tällä serverillä"}')
    },
    d0ca: function(e) {
        e.exports = JSON.parse('{"Templates":"Plantillas","NoTemplates":"Todavía no hay plantillas","Deleted":"Plantilla eliminada","New":"Crear nueva plantilla","Edit":"Editar plantilla","Editor":"Editor","Json":"JSON","Display":"Nombre para mostrar","Type":"Tipo","Variables":"Variables","Install":"Instalar","AddInstallStep":"Añadir paso de instalación","DeleteInstallStep":"Eliminar paso de instalación","Description":"Descripción","DataType":"Tipo de Dato","DefaultValue":"Valor por defecto","Required":"Necesario","UserEditable":"Usuarios pueden editar","Value":"Valor","AddOption":"Añadir una opción","AddCommand":"Añadir comando","Filename":"Nombre de archivo","Content":"Contenido","Source":"Source","Target":"Target","Version":"Versión","ReleaseType":"Tipo de lanzamiento","AddFile":"Añadir archivo","AddVariable":"Añadir variable","Environment":"Entorno","Environments":"Entornos","AddEnvironment":"Añadir entorno","DefaultEnvironment":"Entorno por defecto","AddEnvVar":"Añadir variable env","EnvVars":"Variables de entorno","DockerImage":"Imagen de Docker","SaveSuccess":"Plantilla guardada","VarNameNoSpaces":"Un nombre de variable no puede estar vacío o contener espacios","SupportedEnvironments":"Entornos soportados","RunConfig":"Ejecutar configuración","PreHook":"Hook Pre Ejecución","PostHook":"Hook Post Ejecución","AddPreStep":"Añadir paso Pre Ejecución","AddPostStep":"Añadir paso Post Ejecución","DeletePreStep":"Eliminar paso Pre Ejecución","DeletePostStep":"Eliminar paso Post Ejecución","Shutdown":"Apagado","Command":"Comando","WorkingDirectory":"Directorio de Trabajo","Arguments":"Argumentos","AddArgument":"Añadir un argumento","Convert":"Convertir","OfferV1Convert":"Esta plantilla json se ve como una plantilla para PufferPanel 1.x, ¿deseas convertir automaticamente esta plantilla a una plantilla para PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"ADVERTENCIA: Las plantillas importadas sobrescribirán las plantillas existentes con el mismo ID","Import":"Importar plantillas","Tooltip":"Importar plantillas del repositorio oficial","Select":"Seleccionar plantillas a importar","Started":"Importando plantillas, por favor espere un momento","Successful":"Plantilla {template} importada correctamente","NoTemplatesTitle":"¿Quieres importar plantillas?","NoTemplatesContent":"Actualmente no tiene ninguna plantilla. Las plantillas son necesarias para crear servidores.<br/>¿Desea importar algunas plantillas desde el repositorio oficial de plantillas de PufferPanel ahora?"},"stop":{"Command":"Comando","Signal":"Señal"},"processors":{"download":{"ProcessorName":"Descargar","files":"Archivos"},"command":{"ProcessorName":"Ejecutar comando","commands":"Comandos"},"alterfile":{"ProcessorName":"Cambiar archivo","regex":"Tratar búsqueda como RegEx","search":"Buscar texto","replace":"Reemplazar con"},"writefile":{"ProcessorName":"Escribir a archivo","text":"Contenido"},"move":{"ProcessorName":"Mover archivo","source":"Fuente","target":"Objetivo"},"mkdir":{"ProcessorName":"Crear directorio"},"mojangdl":{"ProcessorName":"Descargar Minecraft"},"forgedl":{"ProcessorName":"Descargar Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Descargar Minecraft SpongeForge","releaseType":"Tipo de lanzamiento"},"fabricdl":{"ProcessorName":"Descargar Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    d2a6: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Det er ingen miljøspesifikke alternativer for dette miljøet","docker":{"name":"Docker","image":"Bilde","networkMode":"Nettverksmodus","networkName":"Nettverksnavn","bindings":"Bindinger","portBindings":"Port Bindinger","OutsidePort":"Utenfor port","InsidePort":"Innside port","HostPath":"Vertssti","ContainerPath":"Container sti"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    d37e: function(e) {
        e.exports = JSON.parse('{"Settings":"Налаштування","PanelSettings":"Налаштування панелі","EmailSettings":"Налаштування електронної пошти","MasterUrl":"Головний URL","MasterUrlHint":"Базова URL-адреса може бути досягнута панель у форматі http://localhost:8080","CompanyName":"Назва компанії","DefaultTheme":"Типова тема","RegistrationEnabled":"Дозволити користувачам реєструватись самі по собі","RegistrationEnabledHint1":"Власні зареєстровані користувачі не можуть нічого робити до вказаних дозволів","RegistrationEnabledHint2":"Відключення цього лише запобігає прямій реєстрації, запрошення на сервер і на сторінці користувачів не впливають","EmailProvider":"Поштова служба","emailProviders":{"none":"Нічого","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Домен","key":"Ключі API","host":"Вузол","username":"Ім\'я користувача","password":"Пароль"}}')
    },
    d39b: function(e) {
        e.exports = JSON.parse('{"Credentials":"Учетные данные клиента OAuth2","ClientId":"ID клиента","ClientSecret":"Секрет клиента","NewClientWarning":"Запишите секрет клиента, после закрытия этого диалогового окна он больше не будет отображаться. Если вы его потеряете или забудете, этот клиент станет совершенно непригодным для использования.","Create":"Создать новый клиент OAuth2","UnnamedClient":"Безымянный клиент OAuth2","Docs":"Документацию по API можно найти здесь","DeleteWarning":"Удаление клиента OAuth2 невозможно отменить, и нельзя создать нового клиента с теми же учетными данными. Все интеграции, которые все еще используют этот клиент, будут прерваны после его удаления.","ConfirmDelete":"Мне известно о последствиях удаления этого клиента OAuth2, и я хочу продолжить.","Delete":"Удалить {clientName}?","Clients":"Клиенты OAuth2","AccountDescription":"Клиенты OAuth2, перечисленные здесь, наследуют все разрешения вашей учетной записи","ServerDescription":"Клиенты OAuth2, перечисленные здесь, наследуют только права вашей учетной записи на этом сервере"}')
    },
    d487: function(e) {
        e.exports = JSON.parse('{"Users":"使用者","Add":"新增使用者","AccountSettings":"帳戶設定","OldPassword":"舊密碼","NewPassword":"新密碼","ConfirmPassword":"確認密碼","ChangePassword":"變更密碼","ChangeInfo":"變更帳戶詳細資訊","InfoChanged":"已成功變更您的資訊","PasswordChanged":"已成功修改您的密碼","AccountPassword":"帳戶密碼","Account":"帳戶","Login":"登入","LoginLink":"或在此登入","Logout":"登出","Register":"註冊","RegisterLink":"在此註冊","RegisterSuccess":"您已註冊成功","NoEmailGiven":"您必須提供使用者的電子郵件才能新增","Username":"使用者名稱","Password":"密碼","Email":"電子郵件","Edit":"編輯使用者","Update":"更新使用者","Delete":"刪除使用者","CreateSuccess":"User successfully created","CreateError":"建立使用者失敗","UpdateSuccess":"已更新使用者","UpdateError":"更新使用者失敗","PermsUpdateError":"更新使用者權限失敗","Otp":"雙因素認證","OtpEnable":"啟用 2FA","OtpDisable":"停用 2FA","OtpHint":"「雙因素驗證」藉由使用除密碼以外的方式驗證，讓您的帳戶更加安全。","OtpSetup":"2FA 設定","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"密碼","OtpConfirm":"使用 2FA 驗證碼確定","OtpNeeded":"2FA required"}')
    },
    d611: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users","PanelSettings":"Change panel settings"}')
    },
    d6e2: function(e) {
        e.exports = JSON.parse('{"Id":"المعرف","Name":"الاسم","Address":"العنوان","Online":"متصل","Offline":"غير متصل","Loading":"جاري التحميل...","General":"عام","Language":"اللغة","SelectLanguage":"إختيار اللغة","Settings":"الظبط","Update":"تحديث","Edit":"تحرير","Delete":"حذف","Create":"إنشاء","Save":"حفظ","Saved":"تم الحفظ","SaveFailed":"فشل الحفظ","Cancel":"إلغاء","Confirm":"تأكيد","Actions":"الإجرائات","Host":"المضيف","Port":"المنفذ","Template":"نموذج","Options":"الخيارات","Collapse":"طي","Copied":"تم النسخ إلى الحافظة","Unknown":"غير معروف","Search":"بحث","Back":"السابق","Next":"التالي","LanguageName":"العربية","Details":"التفاصيل","ErrorDetails":"تفاصيل الخطأ","HelpTranslate":"ساعدنا على ترجمة بوفر بانل","DarkMode":"الوضع الداكن","ThemeOptions":"خيارات المظهر","Protocol":"بروتوكول","Add":"إضافة","Ignore":"تجاهل","Monday":"الإثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت","Sunday":"الأحد","Description":"الوصف"}')
    },
    d790: function(e) {
        e.exports = JSON.parse('{"Templates":"Шаблони","NoTemplates":"Тут ще немає шаблонів","Deleted":"Шаблон видалено","New":"Створити новий шаблон","Edit":"Редагувати шаблон","Editor":"Редактор","Json":"JSON","Display":"Відображення імені","Type":"Тип","Variables":"Змінні","Install":"Установити","AddInstallStep":"Додати крок встановлення","DeleteInstallStep":"Видалити крок встановлення","Description":"Опис","DataType":"Тип даних","DefaultValue":"Стандартне значення","Required":"Необхідний","UserEditable":"Користувачі можуть редагувати","Value":"Значення","AddOption":"Додати параметр","AddCommand":"Додати команду","Filename":"Назва файлу","Content":"Контент","Source":"Джерело","Target":"Ціль","Version":"Версія","ReleaseType":"Тип релізу","AddFile":"Додати файл","AddVariable":"Додати змінну","Environment":"Середовище","Environments":"Середовища","AddEnvironment":"Додати середовище","DefaultEnvironment":"Середовище за замовчуванням","AddEnvVar":"Додати змінну середовища","EnvVars":"Змінні середовища","DockerImage":"Образ Docker","SaveSuccess":"Збережені шаблони","VarNameNoSpaces":"Ім\'я змінної не може бути пустим або містити пробіли","SupportedEnvironments":"Підтримувані середовища","RunConfig":"Конфігурація запуску","PreHook":"До запуску перемінна","PostHook":"Післа запуска перемінна","AddPreStep":"Додати крок для запуску","AddPostStep":"Додати крок для запуску","DeletePreStep":"Видалити крок попереднього запуску","DeletePostStep":"Видалити крок попереднього запуску","Shutdown":"Вимкнути","Command":"Команда","WorkingDirectory":"Робочий каталог","Arguments":"Аргументи","AddArgument":"Додати аргумент","Convert":"Конвертувати","OfferV1Convert":"Цей шаблон json виглядає як шаблон для PufferPanel 1.x, ви хочете автоматично перетворити це в шаблон для PufferPanel 2.x?","import":{"CommunityWarning":"Ці шаблони створюються спільнотою тому вони без будь-яких гарантій","OverrideWarning":"ПОПЕРЕДЖЕННЯ: імпортовані шаблони WILL перезаписувати існуючі шаблони з тим же ID","Import":"імпортувати шаблони","Tooltip":"Імпортувати шаблони з офіційного репозиторію","Select":"Виберіть шаблони для імпорту","Started":"Імпортування шаблонів, будь ласка, зачекайте трохи","Successful":"Шаблон {template} успішно імпортовано","NoTemplatesTitle":"Ви хочете імпортувати шаблони?","NoTemplatesContent":"В даний час у вас немає жодного шаблону. Шаблони необхідні для створення серверів.<br/>Імпортувати деякі шаблони з офіційного сховища PufferPanel шаблонів зараз?"},"stop":{"Command":"Команда","Signal":"Сигнал"},"processors":{"download":{"ProcessorName":"Завантажити","files":"Файли"},"command":{"ProcessorName":"Команди запуску","commands":"Команди"},"alterfile":{"ProcessorName":"Змінити файл","regex":"Розглядати пошук як RegEx","search":"Текст, за яким шукати","replace":"Заміняти на"},"writefile":{"ProcessorName":"Запис у файл","text":"Контент"},"move":{"ProcessorName":"Перемістити файл","source":"Джерело","target":"Ціль"},"mkdir":{"ProcessorName":"Створити каталог"},"mojangdl":{"ProcessorName":"Завантажити Minecraft"},"forgedl":{"ProcessorName":"Завантажити Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Завантажити Minecraft SpongeForge","releaseType":"Тип релізу"},"fabricdl":{"ProcessorName":"Завантажити Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    d7a8: function(e) {
        e.exports = JSON.parse('{"FileManager":"檔案管理器","NewFolder":"新增資料夾","NewFile":"新增檔案","LastModified":"最後修改時間","ConfirmDelete":"你確認要刪除此檔案？","Upload":"上載","Download":"下載","Size":"大小","NoFiles":"這裏尚未有任何檔案，點擊上方的按扭來添加一些實例吧","FileLoadFailed":"無法載入檔案","Refresh":"Refresh","CreateFile":"Create file","CreateFolder":"Create folder","ArchiveCurrentFolder":"Create archive from current folder","ArchiveFolder":"Create archive from folder","ExtractArchive":"Extract archive","DropToUpload":"Drop files here to upload them"}')
    },
    d84c: function(e) {
        e.exports = JSON.parse('{"Templates":"範本","NoTemplates":"這邊沒有可用的範本","Deleted":"範本已刪除","New":"建立新範本","Edit":"編輯範本","Editor":"編輯器","Json":"JSON","Display":"顯示名稱","Type":"類型","Variables":"變數","Install":"安裝","AddInstallStep":"新增安裝步驟","DeleteInstallStep":"刪除安裝步驟","Description":"描述","DataType":"資料類型","DefaultValue":"預設值","Required":"必填","UserEditable":"使用者可以編輯","Value":"值","AddOption":"新增選項","AddCommand":"新增命令","Filename":"檔案名稱","Content":"內容","Source":"來源","Target":"目標","Version":"版本","ReleaseType":"釋出類型","AddFile":"新增檔案","AddVariable":"新增變數","Environment":"環境","Environments":"環境","AddEnvironment":"新增環境","DefaultEnvironment":"預設環境","AddEnvVar":"新增環境變數","EnvVars":"環境變數","DockerImage":"Docker 映像檔","SaveSuccess":"儲存的範本","VarNameNoSpaces":"變數名稱不可空白或有空格","SupportedEnvironments":"支援的環境","RunConfig":"執行設定","PreHook":"執行前掛鉤","PostHook":"執行後掛鉤","AddPreStep":"新增執行前步驟","AddPostStep":"新增執行後步驟","DeletePreStep":"刪除執行前步驟","DeletePostStep":"刪除執行後步驟","Shutdown":"關機","Command":"命令","WorkingDirectory":"工作目錄","Arguments":"引數","AddArgument":"加入引數","Convert":"轉換","OfferV1Convert":"這個範本看起來 PufferPanel 1.x 格式，請問您是否要自動轉成 PufferPanel 2.x 格式？","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"警告：匯入範本將會覆蓋已存在的相同 ID","Import":"匯入範本","Tooltip":"從官方儲存庫匯入範本","Select":"選擇範本來匯入","Started":"匯入範本中，請稍等片刻","Successful":"成功匯入 {template} 範本","NoTemplatesTitle":"您要匯入範本嗎？","NoTemplatesContent":"您目前沒有任何範本。建立伺服器前必須先設定範本。<br/>您想要現在從 PufferPanel 官方儲存庫中匯入範本嗎？"},"stop":{"Command":"命令","Signal":"訊號"},"processors":{"download":{"ProcessorName":"下載","files":"檔案"},"command":{"ProcessorName":"執行命令","commands":"命令"},"alterfile":{"ProcessorName":"變更檔案","regex":"將搜尋視為正規表示式","search":"要搜尋的文字","replace":"取代為"},"writefile":{"ProcessorName":"寫入檔案","text":"內容"},"move":{"ProcessorName":"移動檔案","source":"來源","target":"目標"},"mkdir":{"ProcessorName":"建立資料夾"},"mojangdl":{"ProcessorName":"下載 Minecraft"},"forgedl":{"ProcessorName":"下載 Minecraft Forge"},"spongeforgedl":{"ProcessorName":"下載 Minecraft SpongeForge","releaseType":"釋出類型"},"fabricdl":{"ProcessorName":"下載 Minecraft Fabric"},"javadl":{"ProcessorName":"Download Java","version":"Version of Java to install (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Download Game from Steam","appId":"App Id"}}}')
    },
    d8ed: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error Desconocido","ErrUnknownError":"Error Desconocido","ErrInvalidCredentials":"Credenciales Invalidas","ErrServiceNotAvailable":"Servicio no disponible","ErrEmailNotConfigured":"Email no configurado","ErrTokenInvalid":"Token invalido","ErrClientNotFound":"Cliente no encontrado","ErrUserNotFound":"Usuario no encontrado","ErrLoginNotPermitted":"Inicio de sesión no permitido","ErrInvalidTokenState":"Estado del token inválido","ErrSettingNotConfigured":"{setting} no está configurado","ErrNoTemplate":"No se ha encontrado ninguna plantilla con el nombre \'{name}\'","ErrServiceInvalidProvider":"{service} no soporta {provider}","ErrFieldRequired":"{field} es obligatorio","ErrFieldMustBePrintable":"{field} debe estar formado por caracteres ascii imprimibles","ErrFieldHasURICharacters":"{field} no debe contener caracteres que no pueden ser usados en URIs","ErrFieldIsInvalidHost":"{field} debe ser una IP válida o FQDN","ErrFieldIsInvalidIP":"{field} debe ser una IP válida","ErrFieldTooLarge":"{field} no puede ser mayor que {max}","ErrFieldTooSmall":"{field} no puede ser menor que {min}","ErrFieldNotBetween":"{field} debe estar entre {min} y {max}","ErrFieldEqual":"{field1} no puede ser igual a {field2}","ErrFieldNotEqual":"{field1} no es igual a {field2}","ErrFieldNotEmail":"{field} no es un email valido","ErrFieldLength":"{field} debe tener al menos {length} caracteres","ErrNoPermission":"No tienes permisos para realizar esta acción","ErrDatabaseNotAvailable":"La base de datos no esta disponible","ErrNoNodes":"No hay nodos disponibles","ErrNoTemplates":"No hay plantillas disponibles","ErrPasswordRequirements":"La contraseña debe tener al menos {min} caracteres","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Las contraseñas no coinciden","ErrSessionTimedOut":"Tu sesión ha caducado, por favor inicia sesión de nuevo","ErrMissingScope":"No estas autorizado a realizar esta acción","ErrInvalidJson":"Los datos json no son válidos","ErrSocketFailed":"La conexión WebSocket ha encontrado un error, algunas características pueden ser lentas o rotas","ErrInviteLinkInvalid":"Tu enlace de invitación parece ser inválido","ErrSavingInviteduser":"Ocurrió un error al intentar crear tu cuenta","ErrDuplicateServerName":"Ya existe un servidor con este nombre","ErrDuplicateNodeName":"Ya existe un nodo con este nombre","ErrDirectoryUploadNotSupported":"No es posible subir carpetas","ErrDockerNotSupported":"Docker is not supported on this node","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    d982: function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file","Refresh":"Refresh","CreateFile":"Create file","CreateFolder":"Create folder","ArchiveCurrentFolder":"Create archive from current folder","ArchiveFolder":"Create archive from folder","ExtractArchive":"Extract archive","DropToUpload":"Drop files here to upload them"}')
    },
    d9bdf: function(e) {
        e.exports = JSON.parse('{"Templates":"Szablony","NoTemplates":"Brak szablonów","Deleted":"Szablon został usunięty","New":"Utwórz nowy szablon","Edit":"Edytuj szablon","Editor":"Edytor","Json":"JSON","Display":"Wyświetlana nazwa","Type":"Typ","Variables":"Zmienne","Install":"Zainstaluj","AddInstallStep":"Dodaj krok instalacji","DeleteInstallStep":"Usuń krok instalacji","Description":"Opis","DataType":"Typ Danych","DefaultValue":"Wartość domyślna","Required":"Wymagane?","UserEditable":"Użytkownicy mogą edytować","Value":"Wartość","AddOption":"Dodaj Opcję","AddCommand":"Dodaj polecenie","Filename":"Nazwa pliku","Content":"Zawartość","Source":"Źródło","Target":"Cel","Version":"Wersja","ReleaseType":"Typ wydania","AddFile":"Dodaj plik","AddVariable":"Dodaj zmienną","Environment":"Środowisko","Environments":"Środowisko","AddEnvironment":"Dodaj środowisko","DefaultEnvironment":"Domyślne środowisko","AddEnvVar":"Dodaj zmienną","EnvVars":"Zmienne środowiskowe","DockerImage":"Obrazy Dokera","SaveSuccess":"Zapisane szablony","VarNameNoSpaces":"Nazwa zmiennej nie może być pusta ani zawierać spacji","SupportedEnvironments":"Wspierane środowisko","RunConfig":"Uruchom konfigurację","PreHook":"Hak Przed Uruchomieniem","PostHook":"Hak Po Uruchomieniu","AddPreStep":"Dodaj Hak Przed Uruchomieniem","AddPostStep":"Dodaj Hak Po Uruchomieniu","DeletePreStep":"Usuń krok instalacji","DeletePostStep":"Usuń krok instalacji","Shutdown":"Zamknij","Command":"Komenda","WorkingDirectory":"Katalog Roboczy","Arguments":"Argumenty","AddArgument":"Dodaj argument","Convert":"Konwertuj","OfferV1Convert":"Ten szablon json wygląda jak szablon wersji PufferPanel 1.x, czy chcesz go automatycznie przekonwertować na szablon wersji PufferPanel 2.x?","import":{"CommunityWarning":"Te szablony są tworzone przez społeczność i dostarczane bez żadnych gwarancji","OverrideWarning":"OSTRZEŻENIE: Zaimportowane szablony zostaną nadpiszą istniejące szablony o tym samym ID","Import":"Importuj szablony","Tooltip":"Importuj szablony z oficjalnego repozytorium","Select":"Wybierz szablony do importowania","Started":"Importowanie szablonów, proszę poczekać chwilę","Successful":"Pomyślnie zaimportowano szablon {template}","NoTemplatesTitle":"Czy chcesz zaimportować szablony?","NoTemplatesContent":"Obecnie nie masz żadnych szablonów. Szablony są niezbędne do tworzenia serwerów.<br/>Czy chcesz zaimportować niektóre szablony z oficjalnego repozytorium PufferPanel szablonów?"},"stop":{"Command":"Komenda","Signal":"Sygnał"},"processors":{"download":{"ProcessorName":"Pobierz","files":"Pliki"},"command":{"ProcessorName":"Uruchom polecenie","commands":"Polecenia"},"alterfile":{"ProcessorName":"Zmień plik","regex":"Traktuj wyszukiwanie jako RegEx","search":"Tekst do wyszukania","replace":"Zamień na"},"writefile":{"ProcessorName":"Zapisz do pliku","text":"Zawartość"},"move":{"ProcessorName":"Przenieś plik","source":"Źródło","target":"Cel"},"mkdir":{"ProcessorName":"Utwórz katalog"},"mojangdl":{"ProcessorName":"Pobierz Minecraft"},"forgedl":{"ProcessorName":"Pobierz Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Pobierz Minecraft SpongeForge","releaseType":"Typ wydania"},"fabricdl":{"ProcessorName":"Pobierz Minecraft Fabric"},"javadl":{"ProcessorName":"Pobierz Javę","version":"Wersja Javy do zainstalowania (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Pobierz grę ze Steam","appId":"Id aplikacji"}}}')
    },
    d9f9: function(e) {
        e.exports = JSON.parse('{"ServersView":"Bisa melihat server ini","ServersEdit":"Edit Server","ServersInstall":"Install server","ServersConsole":"Lihat console","ServersConsoleSend":"Kirimkan perintah ke konsol","ServersStop":"Hentikan dan matikan server","ServersStart":"Mulai server","ServersStat":"Lihat statistik CPU dan memory","ServersFiles":"Bolehkan mengakses berkas mengunakan SFTP","ServersFilesGet":"Lihat dan download mengunakan manager file","ServersFilesPut":"Edit dan upload berkas mengunakan manager file","ServersEditUsers":"Edit akses penguna ke server ini","Admin":"Admin (ini memberi semua ijin)","ViewServers":"Lihat seluruh server","CreateServers":"Buat server anda","DeleteServers":"Hapus server","EditServerAdmin":"Edit penganturan server","ViewNodes":"Lihat node","EditNodes":"Edit node","DeployNodes":"Sebarkan node baru","ViewTemplates":"Lihat tempelate","EditTemplates":"Edit Tempelate","ViewUsers":"Lihat semua penguna","EditUsers":"Edit penguna lain","PanelSettings":"Ubah setelan panel"}')
    },
    db49: function(e) {
        e.exports = JSON.parse('{"ServersView":"Voi nähdä tämän palvelimen","ServersEdit":"Voi muokata palvelinta","ServersInstall":"Voi asentaa palvelimen","ServersConsole":"Voi nähdä konsolin","ServersConsoleSend":"Voi lähettää komentoja konsolille","ServersStop":"Voi pysäyttää ja pakottaa palvelimen pysähtymään","ServersStart":"Voi käynnistää palvelimen","ServersStat":"Voi katsoa prosessorin ja muistin tilastoja","ServersFiles":"Salli pääsy tiedostoihin SFTP: llä","ServersFilesGet":"Voi katsella ja ladata tiedostoja tiedostonhallinnan avulla","ServersFilesPut":"Voi muokata ja ladata tiedostoja käyttämällä tiedostonhallintaa","ServersEditUsers":"Voi muokata käyttäjän oikeuksia tähän palvelimeen","Admin":"Admin (tämä antaa kaikki mahdolliset käyttöoikeudet)","ViewServers":"Voi nähdä palvelimet","CreateServers":"Voi luoda uusia palvelimia","DeleteServers":"Voi poistaa palvelimia","EditServerAdmin":"Voi muokata palvelimen asetuksia","ViewNodes":"Voi nähdä noodit","EditNodes":"Voi muokata noodeja","DeployNodes":"Voi ottaa käyttöön uusia noodeja","ViewTemplates":"Voi nähdä sivupohjat","EditTemplates":"Voi muokata sivupohjia","ViewUsers":"Voi nähdä kaikki käyttäjät","EditUsers":"Voi muokata toisia käyttäjiä","PanelSettings":"Voi muuttaa paneelin asetuksia"}')
    },
    dbe0: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"이 환경에 대한 특정 옵션이 없습니다","docker":{"name":"도커","image":"이미지","networkMode":"네트워크 모드","networkName":"네트워크 이름","bindings":"바인딩","portBindings":"포트 바인딩","OutsidePort":"외부 포트","InsidePort":"내부 포트","HostPath":"호스트 주소","ContainerPath":"컨테이너 주소"},"standard":{"name":"일반"},"tty":{"name":"TTY"}}')
    },
    dcdb: function(e) {
        e.exports = JSON.parse('{"ServersView":"Просмотра этого сервера","ServersEdit":"Редактирования сервера","ServersInstall":"Установка сервера","ServersConsole":"Просмотр консоли","ServersConsoleSend":"Отправить команду в консоль","ServersStop":"Остановить и убить сервер","ServersStart":"Запуска сервера","ServersStat":"Просмотра статистики CPU и памяти","ServersFiles":"Разрешения доступа к файлам через SFTP","ServersFilesGet":"Просмотра и загрузки файлов через менеджер файлов","ServersFilesPut":"Редактирования и загрузки файлов через менеджер файлов","ServersEditUsers":"Редактирования доступа пользователей к этому серверу","Admin":"Администратор (это право дает все доступные права)","ViewServers":"См. Серверы","CreateServers":"Создание новых серверов","DeleteServers":"Удаление серверов","EditServerAdmin":"Редактирование настроек сервера","ViewNodes":"Просмотр хостов","EditNodes":"Редактирование хостов","DeployNodes":"Развернуть новый хост","ViewTemplates":"Просмотр шаблонов","EditTemplates":"Редактирование шаблонов","ViewUsers":"Просмотр всех пользователей","EditUsers":"Редактирование других пользователей","PanelSettings":"Изменить настройки панели"}')
    },
    dddc: function(e) {
        e.exports = JSON.parse('{"ServersView":"Může zobrazit tento server","ServersEdit":"Upravit server","ServersInstall":"Nainstalovat server","ServersConsole":"Zobrazit protokol konzole","ServersConsoleSend":"Poslat příkazy do konzole","ServersStop":"Zastavit a ukončit server","ServersStart":"Spustit server","ServersStat":"Zobrazit statistiky CPU a paměti","ServersFiles":"Povolit přístup k souborům pomocí SFTP","ServersFilesGet":"Zobrazit a stáhnout soubory pomocí správce souborů","ServersFilesPut":"Upravit a nahrát soubory pomocí správce souborů","ServersEditUsers":"Upravit přístup uživatele k tomuto serveru","Admin":"Admin (toto uděluje všechna možná oprávnění)","ViewServers":"Zobrazit servery","CreateServers":"Vytvořit nové servery","DeleteServers":"Odstranit servery","EditServerAdmin":"Upravit nastavení serveru","ViewNodes":"Zobrazit uzly","EditNodes":"Upravit uzly","DeployNodes":"Nasadit nové uzly","ViewTemplates":"Zobrazit šablony","EditTemplates":"Upravit šablony","ViewUsers":"Zobrazit všechny uživatele","EditUsers":"Upravit ostatní uživatele","PanelSettings":"Změnit nastavení panelu"}')
    },
    de60: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Naam","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Laden...","General":"Algemeen","Language":"Taal","SelectLanguage":"Selecteer taal","Settings":"Instellingen","Update":"Bijwerken","Edit":"Bewerken","Delete":"Verwijderen","Create":"Creeër","Save":"Opslaan","Saved":"Opgeslagen","SaveFailed":"Opslaan mislukt","Cancel":"Annuleren","Confirm":"Bevestigen","Actions":"Acties","Host":"Hostnaam","Port":"Poort","Template":"Sjabloon","Options":"Opties","Collapse":"Inklappen","Copied":"Gekopieerd naar het Klembord","Unknown":"Onbekend","Search":"Zoek","Back":"Terug","Next":"Volgende","LanguageName":"Nederlands","Details":"Details","ErrorDetails":"Fout details","HelpTranslate":"Help ons PufferPanel te vertalen","DarkMode":"Donkere Modus","ThemeOptions":"Thema Opties","Protocol":"Protocol","Add":"Voeg toe","Ignore":"Negeren","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag","Sunday":"Zondag","Description":"Beschrijving"}')
    },
    dfdc: function(e) {
        e.exports = JSON.parse('{"Settings":"Impostazioni","PanelSettings":"Impostazioni Pannello","EmailSettings":"Impostazioni Email","MasterUrl":"URL Principale","MasterUrlHint":"L\'URL di base che il pannello può essere raggiunto nel formato http://localhost:8080","CompanyName":"Nome Azienda","DefaultTheme":"Tema Predefinito","RegistrationEnabled":"Permetti agli utenti di registrarsi","RegistrationEnabledHint1":"Gli utenti registrati non possono fare nulla fino a quando non sono stati concessi i permessi","RegistrationEnabledHint2":"Disabilitare questo impedisce solo la registrazione diretta, l\'invito a un server e la pagina Utenti non sono interessati","EmailProvider":"Provider Email","emailProviders":{"none":"Nessuno","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Dominio","key":"Chiave API","host":"Host","username":"Nome utente","password":"Password"}}')
    },
    dfe9: function(e) {
        e.exports = JSON.parse('{"Users":"хуй","Add":"додати юзера","AccountSettings":"настройки акаунта","OldPassword":"хууй","NewPassword":"пидор","ConfirmPassword":"пизда","ChangePassword":"пиздося","ChangeInfo":"хуйлуша","InfoChanged":"пидогон","PasswordChanged":"пидорас","AccountPassword":"пидорас","Account":"пидорас","Login":"пидорас","LoginLink":"пидорас","Logout":"пидорас","Register":"пидорас","RegisterLink":"пидорас","RegisterSuccess":"пидорас","NoEmailGiven":"пидорас","Username":"пидорас","Password":"пидорас","Email":"пидорас","Edit":"пидорас","Update":"panel.creamnodes.ml","Delete":"51.250.28.191","CreateSuccess":"panel.creamnodes.ml","CreateError":"51.250.28.191:25565","UpdateSuccess":"51.250.28.191:25565","UpdateError":"51.250.28.191:25565","PermsUpdateError":"51.250.28.191:25565","Otp":"51.250.28.191:25565","OtpEnable":"51.250.28.191:25565","OtpDisable":"51.250.28.191:25565","OtpHint":"51.250.28.191:25565","OtpSetup":"!nullping 51.250.28.191:25565 22","OtpSetupHint":"!nullping 51.250.28.191:25565 22","OtpSecret":"!nullping 51.250.28.191:25565 22","OtpConfirm":"!nullping 51.250.28.191:25565 22","OtpNeeded":"!nullping 51.250.28.191:25565 22"}')
    },
    dffa: function(e) {
        e.exports = JSON.parse('{"FileManager":"Gerenciador de Arquivos","NewFolder":"Nova pasta","NewFile":"Novo arquivo","LastModified":"Última Modificação","ConfirmDelete":"Tem certeza de que deseja excluir esse arquivo?","Upload":"Upload","Download":"Download","Size":"Tamanho","NoFiles":"Ainda não há arquivos aqui, vá e crie alguns por exemplo, clicando no botão de instalação no topo da página","FileLoadFailed":"Falha ao carregar o arquivo","Refresh":"Atualizar","CreateFile":"Criar arquivo","CreateFolder":"Criar pasta","ArchiveCurrentFolder":"Criar arquivo da pasta atual","ArchiveFolder":"Criar arquivo da pasta","ExtractArchive":"Extrair arquivo","DropToUpload":"Solte os arquivos aqui para enviá-los"}')
    },
    e014: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-switch", {
                attrs: {
                    label: e.$t("templates.Required")
                },
                model: {
                    value: e.value.required,
                    callback: function(t) {
                        e.$set(e.value, "required", t)
                    },
                    expression: "value.required"
                }
            }), a("ui-switch", {
                attrs: {
                    label: e.$t("templates.UserEditable")
                },
                model: {
                    value: e.value.userEdit,
                    callback: function(t) {
                        e.$set(e.value, "userEdit", t)
                    },
                    expression: "value.userEdit"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("templates.Display")
                },
                model: {
                    value: e.value.display,
                    callback: function(t) {
                        e.$set(e.value, "display", t)
                    },
                    expression: "value.display"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("templates.Description")
                },
                model: {
                    value: e.value.desc,
                    callback: function(t) {
                        e.$set(e.value, "desc", t)
                    },
                    expression: "value.desc"
                }
            })], 1), a("v-col", {
                attrs: {
                    cols: "12",
                    md: "option" === e.value.type ? "12" : "6"
                }
            }, [a("ui-select", {
                attrs: {
                    label: e.$t("templates.DataType"),
                    items: e.possibleTypes
                },
                on: {
                    change: function(t) {
                        return e.typeChanged()
                    }
                },
                model: {
                    value: e.value.type,
                    callback: function(t) {
                        e.$set(e.value, "type", t)
                    },
                    expression: "value.type"
                }
            })], 1), "option" !== e.value.type ? a("v-col", {
                attrs: {
                    cols: "12",
                    md: "6"
                }
            }, [a("ui-input", {
                attrs: {
                    label: e.$t("templates.DefaultValue")
                },
                model: {
                    value: e.value.value,
                    callback: function(t) {
                        e.$set(e.value, "value", t)
                    },
                    expression: "value.value"
                }
            })], 1) : e._e(), "option" === e.value.type || "string" === e.value.type ? a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [e._l(e.value.options, (function(t, r) {
                return a("v-row", {
                    key: r
                }, [a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("ui-input", {
                    attrs: {
                        label: e.$t("templates.Value")
                    },
                    model: {
                        value: t.value,
                        callback: function(a) {
                            e.$set(t, "value", a)
                        },
                        expression: "option.value"
                    }
                })], 1), a("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [a("ui-input", {
                    attrs: {
                        label: e.$t("templates.Display"),
                        "icon-behind": "mdi-close"
                    },
                    on: {
                        "click:append-outer": function(t) {
                            return e.$delete(e.value.options, r)
                        }
                    },
                    model: {
                        value: t.display,
                        callback: function(a) {
                            e.$set(t, "display", a)
                        },
                        expression: "option.display"
                    }
                })], 1)], 1)
            }
            )), a("v-btn", {
                attrs: {
                    block: "",
                    text: ""
                },
                domProps: {
                    textContent: e._s(e.$t("templates.AddOption"))
                },
                on: {
                    click: function(t) {
                        return e.value.options.push({
                            value: "",
                            display: ""
                        })
                    }
                }
            })], 2) : e._e()], 1)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    possibleTypes: [{
                        text: "String",
                        value: "string"
                    }, {
                        text: "Boolean",
                        value: "boolean"
                    }, {
                        text: "Integer",
                        value: "integer"
                    }, {
                        text: "Options",
                        value: "option"
                    }]
                }
            },
            methods: {
                typeChanged() {
                    "option" !== this.value.type || this.value.options || (this.value.options = [],
                    this.$emit("input", {
                        ...this.value
                    }))
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("0fd9")
          , p = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: u["a"],
            VCol: c["a"],
            VRow: m["a"]
        })
    },
    e022: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("ui-overlay", {
                attrs: {
                    card: "",
                    closable: "",
                    title: e.$t("common.SelectLanguage")
                },
                model: {
                    value: e.show,
                    callback: function(t) {
                        e.show = t
                    },
                    expression: "show"
                }
            }, [a("v-row", {
                attrs: {
                    id: "langs"
                }
            }, e._l(Object.keys(e.$i18n.messages), (function(t) {
                return a("v-col", {
                    key: t,
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "3"
                    }
                }, [a("v-btn", {
                    attrs: {
                        text: ""
                    },
                    domProps: {
                        textContent: e._s(e.getText(t))
                    },
                    on: {
                        click: function(a) {
                            return e.setLocale(t)
                        }
                    }
                })], 1)
            }
            )), 1), a("v-row", [a("v-col", {
                staticClass: "d-flex justify-center"
            }, [a("a", {
                attrs: {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://crowdin.com/project/pufferpanel"
                }
            }, [e._v(" " + e._s(e.$t("common.HelpTranslate")) + " "), a("v-icon", {
                staticClass: "caption"
            }, [e._v("mdi-launch")])], 1)])], 1)], 1)
        }
          , n = []
          , i = {
            props: {
                value: {
                    type: Boolean,
                    default: ()=>!1
                }
            },
            computed: {
                show: {
                    get: function() {
                        return !!this.value
                    },
                    set: function(e) {
                        this.$emit("input", e)
                    }
                }
            },
            methods: {
                getText(e) {
                    const t = this.$i18n.messages[e].common.LanguageName;
                    let a = "";
                    if (e.indexOf("_") >= 0) {
                        const t = e.split("_")
                          , r = t[t.length - 1];
                        a = 2 === r.length && "SP" !== r.toUpperCase() ? this.getFlag(t[t.length - 1]) : this.getFlag(t[0])
                    } else
                        a = this.getFlag(e);
                    return a && "" !== a ? `${a} ${t}` : t
                },
                getFlag(e) {
                    return e.toUpperCase().replace(/./g, e=>String.fromCodePoint(e.charCodeAt(0) + 127397))
                },
                setLocale(e) {
                    this.$i18n.locale = e,
                    localStorage.setItem("locale", e),
                    this.show = !1
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("8336")
          , c = a("62ad")
          , m = a("132d")
          , p = a("0fd9")
          , v = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: u["a"],
            VCol: c["a"],
            VIcon: m["a"],
            VRow: p["a"]
        })
    },
    e1bb: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Erro desconhecido","ErrUnknownError":"Erro desconhecido","ErrInvalidCredentials":"Credenciais inválidas","ErrServiceNotAvailable":"Serviço indisponível","ErrEmailNotConfigured":"O e-mail não foi configurado","ErrTokenInvalid":"Token inválido","ErrClientNotFound":"Cliente não encontrado","ErrUserNotFound":"Usuário não encontrado","ErrLoginNotPermitted":"Login não permitido","ErrInvalidTokenState":"Estado de token inválido","ErrSettingNotConfigured":"{setting} não está configurado","ErrNoTemplate":"Nenhum template com o nome \'{name}\' foi encontrado","ErrServiceInvalidProvider":"{service} não suporta {provider}","ErrFieldRequired":"{field} é obrigatório","ErrFieldMustBePrintable":"{field} deve ter caracteres ascii imprimíveis","ErrFieldHasURICharacters":"{field} não deve conter caracteres que não podem ser usados em URIs","ErrFieldIsInvalidHost":"{field} deve ser um IP válido ou FQDN","ErrFieldIsInvalidIP":"{field} deve ser um IP válido","ErrFieldTooLarge":"{field} não pode ser maior que {max}","ErrFieldTooSmall":"{field} não pode ser menor que {min}","ErrFieldNotBetween":"{field} deve estar entre {min} e {max}","ErrFieldEqual":"{field1} não pode ser igual a {field2}","ErrFieldNotEqual":"{field1} não é igual a {field2}","ErrFieldNotEmail":"{field} não é um email válido","ErrFieldLength":"{field} deve ter pelo menos {length} caracteres","ErrNoPermission":"Você não tem permissão para realizar esta operação","ErrDatabaseNotAvailable":"Banco de Dados não está disponível","ErrNoNodes":"Não há nodes disponíveis","ErrNoTemplates":"Não há modelos disponíveis","ErrPasswordRequirements":"A senha deve possuir ao menos 8 caracteres","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"As senhas não são iguais","ErrSessionTimedOut":"Sua sessão expirou. Faça login novamente","ErrMissingScope":"Você não está autorizado a realizar esta ação","ErrInvalidJson":"Os dados do JSON são inválidos","ErrSocketFailed":"A conexão WebSocket encontrou um erro, alguns recursos podem estar lentos ou quebrados","ErrInviteLinkInvalid":"Seu link de convite parece ser inválido","ErrSavingInviteduser":"Ocorreu um erro ao criar a sua conta","ErrDuplicateServerName":"Um servidor com este nome já existe","ErrDuplicateNodeName":"Já existe uma nó com esse nome","ErrDirectoryUploadNotSupported":"Não é possível enviar pastas","ErrDockerNotSupported":"O Docker não é compatível com este nó","ErrMissingBinary":"Binário ausente: {expected}","ErrUnsupportedOS":"Sistema Operacional ({actual}) não suportado. Sistemas Operacionais Suportados: {expected}","ErrUnsupportedArch":"Arquitetura {actual} não suportada. Arquiteturas Suportadas: {expected}"}')
    },
    e1d6: function(e) {
        e.exports = JSON.parse('{"Settings":"Cài Đặt","PanelSettings":"Cài đặt Panel","EmailSettings":"Cài đặt email","MasterUrl":"Chủ URL","MasterUrlHint":"URL gốc mà có thể kết nối tới, dưới dạng http://localhost:8080","CompanyName":"Tên công ty","DefaultTheme":"Giao diện Mặc định","RegistrationEnabled":"Cho Phép Người Dùng Tự Đăng Kí","RegistrationEnabledHint1":"Người dùng tự đăng kí không thể làm gì cho đến khi được trao quyền","RegistrationEnabledHint2":"Tắt tính năng này chỉ ngăn chặn đăng kí trực tiếp, còn lời mời vào máy chủ và trang Người dùng sẽ không bị ảnh hưởng","EmailProvider":"Nhà cung cấp Email","emailProviders":{"none":"Không có","smtp":"Giao thức SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Địa chỉ người gửi","domain":"Tên miền","key":"Khóa API","host":"Máy chủ","username":"Tên đăng nhập","password":"Mật khẩu"}}')
    },
    e245: function(e) {
        e.exports = JSON.parse('{"FileManager":"Správce souborů","NewFolder":"Nová složka","NewFile":"Nový soubor","LastModified":"Poslední změna","ConfirmDelete":"Opravdu chcete tento soubor smazat?","Upload":"Nahrát","Download":"Stáhnout","Size":"Velikost","NoFiles":"Zatím zde nejsou žádné soubory, jděte a vytvořte je například kliknutím na tlačítko instalace v horní části stránky","FileLoadFailed":"Načtení souboru se nezdařilo","Refresh":"Obnovit","CreateFile":"Vytvořit soubor","CreateFolder":"Vytvořit složku","ArchiveCurrentFolder":"Vytvořit archiv z aktuální složky","ArchiveFolder":"Vytvořit archiv ze složky","ExtractArchive":"Rozbalit archiv","DropToUpload":"Soubory nahrajete přetažením sem"}')
    },
    e30a: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("v-list", e._l(e.value, (function(t, r) {
                return a("v-list-item", {
                    key: r,
                    on: {
                        click: function(t) {
                            return e.startEdit(r)
                        }
                    }
                }, [a("v-list-item-content", {
                    domProps: {
                        textContent: e._s(t.type)
                    }
                }), a("v-list-item-action", {
                    staticClass: "flex-row"
                }, [a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var r = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                }
                            }, r), [a("v-icon", [e._v("mdi-pencil")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Edit"))
                    }
                })]), a("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on;
                            return [a("v-btn", e._g({
                                attrs: {
                                    icon: ""
                                },
                                on: {
                                    click: function(t) {
                                        return t.stopPropagation(),
                                        e.remove(r)
                                    }
                                }
                            }, n), [a("v-icon", [e._v("mdi-close")])], 1)]
                        }
                    }], null, !0)
                }, [a("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.Delete"))
                    }
                })])], 1)], 1)
            }
            )), 1), e.availableEnvs.length > 0 ? a("v-btn", {
                attrs: {
                    text: "",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Add"))
                },
                on: {
                    click: function(t) {
                        return e.startAdd()
                    }
                }
            }) : e._e(), a("ui-overlay", {
                attrs: {
                    title: e.add ? e.$t("common.Add") : e.currentEnv.type,
                    card: "",
                    closable: ""
                },
                on: {
                    close: function(t) {
                        return e.reset()
                    }
                },
                model: {
                    value: e.edit,
                    callback: function(t) {
                        e.edit = t
                    },
                    expression: "edit"
                }
            }, [e.add ? a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-select", {
                attrs: {
                    items: e.availableEnvs,
                    label: e.$t("templates.Environment")
                },
                model: {
                    value: e.currentEnv.type,
                    callback: function(t) {
                        e.$set(e.currentEnv, "type", t)
                    },
                    expression: "currentEnv.type"
                }
            })], 1)], 1) : e._e(), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("ui-env-config", {
                attrs: {
                    "no-fields-text": e.$t("env.NoEnvFields")
                },
                model: {
                    value: e.currentEnv,
                    callback: function(t) {
                        e.currentEnv = t
                    },
                    expression: "currentEnv"
                }
            })], 1)], 1), a("v-row", [a("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("v-btn", {
                attrs: {
                    color: "success",
                    block: ""
                },
                domProps: {
                    textContent: e._s(e.$t("common.Save"))
                },
                on: {
                    click: function(t) {
                        return e.save()
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , n = [];
        const i = ["standard", "tty", "docker"];
        var o = {
            props: {
                value: {
                    type: Array,
                    default: ()=>[]
                }
            },
            data() {
                return {
                    add: !1,
                    edit: !1,
                    editIndex: 0,
                    currentEnv: {
                        type: "standard"
                    }
                }
            },
            computed: {
                availableEnvs() {
                    return i.filter(e=>-1 === this.value.map(t=>t.type === e).indexOf(!0))
                }
            },
            methods: {
                addEnv() {
                    this.value.push({
                        type: this.newEnv
                    }),
                    this.newEnv = "standard",
                    this.addingEnv = !1
                },
                remove(e) {
                    const t = [...this.value];
                    t.splice(e, 1),
                    this.$emit("input", t)
                },
                reset() {
                    this.add = !1,
                    this.edit = !1,
                    this.editIndex = 0,
                    this.currentEnv = {
                        type: this.availableEnvs[0]
                    }
                },
                startAdd() {
                    this.currentEnv = {
                        type: this.availableEnvs[0]
                    },
                    this.add = !0,
                    this.edit = !0
                },
                startEdit(e) {
                    this.currentEnv = {
                        ...this.value[e]
                    },
                    this.editIndex = e,
                    this.add = !1,
                    this.edit = !0
                },
                save() {
                    const e = [...this.value];
                    this.add ? e.push(this.currentEnv) : e[this.editIndex] = this.currentEnv,
                    this.$emit("input", e),
                    this.reset()
                }
            }
        }
          , s = o
          , l = a("2877")
          , d = a("6544")
          , u = a.n(d)
          , c = a("8336")
          , m = a("62ad")
          , p = a("132d")
          , v = a("8860")
          , h = a("da13")
          , g = a("1800")
          , f = a("5d23")
          , S = a("0fd9")
          , k = a("3a2f")
          , E = Object(l["a"])(s, r, n, !1, null, null, null);
        t["default"] = E.exports;
        u()(E, {
            VBtn: c["a"],
            VCol: m["a"],
            VIcon: p["a"],
            VList: v["a"],
            VListItem: h["a"],
            VListItemAction: g["a"],
            VListItemContent: f["a"],
            VRow: S["a"],
            VTooltip: k["a"]
        })
    },
    e3a2: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Ismeretlen hiba","ErrUnknownError":"Ismeretlen hiba","ErrInvalidCredentials":"Érvénytelen hitelesítő adatok","ErrServiceNotAvailable":"A szolgáltatás nem elérhető","ErrEmailNotConfigured":"Nincs email cím beállítva","ErrTokenInvalid":"Érvénytelen hozzáférési kulcs","ErrClientNotFound":"Kliens nem található","ErrUserNotFound":"A felhasználó nem található","ErrLoginNotPermitted":"A belépés nem engedélyezett","ErrInvalidTokenState":"Érvénytelen token állapot","ErrSettingNotConfigured":"{setting} nincs beállítva","ErrNoTemplate":"\'{name}\' nevű sablon nem létezik","ErrServiceInvalidProvider":"{provider} nem lesz támogatva a(z) {service} által","ErrFieldRequired":"{field} kötelező","ErrFieldMustBePrintable":"A(z) {field} mezőnek nyomtatható ascii karakterekből kell lennie","ErrFieldHasURICharacters":"A(z) {field} mező nem tartalmazhat olyan karaktereket, amiket URL-ben használnak","ErrFieldIsInvalidHost":"A(z) {field} mezőnek egy valós IP-címnek vagy Teljesen minősített domain névnek kell lennie","ErrFieldIsInvalidIP":"A(z) {field} mezőnek egy valós IP-címnek kell lennie","ErrFieldTooLarge":"A(z) {field} mező nem lehet nagyobb mint {max}","ErrFieldTooSmall":"A(z) {field} mező nem lehet kisebb, mint {min}","ErrFieldNotBetween":"A(z) {field} mezőnek {min} és {max} között kell lennie","ErrFieldEqual":"A(z) {field1} nem lehet ugyanaz, mint {field2}","ErrFieldNotEqual":"A(z) {field1} nem ugyanaz, mint a(z) {field2}","ErrFieldNotEmail":"A(z) {field} mezőben egy érvénytelen e-mail cím van megadva","ErrFieldLength":"A(z) {field} mezőnek legalább {length} hosszúnak kell lennie","ErrNoPermission":"Nincs jogod a műveletet végrehajtásához","ErrDatabaseNotAvailable":"Az adatbázis nem elérhető","ErrNoNodes":"Nincs elérhető csomópont","ErrNoTemplates":"Nincs elérhető sablon","ErrPasswordRequirements":"A jelszónak minimum 8 karakternek kell lennie","ErrUsernameRequirements":"Username must be at least 5 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"A jelszavak nem egyeznek","ErrSessionTimedOut":"Lejárt a munkamenet, kérünk lépj be újra","ErrMissingScope":"Nincs jogod a művelet végrehajtásához","ErrInvalidJson":"A json adat érvénytelen","ErrSocketFailed":"A WebSocket kapcsolat hibát észlelt, néhány funkció lassulhat / nem működik","ErrInviteLinkInvalid":"A megadott meghívó érvénytelen","ErrSavingInviteduser":"Hiba történt a fiók létrehozása közben","ErrDuplicateServerName":"Egy szerver már létezik ezzel a névvel","ErrDuplicateNodeName":"Egy csomópont már létezik ezzel a névvel","ErrDirectoryUploadNotSupported":"Sikertelen fájlfeltöltés","ErrDockerNotSupported":"A Docker nem támogatott ezen a csomóponton","ErrMissingBinary":"Missing binary: {expected}","ErrUnsupportedOS":"OS ({actual}) not supported. Supported OS: {expected}","ErrUnsupportedArch":"Architecture {actual} not supported. Supported Architectures: {expected}"}')
    },
    e3d4: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Tên","Address":"Địa chỉ","Online":"Trực tuyến","Offline":"Ngoại tuyến","Loading":"Đang tải...","General":"Chung","Language":"Ngôn ngữ","SelectLanguage":"Chọn ngôn ngữ","Settings":"Cài đặt","Update":"Cập nhật","Edit":"Chỉnh sửa","Delete":"Xóa","Create":"Tạo","Save":"Lưu","Saved":"Đã lưu","SaveFailed":"Đã Xảy Ra Lỗi Khi Đang Sao Lưu","Cancel":"Hủy","Confirm":"Xác nhận","Actions":"Hành động","Host":"Máy chủ","Port":"Cổng","Template":"Mẫu","Options":"Tùy chọn","Collapse":"Thu gọn","Copied":"Đã sao chép vào bảng tạm","Unknown":"Không xác định","Search":"Tìm kiếm","Back":"Quay Lại","Next":"Tiếp","LanguageName":"Tiếng Việt","Details":"Chi tiết","ErrorDetails":"Chi tiết lỗi","HelpTranslate":"Giúp Chúng Tôi Dịch PufferPanel","DarkMode":"Chế độ tối","ThemeOptions":"Chủ đề","Protocol":"Giao thức","Add":"Thêm","Ignore":"Bỏ qua","Monday":"Thứ 2","Tuesday":"Thứ 3","Wednesday":"Thứ 4","Thursday":"Thứ 5","Friday":"Thứ 6","Saturday":"Thứ 7","Sunday":"Chủ nhật","Description":"Mô tả"}')
    },
    e404: function(e) {
        e.exports = JSON.parse('{"Templates":"Mallid","NoTemplates":"Siin pole veel malle","Deleted":"Mall kustutatud","New":"Loo uus mall","Edit":"Muuda malli","Editor":"Redigeerija","Json":"JSON","Display":"Kuvatav Nimi","Type":"Tüüp","Variables":"Muutujad","Install":"Paigalda","AddInstallStep":"Lisa järgmine Samm","DeleteInstallStep":"Kustuta Paigaldamise Samm","Description":"Kirjeldus","DataType":"Andme Tüüp","DefaultValue":"Vaikimisi Väärtus","Required":"Nõutav","UserEditable":"Kasutajad saavad muuta","Value":"Väärtus","AddOption":"Lisa valik","AddCommand":"Lisa käsklus","Filename":"Failinimi","Content":"Sisu","Source":"Allikas","Target":"Sihtpunkt","Version":"Versioon","ReleaseType":"Väljalaske Tüüp","AddFile":"Lisa fail","AddVariable":"Lisa muutuja","Environment":"Keskkond","Environments":"Keskkonnad","AddEnvironment":"Lisa keskkond","DefaultEnvironment":"Vaikimisi keskkond","AddEnvVar":"Lisa env muutuja","EnvVars":"Keskkonna muutujad","DockerImage":"Dockeri Image","SaveSuccess":"Salvestatud Mall","VarNameNoSpaces":"Muutuja nimi ei tohi olla tühi ega sisaldada tühikuid","SupportedEnvironments":"Toetatud Keskkonnad","RunConfig":"Käivita Konfiguratsioon","PreHook":"Enne Käivituse Haakimine","PostHook":"Pärast Käivituse Haakimine","AddPreStep":"Lisa Enne Käivitamist Samm","AddPostStep":"Lisa Pärast Käivitamist Samm","DeletePreStep":"Kustuta Enne Käivitamist Samm","DeletePostStep":"Lisa Pärast Käivitamist Samm","Shutdown":"Lülita välja","Command":"Käsklus","WorkingDirectory":"Töökataloog","Arguments":"Argumendid","AddArgument":"Lisa argument","Convert":"Teisenda","OfferV1Convert":"Selle malli json näeb välja, nagu see oleks PufferPanel 1.x pärit, kas soovite selle automaatselt teisendada PufferPanel 2.x malliks?","import":{"CommunityWarning":"Need mallid on tehtud kogukonna poolt ja need on saadaval ilma igasuguse garantiiga","OverrideWarning":"HOIATUS: Imporditud mallid kirjutatakse üle sama ID-ga olevasolevad mallid","Import":"Impordi mall","Tooltip":"Impordi mall ametlikust repositooriumist","Select":"Vali mall mida importida","Started":"Impordin malle, palun oota moment","Successful":"Edukalt imporditud mall {template}","NoTemplatesTitle":"Kas sa soovid importida malle?","NoTemplatesContent":"Sul hetkel pole ühtegi malli. Mallid on vajalikud, et luua servereid.<br/>Kas sa soovid importida mõned mallid ametlikust PufferPaneli repositooriumist?"},"stop":{"Command":"Käsklus","Signal":"Signaal"},"processors":{"download":{"ProcessorName":"Allalaadimine","files":"Failid"},"command":{"ProcessorName":"Käivita käsklus","commands":"Käsklused"},"alterfile":{"ProcessorName":"Muuda faili","regex":"Käsitlege otsingut kui RegEx","search":"Tekstiotsing","replace":"Asenda"},"writefile":{"ProcessorName":"Kirjuta faili","text":"Sisu"},"move":{"ProcessorName":"Liiguta faili","source":"Allikas","target":"Sihtmärk"},"mkdir":{"ProcessorName":"Loo kataloog"},"mojangdl":{"ProcessorName":"Laadi minecraft alla"},"forgedl":{"ProcessorName":"Laadi Minecraft Forge alla"},"spongeforgedl":{"ProcessorName":"Laadi Minecraft SpongeForge alla","releaseType":"Väljalaske Tüüp"},"fabricdl":{"ProcessorName":"Laadi Minecraft Fabric alla"},"javadl":{"ProcessorName":"Laadi alla Java","version":"Installi java versioon (8, 16 17)"},"steamgamedl":{"ProcessorName":"Laadi alla mäng steamist","appId":"Rakenduse id"}}}')
    },
    e40d: function(e) {
        e.exports = JSON.parse('{"ServersView":"يمكنه مشاهدة الخادم","ServersEdit":"تعديل الخادم","ServersInstall":"تثبيت الخادم","ServersConsole":"عرض وحدة التحكم","ServersConsoleSend":"إرسال أوامر إلى وحدة التحكم","ServersStop":"إيقاف و فرض إيقاف الخادم","ServersStart":"تشغيل الخادم","ServersStat":"عرض بيانات وحدة المعالجة المركزية و الذاكرة","ServersFiles":"السماح بالوصول إلى الملفات باستخدام SFTP","ServersFilesGet":"مشاهده و تحميل الملفات بستخدام مدير الملفات","ServersFilesPut":"تعديل و رفع الملفات باستخدام مدير الملفات","ServersEditUsers":"تحرير صلاحيات وصول المستخدم للخادم","Admin":"مشرف (هذا يعطي كل الأُذونات الممكنة)","ViewServers":"رؤية الخادم","CreateServers":"إنشاء خادم جديد","DeleteServers":"حذف الخوادم","EditServerAdmin":"تعديل إعدادات الخادم","ViewNodes":"مشاهده الNodes","EditNodes":"تعديل ال Nodes","DeployNodes":"إنشاء Nodes جدد","ViewTemplates":"مشاهدة القوالب","EditTemplates":"تعديل القوالب","ViewUsers":"رؤية كافة المستخدمين","EditUsers":"تعديل مستخدمين آخرين","PanelSettings":"تغيير إعدادات اللوحة"}')
    },
    e483: function(e) {
        e.exports = JSON.parse('{"Node":"节点","Nodes":"节点","Edit":"编辑节点","Add":"添加节点","Update":"更新节点","Delete":"删除节点","PublicHost":"公共主机","PublicPort":"公共端口","PrivateHost":"私有主机","PrivatePort":"私有端口","SftpPort":"SFTP 端口","WithPrivateAddress":"服务器通信使用不同的主机/端口","WithPrivateAddressHint":"当主节点需要与新节点通信时，使用这个单独地址。 例如当节点位于同一个网络中时。","SaveConfig":"保存配置","SavePublicKey":"保存公钥","DeploymentInstruction":"要部署节点，请在新服务器上安装 PufferPanel 并将配置文件放置于 `/etc/pufferpanel/`<br/>之后请重启新服务器上的 PufferPanel。","UpdateSuccess":"已成功更新节点","UpdateError":"更新节点时出错","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    e620: function(e) {
        e.exports = JSON.parse('{"Settings":"Indstillinger","PanelSettings":"Panel indstillinger","EmailSettings":"Email Indstillinger","MasterUrl":"Master URL","MasterUrlHint":"The base URL the panel can be reached under in the format http://localhost:8080","CompanyName":"Virksomheds navn","DefaultTheme":"Standardtema","RegistrationEnabled":"Allow users to register themselves","RegistrationEnabledHint1":"Self registered users can\'t do anything until given permissions","RegistrationEnabledHint2":"Disabling this only prevents direct registration, invitation to a server and the Users page are not affected","EmailProvider":"Email Udbyder","emailProviders":{"none":"Intet","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Sender Adress","domain":"Domæne","key":"API Key","host":"Vært","username":"Brugernavn","password":"Adgangskode"}}')
    },
    e6ec: function(e) {
        e.exports = JSON.parse('{"FileManager":"檔案管理器","NewFolder":"新增資料夾","NewFile":"新增檔案","LastModified":"最後編輯","ConfirmDelete":"您確定要刪除這個檔案？","Upload":"上傳","Download":"下載","Size":"大小","NoFiles":"這邊沒有檔案，請透過上方安裝按鈕來新增檔案","FileLoadFailed":"檔案讀取失敗","Refresh":"重新整理","CreateFile":"建立檔案","CreateFolder":"建立資料夾","ArchiveCurrentFolder":"建立目前資料夾的封存檔","ArchiveFolder":"建立資料夾的封存檔","ExtractArchive":"擷取封存檔內容","DropToUpload":"拖曳檔案至此即可上傳"}')
    },
    e796: function(e) {
        e.exports = JSON.parse('{"Node":"Düğüm","Nodes":"Düğümler","Edit":"Düğümü düzenle","Add":"Düğüm ekle","Update":"Düğümü güncelle","Delete":"Düğüm sil","PublicHost":"Ana sunucu","PublicPort":"Ana port","PrivateHost":"Yerel sunucu","PrivatePort":"Yerel port","SftpPort":"SFTP Port","WithPrivateAddress":"Sunucudan sunucuya haberleşme için farklı bir \\"sunucu/port\\" kullanın","WithPrivateAddressHint":"Bu ayrı adres, ana düğümün yeni düğümle konuşması gerektiğinde kullanılır. Örneğin, düğümler NAT arkasında aynı ağda olduğunda kullanışlıdır.","SaveConfig":"Ayarları kaydet","SavePublicKey":"Anahtarı kaydet","DeploymentInstruction":"Düğümü yerleştirmek için, PufferPanel\'i yeni sunucuya kurun ve yapılandırma dosyasını `/etc/pufferpanel/` dizinine yerleştirin.<br/>Daha sonra yeni sunucuda PufferPanel\'i yeniden başlatın.","UpdateSuccess":"Düğüm güncellendi","UpdateError":"Düğüm güncellenirken hata oluştu","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    e803: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Názov","Address":"Adresa","Online":"Online","Offline":"Offline","Loading":"Načítavam...","General":"Všeobecné","Language":"Jazyk","SelectLanguage":"Vyberte jazyk","Settings":"Nastavenia","Update":"Aktualizovať","Edit":"Upraviť","Delete":"Odstrániť","Create":"Vytvoriť","Save":"Uložiť","Saved":"Uložené","SaveFailed":"Ukladanie zlyhalo","Cancel":"Zrušiť","Confirm":"Potvrdiť","Actions":"Akcie","Host":"Host","Port":"Port","Template":"Šablóna","Options":"Možnosti","Collapse":"Zbaliť","Copied":"Skopírované do schránky","Unknown":"Neuvedené","Search":"Hľadať","Back":"Naspäť","Next":"Nasledujúci","LanguageName":"Anglicky","Details":"Detaily","ErrorDetails":"Detaily chyby","HelpTranslate":"Pomôžte nám preložiť PufferPanel","DarkMode":"Tmavý Režim","ThemeOptions":"Nastavenia vzhľadu","Protocol":"Protokol","Add":"Pridať","Ignore":"Ignorovať","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Streda","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota","Sunday":"Nedeľa","Description":"Popis"}')
    },
    e8ae: function(e) {
        e.exports = JSON.parse('{"Settings":"Einstellungen","PanelSettings":"Panel Einstellungen","EmailSettings":"Email Einstellungen","MasterUrl":"Haupt URL","MasterUrlHint":"Die Haupt URL des Panels kann unter http://localhost:8080 erreicht werden","CompanyName":"Firmenname","DefaultTheme":"Standarddesign","RegistrationEnabled":"Benutzern erlauben, sich zu registrieren","RegistrationEnabledHint1":"Selbst registrierte Benutzer können nichts tun bis die Berechtigungen gegeben wurden","RegistrationEnabledHint2":"Das Deaktivieren verhindert nur die direkte Registrierung, die Einladung zu einem Server und die Benutzerseite ist nicht betroffen","EmailProvider":"E-Mail-Anbieter","emailProviders":{"none":"Kein(e)","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Absender Adresse","domain":"Domain","key":"API Schlüssel","host":"Host","username":"Benutzername","password":"Passwort"}}')
    },
    e926: function(e) {
        e.exports = JSON.parse('{"Credentials":"Credenciais do cliente OAuth 2.0","ClientId":"ID do Cliente","ClientSecret":"Segredo do Cliente","NewClientWarning":"Lembre-se que o segredo não será exibido mais depois que essa página for fechada. Perdendo ou esquecendo irá tornar este usuário completamente inutilizável.","Create":"Criar novo cliente OAuth2","UnnamedClient":"Cliente OAuth2 sem nome","Docs":"Ver documentação da API","DeleteWarning":"A exclusão de um cliente OAuth2 não pode ser desfeita nem um cliente novo pode ser criado com as mesmas credenciais. Todas as integrações que ainda estiverem utilizando este cliente serão excluídas após a exclusão.","ConfirmDelete":"Estou ciente dos efeitos que a exclusão desse cliente OAuth2 terá e desejo prosseguir.","Delete":"Excluir {clientName}?","Clients":"Clientes OAuth2","AccountDescription":"Os clientes OAuth2 listados aqui herdam todas as suas permissões das contas","ServerDescription":"Os clientes OAuth2 listados aqui apenas herdam suas permissões de contas neste servidor"}')
    },
    e937: function(e) {
        e.exports = JSON.parse('{"FileManager":"Administrador de Archivos","NewFolder":"Nueva capreta","NewFile":"Nuevo Archivo","LastModified":"Última modificación","ConfirmDelete":"¿Estás seguro que quieres borrar este archivo?","Upload":"Subir","Download":"Descargar","Size":"Tamaño","NoFiles":"Todavía no hay archivos, vaya y cree algunos por ejemplo haciendo clic en el botón de instalar en la parte superior de la página","FileLoadFailed":"Error al cargar el archivo","Refresh":"Refrescar","CreateFile":"Crear archivo","CreateFolder":"Crear carpeta","ArchiveCurrentFolder":"Crear un archivo comprimido de la carpeta actual","ArchiveFolder":"Crear un archivo comprimido desde esta carpeta","ExtractArchive":"Extraer archivo comprimido","DropToUpload":"Arrastra archivos aquí para subirlos"}')
    },
    ea0d: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Anmeldeinformationen","ClientId":"Client ID","ClientSecret":"Clientgeheimnis","NewClientWarning":"Beachten Sie, dass das Clientgeheimnis nach dem Schließen dieses Dialoges nicht mehr angezeigt wird. Das Verwerfen oder Vergessen wird den Client komplett unbrauchbar machen.","Create":"Neuen OAuth2-Client erstellen","UnnamedClient":"Unbenannter OAuth2-Client","Docs":"API-Dokumentation finden Sie hier","DeleteWarning":"Das Löschen eines OAuth2-Clients kann weder rückgängig gemacht noch ein neuer Client mit den gleichen Zugangsdaten erstellt werden. Alle Integrationen, die diesen Client noch verwenden, werden nach dem Löschen unterbrochen.","ConfirmDelete":"Ich bin mir der Auswirkungen bewusst, die das Löschen dieses OAuth2-Clients haben wird und möchte fortfahren.","Delete":"{clientName} löschen?","Clients":"OAuth2 Clients","AccountDescription":"Die hier aufgelisteten OAuth2-Clients erben alle Ihre Account-Berechtigungen","ServerDescription":"Die hier aufgelisteten OAuth2-Clients erben nur Ihre Berechtigungen auf diesem Server"}')
    },
    ea6c: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"User successfully created","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions","Otp":"Two factor authentication","OtpEnable":"Enable 2FA","OtpDisable":"Disable 2FA","OtpHint":"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"Secret Code","OtpConfirm":"Confirm using a 2FA code","OtpNeeded":"2FA required"}')
    },
    eadd: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan se denna server","ServersEdit":"Redigera servern","ServersInstall":"Installera servern","ServersConsole":"Visa konsolen","ServersConsoleSend":"Skicka kommandon till konsolen","ServersStop":"Stoppa och döda servern","ServersStart":"Starta servern","ServersStat":"Se CPU- och minnesanvändning","ServersFiles":"Tillåt åtkomst till filer med SFTP","ServersFilesGet":"Visa och ladda ner filer med filhanteraren","ServersFilesPut":"Redigera och ladda upp filer med filhanteraren","ServersEditUsers":"Redigera användarens åtkomst till denna server","Admin":"Admin (detta ger varje möjlig behörighet)","ViewServers":"Se servrar","CreateServers":"Skapa nya servrar","DeleteServers":"Ta bort servrar","EditServerAdmin":"Redigera serverinställningar","ViewNodes":"Se noder","EditNodes":"Redigera noder","DeployNodes":"Skapa nya noder","ViewTemplates":"Se mallar","EditTemplates":"Redigera mallar","ViewUsers":"Se alla användare","EditUsers":"Redigera andra användare","PanelSettings":"Ändra panelinställningar"}')
    },
    eb61: function(e) {
        e.exports = JSON.parse('{"Templates":"Modelos","NoTemplates":"Ainda não há modelos","Deleted":"Modelo apagado","New":"Criar novo modelo","Edit":"Editar novo modelo","Editor":"Editor","Json":"JSON","Display":"Nome de Exibição","Type":"Tipo","Variables":"Variáveis","Install":"Instalar","AddInstallStep":"Adicionar Passo de Instalação","DeleteInstallStep":"Apagar Passo de Instalação","Description":"Descrição","DataType":"Tipo de dado","DefaultValue":"Valor Padrão","Required":"Necessário","UserEditable":"Utilizadores podem editar","Value":"Valor","AddOption":"Adicionar uma opção","AddCommand":"Adicionar comando","Filename":"Nome de Ficheiro","Content":"Conteúdo","Source":"Fonte","Target":"Alvo","Version":"Versão","ReleaseType":"Tipo de Lançamento","AddFile":"Adicionar ficheiro","AddVariable":"Adicionar Variável","Environment":"Ambiente","Environments":"Ambientes","AddEnvironment":"Adicionar ambiente","DefaultEnvironment":"Ambiente padrão","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Imagem Docker","SaveSuccess":"Modelo Guardado","VarNameNoSpaces":"O nome da variável não pode estar em branco ou conter espaços","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Encerrar","Command":"Comando","WorkingDirectory":"Working Directory","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Converter","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"CommunityWarning":"These templates are made by the community and provided without any warranties","OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Alterar ficheiro","regex":"Treat search as RegEx","search":"Text to search","replace":"Substituir por"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Fonte","target":"Target"},"mkdir":{"ProcessorName":"Criar diretório"},"mojangdl":{"ProcessorName":"Transferir Minecraft"},"forgedl":{"ProcessorName":"Transferir o Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Transferir o Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Transferir o Minecraft Fabric"},"javadl":{"ProcessorName":"Transferir Java","version":"Versão do Java a instalar (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Transferir Jogo da Steam","appId":"App Id"}}}')
    },
    ec20: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"User successfully created","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions","Otp":"Two factor authentication","OtpEnable":"Enable 2FA","OtpDisable":"Disable 2FA","OtpHint":"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.","OtpSetup":"2FA Setup","OtpSetupHint":"Scan the QR code using your authenticator application or copy the secret code below into it.","OtpSecret":"Secret Code","OtpConfirm":"Confirm using a 2FA code","OtpNeeded":"2FA required"}')
    },
    ec4d: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    ec78: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Tidak ada akses server yang anda miliki","Servers":"Servers","Add":"Tambahkan Server","Console":"Console","Controls":"Kontrol","SFTPInfo":"Informasi SFTP","Restart":"Restart","Start":"Mulai","Stop":"Hentikan","Kill":"Mematikan","Install":"Install","Send":"Kirim","Pause":"Jeda","Statistics":"Statistik","CPU":"CPU","Memory":"Memory","Files":"Berkas","Name":"Nama Server","NameInvalid":"Nama server tidak bisa kosong atau berisi karakter khusus","SelectNode":"Mohon pilih node","SelectTemplate":"Mohon pilih template","SelectThisTemplate":"Gunakan Template ini","SelectUser":"Mohon pilih penguna","Environment":"Environment","SelectEnvironment":"Mohon pilih environment","TypeUsername":"Ketik nama pengguna anda","Admin":"Pengelola","AdminControls":"Kontrol Admin","Settings":"Pengaturan","NoEditableVars":"Server ini tidak memiliki variabel yang dapat Anda edit","ConfirmDelete":"Anda yakin ingin menghapus server ini ?","Delete":"Hapus server","Deleted":"Server yang Dihapus","NoReadme":"Tidak ada readme tersedia untuk template ini","SftpConnection":"Sambung ke SFTP","EditDefinition":"Edit Definisi Server","Reload":"Muat ulang data server dari disk","Reloaded":"Data server telah dimuat ulang","Autostart":"Mulai server saat node dimulai","Autorestart":"Mulai ulang server ketika berhenti secara normal","Autorecover":"Mulai ulang server saat crash","Rename":"Ganti Nama Server","Tasks":"Tugas","NoTasks":"Tak Ada Tugas","RunTask":"Jalankan tugas","NewTask":"Tugas Baru","EditTask":"Edit Tugas","TaskDeleted":"Tugas telah dihapus","TaskTriggered":"Munculkan Tugas","EnableSchedule":"Jalankan tugas secara otomatis","TaskScheduleInvalid":"Task Schedule Invalid","TaskScheduleManual":"Jalan secara manual","CronExpression":"Cron Expression","Hourly":"Per Jam","Daily":"Harian","Weekly":"Mingguan","Monthly":"Bulanan","Advanced":"Lanjutan","HourlyTab":"Setiap {hourInterval} jam pada menit {minute}","DailyTab":"Setiap {dayInterval} hari di {hour}:{minute}","WeeklyTab":"Setiap {weekdays} pada {hour}:{minute}","MonthlyTab":"Setiap {monthInterval} bulan pada hari {day} at {hour}:{minute}"}')
    },
    ed51: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan se denne serveren","ServersEdit":"Rediger serveren","ServersInstall":"Installer serveren","ServersConsole":"Vis konsollen","ServersConsoleSend":"Send kommandoer til konsollen","ServersStop":"Tving serveren til at stoppe","ServersStart":"Starte serveren","ServersStat":"Vis CPU-og minnestatistikk","ServersFiles":"Gi tilgang til filer via SFTP","ServersFilesGet":"Vis og last ned filer ved hjelp av filbehandleren","ServersFilesPut":"Rediger og last opp filer ved hjelp av filbehandleren","ServersEditUsers":"Rediger brukerens tilgang til denne serveren","Admin":"Admin (dette gir alle mulige tillatelser)","ViewServers":"Se servere","CreateServers":"Opprett nye servere","DeleteServers":"Slett servere","EditServerAdmin":"Rediger serverinnstillinger","ViewNodes":"Se noder","EditNodes":"Rediger noder","DeployNodes":"Installer nye noder","ViewTemplates":"Se maler","EditTemplates":"Rediger maler","ViewUsers":"Se alle brukere","EditUsers":"Rediger andre brukere","PanelSettings":"Endre panelinnstillinger"}')
    },
    ed5d: function(e) {
        e.exports = JSON.parse('{"Users":"Usuarios","Add":"Añadir usuario","AccountSettings":"Configuración de cuenta","OldPassword":"Contraseña antigua","NewPassword":"Nueva contraseña","ConfirmPassword":"Confirme la contraseña","ChangePassword":"Cambiar contraseña","ChangeInfo":"Cambiar detalles de la cuenta","InfoChanged":"Su información ha sido cambiada","PasswordChanged":"Su contraseña ha sido cambiada","AccountPassword":"Contraseña de la cuenta","Account":"Cuenta","Login":"Iniciar sesión","LoginLink":"O inicie sesión aquí","Logout":"Cerrar sesión","Register":"Registrarse","RegisterLink":"O regístrese aquí","RegisterSuccess":"Se ha registrado correctamente","NoEmailGiven":"Debes proporcionar el correo del usuario que quieres añadir","Username":"Nombre de usuario","Password":"Contraseña","Email":"Correo electrónico","Edit":"Editar usuario","Update":"Actualizar usuario","Delete":"Borrar usuario","CreateSuccess":"Se ha creado un usuario satisfactoriamente","CreateError":"Error al crear el usuario","UpdateSuccess":"Usuario actualizado","UpdateError":"Error al actualizar el usuario","PermsUpdateError":"Error al actualizar los permisos del usuario","Otp":"Autenticación de dos pasos","OtpEnable":"Habilitar A2F","OtpDisable":"Deshabilitar A2F","OtpHint":"La autenticación de dos pasos agrega una capa de seguridad adicional a tu cuenta, requiriendo un código especial además de tu contraseña.","OtpSetup":"Ajustes de A2F","OtpSetupHint":"Escanea el código QR utilizando tu aplicación o copia el código secreto que verás debajo.","OtpSecret":"Código secreto","OtpConfirm":"Confirma los cambios utilizando tu código de A2F","OtpNeeded":"2FA requerido"}')
    },
    edba: function(e) {
        e.exports = JSON.parse('{"FileManager":"Gerenciador de ficheiros","NewFolder":"Nova pasta","NewFile":"Novo ficheiro","LastModified":"Ultimo modificado","ConfirmDelete":"Tem a certeza que pretende apagar este ficheiro?","Upload":"Upload","Download":"Transferir","Size":"Tamanho","NoFiles":"Ainda não a ficheiros aqui, cria alguns, por exemplo; ao clicar no botão de instalar ano topo da página","FileLoadFailed":"Falha ao criar o ficheiro","Refresh":"Recarregar","CreateFile":"Criar ficheiro","CreateFolder":"Criar pasta","ArchiveCurrentFolder":"Criar arquivo a partir de pasta atual","ArchiveFolder":"Criar arquivo a partir de uma pasta","ExtractArchive":"Extrair arquivo","DropToUpload":"Solte os arquivos aqui para os enviar"}')
    },
    ef2c: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Non ci sono opzioni specifiche per l\'ambiente","docker":{"name":"Docker","image":"Immagine","networkMode":"Modalità del network","networkName":"Nome del network","bindings":"Associazioni","portBindings":"Lista delle porte","OutsidePort":"Porta Esterna","InsidePort":"Porta interna","HostPath":"Percorso Host","ContainerPath":"Tracciato Contenitore"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    efe0: function(e) {
        e.exports = JSON.parse('{"Settings":"Seaded","PanelSettings":"Paneeli Seaded","EmailSettings":"E-posti seaded","MasterUrl":"Peamine URL","MasterUrlHint":"Põhi URL sellel paneelil on kättesaadav formaadis http://localhost:8080","CompanyName":"Ettevõtte nimi","DefaultTheme":"Vaikmisi teema","RegistrationEnabled":"Luba kasutajatel end ise registeerida","RegistrationEnabledHint1":"Ise registeerinud inimesed ei saa kasutada midagi, enne kui on antud õigused","RegistrationEnabledHint2":"Iga {monthInterval} kuud päeval {day} kell {hour}:{minute}","EmailProvider":"E-posti pakkuja","emailProviders":{"none":"Puudub","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Saatja aadress","domain":"Domeen","key":"API võti","host":"Host","username":"Kasutajanimi","password":"Salasõna"}}')
    },
    f04d: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Es gibt keine Server, auf die du Zugriff hast","Servers":"Server","Add":"Server hinzufügen","Console":"Konsole","Controls":"Steuerung","SFTPInfo":"SFTP-Informationen","Restart":"Neu starten","Start":"Starten","Stop":"Stoppen","Kill":"Beenden","Install":"Installieren","Send":"Senden","Pause":"Pausieren","Statistics":"Statistiken","CPU":"CPU","Memory":"Arbeitsspeicher","Files":"Dateien","Name":"Servername","NameInvalid":"Der Servername darf nicht leer sein oder darf keine Sonderzeichen enthalten","SelectNode":"Bitte Knoten auswählen","SelectTemplate":"Bitte Vorlage auswählen","SelectThisTemplate":"Diese Vorlage verwenden","SelectUser":"Bitte Benutzer auswählen","Environment":"Umgebung","SelectEnvironment":"Bitte Umgebung auswählen","TypeUsername":"Benutzernamen eingeben","Admin":"Administrator","AdminControls":"Administration","Settings":"Einstellungen","NoEditableVars":"Dieser Server hat keine Variablen, die du bearbeiten kannst","ConfirmDelete":"Willst du diesen Server wirklich löschen? (Dies kann nicht rückgängig gemacht werden)","Delete":"Server löschen","Deleted":"Server gelöscht","NoReadme":"Keine Beschreibung für diese Vorlage verfügbar","SftpConnection":"Mit SFTP verbinden","EditDefinition":"Server-Definition bearbeiten","Reload":"Serverkonfiguration neu laden","Reloaded":"Serverkonfiguration neu geladen","Autostart":"Server starten, wenn der Knoten startet","Autorestart":"Server neu starten, wenn er gewöhnlich gestoppt ist","Autorecover":"Server neu starten, wenn er abgestürzt ist","Rename":"Server umbenennen","Tasks":"Aufgaben","NoTasks":"Keine Aufgaben","RunTask":"Aufgabe ausführen","NewTask":"Neue Aufgabe","EditTask":"Aufgabe bearbeiten","TaskDeleted":"Aufgabe wurde entfernt","TaskTriggered":"Aufgabe wurde ausgelöst","EnableSchedule":"Aufgabe automatisch ausführen","TaskScheduleInvalid":"Aufgabenplan ungültig","TaskScheduleManual":"Nur manuelle Ausführung","CronExpression":"Cron-Ausdruck","Hourly":"Stündlich","Daily":"Täglich","Weekly":"Wöchentlich","Monthly":"Monatlich","Advanced":"Erweitert","HourlyTab":"Alle {hourInterval} Stunden in Minute {minute}","DailyTab":"Alle {dayInterval} Tage um {hour}:{minute}","WeeklyTab":"Alle {weekdays} um {hour}:{minute}","MonthlyTab":"Alle {monthInterval} Monate am {day} Tag um {hour}:{minute}"}')
    },
    f05a: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"名稱","Address":"位址","Online":"線上","Offline":"離線","Loading":"載入中⋯⋯","General":"一般","Language":"語言","SelectLanguage":"選擇語言","Settings":"設定","Update":"更新","Edit":"編輯","Delete":"刪除","Create":"新增","Save":"儲存","Saved":"已儲存","SaveFailed":"儲存失敗","Cancel":"取消","Confirm":"確認","Actions":"操作","Host":"主機","Port":"端口","Template":"範本","Options":"選項","Collapse":"收起","Copied":"已複製到剪貼簿","Unknown":"不明","Search":"搜尋","Back":"返回","Next":"下一個","LanguageName":"中文（台灣）","Details":"詳細資料","ErrorDetails":"錯誤訊息","HelpTranslate":"幫助我們翻譯 PufferPanel","DarkMode":"黑暗模式","ThemeOptions":"主題選項","Protocol":"通訊協定","Add":"新增","Ignore":"忽略","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六","Sunday":"星期日","Description":"說明"}')
    },
    f151: function(e) {
        e.exports = JSON.parse('{"Credentials":"OAuth2 Client Credentials","ClientId":"Client ID","ClientSecret":"Client Secret","NewClientWarning":"Note down the client secret, after closing this dialog it will never be shown again. Losing or forgetting it will render this client completely unusable.","Create":"Create new OAuth2 Client","UnnamedClient":"Unnamed OAuth2 Client","Docs":"Find API documentation here","DeleteWarning":"Deleting an OAuth2 client cannot be undone nor can a new client be created with the same credentials. All integrations still using this client will break after its deletion.","ConfirmDelete":"I am aware of the effects that deleting this OAuth2 client will have and wish to proceed.","Delete":"Delete {clientName}?","Clients":"OAuth2 Clients","AccountDescription":"The OAuth2 Clients listed here inherit all of your accounts permissions","ServerDescription":"The OAuth2 Clients listed here only inherit your accounts permissions on this server"}')
    },
    f1e4: function(e) {
        e.exports = JSON.parse('{"Settings":"Nastavenia","PanelSettings":"Nastavenia panela","EmailSettings":"Nastavenie e-mailu","MasterUrl":"Hlavná adresa URL","MasterUrlHint":"Základná adresa URL panela je dostupná vo formáte http://localhost:8080","CompanyName":"Názov spoločnosti","DefaultTheme":"Predvolená téma","RegistrationEnabled":"Umožniť používateľom zaregistrovať sa","RegistrationEnabledHint1":"Samostatne registrovaní používatelia nemôžu robiť nič, kým im nie sú udelené oprávnenia","RegistrationEnabledHint2":"Zakázanie tejto funkcie bráni iba priamej registrácii, pozvanie na server a stránka Používatelia nie sú ovplyvnené","EmailProvider":"Poskytovateľ e-mailových služieb","emailProviders":{"none":"Žiadne","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Adresa odosielateľa","domain":"Doména","key":"API kľúč","host":"Hostiteľ","username":"Používateľské meno","password":"Heslo"}}')
    },
    f243: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("ui-input", e._g({
                attrs: {
                    id: e.id,
                    disabled: e.disabled,
                    label: e.label,
                    "error-messages": e.errorMessages,
                    icon: "mdi-lock",
                    "end-icon": e.showPassword ? "mdi-eye-off" : "mdi-eye",
                    name: e.name,
                    type: e.showPassword ? "text" : "password"
                },
                on: {
                    "click:append": function(t) {
                        e.showPassword = !e.showPassword
                    }
                },
                model: {
                    value: e.internalValue,
                    callback: function(t) {
                        e.internalValue = t
                    },
                    expression: "internalValue"
                }
            }, e.listeners))
        }
          , n = []
          , i = {
            props: {
                disabled: {
                    type: Boolean,
                    default: ()=>!1
                },
                errorMessages: {
                    type: String,
                    default: ()=>{}
                },
                id: {
                    type: String,
                    default: ()=>{}
                },
                label: {
                    type: String,
                    default: ()=>{}
                },
                name: {
                    type: String,
                    default: ()=>{}
                },
                value: {
                    type: String,
                    default: ()=>""
                }
            },
            data() {
                return {
                    internalValue: this.value,
                    showPassword: !1
                }
            },
            computed: {
                listeners() {
                    const e = {
                        ...this.$listeners
                    };
                    return delete e.input,
                    delete e["click:append"],
                    e
                }
            },
            watch: {
                internalValue(e) {
                    this.$emit("input", this.internalValue)
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = l.exports
    },
    f2e1: function(e) {
        e.exports = JSON.parse('{"Templates":"Maler","NoTemplates":"Det er ingen maler her ennå","Deleted":"Malen er slettet","New":"Opprett ny mal","Edit":"Rediger mal","Editor":"Redigering","Json":"JSON","Display":"Visningsnavn","Type":"Type","Variables":"Variabler","Install":"Installer","AddInstallStep":"Legg til installasjonstrinn","DeleteInstallStep":"Slett installasjonstrinn","Description":"Beskrivelse","DataType":"Type data","DefaultValue":"Standardverdi","Required":"Påkrevd","UserEditable":"Brukere kan redigere","Value":"Verdi","AddOption":"Legge til et alternativ","AddCommand":"Legg til kommando","Filename":"Filnavn","Content":"Innhold","Source":"Kilde","Target":"Mål","Version":"Versjon","ReleaseType":"Utgivelsestype","AddFile":"Legg til fil","AddVariable":"Legg til variabel","Environment":"Miljø","Environments":"Miljøer","AddEnvironment":"Legg til miljø","DefaultEnvironment":"Standard miljø","AddEnvVar":"Legg til env-variabel","EnvVars":"Miljøvariabel","DockerImage":"Docker bilde","SaveSuccess":"Lagret mal","VarNameNoSpaces":"Et variabelnavn kan ikke være tomt eller inneholde mellomrom","SupportedEnvironments":"Støttede miljøer","RunConfig":"Kjøre konfigurasjon","PreHook":"Pre Run Hook","PostHook":"Pre Run Hook","AddPreStep":"Legg til pre run steg","AddPostStep":"Legg til post run steg","DeletePreStep":"Slett pre run steg","DeletePostStep":"Slett post run steg","Shutdown":"Avslutt","Command":"Kommando","WorkingDirectory":"Arbeidsmappe","Arguments":"Argumenter","AddArgument":"Legg til argument","Convert":"Konverter","OfferV1Convert":"Denne malen av json ser ut som en mal for PufferPanel 1.x, vil du automatisk konvertere denne til en mal for PufferPanel 2.x?","import":{"CommunityWarning":"Disse malene lages av fellesskapet og leveres uten garantier","OverrideWarning":"Advarsel: Importerte maler VIL overskrive eksisterende maler med samme ID","Import":"Importere maler","Tooltip":"Importer maler fra det offisielle arkivet","Select":"Velg maler som skal importeres","Started":"Importerer maler, vennligst vent et øyeblikk","Successful":"Velykket importert mal {template}","NoTemplatesTitle":"Vil du importere maler?","NoTemplatesContent":"Du har for øyeblikket ikke noen maler. Maler er nødvendige for å opprette servere.<br/>Vil du importere noen maler fra de offisielle PufferPanel arkivet nå?"},"stop":{"Command":"Kommando","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Last ned","files":"Filer"},"command":{"ProcessorName":"Kjør kommando","commands":"Kommandoer"},"alterfile":{"ProcessorName":"Endre fil","regex":"Behandle søk som RegEx","search":"Søk etter tekst","replace":"Erstatt med"},"writefile":{"ProcessorName":"Skriv til fil","text":"Innhold"},"move":{"ProcessorName":"Flytt fil","source":"Kilde","target":"Mål"},"mkdir":{"ProcessorName":"Opprett mappe"},"mojangdl":{"ProcessorName":"Last ned Minecraft"},"forgedl":{"ProcessorName":"Last ned Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Last ned Minecraft SpongeForge","releaseType":"Utgivelsestype"},"fabricdl":{"ProcessorName":"Last ned Minecraft Fabric"},"javadl":{"ProcessorName":"Last ned Java","version":"Versjon av Java å installere (8, 16, 17)"},"steamgamedl":{"ProcessorName":"Last ned spill fra Steam","appId":"App Id"}}}')
    },
    f4a0: function(e) {
        e.exports = JSON.parse('{"Credentials":"Thông tin xác thực OAuth2","ClientId":"Client ID","ClientSecret":"Mã Bí mật Client","NewClientWarning":"Ghi chú Mã Bí mật Client, sau khi đóng hộp thoại này thì sẽ không hiển thị lần nữa. Nếu bạn làm mất hoặc quên nó thì máy này sẽ không thể sử dụng được.","Create":"Tạo Client OAuth2","UnnamedClient":"Client OAuth2 khuyết danh","Docs":"Tham khảo API ở đây","DeleteWarning":"Khi xoá Client OAuth2 thì bạn không thể quay lại hoặc tạo lại Client cùng thông tin. Sau khi xoá thì tất cả Intergration sử dụng Client này sẽ không hoạt động được.","ConfirmDelete":"Tôi biết tác động của việc xoá Client OAuth2 này và tôi xin tiến hành.","Delete":"Xoá {clientName}?","Clients":"Các Client OAuth2","AccountDescription":"Các Client OAuth2 được liệt kê ở đây thừa hưởng tất cả quyền từ tài khoản của bạn","ServerDescription":"Các Client OAuth2 được liệt kê ở đây chỉ thừa hưởng quyền từ tài khoản của bạn chỉ trên máy chủ này"}')
    },
    f50e: function(e) {
        e.exports = JSON.parse('{"FileManager":"Filhanterare","NewFolder":"Ny mapp","NewFile":"Ny fil","LastModified":"Senast modifierad","ConfirmDelete":"Är du säker på att du vill ta bort den här filen?","Upload":"Ladda upp","Download":"Ladda ned","Size":"Storlek","NoFiles":"Det finns inga filer här ännu, gå och skapa några till exempel genom att klicka på installationsknappen högst upp på sidan","FileLoadFailed":"Det gick inte att ladda filen","Refresh":"Uppdatera","CreateFile":"Skapa fil","CreateFolder":"Skapa mapp","ArchiveCurrentFolder":"Skapa arkiv från aktuell mapp","ArchiveFolder":"Skapa arkiv från mapp","ExtractArchive":"Extrahera arkiv","DropToUpload":"Släpp filer här för att ladda upp dem"}')
    },
    f598: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-switch", e._g({
                attrs: {
                    id: e.id,
                    "input-value": e.value,
                    dense: e.dense,
                    disabled: e.disabled,
                    label: e.label,
                    "hide-details": e.hideDetails && !e.showHint,
                    "persistent-hint": e.showHint,
                    hint: e.hintValue,
                    "error-messages": e.errorMessages,
                    "prepend-icon": e.icon,
                    "append-icon": e.endIcon,
                    placeholder: e.placeholder,
                    required: e.required,
                    name: e.name
                },
                on: {
                    change: function(t) {
                        return e.$emit("input", !!t)
                    }
                }
            }, e.listeners), [e._l(e.$slots, (function(t, a) {
                return e._t(a, null, {
                    slot: a
                })
            }
            ))], 2)
        }
          , n = []
          , i = {
            props: {
                dense: {
                    type: Boolean,
                    default: ()=>{}
                },
                disabled: {
                    type: Boolean,
                    default: ()=>{}
                },
                endIcon: {
                    type: String,
                    default: ()=>{}
                },
                errorMessages: {
                    type: String,
                    default: ()=>{}
                },
                hint: {
                    type: String,
                    default: ()=>{}
                },
                icon: {
                    type: String,
                    default: ()=>{}
                },
                id: {
                    type: String,
                    default: ()=>{}
                },
                label: {
                    type: String,
                    default: ()=>{}
                },
                name: {
                    type: String,
                    default: ()=>{}
                },
                placeholder: {
                    type: String,
                    default: ()=>{}
                },
                required: {
                    type: Boolean,
                    default: ()=>{}
                },
                value: {
                    type: void 0,
                    default: ()=>"",
                    required: !0
                }
            },
            computed: {
                listeners() {
                    const {input: e, ...t} = this.$listeners;
                    return t
                },
                hideDetails() {
                    const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                    return !e
                },
                showHint() {
                    const e = void 0 !== this.hint && "" !== this.hint
                      , t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                    return e || t
                },
                hintValue() {
                    return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                }
            }
        }
          , o = i
          , s = a("2877")
          , l = a("6544")
          , d = a.n(l)
          , u = a("b73d")
          , c = Object(s["a"])(o, r, n, !1, null, null, null);
        t["default"] = c.exports;
        d()(c, {
            VSwitch: u["a"]
        })
    },
    f67c: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Для даного середовища немає специфічних опцій","docker":{"name":"Докер","image":"Зображення","networkMode":"Режим мережі","networkName":"Назва мережі","bindings":"Палітурки","portBindings":"Портове кріплення","OutsidePort":"Зовнішній порт","InsidePort":"Внутрішній порт","HostPath":"Шлях до вузла","ContainerPath":"Шлях до контейнеру"},"standard":{"name":"Стандартний"},"tty":{"name":"TTY"}}')
    },
    f6c5: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    f84f: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Non ci sono server a cui hai accesso","Servers":"Servers","Add":"Aggiungi Server","Console":"Console","Controls":"Controlli","SFTPInfo":"Informazione SFTP","Restart":"Riavvia","Start":"Avvia","Stop":"Stop","Kill":"Termina processo","Install":"Installa","Send":"Invia","Pause":"Interrompi","Statistics":"Statistiche","CPU":"CPU","Memory":"Memoria","Files":"File","Name":"Nome del Server","NameInvalid":"Il nome del server non può essere vuoto o contenere caratteri speciali","SelectNode":"Sei pregato di selezionare il nodo","SelectTemplate":"Sei pregato di selezionare il modello","SelectThisTemplate":"Usa questo modello","SelectUser":"Sei pregato di selezionare l\'utente","Environment":"Ambiente","SelectEnvironment":"Sei pregato di selezionare l\'ambiente","TypeUsername":"Digita un nome utente","Admin":"Amministratore","AdminControls":"Controlli Amministratore","Settings":"Impostazioni","NoEditableVars":"Questo server non ha variabili che puoi modificare","ConfirmDelete":"Vuoi davvero eliminare questo server? (ciò non è reversibile)","Delete":"Elimina Server","Deleted":"Server Eliminato","NoReadme":"Nessun readme disponibile per questo modello","SftpConnection":"Connetti a SFTP","EditDefinition":"Modifica Definizione Server","Reload":"Ricarica impostazioni server dal disco","Reloaded":"Dati server ricaricati","Autostart":"Starta il server quando il nodo starta","Autorestart":"Riavvia il server quando si spegne normalmente","Autorecover":"Riavvia il server quando crasha","Rename":"Rinomina Server","Tasks":"Attività","NoTasks":"Nessuna attività","RunTask":"Esegui attività","NewTask":"Nuova attività","EditTask":"Modifica attività","TaskDeleted":"Attività Eliminata","TaskTriggered":"Attivazione Attivata","EnableSchedule":"Esegui attività automaticamente","TaskScheduleInvalid":"Pianificazione Attività Non Valida","TaskScheduleManual":"Solo esecuzione manuale","CronExpression":"Espressione Cron","Hourly":"Ogni ora","Daily":"Quotidianamente","Weekly":"Settimanalmente","Monthly":"Mensilmente","Advanced":"Avanzato","HourlyTab":"Ogni {hourInterval} Ore al Minuto {minute}","DailyTab":"Ogni {dayInterval} giorni alle {hour}:{minute}","WeeklyTab":"Ogni {weekdays} alle {hour}:{minute}","MonthlyTab":"Ogni {monthInterval} mesi il giorno {day} alle {hour}:{minute}"}')
    },
    f8be: function(e) {
        e.exports = JSON.parse('{"Node":"Węzeł","Nodes":"Węzły","Edit":"Edytuj węzeł","Add":"Dodaj węzeł","Update":"Aktualizuj węzeł","Delete":"Usuń węzeł","PublicHost":"Publiczny Host","PublicPort":"Publiczny Port","PrivateHost":"Prywatny Host","PrivatePort":"Prywatny Port","SftpPort":"Port SFTP","WithPrivateAddress":"Użyj innego hosta/portu dla serwera do komunikacji z serwerem","WithPrivateAddressHint":"Ten oddzielny adres jest używany, gdy maszyna główna musi rozmawiać z nową maszyną. Przydatne na przykład, gdy maszyny znajdują się w tej samej sieci za NAT.","SaveConfig":"Zapisz konfigurację","SavePublicKey":"Zapisz klucz publiczny","DeploymentInstruction":"Aby wdrożyć węzeł, zainstaluj PufferPanel na nowym serwerze i umieść plik konfiguracyjny w `/etc/pufferpanel/`<br/>Następnie uruchom ponownie PufferPanel na nowym serwerze.","UpdateSuccess":"Pomyślnie zaktualizowano węzeł","UpdateError":"Błąd podczas aktualizacji węzła","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    f956: function(e) {
        e.exports = JSON.parse('{"Id":"ת.ז","Name":"שם","Address":"כתובת","Online":"מקוון","Offline":"לא מקוון","Loading":"טוען...","General":"כללי","Language":"שפה","SelectLanguage":"בחירת שפה","Settings":"הגדרות","Update":"עדכון","Edit":"עריכה","Delete":"מחק","Create":"צור","Save":"שמור","Saved":"נשמר","SaveFailed":"השמירה כשלה","Cancel":"בטל","Confirm":"אישור","Actions":"פעולות","Host":"שרת מארח","Port":"יציאה","Template":"תבנית","Options":"אפשרויות","Collapse":"צמצום","Copied":"הועתק ללוח","Unknown":"לא ידוע","Search":"חיפוש","Back":"חזרה","Next":"המשך","LanguageName":"עברית","Details":"פרטים","ErrorDetails":"פרטי השגיאה","HelpTranslate":"סייעו לנו לתרגם את PufferPanel","DarkMode":"מצב חשוך","ThemeOptions":"אפשרויות ערכת נושא","Protocol":"פרוטוקול","Add":"הוספה","Ignore":"התעלם","Monday":"יום שני","Tuesday":"יום שלישי","Wednesday":"יום רביעי","Thursday":"יום חמישי","Friday":"יום שישי","Saturday":"יום שבת","Sunday":"יום ראשון","Description":"תיאור"}')
    },
    faa9: function(e, t, a) {
        "use strict";
        a.r(t);
        var r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("v-card", [a("v-card-title", {
                domProps: {
                    textContent: e._s(e.$t("servers.CPU"))
                }
            }), a("v-card-text", [a("apexchart", {
                attrs: {
                    options: e.options,
                    series: e.series,
                    height: "250"
                }
            })], 1)], 1)
        }
          , n = []
          , i = a("1321")
          , o = a.n(i)
          , s = {
            components: {
                apexchart: o.a
            },
            props: {
                server: {
                    type: Object,
                    default: ()=>{}
                }
            },
            data() {
                return {
                    intl: new Intl.NumberFormat("en-US",{
                        maximumFractionDigits: 2
                    }),
                    maxPoints: 40,
                    options: {
                        chart: {
                            id: "cpu",
                            type: "line",
                            animations: {
                                enabled: !1
                            },
                            toolbar: {
                                show: !1
                            },
                            foreColor: this.$isDark() ? "#FFF" : "#000000DE"
                        },
                        colors: [this.$isDark() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent],
                        tooltip: {
                            theme: [this.$isDark() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent]
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            curve: "straight"
                        },
                        markers: {
                            size: 0
                        },
                        xaxis: {
                            labels: {
                                show: !0,
                                rotate: 0,
                                formatter: e=>new Date(e).toLocaleTimeString()
                            },
                            tooltip: {
                                enabled: !1
                            },
                            type: "datetime"
                        },
                        yaxis: {
                            labels: {
                                show: !0,
                                formatter: e=>this.intl.format(Math.round(100 * e) / 100) + "%"
                            },
                            min: 0,
                            max: ()=>this.series[0] ? Math.ceil(this.series[0].data.reduce((e,t)=>Math.max(e, t[1]), 100)) : 100
                        },
                        legend: {
                            show: !0
                        }
                    },
                    series: []
                }
            },
            mounted() {
                this.$api.addServerListener(this.server.id, "stat", e=>{
                    this.updateStats(e)
                }
                );
                const e = new Array(this.maxPoints)
                  , t = (new Date).getTime();
                for (let a = 0; a < e.length; a++)
                    e[a] = [t - 3e3 * (e.length - a), 0];
                this.series = [{
                    name: this.$t("servers.CPU"),
                    data: e
                }]
            },
            methods: {
                updateStats(e) {
                    this.options = {
                        ...this.options,
                        chart: {
                            ...this.options.chart,
                            foreColor: this.$isDark() ? "#FFF" : "#000000DE"
                        }
                    };
                    const t = [...(this.series[0] || {}).data || [], [(new Date).getTime(), Math.round(100 * e.cpu) / 100]];
                    this.series = [{
                        name: this.$t("servers.CPU"),
                        data: t.length > this.maxPoints ? t.slice(t.length - this.maxPoints) : t
                    }]
                }
            }
        }
          , l = s
          , d = a("2877")
          , u = a("6544")
          , c = a.n(u)
          , m = a("b0af")
          , p = a("99d9")
          , v = Object(d["a"])(l, r, n, !1, null, null, null);
        t["default"] = v.exports;
        c()(v, {
            VCard: m["a"],
            VCardText: p["c"],
            VCardTitle: p["d"]
        })
    },
    fac4: function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"No hay servidores a los que tengas acceso","Servers":"Servidores","Add":"Añadir Servidor","Console":"Consola","Controls":"Controles","SFTPInfo":"Información SFTP","Restart":"Reiniciar","Start":"Iniciar","Stop":"Parar","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","Statistics":"Estadísticas","CPU":"CPU","Memory":"Memoria","Files":"Archivos","Name":"Nombre del Servidor","NameInvalid":"El nombre del servidor no puede estar vacío o contener caracteres especiales","SelectNode":"Por favor, seleccione un nodo","SelectTemplate":"Por favor, seleccione una plantilla","SelectThisTemplate":"Usar esta plantilla","SelectUser":"Por favor seleccione un usuario","Environment":"Entorno","SelectEnvironment":"Por favor, seleccione entorno","TypeUsername":"Escriba un nombre de usuario","Admin":"Administrador","AdminControls":"Controles de Admin","Settings":"Configuración","NoEditableVars":"Este servidor no tiene variables que puedas editar","ConfirmDelete":"¿Realmente deseas eliminar este servidor? (Esto no se puede deshacer)","Delete":"Eliminar servidor","Deleted":"Servidor eliminado","NoReadme":"No hay ningún léame disponible para esta plantilla","SftpConnection":"Conectar a SFTP","EditDefinition":"Editar definición del servidor","Reload":"Recargar los datos del Servidor desde el disco","Reloaded":"Datos del Servidor Recargados","Autostart":"Prender el servidor cuando el Nodo inicie","Autorestart":"Reiniciar el servidor cuando se detiene normalmente","Autorecover":"Reiniciar el servidor cuando este se bloquee","Rename":"Renombrar servidor","Tasks":"Tareas","NoTasks":"No hay tareas","RunTask":"Ejecutar tarea","NewTask":"Nueva tarea","EditTask":"Editar tarea","TaskDeleted":"Tarea eliminada","TaskTriggered":"Tarea activada","EnableSchedule":"Inicializar tarea automáticamente","TaskScheduleInvalid":"Horario de tarea invalido","TaskScheduleManual":"Solo ejecución manual","CronExpression":"Expresión Cron","Hourly":"Cada hora","Daily":"Cada día","Weekly":"Cada semana","Monthly":"Cada mes","Advanced":"Avanzado","HourlyTab":"Cada {hourInterval} horas, al minuto {minute}","DailyTab":"Cada {dayInterval} día(s) a las {hour}:{minute}","WeeklyTab":"Cada {weekdays} a las {hour}:{minute}","MonthlyTab":"Cada {monthInterval} meses, en el día {day} a las {hour}:{minute}"}')
    },
    fbb2: function(e) {
        e.exports = JSON.parse('{"ServersView":"Poate vizualiza acest server","ServersEdit":"Editează serverul","ServersInstall":"Instalează serverul","ServersConsole":"Vezi consola","ServersConsoleSend":"Trimite comenzi la consolă","ServersStop":"Oprește și omoara serverul","ServersStart":"Porniți serverul","ServersStat":"Vizualizați statisticile privind procesorul și memoria","ServersFiles":"Permiteți accesul la fișiere folosind SFTP","ServersFilesGet":"Vezi şi descarcă fişiere folosind managerul de fişiere","ServersFilesPut":"Vezi şi descarcă fişiere folosind managerul de fişiere","ServersEditUsers":"Editează accesul utilizatorului la acest server","Admin":"Administrator (acesta acordă fiecare permisiune posibilă)","ViewServers":"Vezi serverele","CreateServers":"Crează un server","DeleteServers":"Ștergere servere","EditServerAdmin":"Editați setările serverului","ViewNodes":"Vezi Nodeurile","EditNodes":"Editează Nodeuri","DeployNodes":"Lansează nodeuri noi","ViewTemplates":"Vezi template-uri","EditTemplates":"Editare template-uri","ViewUsers":"Vezi toți utilizatorii","EditUsers":"Editează alți utilizatori","PanelSettings":"Modifică setările panoului"}')
    },
    fc16: function(e) {
        e.exports = JSON.parse('{"Node":"Solmu","Nodes":"Solmut","Edit":"Muokkaa solmua","Add":"Lisää solmu","Update":"Päivitä solmu","Delete":"Poista solmu","PublicHost":"Julkinen osoite","PublicPort":"Julkinen portti","PrivateHost":"Yksityinen osoite","PrivatePort":"Yksityinen portti","SftpPort":"SFTP-portti","WithPrivateAddress":"Käytä toista osoitetta/porttia palvelinten väliseen viestintään","WithPrivateAddressHint":"Tätä erillistä osoitetta käytetään, kun pääsolmun tarvitsee keskustella uuden solmun kanssa. Hyödyllistä esimerkiksi, kun solmut ovat samassa verkostossa NAT:n takana.","SaveConfig":"Tallenna asetus","SavePublicKey":"Tallenna Julkinen Avain","DeploymentInstruction":"Jos haluat ottaa solmun käyttöön, asenna PufferPanel uudelle palvelimelle ja lisää asetustiedosto `/etc/pufferpanel/`<br/>Käynnistä PufferPanel uudelleen uudella palvelimella tämän jälkeen.","UpdateSuccess":"Solmu päivitetty onnistuneesti","UpdateError":"Virhe päivitettäessä solmua","LocalNodeInstructions":"The local node is not editable through this screen. To change the host or port information, please update the `Master Url` in the settings.","CannotEdit":"Cannot Edit"}')
    },
    fd1c: function(e) {
        e.exports = JSON.parse('{"Settings":"Definições","PanelSettings":"Definições de painel","EmailSettings":"Configurações de e-mail","MasterUrl":"URL mestre","MasterUrlHint":"O URL base do painel pode ser alcançada no formato http://localhost:8080","CompanyName":"Nome de empresa","DefaultTheme":"Tema Padrão","RegistrationEnabled":"Permitir utilizadores registrem-se","RegistrationEnabledHint1":"Utilizadores auto registrados não conseguem fazer nada até receberem permissões","RegistrationEnabledHint2":"Desabilitar isto apenas impede o registro direto, convites para um servidor e a página de utilizadores não são afetados","EmailProvider":"Fornecedor de E-mail","emailProviders":{"none":"Nenhum","smtp":"SMTP","mailgun":"Mailgun","mailjet":"Mailjet"},"emailFields":{"from":"Endereço de enviador","domain":"Domínio","key":"Chave API","host":"Host","username":"Usuário","password":"Senha"}}')
    },
    fe5a: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan deze server bekijken","ServersEdit":"Wijzig de server","ServersInstall":"Installeer de server","ServersConsole":"Bekijk de console ","ServersConsoleSend":"Stuur een commando naar de console ","ServersStop":"Stop en beëindig de server","ServersStart":"Start de server ","ServersStat":"Bekijk CPU en geheugen gebruik","ServersFiles":"Toegang tot bestanden met SFTP toestaan","ServersFilesGet":"Bestanden bekijken en downloaden met behulp van bestandsbeheer","ServersFilesPut":"Wijzig en upload bestanden via bestandsbeheer ","ServersEditUsers":"Bewerk gebruikers toesteming tot deze server","Admin":"Administrator (Dit geeft alle toegang tot de server)","ViewServers":"Bekijk servers","CreateServers":"Maak nieuwe server","DeleteServers":"Verwijder server","EditServerAdmin":"Bewerk server instellingen","ViewNodes":"Zie nodes","EditNodes":"Nodes bewerken","DeployNodes":"Nieuwe nodes implementeren","ViewTemplates":"Meer templates bekijken","EditTemplates":"Bewerk template","ViewUsers":"Alle gebruikers bekijken","EditUsers":"Andere gebruikers bewerken","PanelSettings":"Verander panel instellingen"}')
    },
    ff1b: function(e) {
        e.exports = JSON.parse('{"Id":"Αναγνωριστικό","Name":"Όνομα","Address":"Διεύθυνση","Online":"Σε σύνδεση","Offline":"Εκτός σύνδεσης","Loading":"Φόρτωση...","General":"Γενική","Language":"Γλώσσα","SelectLanguage":"Επιλέξτε Γλώσσα","Settings":"Ρυθμίσεις","Update":"Ενημέρωση","Edit":"Επεξεργασία","Delete":"Διαγραφή","Create":"Δημιουργία","Save":"Αποθήκευση","Saved":"Αποθηκεύτηκε","SaveFailed":"Η αποθήκευση απέτυχε","Cancel":"Ακύρωση","Confirm":"Επιβεβαίωση","Actions":"Ενέργειες","Host":"Διακομιστής","Port":"Θύρα","Template":"Πρότυπο","Options":"Επιλογές","Collapse":"Σύμπτυξη","Copied":"Αντιγράφηκε στο πρόχειρο","Unknown":"Άγνωστο","Search":"Αναζήτηση","Back":"Πίσω","Next":"Επόμενο","LanguageName":"Ελληνικά","Details":"Λεπτομέρειες","ErrorDetails":"Λεπτομέρειες Σφάλματος","HelpTranslate":"Βοηθήστε μας να μεταφράσουμε το PufferPanel","DarkMode":"Σκουρόχρωμη Λειτουργία","ThemeOptions":"Επιλογές Θέματος","Protocol":"Πρωτόκολλο","Add":"Προσθήκη","Ignore":"Παράβλεψη","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο","Sunday":"Κυριακή","Description":"Περιγραφή"}')
    },
    ffe0: function(e, t, a) {
        var r = {
            "./server/admin.vue": "01fb",
            "./server/console.vue": "753c",
            "./server/controls.vue": "6539",
            "./server/cpu.vue": "faa9",
            "./server/files.vue": "8824",
            "./server/memory.vue": "54f4",
            "./server/settings.vue": "28ca",
            "./server/sftp.vue": "8127",
            "./server/status.vue": "49a4",
            "./server/tasks.vue": "3c10",
            "./server/type/generic.vue": "31ec",
            "./server/type/minecraft.vue": "10f3",
            "./server/users.vue": "71d94",
            "./template/editor.vue": "3a68",
            "./template/environments.vue": "e30a",
            "./template/processor.vue": "833a",
            "./template/processors.vue": "02cb",
            "./template/shutdown.vue": "1a38",
            "./template/variable.vue": "e014",
            "./template/variables.vue": "110f",
            "./ui/cronEditor.vue": "7b7d",
            "./ui/docker/portBindings.vue": "03f0",
            "./ui/envConfig.vue": "6a6f",
            "./ui/input.vue": "a78c",
            "./ui/inputSuggestions.vue": "6660",
            "./ui/language.vue": "e022",
            "./ui/listInput.vue": "570c",
            "./ui/mapInput.vue": "2f97",
            "./ui/oauth.vue": "cf46",
            "./ui/overlay.vue": "b974c",
            "./ui/passwordInput.vue": "f243",
            "./ui/select.vue": "9716",
            "./ui/switch.vue": "f598",
            "./ui/variableInput.vue": "a785"
        };
        function n(e) {
            var t = i(e);
            return a(t)
        }
        function i(e) {
            if (!a.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        n.keys = function() {
            return Object.keys(r)
        }
        ,
        n.resolve = i,
        e.exports = n,
        n.id = "ffe0"
    }
});
//# sourceMappingURL=app.819a9c1f.js.map